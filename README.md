

# AI-deployment-engineering



# 《AI 落地工程：从数据治理到超级智能体》

**英文书名**：AI Deployment Engineering: From Data Governance to Superintelligent Agents

> 版本状态：书稿大纲 1.0｜双卷电子书｜16 章 + 结语｜约 35–36 万字

---

## 一句话定位

写给**对 AI 项目落地结果负责的人**：如何把一个已经具备的模型能力，变成一条能稳定运行、能被业务认账、成本可控、可持续迭代的生产线。

---

## 为什么需要这本书

模型能力与落地成功率之间，存在一个持续扩大的剪刀差：

- **MIT NANDA《The GenAI Divide: State of AI in Business 2025》**（2025-07）：审查 300+ 项目、访谈 52 家企业，企业投入 300–400 亿美元，**95% 无财务回报**；
- **麦肯锡 2025**：企业生成式 AI 采用率 78%，但 **>80% 无可衡量收益**，仅 1% 认为战略成熟；仅 23% 实现了 agentic AI 规模化；
- 失败归因中，**技术层问题仅占约四分之一**，数据层（约 30%）、工程层、组织层、商业层合计约占四分之三。

结论：**模型不是瓶颈，数据和知识底座才是。** 本书从数据治理讲起，而不是从 API 调用讲起。

---

## 全书主线

```
数据治理（根基）→ 知识工程（桥梁）→ 智能体工程（引擎）→ FDE（方向盘）→ 产业实战（价值）
```

- **数据治理**：企业数据成熟度五层模型、语义治理与知识治理、AI 时代数据质量评估
- **知识工程**：古法知识库 → RAG → LLM Wiki → OKF 四阶段演进；本体作为"企业业务地图"；GraphRAG 混合知识架构
- **智能体工程**：LLM 工作流 → RAG+Agent → 多 Agent 协作 → 超级智能体四层进化
- **FDE 方法论**：零周调研法、场景诊断与 ROI 量化、部署架构与持续运营
- **产业实战**：政务、金融、智能制造三大场景全流程拆解

---

## 结构总览（双卷）

### 上卷《数据与知识底座》（第 1–8 章）

| 篇 | 章 | 一句话概览 |
|----|----|-----------|
| 问题与范式 | 第 1 章 AI 落地的鸿沟 | 为什么模型能力年年提升，落地成功率却原地踏步（剪刀差与失败归因） |
| | 第 2 章 从 ML 工程到 AI 工程的范式迁移 | 从"训练模型"到"编排模型"，新工程栈四层 |
| 数据治理 | 第 3 章 企业数据治理的新旧之辨 | 数据成熟度五层模型、语义治理、AI 时代数据质量评估 |
| | 第 4 章 从数据到知识 | 企业知识资产盘点、分层存储、采集更新与合规边界 |
| 知识工程 | 第 5 章 RAG 工程化深水区 | 朴素 RAG 五个失败模式、三路检索 + RRF 融合、RAG 评估体系 |
| | 第 6 章 LLM Wiki 与知识沉淀 | 从"检索"到"沉淀"，Karpathy LLM Wiki 工程化与 OKF 开放知识格式 |
| | 第 7 章 本体驱动 | 让 AI 看懂企业业务：本体六要素建模、构建方法、Palantir 与国内实践 |
| | 第 8 章 GraphRAG 与混合知识架构 | Neo4j + Milvus 双库协同、多模态 GraphRAG、信创与图数据库许可约束 |

### 下卷《智能体与落地交付》（第 9–16 章 + 结语）

| 篇 | 章 | 内容概览 |
|----|----|-----------|
| 智能体工程 | 第 9 章 Agent 架构设计 | 四层进化、分层 Agent 架构、模型选型五因子、Agent 评测与可观测性 |
| | 第 10 章 多 Agent 协作与编排 | 五种协作模式、Agent 记忆系统、本体驱动的多 Agent、MCP 协议、微调决策 |
| | 第 11 章 超级智能体 | 六条可检验条件、目标态架构 + 现阶段可达工程组合（不画饼） |
| FDE 方法论 | 第 12 章 FDE 角色与场景诊断 | 零周调研法、AI 可行性矩阵、ROI 计算器、自研与外购决策 |
| | 第 13 章 部署架构与持续运营 | 级联路由 L0–L4、高可用与成本控制、可观测性、安全自主可控 |
| 产业实战 | 第 14 章 政务智能体 | 从政务热线到全场景的合规落地路径 |
| | 第 15 章 金融智能体 | 智能问数、投研、风控的强监管实践 |
| | 第 16 章 智能制造 | AI 进厂的最后一公里：预测性维护、视觉质检、工艺优化 |
| 结语 | AI 工程的下一个十年 | 世界模型、端侧 AI、Agent OS、FDE 组织化 |

