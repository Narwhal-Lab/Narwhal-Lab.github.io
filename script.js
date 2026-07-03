const translations = {
  en: {
    "nav.about": "About",
    "nav.research": "Areas",
    "nav.works": "Projects",
    "nav.people": "People",
    "nav.collaborations": "Collaborations",
    "nav.join": "Join Us",
    "hero.eyebrow": "AI, Software Systems, and Security",
    "hero.copy": "We study AI code intelligence, language-model agents, trustworthy intelligent systems, and high-value AI applications in real-world engineering and security settings.",
    "hero.pill.vuln": "Vulnerability Analysis",
    "hero.pill.aicode": "AI Code Intelligence",
    "hero.pill.agents": "Agent Data",
    "hero.pill.agentsecurity": "AI-vs-AI Defense",
    "hero.pill.infrastructure": "AI Engineering",
    "hero.pill.evaluation": "Real-World Eval",
    "hero.pill.benchmarks": "Benchmarks",
    "hero.pill.governance": "Governance",
    "hero.sidecopy": "Evidence, benchmarks, and tools for trustworthy AI-era software and agent systems.",
    "about.kicker": "About",
    "about.title": "Exploring AI code intelligence, agent systems, and trustworthy engineering in the AI era.",
    "about.copy.primary": "Narwhal Lab studies how AI-generated code, large language model agents, agent data, and trustworthy intelligent systems reshape software development, security evaluation, and real-world AI applications.",
    "about.copy.secondary": "Along these directions, we conduct empirical studies on real-world projects, build reproducible evaluation benchmarks, develop agent infrastructure, and work with academic and industry partners on AI-vs-AI defense mechanisms and high-value application scenarios.",
    "research.kicker": "Areas",
    "research.title": "Open directions across AI code intelligence, agent evolution, trustworthy systems, and high-value applications.",
    "research.aiCode.title": "AI Code Intelligence & Trustworthy Development",
    "research.aiCode.copy": "Study how large models participate in real software development, including code generation, code understanding, project-level evaluation, automated repair, and quality and security analysis.",
    "research.aiCode.em": "Code · Evaluation · Repair",
    "research.agent.title": "Agent Applications, Data, and Self-Evolution",
    "research.agent.copy": "Explore how agents complete complex real-world tasks, accumulate trajectories, interaction feedback, and tool-use data, and improve through evaluation, reflection, and continuous iteration.",
    "research.agent.em": "Agents · Data · Evolution",
    "research.eval.title": "Trustworthy Intelligent Systems & Security Evaluation",
    "research.eval.copy": "Study reliability, security, and controllability of model and agent systems, including robustness evaluation, risk discovery, tool-use security, AI-vs-AI defense, and security immunity systems.",
    "research.eval.em": "Trust · Defense · Evaluation",
    "research.infra.title": "AI for High-Value Scenarios",
    "research.infra.copy": "Explore large models, agents, and multimodal AI in medical imaging, privacy-preserving collaboration, multi-institutional data cooperation, and other real-world high-value scenarios.",
    "research.infra.em": "Medical AI · Privacy · Deployment",
    "featured.kicker": "Projects",
    "featured.title": "Open-source systems, benchmarks, reports, and evaluation frameworks.",
    "featured.all": "View all projects",
    "featured.magic": "A reusable skill management layer for installing, composing, syncing, and invoking AI agent capabilities.",
    "featured.vuln": "A real-world project-level benchmark for white-box vulnerability detection agents.",
    "featured.aicg": "A project-level evaluation framework for security risks in AI-generated code.",
    "experts.kicker": "People",
    "experts.title": "Selected faculty, researchers, and industry experts connected to Narwhal Lab.",
    "experts.all": "View more people",
    "experts.group.faculty": "Faculty",
    "experts.group.researchers": "Researchers",
    "experts.group.industry": "Industry Experts",
    "experts.luo.name": "Guibo Luo",
    "experts.luo.affiliation": "Peking University",
    "experts.luo.role": "Assistant Professor / Researcher",
    "experts.luo.focus": "Privacy Collaboration / Medical AI",
    "experts.zuo.name": "Ahang Zuo",
    "experts.zuo.affiliation": "University of Pau",
    "experts.zuo.role": "Associate Professor",
    "experts.zuo.focus": "Formal Methods / Digital Twins",
    "experts.su.name": "Ruoyu Su",
    "experts.su.affiliation": "University of Oulu",
    "experts.su.role": "Doctoral Researcher",
    "experts.su.focus": "Agentic AI / Software Architecture",
    "experts.yu.name": "Xingrui Yu",
    "experts.yu.affiliation": "A*STAR CFAR",
    "experts.yu.role": "Research Scientist",
    "experts.yu.focus": "Trustworthy AI / Robust Learning",
    "experts.li.name": "Xin Li",
    "experts.li.affiliation": "Tencent Security Yunding Lab",
    "experts.li.role": "Head of Attack and Defense",
    "experts.li.focus": "AI Agent Defense / AI-vs-AI",
    "experts.zhang.name": "Dong Zhang",
    "experts.zhang.affiliation": "Tencent WuKong",
    "experts.zhang.role": "R&D Security Lead",
    "experts.zhang.focus": "Code Security / Supply Chain",
    "collab.kicker": "Collaborations",
    "collab.title": "Connecting academic research with real-world engineering practice.",
    "collab.copy": "We work with universities, research institutes, and industry teams to turn real engineering, security, and high-value application problems into reproducible research, systems, and AI engineering outcomes.",
    "collab.industry": "Industry Partners",
    "collab.academic": "Academic Partners",
    "join.kicker": "Join Us",
    "join.title": "Join us to work on AI code intelligence, agent systems, and trustworthy AI engineering.",
    "join.copy": "We welcome motivated undergraduate, master’s, and Ph.D. students, including remote interns and overseas students. Students can participate in research and engineering projects on AI code intelligence, agent applications, agent data and self-evolution, trustworthy system evaluation, AI-vs-AI defense, and high-value AI scenarios.",
    "join.benefit1": "Mature research projects and computing resources",
    "join.benefit2": "Remote collaboration and onsite workspace at the Peking University lab in Shenzhen University Town",
    "join.benefit3": "Compensation based on ability and contribution",
    "join.benefit4": "Overseas onsite collaboration, Visiting opportunities, and CSC-related programs depending on project fit and individual progress",
    "join.contact": "Contact",
    "worksPage.eyebrow": "Projects & Outputs",
    "worksPage.title": "Projects",
    "worksPage.copy": "Projects, tools, benchmarks, reports, and collaborative outputs from Narwhal Lab.",
    "filter.all": "All",
    "filter.project": "Project",
    "filter.benchmark": "Benchmark",
    "filter.report": "Report",
    "filter.dataset": "Dataset",
    "filter.tool": "Tool",
    "works.vuln.summary": "A real-world project-level benchmark for evaluating white-box vulnerability detection agents, built from high-impact open-source vulnerabilities.",
    "works.report.summary": "A real-world empirical study on how AI-generated code is used, evolves, and participates in the vulnerability lifecycle.",
    "works.magic.summary": "An open-source infrastructure layer for managing, installing, composing, syncing, and invoking reusable AI agent skills.",
    "works.aicg.summary": "A project-level security evaluation framework for AI-generated code, designed for transparent and reproducible comparison.",
    "peoplePage.eyebrow": "Team Network",
    "peoplePage.title": "People",
    "peoplePage.copy": "Collaborating faculty, experts, and student members connected through Narwhal Lab.",
    "people.faculty.kicker": "Collaborating Faculty & Experts",
    "people.faculty.title": "People who connect Narwhal Lab with research and real-world practice.",
    "people.role.faculty": "Faculty",
    "people.role.researcher": "Researcher",
    "people.role.expert": "Industry Expert",
    "people.luo.name": "Guibo Luo",
    "people.luo.affiliation": "School of Computer Science, Peking University",
    "people.luo.bio": "Assistant Professor / Researcher and Ph.D. Supervisor at Peking University. His work focuses on multi-institutional privacy-preserving collaborative computing, medical image intelligence, and efficient training, inference, alignment, and deployment of large models.",
    "people.zuo.affiliation": "University of Pau, France",
    "people.zuo.bio": "Associate Professor working on formal verification, business process modelling and analysis, digital twins, and AI-assisted software engineering.",
    "people.su.affiliation": "University of Oulu, Finland",
    "people.su.bio": "Doctoral Researcher at the University of Oulu, working at the intersection of Agentic AI, LLMs, software architecture, and empirical software engineering.",
    "people.yu.name": "Xingrui Yu",
    "people.yu.affiliation": "A*STAR CFAR, Singapore",
    "people.yu.bio": "Research Scientist at A*STAR CFAR, working on trustworthy AI, robust machine learning, learning with noisy labels, imitation learning, and AI safety for code and agentic systems.",
    "people.zhang.name": "Dong Zhang",
    "people.zhang.affiliation": "Tencent",
    "people.zhang.bio": "R&D and security expert at Tencent and lead of WuKong R&D Security, focusing on code security, software supply-chain security, AI Agent security, LLM supply-chain security, and security infrastructure for agentic systems.",
    "people.li.name": "Xin Li",
    "people.li.affiliation": "Tencent Security Yunding Lab",
    "people.li.bio": "Head of attack and defense at Tencent Security Yunding Lab, working on practical cybersecurity operations, AI Agent defense logic, AI-vs-AI security immunity systems, and attack-defense cost control.",
    "people.students.kicker": "Students",
    "people.students.title": "Student members will be added soon."
  },
  zh: {
    "nav.about": "关于",
    "nav.research": "研究领域",
    "nav.works": "项目成果",
    "nav.people": "成员",
    "nav.collaborations": "合作",
    "nav.join": "加入我们",
    "hero.eyebrow": "人工智能、软件系统与安全",
    "hero.copy": "我们关注 AI 代码智能、大语言模型智能体、可信智能系统和高价值 AI 应用如何进入真实工程与安全场景。",
    "hero.pill.vuln": "漏洞分析",
    "hero.pill.aicode": "AI代码智能",
    "hero.pill.agents": "Agent数据",
    "hero.pill.agentsecurity": "AI对抗AI防御",
    "hero.pill.infrastructure": "AI工程",
    "hero.pill.evaluation": "真实世界评测",
    "hero.pill.benchmarks": "基准",
    "hero.pill.governance": "治理",
    "hero.sidecopy": "以实证、评测基准和工程工具推进可信 AI 软件与智能体系统。",
    "about.kicker": "关于",
    "about.title": "探索 AI 代码智能、智能体系统与可信工程。",
    "about.copy.primary": "Narwhal Lab 研究 AI 生成代码、大语言模型智能体、Agent 数据和可信智能系统如何重塑软件开发、安全评测和真实场景中的 AI 应用。",
    "about.copy.secondary": "围绕这些方向，我们开展面向真实项目的实证研究，构建可复现的评测基准，开发智能体基础设施，并与学术和产业伙伴一起探索“AI 对抗 AI”的防御机制，以及高价值应用场景。",
    "research.kicker": "研究领域",
    "research.title": "开放方向覆盖 AI 代码智能、Agent 自进化、可信系统和高价值应用。",
    "research.aiCode.title": "AI代码智能与可信开发",
    "research.aiCode.copy": "研究大模型如何参与真实软件开发，包括代码生成、代码理解、项目级评测、自动修复、质量与安全分析等问题。",
    "research.aiCode.em": "代码 · 评测 · 修复",
    "research.agent.title": "Agent应用、数据与自进化",
    "research.agent.copy": "研究 Agent 如何完成复杂真实任务，积累任务轨迹、交互反馈和工具调用数据，并通过评测、反思和持续迭代不断改进。",
    "research.agent.em": "智能体 · 数据 · 进化",
    "research.eval.title": "可信智能系统与安全评测",
    "research.eval.copy": "研究大模型和 Agent 系统的可靠性、安全性与可控性，包括鲁棒性评测、风险发现、工具调用安全、“AI 对抗 AI”的防御机制和安全免疫系统。",
    "research.eval.em": "可信 · 防御 · 评测",
    "research.infra.title": "AI与高价值场景应用",
    "research.infra.copy": "探索大模型、智能体和多模态 AI 在医学影像、隐私协同计算、多机构数据协作等真实高价值场景中的应用。",
    "research.infra.em": "医学 AI · 隐私 · 部署",
    "featured.kicker": "项目成果",
    "featured.title": "开源系统、评测基准、研究报告与评测框架。",
    "featured.all": "查看全部项目",
    "featured.magic": "面向 AI Agent 能力安装、组合、同步和调用的可复用 Skill 管理基础设施。",
    "featured.vuln": "面向白盒漏洞检测 Agent 的真实项目级评测基准。",
    "featured.aicg": "面向 AI 生成代码安全风险的项目级评测框架。",
    "experts.kicker": "成员",
    "experts.title": "部分合作老师、研究员与产业专家。",
    "experts.all": "查看更多成员",
    "experts.group.faculty": "合作老师",
    "experts.group.researchers": "合作研究员",
    "experts.group.industry": "产业专家",
    "experts.luo.name": "罗桂波",
    "experts.luo.affiliation": "北京大学信息工程学院",
    "experts.luo.role": "助理教授/研究员",
    "experts.luo.focus": "隐私协同计算、医学智能",
    "experts.zuo.name": "左阿航",
    "experts.zuo.affiliation": "法国波城大学",
    "experts.zuo.role": "副教授",
    "experts.zuo.focus": "形式验证、数字孪生",
    "experts.su.name": "苏若愚",
    "experts.su.affiliation": "芬兰奥卢大学",
    "experts.su.role": "博士研究员",
    "experts.su.focus": "智能体人工智能、软件架构",
    "experts.yu.name": "余星睿",
    "experts.yu.affiliation": "新加坡科技研究局前沿人工智能研究中心",
    "experts.yu.role": "研究科学家",
    "experts.yu.focus": "可信人工智能、鲁棒学习",
    "experts.li.name": "李鑫",
    "experts.li.affiliation": "腾讯安全云鼎实验室",
    "experts.li.role": "攻防负责人",
    "experts.li.focus": "智能体防御、人工智能对抗",
    "experts.zhang.name": "张栋",
    "experts.zhang.affiliation": "腾讯悟空研发安全",
    "experts.zhang.role": "研发安全负责人",
    "experts.zhang.focus": "代码安全、供应链安全",
    "collab.kicker": "合作",
    "collab.title": "连接真实场景中的学术研究与工程实践。",
    "collab.copy": "我们与高校、科研机构和企业团队合作，将真实工程、安全攻防和高价值应用问题转化为可研究、可复现、可落地的系统、安全与 AI 工程课题。",
    "collab.industry": "企业合作",
    "collab.academic": "学术合作",
    "join.kicker": "加入我们",
    "join.title": "加入我们，一起研究 AI 代码智能、智能体系统与可信 AI 工程。",
    "join.copy": "我们欢迎本科生、硕士生、博士生、远程实习生和海外学生加入。学生可以参与 AI 代码智能、Agent 应用、Agent 数据与自进化、可信系统评测、“AI 对抗 AI”的防御机制和高价值 AI 场景等研究与工程项目。",
    "join.benefit1": "成熟科研项目与充足算力资源",
    "join.benefit2": "支持远程协作，也提供北京大学深圳大学城实验室线下工位",
    "join.benefit3": "报酬根据能力和贡献确定",
    "join.benefit4": "表现优秀者可根据合作项目和个人情况，接触海外线下合作、Visiting以及CSC相关机会",
    "join.contact": "联系我们",
    "worksPage.eyebrow": "项目与产出",
    "worksPage.title": "项目成果",
    "worksPage.copy": "Narwhal Lab 的项目、工具、评测基准、研究报告和合作成果。",
    "filter.all": "全部",
    "filter.project": "项目",
    "filter.benchmark": "评测基准",
    "filter.report": "报告",
    "filter.dataset": "数据集",
    "filter.tool": "工具",
    "works.vuln.summary": "面向白盒漏洞检测 Agent 的真实项目级评测基准，基于高影响力开源项目漏洞构建。",
    "works.report.summary": "关于 AI 生成代码在真实世界中如何被使用、演化并参与漏洞生命周期的实证研究。",
    "works.magic.summary": "用于管理、安装、组合、同步和调用可复用 AI Agent Skills 的开源基础设施。",
    "works.aicg.summary": "面向 AI 生成代码安全风险的项目级评测框架，支持透明、可复现的比较。",
    "peoplePage.eyebrow": "团队网络",
    "peoplePage.title": "成员",
    "peoplePage.copy": "与 Narwhal Lab 保持紧密联系的合作老师、专家和学生成员。",
    "people.faculty.kicker": "合作老师与专家",
    "people.faculty.title": "连接 Narwhal Lab 研究问题与真实场景的合作成员。",
    "people.role.faculty": "合作老师",
    "people.role.researcher": "合作研究员",
    "people.role.expert": "企业专家",
    "people.luo.name": "罗桂波",
    "people.luo.affiliation": "北京大学信息工程学院",
    "people.luo.bio": "北京大学信息工程学院助理教授/研究员、博士生导师，研究方向包括多机构隐私协同计算、医学影像智能分析，以及大模型训练、推理、对齐与部署机制。",
    "people.zuo.affiliation": "法国波城大学",
    "people.zuo.bio": "副教授，研究方向包括形式验证、业务流程建模与分析、数字孪生和 AI 辅助软件工程。",
    "people.su.affiliation": "芬兰奥卢大学",
    "people.su.bio": "芬兰奥卢大学博士研究员，研究方向包括 Agentic AI、LLM、软件架构和实证软件工程。",
    "people.yu.name": "Xingrui Yu",
    "people.yu.affiliation": "新加坡科技研究局前沿人工智能研究中心",
    "people.yu.bio": "新加坡科技研究局前沿人工智能研究中心研究科学家，研究方向包括可信 AI、鲁棒机器学习、噪声标签学习、模仿学习，以及面向代码和智能体系统的 AI 安全。",
    "people.zhang.name": "张栋",
    "people.zhang.affiliation": "腾讯",
    "people.zhang.bio": "腾讯研发与安全专家、悟空研发安全负责人，重点关注代码安全、软件供应链安全、AI Agent 安全、大模型供应链安全，以及面向智能体系统的安全基础设施。",
    "people.li.name": "李鑫",
    "people.li.affiliation": "腾讯安全云鼎实验室",
    "people.li.bio": "腾讯安全云鼎实验室攻防负责人，长期深耕网络安全攻防实战与安全研究，关注 AI Agent 安全防御逻辑、“AI 对抗 AI”的防御机制、安全免疫系统和攻防博弈成本控制。",
    "people.students.kicker": "学生",
    "people.students.title": "学生成员将陆续更新。"
  }
};

const languageToggle = document.querySelector("#languageToggle");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const year = document.querySelector("#year");

const savedLanguage = localStorage.getItem("narwhal-language") || "en";
const savedTheme = localStorage.getItem("narwhal-theme") || "light";

function setLanguage(language) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.language = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translations[language][key] || translations.en[key] || node.textContent;
  });
  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "中文" : "EN";
  }
  localStorage.setItem("narwhal-language", language);
  delete document.documentElement.dataset.i18nPending;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  }
  localStorage.setItem("narwhal-theme", theme);
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const next = localStorage.getItem("narwhal-language") === "zh" ? "en" : "zh";
    setLanguage(next);
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
  });
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".work-card[data-types]").forEach((card) => {
      const visible = filter === "all" || card.dataset.types.split(" ").includes(filter);
      card.hidden = !visible;
    });
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

setTheme(savedTheme);
setLanguage(savedLanguage);
