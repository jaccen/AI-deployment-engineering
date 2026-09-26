/* unlock.js —— 付费章节解锁（客户端 AES-256-GCM，与构建端加密格式对应）
   密文格式：base64( salt[16] + iv[12] + ciphertext + authTag[16] )
   密钥派生：PBKDF2-SHA256, 100000 迭代
   解锁码一次输入，写入 localStorage，全书 18 篇通用 */
(function () {
  'use strict';
  var CIPHER = document.getElementById('cipher-data');
  if (!CIPHER) return;
  var b64 = (CIPHER.textContent || '').trim();
  var panel = document.getElementById('unlock-box');
  var input = document.getElementById('unlock-input');
  var btn = document.getElementById('unlock-btn');
  var err = document.getElementById('unlock-err');
  var target = document.getElementById('locked-content');
  var tocSlot = document.getElementById('toc-slot');
  var LS_KEY = 'aide_unlock_code';

  function b64ToBytes(s) {
    var bin = atob(s);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function deriveKey(pwd, salt) {
    var enc = new TextEncoder();
    return crypto.subtle.importKey('raw', enc.encode(pwd), 'PBKDF2', false, ['deriveKey'])
      .then(function (km) {
        return crypto.subtle.deriveKey(
          { name: 'PBKDF2', salt: salt, iterations: 100000, hash: 'SHA-256' },
          km, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      });
  }

  function render(html) {
    target.innerHTML = html;
    var toc = document.getElementById('returned-toc');
    if (toc && tocSlot) {
      tocSlot.innerHTML = '';
      tocSlot.appendChild(toc);
      tocSlot.hidden = false;
    }
    target.hidden = false;
    panel.hidden = true;
  }

  function unlock(pwd, silent) {
    if (!pwd) return Promise.resolve(false);
    var raw;
    try { raw = b64ToBytes(b64); } catch (e) { return Promise.resolve(false); }
    var salt = raw.subarray(0, 16);
    var iv = raw.subarray(16, 28);
    var ct = raw.subarray(28);
    return deriveKey(pwd, salt).then(function (key) {
      return crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, ct);
    }).then(function (buf) {
      var html = new TextDecoder().decode(buf);
      render(html);
      try { localStorage.setItem(LS_KEY, pwd); } catch (e) {}
      return true;
    }).catch(function () {
      if (!silent && err) err.hidden = false;
      return false;
    });
  }

  // 已解锁过：自动恢复（静默，失败不打扰）
  try {
    var saved = localStorage.getItem(LS_KEY);
    if (saved) unlock(saved, true);
  } catch (e) { /* localStorage 不可用时忽略 */ }

  if (btn) btn.addEventListener('click', function () {
    if (err) err.hidden = true;
    unlock((input.value || '').trim(), false);
  });
  if (input) input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      if (err) err.hidden = true;
      unlock((input.value || '').trim(), false);
    }
  });
})();