---

## 差异化

1. **视角前置**：同类书从模型工程栈或 API/提示词讲起，本书从**数据治理**讲起——数据不是"资产"，而是 AI 的"认知输入"；
2. **交付视角 + 中国约束**：FDE（Forward Deployed Engineer）交付视角，不仅讲怎么建系统，更讲怎么让系统产生业务结果；纳入自主可控、政务合规、国产算力、信创许可等中国特有约束；
3. **可证伪、可检验**：所有机构数据标注"报告全称 + 发布时间 + 快照日期"，自创框架显式声明；每章设"3 分钟速览卡"与章末"如果只记一件事"。

---

## 读者对象

**主读者**（决定全书语气与深度）：对 AI 落地结果负责的工程师与技术负责人——FDE 从业者、后端转 AI 的资深工程师、算法工程师中转型落地者。

**次读者**（以章节标签引导）：技术管理者（读 ▲ 标记小节）、算法工程师（读 ● 标记小节）。

---

## 五个可带走的工具

每项均在配套仓库提供可下载版本：

1. 企业数据成熟度五层自评表
2. FDE 零周调研法（五天计划 + 三张表）
3. AI 场景可行性矩阵
4. ROI 计算器（含初始值与校准方法）
5. 本体六要素建模模板

---

## 配套资源

- **GitHub 代码仓库**：三级代码制——A 级（可运行且持续维护）、B 级（单文件最小示例）、C 级（伪代码/架构图/配置片段）；
- **在线数据快照与工具对照表**：季度更新，保证书中的数据与开源项目 Star 数不随时间失真；
- **附录**：GitHub 高星 AI 项目索引、技术选型速查表、知识库演进决策框架、FDE 项目检查清单、本体构建模板、中英术语表。

## 在线阅读与解锁

- **免费开放**：阅读指南与第 1–2 章（`book/guide.html` / `book/ch01.html` / `book/ch02.html`），Markdown 源稿见 `manuscript/`；
- **付费内容**：第 3–16 章、结语与三份附录。每章提供"速览卡 + 开篇"免费试读，全文经 AES-256-GCM 加密，输入解锁码后在线阅读；一次解锁，全书 18 篇通用，浏览器长期记忆；
- **获取解锁码**：请通过以下任一方式联系作者（请注明"解锁码"）：
  - 邮箱：jaccen2007@163.com
  - 微信：（待补充，替换为作者微信号）
  - 或通过出版社 / 配套销售渠道获取；
- **在线阅读地址**（GitHub Pages）：`https://jaccen.github.io/AI-deployment-engineering/`

---

# AI Deployment Engineering: From Data Governance to Superintelligent Agents

> **Status**: Outline v2.0 (final) ｜ Two-volume e-book ｜ 16 chapters + closing ｜ ~350K–360K Chinese characters

---

## One-Line Positioning

For people who are **accountable for AI outcomes in production**: how to turn an available model capability into a stable, business-recognized, cost-controlled, and continuously iterable production pipeline.

---

## Why This Book

There is a widening gap between model capability and business adoption:

- **MIT NANDA, *The GenAI Divide: State of AI in Business 2025*** (Jul 2025): reviewed 300+ projects and interviewed 52 organizations — **95% of the $30–40B enterprise AI spend produced no measurable financial return**;
- **McKinsey 2025**: 78% adoption rate, yet **>80% without measurable gains** and only 1% reporting mature AI strategy; only 23% have scaled agentic AI;
- Failure attribution: **technology issues account for only about a quarter** of failures — data, engineering, organization, and business account for the rest.

**Conclusion**: models are not the bottleneck. Data and the knowledge base are.

---

## The Core Narrative

```
Data Governance → Knowledge Engineering → Agent Engineering → FDE (Steering) → Industry Practice (Value)
```

- **Data Governance**: five-level data maturity model, semantic & knowledge governance, AI-era data quality
- **Knowledge Engineering**: legacy KB → RAG → LLM Wiki → OKF; ontology as the "business map"; GraphRAG hybrid architectures
- **Agent Engineering**: LLM workflows → RAG+Agents → multi-agent collaboration → superintelligent agents
- **FDE Methodology**: zero-week discovery, scenario diagnosis & ROI, deployment architecture, continuous operations
- **Industry Practice**: end-to-end playbooks for government, finance, and manufacturing scenarios

---

## Structure (Two Volumes)

### Volume I — The Data & Knowledge Foundation (Ch. 1–8)

- **Ch.1 The AI Adoption Gap** — why model capability grows yearly while success rates stay flat
- **Ch.2 From ML Engineering to AI Engineering** — from *training* models to *orchestrating* models
- **Ch.3 Enterprise Data Governance: Old vs. New** — five-level maturity model, semantic governance
- **Ch.4 From Data to Knowledge** — asset inventory, layered storage, acquisition & compliance
- **Ch.5 RAG Engineering, Deep Water** — five failure modes of naive RAG, three-way retrieval + RRF, RAG evaluation
- **Ch.6 LLM Wiki & Knowledge Distillation** — from *retrieval* to *assimilation*; OKF (Open Knowledge Format)
- **Ch.7 Ontology-Driven AI** — six-element modeling, ontology engineering, Palantir & domestic practice
- **Ch.8 GraphRAG & Hybrid Knowledge Architecture** — Neo4j + Milvus, multi-modal GraphRAG, Xinchuang licensing constraints

### Volume II — Agents & Delivery (Ch. 9–16 + Closing)

- **Ch.9 Agent Architecture Design** — four-level evolution, layered agent stacks, model selection, evaluation & observability
- **Ch.10 Multi-Agent Collaboration & Orchestration** — collaboration patterns, memory systems, MCP, fine-tuning decisions
- **Ch.11 Superintelligent Agents** — six testable criteria, target-state architecture vs. today's achievable stack
- **Ch.12 FDE Roles & Scenario Diagnosis** — zero-week discovery, feasibility matrix, ROI calculator
- **Ch.13 Deployment Architecture & Continuous Operations** — cascaded routing (L0–L), high availability, token economics
- **Ch.14 Government Agents** — compliant adoption from hotlines to full-scene services
- **Ch.15 Financial Agents** — NL-to-query, research & risk control under regulation
- **Ch.16 Manufacturing** — the last mile of AI in factories: predictive maintenance, visual inspection
- **Closing: The Next Decade of AI Engineering**

---

## Differentiators

1. **Entry point**: starts from data governance (models are not the bottleneck), unlike books that start from model stacks or API calls;
2. **Delivery view + China-specific constraints**: an FDE (Forward Deployed Engineer) lens, covering sovereign control, Xinchuang licensing, domestic compute, and government compliance;
3. **Falsifiable writing**: every institutional figure is labeled with report name + release time + snapshot date; author-invented frameworks are explicitly declared.

---

## Who This Book Is For

**Primary readers**: engineers and tech leads accountable for AI outcomes — FDEs, senior backend engineers transitioning to AI, and algorithm engineers moving toward deployment.

**Secondary readers**: engineering managers (read ▲-marked sections) and algorithm engineers (read ●-marked sections).

---

## Five Take-Home Tools (downloadable from the companion repo)

1. Five-level enterprise data maturity self-assessment sheet
2. FDE zero-week discovery toolkit (5-day plan + 3 templates)
3. AI scenario feasibility matrix
4. ROI calculator (with initial values & calibration method)
5. Ontology six-element modeling template

---

## Companion Resources

- **GitHub code repository** with three tiers: Tier A (runnable & maintained), Tier B (minimal single-file examples), Tier C (pseudo-code / architecture / config snippets);
- **Online data snapshots & tool-version reference tables**, updated quarterly, to keep every figure and open-source reference traceable;
- Appendices: high-star AI project index, tech-selection cheat sheets, knowledge-evolution decision framework, FDE checklist, ontology templates, EN/CN glossary.

## Online Reading & Unlock

- **Free**: the reading guide and Chapters 1–2 (`book/guide.html`, `book/ch01.html`, `book/ch02.html`); Markdown sources in `manuscript/`;
- **Paid content**: Chapters 3–16, the closing, and three appendices. Each offers a free preview (summary card + opening paragraphs); full text is encrypted with AES-256-GCM and readable online after entering an unlock code — one code unlocks all 18 pieces, remembered by your browser;
- **Get the unlock code**: contact the author (see the Chinese section above), or via the publisher / authorized channels;
- **Read online** (GitHub Pages): `https://jaccen.github.io/AI-deployment-engineering/`

---
