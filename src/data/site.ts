export type Locale = "en" | "zh";

type LocalizedString = Record<Locale, string>;

export type NavItem = {
  href: string;
  label: LocalizedString;
};

export type CareerItem = {
  id: string;
  date: string;
  role: LocalizedString;
  organization: string;
  location: LocalizedString;
  description?: LocalizedString;
  linkLabel?: string;
  linkDescription?: LocalizedString;
  linkHref?: string;
  accent: string;
  logo: string;
  logoClass: string;
  logoSrc: string;
  logoAlt: string;
};

export type ProjectItem = {
  slug: string;
  date: string;
  category: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  coverType: "image" | "video";
  coverSrc: string;
  coverPosterSrc?: string;
  tags: string[];
  cta: LocalizedString;
  mediaLabel: LocalizedString;
  gradient: string;
  overview: LocalizedString;
  problem: LocalizedString;
  role: LocalizedString;
  decisions: Record<Locale, string[]>;
  impact: LocalizedString;
  externalHref?: string;
  externalLabel?: LocalizedString;
};

export type StudentExperimentVideoLink = {
  label: string;
  href: string;
  embedSrc: string;
  title: string;
  description: string;
};

export type StudentExperimentSection = {
  eyebrow: string;
  title: string;
  body: string[];
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export type StudentExperimentItem = {
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  coverSrc: string;
  gradient: string;
  heroTitle: string;
  heroSubtitle: string;
  videoLinks: StudentExperimentVideoLink[];
  sections: StudentExperimentSection[];
};

export const siteConfig = {
  name: "Yixin Xia",
  title: {
    en: "Yixin Xia — AI Product Manager",
    zh: "夏意欣｜AI 产品经理"
  },
  description: {
    en: "Portfolio of Yixin Xia, an AI Product Manager and interaction designer building multimodal, 3D, and agentic product experiences.",
    zh: "夏意欣的作品集，聚焦多模态 AI、3D 体验、Agentic Workflow 与产品叙事。"
  },
  keywords: [
    "AI Product Manager",
    "Interaction Design",
    "Agentic AI",
    "Multimodal AI",
    "3D Product",
    "AI Portfolio"
  ],
  linkedin: "https://www.linkedin.com/in/yixin-xia/",
  email: "yixin_xia@outlook.com",
  github: "",
  resume: "/resume.pdf",
  portrait: "/yixin-image-portrait.webp"
};

export const navItems: NavItem[] = [
  { href: "/", label: { en: "ABOUT", zh: "关于" } },
  { href: "/career", label: { en: "CAREER", zh: "经历" } },
  { href: "/projects", label: { en: "PROJECTS", zh: "项目" } },
  { href: "/beyond-work", label: { en: "BEYOND WORK", zh: "工作之外" } }
];

export const pageCopy = {
  localeSwitch: {
    en: "CN",
    zh: "EN"
  },
  letsTalk: {
    en: "LET'S TALK",
    zh: "聊聊合作"
  },
  hero: {
    eyebrow: {
      en: "AI PM · Interaction Design · Agentic Systems",
      zh: "AI PM · 交互设计 · Agentic Systems"
    },
    title: {
      en: "AI Product,\nInteraction, and\nAgentic Experience\nBuilder",
      zh: "构建真正可用、\n可感知、可信任的\nAI 产品体验"
    },
    italicWord: {
      en: "Agentic",
      zh: "AI"
    },
    intro: {
      en: "Hi. I'm Yixin Xia, an AI Product Manager and interaction designer building multimodal, 3D, and agentic product experiences. My work sits at the intersection of emerging AI capabilities, user-centered design, and product storytelling.",
      zh: "你好，我是夏意欣，一名聚焦多模态 AI、3D 体验与 Agentic 产品的 AI 产品经理和交互设计师。我关注如何把新兴 AI 能力转译成用户真正能理解、能使用、也愿意使用的产品体验。"
    },
    primaryCta: {
      en: "ABOUT ME",
      zh: "了解我"
    },
    secondaryCta: {
      en: "VIEW PROJECTS",
      zh: "查看项目"
    },
    portraitCaption: {
      en: "AI product manager shaping multimodal, 3D, and spatial experiences.",
      zh: "聚焦多模态、3D 与空间交互体验的 AI 产品经理。"
    }
  },
  about: {
    section: { en: "About", zh: "关于" },
    title: {
      en: "Turning ambiguous AI capabilities into products people actually need.",
      zh: "把模糊的 AI 能力，变成用户真正需要的产品。"
    },
    body: [
      {
        en: "I'm an AI Product Manager with a background in interaction design, creative technology, and product strategy.",
        zh: "我是一名 AI 产品经理，具备交互设计、创意技术与产品策略的复合背景。"
      },
      {
        en: "Across Microsoft, Unity, Rednote, and Disney, I've worked on AI incubation, 3D creation tools, enterprise workflows, and consumer creative experiences. I'm especially interested in the early stages of AI products: identifying the right user problem, shaping the product loop, prototyping the experience, defining evaluation signals, and communicating value clearly.",
        zh: "在 Microsoft、Unity、小红书和 Disney 的经历中，我参与过 AI 孵化、3D 创作工具、企业工作流与消费型创意体验。我尤其关注 AI 产品的早期阶段：识别真正的问题、搭建产品闭环、快速原型化、定义评估信号，并把产品价值讲清楚。"
      },
      {
        en: "My work focuses on multimodal AI, agentic workflows, and products that make complex AI capabilities understandable and useful for real users.",
        zh: "我的工作聚焦多模态 AI、Agentic Workflow，以及那些能把复杂 AI 能力转化成真实可理解、可使用体验的产品。"
      }
    ],
    cardTitle: {
      en: "Product Foundation",
      zh: "能力基底"
    },
    education: {
      en: "Shanghai Jiao Tong University\nInteraction Design & Product Experience",
      zh: "上海交通大学\n交互设计与产品体验"
    },
    focusTitle: {
      en: "Focus Areas",
      zh: "关注方向"
    },
    focuses: {
      en: [
        "AI Product Management",
        "Human-Computer Interaction",
        "Multimodal AI",
        "Agentic Workflows",
        "Product Storytelling",
        "Evaluation Frameworks"
      ],
      zh: [
        "AI 产品管理",
        "人机交互",
        "多模态 AI",
        "Agentic 工作流",
        "产品叙事",
        "评估框架"
      ]
    },
    strengthsTitle: {
      en: "Strengths",
      zh: "工作方式"
    },
    strengths: {
      en: [
        "From ambiguity to product definition",
        "From prototype to user validation",
        "From subjective quality to evaluation signals",
        "From AI capability to product narrative"
      ],
      zh: [
        "从模糊机会到产品定义",
        "从原型验证到用户确认",
        "从主观质量到评估信号",
        "从 AI 能力到产品叙事"
      ]
    }
  },
  career: {
    section: { en: "Career", zh: "经历" },
    title: {
      en: "Internship and building experience",
      zh: "实习与构建经历"
    },
    subtitle: {
      en: "A path across AI incubation, 3D systems, enterprise tooling, and storytelling.",
      zh: "从 AI 孵化、3D 系统、企业工具到创意叙事，我一直在做“把技术翻译成体验”的工作。"
    }
  },
  projects: {
    section: { en: "Projects", zh: "项目" },
    title: {
      en: "Selected case studies",
      zh: "精选案例"
    },
    subtitle: {
      en: "A first-pass portfolio focused on product framing, spatial systems, and agentic experiences.",
      zh: "第一版作品集重点展示产品 framing、空间系统与 agentic 体验。"
    }
  },
  studentExperiments: {
    section: { en: "Student Experiments", zh: "学生实验" },
    title: {
      en: "Student Experiments",
      zh: "Student Experiments"
    },
    subtitle: {
      en: "Early explorations in spatial experience, interactive storytelling, and motion-based visual systems.",
      zh: "Early explorations in spatial experience, interactive storytelling, and motion-based visual systems."
    }
  },
  notes: {
    section: { en: "Content", zh: "内容" },
    title: {
      en: "Notes on AI product, design, and agentic systems",
      zh: "关于 AI 产品、设计与 Agentic 系统的思考"
    },
    items: [
      {
        en: "How I think about AI PM",
        zh: "我如何理解 AI PM"
      },
      {
        en: "Designing useful agentic workflows",
        zh: "如何设计真正有用的 Agentic Workflow"
      },
      {
        en: "From prototype to product signal",
        zh: "从原型到产品信号"
      }
    ],
    comingSoon: {
      en: "Coming soon",
      zh: "即将更新"
    }
  },
  contact: {
    section: { en: "Contact", zh: "联系" },
    title: {
      en: "Let's build something together.",
      zh: "一起做点有意思的事。"
    },
    subtitle: {
      en: "Open to conversations about AI product, multimodal experiences, 3D creation tools, agentic workflows, and product storytelling.",
      zh: "欢迎交流 AI 产品、多模态体验、3D 创作工具、Agentic Workflow 与产品叙事相关机会。"
    },
    cardTitle: {
      en: "Start a conversation",
      zh: "开始联系"
    },
    cardBody: {
      en: "Open to conversations about AI product, multimodal experiences, 3D creation tools, agentic workflows, and product storytelling.",
      zh: "欢迎交流 AI 产品、多模态体验、3D 创作工具、Agentic Workflow 与产品叙事相关机会。"
    },
    email: {
      en: "Email",
      zh: "邮箱"
    },
    linkedin: {
      en: "LinkedIn",
      zh: "LinkedIn"
    },
    resume: {
      en: "Resume",
      zh: "简历"
    },
    github: {
      en: "GitHub",
      zh: "GitHub"
    }
  },
  footer: {
    en: "Designed for clarity, storytelling, and AI-native product thinking.",
    zh: "为清晰表达、产品叙事与 AI-native 产品思维而设计。"
  }
};

export const careerItems: CareerItem[] = [
  {
    id: "microsoft-ai",
    date: "2026",
    role: {
      en: "AI Product Manager",
      zh: "AI 产品经理"
    },
    organization: "Microsoft AI / Copilot",
    location: {
      en: "Suzhou",
      zh: "苏州"
    },
    accent: "from-sky-200/80 via-blue-100/50 to-white",
    logo: "MS",
    logoClass: "bg-white",
    logoSrc: "/logos/microsoft.png",
    logoAlt: "Microsoft logo"
  },
  {
    id: "microsoft",
    date: "2025",
    role: {
      en: "Product Manager Intern",
      zh: "产品经理实习生"
    },
    organization: "Microsoft AI / Copilot Labs",
    location: {
      en: "Suzhou",
      zh: "苏州"
    },
    description: {
      en: "Worked on Copilot Labs and Copilot 3D, supporting AI-powered 3D creation experiences, launch storytelling, community activation, and product demos that translated emerging AI capabilities into user-facing narratives.",
      zh: "参与 Copilot Labs 与 Copilot 3D，围绕 AI 驱动的 3D 创作体验、产品发布叙事、社区激活与 demo 演示，帮助把新兴 AI 能力转化成面向用户的表达与产品故事。"
    },
    linkLabel: "Copilot Labs",
    linkDescription: {
      en: "Experimental AI experiences and previews of new Copilot capabilities before broader release.",
      zh: "聚焦实验性 AI 体验与 Copilot 新能力的前瞻展示。"
    },
    linkHref: "https://copilot.microsoft.com/labs",
    accent: "from-sky-200/80 via-blue-100/50 to-white",
    logo: "MS",
    logoClass: "bg-white",
    logoSrc: "/logos/microsoft.png",
    logoAlt: "Microsoft logo"
  },
  {
    id: "shipyard",
    date: "2024",
    role: {
      en: "Product Manager Intern",
      zh: "产品经理实习生"
    },
    organization: "Unity",
    location: {
      en: "Shanghai",
      zh: "上海"
    },
    description: {
      en: "Led product definition for a shipbuilding precision-management PoC, translating ambiguous enterprise needs into workflows for progress tracking, segment navigation, precision annotation, and 3D-enabled data maintenance.",
      zh: "主导船舶精度管理 PoC 的产品定义，把复杂模糊的企业需求转译为进度跟踪、分段导航、精度标注与 3D 数据维护的完整工作流。"
    },
    linkLabel: "3D Digital Twin Workflow",
    linkDescription: {
      en: "Enterprise 3D workflow for shipbuilding progress visibility and precision management.",
      zh: "服务船舶建造进度可视化与精度管理的企业级 3D 工作流。"
    },
    linkHref: "/projects#project-shipyard-digital-twin",
    accent: "from-cyan-200/70 via-emerald-100/50 to-white",
    logo: "U",
    logoClass: "bg-black text-white",
    logoSrc: "/logos/unity.png",
    logoAlt: "Unity logo"
  },
  {
    id: "disney",
    date: "2024",
    role: {
      en: "Creative Design Intern",
      zh: "创意设计实习生"
    },
    organization: "Disney",
    location: {
      en: "Shanghai",
      zh: "上海"
    },
    description: {
      en: "Contributed to creative concepts, visual direction, and product storytelling for consumer-facing brand experiences, learning how early-stage creative ideas become market-ready products.",
      zh: "参与面向消费者品牌体验的创意概念、视觉方向与产品叙事，理解早期创意如何被打磨为面向市场的产品体验。"
    },
    linkLabel: "Creative Storytelling",
    linkDescription: {
      en: "From early visual concepts to shippable brand and retail experiences.",
      zh: "从早期视觉概念到可落地的品牌与零售体验。"
    },
    linkHref: "/projects#project-disney-spring-sketchbook",
    accent: "from-rose-200/75 via-orange-100/60 to-white",
    logo: "D",
    logoClass: "bg-[#425f96] text-white",
    logoSrc: "/logos/disney.png",
    logoAlt: "The Walt Disney Company logo"
  },
  {
    id: "xiaohongshu",
    date: "2023",
    role: {
      en: "Product Design Intern",
      zh: "产品设计实习生"
    },
    organization: "Xiaohongshu",
    location: {
      en: "Shanghai",
      zh: "上海"
    },
    description: {
      en: "Worked on content-community product research and product analysis, translating user behavior, creator needs, and platform scenarios into clearer product opportunities and execution notes.",
      zh: "参与内容社区方向的产品调研与产品分析，将用户行为、创作者需求和平台场景转化为更清晰的产品机会与执行记录。"
    },
    linkLabel: "Xiaohongshu",
    linkDescription: {
      en: "Lifestyle community platform centered on content discovery, sharing, commerce, and creator ecosystems.",
      zh: "以内容发现、分享、交易与创作者生态为核心的生活方式社区平台。"
    },
    linkHref: "https://www.xiaohongshu.com/en",
    accent: "from-rose-200/75 via-red-100/60 to-white",
    logo: "RED",
    logoClass: "bg-[#ff2442] text-white",
    logoSrc: "/logos/xiaohongshu.png",
    logoAlt: "Xiaohongshu logo"
  }
];

export const projects: ProjectItem[] = [
  {
    slug: "copilot-3d",
    date: "2025",
    category: {
      en: "AI Product · 3D Generation · Quality Evaluation",
      zh: "AI · 3D · 产品叙事"
    },
    title: {
      en: "Copilot 3D — Image-to-3D AI Productization",
      zh: "Copilot 3D — 把 AI 生成能力讲成产品故事"
    },
    description: {
      en: "Helped productize MSRA image-to-3D research into a Copilot Labs experience, supporting launch activation, product storytelling, and benchmark-based quality evaluation.",
      zh: "围绕 AI 驱动的 3D 资产生成，参与产品叙事、发布视觉和 demo 体验设计，帮助用户理解生成式 AI 如何转化为真正可用的创作工作流。"
    },
    coverType: "video",
    coverSrc: "/projects/copilot-3d-cover-video.mp4",
    coverPosterSrc: "/projects/copilot-3d-cover.webp",
    tags: ["AI Product", "3D Generation", "Quality Evaluation", "Copilot Labs"],
    cta: {
      en: "VIEW CASE STUDY",
      zh: "查看案例"
    },
    mediaLabel: {
      en: "Launch storytelling and demo framing",
      zh: "发布叙事与 demo framing"
    },
    gradient: "from-sky-200 via-cyan-100 to-indigo-50",
    overview: {
      en: "This case study is being updated. For now, it highlights how 3D AI generation was framed as an understandable, usable product experience for broader audiences.",
      zh: "案例内容仍在整理中。本页先展示如何把 3D AI 生成能力包装成更易理解、可体验、可传播的产品叙事。"
    },
    problem: {
      en: "How might we turn emerging generative 3D capabilities into a narrative users can quickly grasp and trust?",
      zh: "如何把新兴的 3D 生成能力转化为用户能快速理解并建立信任的产品叙事？"
    },
    role: {
      en: "Product storytelling, demo experience support, and launch framing.",
      zh: "负责产品叙事、demo 体验支持与发布 framing。"
    },
    decisions: {
      en: [
        "Clarified the user-facing value before showcasing technical novelty.",
        "Used demos to bridge capability, workflow, and imagination.",
        "Focused on making 3D generation legible to non-expert audiences."
      ],
      zh: [
        "先讲清用户价值，再展示技术新颖性。",
        "用 demo 连接能力、工作流与想象空间。",
        "重点让非专业用户也能理解 3D 生成。"
      ]
    },
    impact: {
      en: "A stronger launch story and a clearer path from capability demo to product understanding.",
      zh: "让能力展示更像产品，而不只是技术演示。"
    },
    externalHref: "https://copilot.microsoft.com/labs/experiments/copilot-3d",
    externalLabel: {
      en: "Try Copilot 3D",
      zh: "体验 Copilot 3D"
    }
  },
  {
    slug: "curio",
    date: "2025",
    category: {
      en: "AI MVP · Agentic Experience · Cultural Tech",
      zh: "AI · Agentic Experience · 文化"
    },
    title: {
      en: "Curio — Multi-Agent Cultural Livestream",
      zh: "Curio — AI 文化直播体验"
    },
    description: {
      en: "Designed and shipped an AI interactive MVP that turns cultural artifacts into live multi-agent conversations, validating early demand through 100+ user activations.",
      zh: "一个 AI 驱动的文化直播体验，任何上传物件都可以被转化为可讨论的文化对象，系统串联图像理解、文物 framing、角色生成、多角色对话与直播间交互。"
    },
    coverType: "image",
    coverSrc: "/projects/curio-cover.webp",
    tags: ["AI MVP", "Multi-Agent AI", "Live Experience", "User Validation"],
    cta: {
      en: "VIEW CASE STUDY",
      zh: "查看案例"
    },
    mediaLabel: {
      en: "Image-to-character-to-dialogue pipeline",
      zh: "从图像到角色再到对话的产品闭环"
    },
    gradient: "from-fuchsia-200 via-amber-50 to-violet-100",
    overview: {
      en: "Curio explores how AI can turn static cultural artifacts into live, participatory experiences.",
      zh: "Curio 探索如何把静态文化对象转化为实时、可参与的 AI 体验。"
    },
    problem: {
      en: "How might cultural interpretation become participatory rather than one-directional?",
      zh: "如何让文化解读从单向输出变成可参与、可互动的体验？"
    },
    role: {
      en: "Product concept, experience loop design, and AI interaction framing.",
      zh: "负责产品概念、体验闭环与 AI 交互 framing。"
    },
    decisions: {
      en: [
        "Started from a strong input action: upload any object.",
        "Used multi-character dialogue to increase interpretive depth.",
        "Designed the live room as both interface and stage."
      ],
      zh: [
        "从一个足够清晰的输入动作开始：上传任意物件。",
        "用多角色对话提升解释层次和戏剧性。",
        "把直播间同时设计成界面和舞台。"
      ]
    },
    impact: {
      en: "Demonstrated an agentic content loop that feels cultural, playful, and discussion-driven.",
      zh: "验证了一种兼具文化感、讨论性和参与感的 agentic 内容闭环。"
    },
    externalHref: "https://icy-pond-07ba69f10-preview.centralus.2.azurestaticapps.net/",
    externalLabel: {
      en: "Try Curio Demo",
      zh: "体验 Curio Demo"
    }
  },
  {
    slug: "shipyard-digital-twin",
    date: "2024",
    category: {
      en: "Enterprise Product · 3D Workflow · Digital Twin",
      zh: "企业 · 3D · 工作流"
    },
    title: {
      en: "Shipbuilding Digital Twin — Precision Management PoC",
      zh: "船舶数字孪生 — 精度管理 PoC"
    },
    description: {
      en: "Defined product workflows and prototypes for a shipyard digital twin PoC, helping reduce manual data-checking across 2D drawings and Excel records by ~40%.",
      zh: "围绕船舶建造打造的 3D 工作流平台，覆盖进度跟踪、分段导航、精度标注与数据维护，帮助减少图纸、表格与模型之间的人肉交叉核对。"
    },
    coverType: "image",
    coverSrc: "/projects/unity-cover.webp",
    tags: ["Enterprise PM", "Digital Twin", "3D Workflow", "PRD"],
    cta: {
      en: "VIEW CASE STUDY",
      zh: "查看案例"
    },
    mediaLabel: {
      en: "Precision management in a 3D enterprise workflow",
      zh: "企业级 3D 精度管理工作流"
    },
    gradient: "from-cyan-100 via-slate-50 to-emerald-100",
    overview: {
      en: "A proof of concept focused on bringing progress visibility and precision control into one 3D-centered workflow.",
      zh: "一个围绕 3D 工作流整合进度可视化与精度控制的概念验证项目。"
    },
    problem: {
      en: "How might fragmented offline coordination become a more legible, traceable 3D workflow?",
      zh: "如何让线下割裂的协同过程变成更清晰、可追溯的 3D 工作流？"
    },
    role: {
      en: "Product definition, workflow design, and enterprise translation.",
      zh: "负责产品定义、工作流设计与企业需求转译。"
    },
    decisions: {
      en: [
        "Mapped operational pain points before defining screens.",
        "Used spatial navigation as the backbone of the workflow.",
        "Balanced industrial detail with interface clarity."
      ],
      zh: [
        "先梳理现场痛点，再定义界面与信息结构。",
        "以空间导航作为整个工作流的主骨架。",
        "在工业细节与界面清晰度之间做平衡。"
      ]
    },
    impact: {
      en: "Created a more coherent product direction for enterprise-grade 3D precision workflows.",
      zh: "为企业级 3D 精度管理提供了更完整、可执行的产品方向。"
    }
  },
  {
    slug: "xiaohongshu",
    date: "2024",
    category: {
      en: "Enterprise Tools · Workflow Design · Product Design",
      zh: "内容社区 · 用户研究 · 产品策略"
    },
    title: {
      en: "Rednote HRIS — Enterprise Workflow Redesign",
      zh: "小红书 - HRIS 设计"
    },
    description: {
      en: "Redesigned HRIS workflows and enterprise tools, improving user satisfaction by 66.35% through workflow analysis, PRD refinement, and cross-functional iteration.",
      zh: "通过更直观的界面与中心化数据流，重塑 HR 使用体验。"
    },
    coverType: "image",
    coverSrc: "/projects/xiaohongshu-cover.svg",
    tags: ["Enterprise Tools", "Workflow Design", "User Research", "Design System"],
    cta: {
      en: "VIEW CASE STUDY",
      zh: "查看案例"
    },
    mediaLabel: {
      en: "Research synthesis and platform opportunity framing",
      zh: "研究整合与平台机会 framing"
    },
    gradient: "from-rose-200 via-orange-50 to-red-100",
    overview: {
      en: "This case study captures how qualitative signals from a fast-moving content platform can be distilled into product insights, opportunity areas, and more actionable design directions.",
      zh: "这个案例关注的是：如何把一个高速运转的内容平台中的大量定性信号，提炼成产品洞察、机会方向与更可执行的设计输入。"
    },
    problem: {
      en: "How might we translate scattered community behavior, creator needs, and platform observations into concrete product opportunities that teams can actually act on?",
      zh: "如何把分散的社区行为、创作者需求与平台观察，转译成团队真正可以行动的产品机会？"
    },
    role: {
      en: "Product research, competitive analysis, insight synthesis, and opportunity framing.",
      zh: "负责产品调研、竞品分析、洞察提炼与机会 framing。"
    },
    decisions: {
      en: [
        "Started from real platform behaviors instead of abstract feature ideation.",
        "Combined user, creator, and ecosystem perspectives to avoid one-sided conclusions.",
        "Turned broad observations into scoped hypotheses and clearer next-step directions."
      ],
      zh: [
        "从真实的平台行为出发，而不是从抽象的功能想象出发。",
        "同时结合用户、创作者和生态视角，避免得出单一结论。",
        "把宽泛观察收束成有边界的假设与更清晰的后续方向。"
      ]
    },
    impact: {
      en: "Created a sharper bridge between community understanding and product decision-making, making research outputs easier to communicate and act on.",
      zh: "让社区理解与产品决策之间的连接更清晰，也让研究产出更容易被沟通与推动。"
    }
  },
  {
    slug: "inside-out-h5",
    date: "2024.10",
    category: {
      en: "UI/UX · CAMPAIGN DESIGN · USER ENGAGEMENT",
      zh: "UI/UX · 活动设计 · 用户参与"
    },
    title: {
      en: "Inside Out 2 - Designing a Shareable Campaign Loop",
      zh: "Inside Out 2 - Designing a Shareable Campaign Loop"
    },
    description: {
      en: "Designed a mobile H5 personality-test campaign for Inside Out 2, using scenario-based questions, localized copy, and shareable result cards to drive engagement and social sharing.",
      zh: "为《头脑特工队 2》设计移动端 H5 性格测试活动，通过情境化问题、本地化文案与可分享结果卡片带动互动参与与社交传播。"
    },
    coverType: "image",
    coverSrc: "/projects/InsideOut_cover.webp",
    tags: ["UI/UX", "Interactive H5", "Campaign Design", "User Engagement", "Disney"],
    cta: {
      en: "VIEW CASE STUDY",
      zh: "查看案例"
    },
    mediaLabel: {
      en: "Interactive H5 flow and engagement-driven storytelling",
      zh: "互动 H5 流程与参与驱动的内容体验"
    },
    gradient: "from-violet-300 via-indigo-100 to-fuchsia-100",
    overview: {
      en: "An interactive promotional H5 for Disney’s Inside Out 2 that turned emotion testing into a lightweight mobile campaign loop, combining quick participation, playful self-identification, and shareable results.",
      zh: "这是一个为迪士尼《头脑特工队 2》打造的互动推广 H5，把情绪测试转化为轻量的移动端活动闭环，结合快速参与、自我代入和可分享结果。"
    },
    problem: {
      en: "How might we make a film campaign feel participatory, emotionally resonant, and worth sharing instead of just informational?",
      zh: "如何让电影活动不只是信息传播，而是更具参与感、情绪共鸣和分享意愿？"
    },
    role: {
      en: "UI/UX design, user flow planning, interaction prototyping, and campaign copywriting.",
      zh: "负责 UI/UX 设计、用户流程规划、交互原型与活动文案。"
    },
    decisions: {
      en: [
        "Used scenario-based questions to make the experience feel like a short story instead of a generic quiz.",
        "Localized emotion keywords and result copy to improve resonance for local audiences.",
        "Designed result cards as social assets to support replay, comparison, and sharing."
      ],
      zh: [
        "用情境化问题让体验更像一段小故事，而不是普通问答。",
        "通过本地化情绪关键词和结果文案增强用户共鸣。",
        "把结果页设计成社交传播素材，支持复玩、比较和分享。"
      ]
    },
    impact: {
      en: "Increased engagement, sharing, and replay value for the campaign, contributing to 500K+ video views and strong social discussion.",
      zh: "提升了活动的互动参与、分享传播和复玩价值，带动相关视频播放量超过 50 万并引发社区讨论。"
    }
  },
  {
    slug: "disney-spring-sketchbook",
    date: "2024",
    category: {
      en: "Consumer Products · Brand Systems · Creative Strategy",
      zh: "创意设计 · 品牌叙事"
    },
    title: {
      en: "Disney Licensing — From Trend to Retail Experience",
      zh: "Disney Spring Sketchbook — 从概念到零售体验"
    },
    description: {
      en: "Created licensing design packets for Disney consumer products, translating audience insights, trend research, and brand guidelines into production-ready creative assets.",
      zh: "围绕创意概念、视觉方向与产品叙事展开的设计工作，探索早期故事板如何走向面向消费者的品牌体验。"
    },
    coverType: "image",
    coverSrc: "/projects/disney-cover.webp",
    tags: ["Consumer Products", "Brand Strategy", "Trend Research", "Licensing"],
    cta: {
      en: "VIEW CASE STUDY",
      zh: "查看案例"
    },
    mediaLabel: {
      en: "Creative concepts translated into consumer experiences",
      zh: "把创意概念转化为消费级体验"
    },
    gradient: "from-rose-100 via-orange-50 to-yellow-100",
    overview: {
      en: "A placeholder summary for work spanning visual concepting, storytelling, and retail-oriented experience design.",
      zh: "一个围绕视觉概念、故事表达与零售体验设计的占位案例。"
    },
    problem: {
      en: "How might visual narratives stay emotionally coherent as they move toward product and retail execution?",
      zh: "当创意叙事走向商品化与零售化时，如何保持情感与视觉的一致性？"
    },
    role: {
      en: "Creative concept support, visual direction, and storytelling.",
      zh: "负责创意概念支持、视觉方向与故事表达。"
    },
    decisions: {
      en: [
        "Kept the concept emotionally legible from sketch to output.",
        "Used visual systems to bridge brand tone and product surfaces.",
        "Focused on how ideas feel, not only how they look."
      ],
      zh: [
        "让创意从草图到落地都保持情绪上的可辨识度。",
        "用视觉系统串联品牌调性与具体产品表面。",
        "关注作品“给人的感觉”，不只关注形式。"
      ]
    },
    impact: {
      en: "Strengthened the connection between concept storytelling and consumer-facing design execution.",
      zh: "加强了创意叙事与面向消费者的设计落地之间的连接。"
    }
  }
];

export const studentExperiments: StudentExperimentItem[] = [
  {
    slug: "phygital-fusion",
    category: "SPATIAL EXPERIENCE · AR/VR · 3D SYNTHESIS",
    title: "Phygital Fusion — Spatial Reconstruction Experiment",
    description:
      "An experimental AR/VR architecture project exploring how physical plans, digital reconstruction, complex geometry, and spatial inversion can merge into an immersive phygital environment.",
    tags: ["Spatial Design", "AR/VR", "3D Modeling", "Phygital", "Rhino"],
    coverSrc: "/projects/Phygital Fusion/Reconstruction cover & 1.webp",
    gradient: "from-sky-100 via-cyan-50 to-indigo-100",
    heroTitle: "Phygital Fusion — Spatial Reconstruction Experiment",
    heroSubtitle:
      "Exploring how 2D plans, physical model testing, and digital 3D reconstruction can transform architectural space into an immersive phygital experience.",
    videoLinks: [
      {
        label: "Watch Video",
        href: "https://youtu.be/Rv8Wf6zKKII",
        embedSrc: "https://www.youtube-nocookie.com/embed/Rv8Wf6zKKII?rel=0",
        title: "Phygital Fusion Demo",
        description: "A walkthrough of the final spatial reconstruction experiment and immersive phygital environment."
      }
    ],
    sections: [
      {
        eyebrow: "Overview",
        title: "Whitespace Reimagined Through A Phygital Architectural Experiment",
        body: [
          "This project explored “whitespace” through a phygital architectural experiment. Starting from a 2D spatial plan, it tested how complex interior geometries and smooth exterior curves could create unexpected spatial transitions in 3D."
        ]
      },
      {
        eyebrow: "Process",
        title: "From Plan Study To Physical Model Testing And Digital Reconstruction",
        body: [
          "The process moved from plan study to physical model testing, then into digital reconstruction and interactive spatial presentation.",
          "Physical materials such as stoppers, cotton, paper, textile, and wire were used to test wrapping forms before the final 3D model was built."
        ],
        imageSrc: "/projects/Phygital Fusion/Reconstruction 2.webp",
        imageAlt: "Plan study and physical model testing for Phygital Fusion",
        imageCaption: "Plan study and physical material testing before digital reconstruction."
      },
      {
        eyebrow: "Design Focus",
        title: "Balancing Structure, Wrapping, And Spatial Inversion",
        body: [
          "The project focused on how structure and flow could coexist: a more complex interior geometry held by a smoother exterior wrapping."
        ],
        bullets: [
          "2D-to-3D transformation",
          "Physical model testing",
          "Complex interior geometry",
          "Smooth exterior wrapping",
          "Immersive spatial experience"
        ],
        imageSrc: "/projects/Phygital Fusion/Reconstruction 3.webp",
        imageAlt: "Exploded diagram and renderings for Phygital Fusion",
        imageCaption: "Exploded diagram and renderings showing the transition from concept to reconstructed space."
      },
      {
        eyebrow: "What I Learned",
        title: "Using Structure And Flow To Shape Spatial Experience",
        body: [
          "This project helped me understand how spatial experience can be shaped through the tension between structure and flow, physical material testing, and digital reconstruction."
        ],
        imageSrc: "/projects/Phygital Fusion/Reconstruction 4.webp",
        imageAlt: "Technical drawing and interactive preview for Phygital Fusion",
        imageCaption: "Technical drawing and interactive spatial preview of the final phygital environment."
      }
    ]
  },
  {
    slug: "spring-interactive-picture-book",
    category: "INTERACTIVE STORYTELLING · UNITY · SOCIAL IMPACT",
    title: "Spring — Interactive Picture Book",
    description:
      "An interactive picture book exploring inequality through a fairy-tale world of herbivores and carnivores, combining narrative design, character development, and Unity-based interaction.",
    tags: ["Interactive Storytelling", "Unity", "Picture Book", "SDGs", "Narrative Design"],
    coverSrc: "/projects/Spring Interactive Picture Book/Spring cover & 1.webp",
    gradient: "from-emerald-100 via-lime-50 to-amber-100",
    heroTitle: "Spring — Interactive Picture Book",
    heroSubtitle:
      "A Unity-based interactive picture book using a fairy-tale narrative to explore inequality, courage, and collective hope.",
    videoLinks: [
      {
        label: "Watch Video 1",
        href: "https://youtu.be/pMLI8owEGpQ",
        embedSrc: "https://www.youtube-nocookie.com/embed/pMLI8owEGpQ?rel=0",
        title: "Spring Demo Walkthrough",
        description: "A walkthrough of the interactive picture book and the main story flow built in Unity."
      },
      {
        label: "Watch Video 2",
        href: "https://youtu.be/BT2i3-XMoOw",
        embedSrc: "https://www.youtube-nocookie.com/embed/BT2i3-XMoOw?rel=0",
        title: "Spring Secondary Demo",
        description: "An additional video showing more of the interactive scenes and final presentation."
      }
    ],
    sections: [
      {
        eyebrow: "Overview",
        title: "A Fairy-tale World Built To Talk About Inequality",
        body: [
          "Spring is an interactive picture book set in a forest where carnivores occupy the center and herbivores live in hidden spaces.",
          "Through the journey of a fawn disguising itself to win the golden spring, the story reflects on inequality, discrimination, courage, and resistance."
        ]
      },
      {
        eyebrow: "Narrative Goal",
        title: "Using A Fairy-tale Structure To Discuss Social Inequality",
        body: [
          "The project used a fairy-tale structure to discuss the UN Sustainable Development Goal of reducing inequalities.",
          "It asked how marginalized groups resist unequal systems and what kind of hope can survive within difficult environments."
        ],
        imageSrc: "/projects/Spring Interactive Picture Book/Spring 2.webp",
        imageAlt: "Conceptualization and character setting for Spring",
        imageCaption: "Concept development and character setting for the fairy-tale world."
      },
      {
        eyebrow: "Process",
        title: "From Story Concept To Unity Production",
        body: [
          "The project included story concept development, scriptwriting, storyboard design, character setting, visual design, interaction design, and Unity production."
        ],
        imageSrc: "/projects/Spring Interactive Picture Book/Spring 3.webp",
        imageAlt: "Storyboard and story interaction for Spring",
        imageCaption: "Storyboard planning and interaction framing for the story experience."
      },
      {
        eyebrow: "Design Focus",
        title: "Building Empathy Through Interaction And Narrative",
        body: [
          "The design challenge was to keep the story emotionally accessible while still carrying a clear social message."
        ],
        bullets: [
          "Branching story flow",
          "Character setting",
          "Interactive scenes",
          "Unity production",
          "Social issue storytelling"
        ]
      },
      {
        eyebrow: "What I Learned",
        title: "How Interaction Can Deepen Narrative Empathy",
        body: [
          "This project taught me how interaction can deepen narrative empathy.",
          "It also helped me practice turning a complex social topic into an accessible emotional experience."
        ],
        imageSrc: "/projects/Spring Interactive Picture Book/Spring 4.webp",
        imageAlt: "Unity production and final scenes for Spring",
        imageCaption: "Unity production process, reflection, and the final scenes of the story."
      }
    ]
  },
  {
    slug: "swan-lake-motion-graphics",
    category: "MOTION GRAPHICS · MUSIC VISUALIZATION · VISUAL SYSTEM",
    title: "Swan Lake — Motion Graphics Animation",
    description:
      "A motion graphics animation inspired by Tchaikovsky’s Swan Lake, translating musical rhythm, notes, geometry, and color into a playful visual system.",
    tags: ["Motion Graphics", "Music Visualization", "After Effects", "Visual System", "Animation"],
    coverSrc: "/projects/Swan Lake Motion Graphics/Motion cover & 1.webp",
    gradient: "from-rose-100 via-amber-50 to-fuchsia-100",
    heroTitle: "Swan Lake — Motion Graphics Animation",
    heroSubtitle:
      "A motion graphics experiment translating Tchaikovsky’s Swan Lake into rhythmic visuals through notes, geometric shapes, color, and animated transitions.",
    videoLinks: [
      {
        label: "Watch Video",
        href: "https://youtu.be/lz2Y1pOBBaE",
        embedSrc: "https://www.youtube-nocookie.com/embed/lz2Y1pOBBaE?rel=0",
        title: "Swan Lake Motion Graphics",
        description: "A short animation translating musical notes, shapes, and poster language into rhythmic motion."
      }
    ],
    sections: [
      {
        eyebrow: "Overview",
        title: "Reinterpreting Swan Lake As A Motion-based Visual System",
        body: [
          "This motion graphics project reinterpreted Tchaikovsky’s Swan Lake, using Dance of the Four Little Swans as the background music and building a visual rhythm around musical notes, pentagrams, geometric shapes, and color transitions."
        ]
      },
      {
        eyebrow: "Creative Direction",
        title: "From Poster Elements To Brighter Motion Language",
        body: [
          "The animation extracted elements from the original poster, including notes, typography, circles, pentagrams, and monochrome contrast, then transformed them into a brighter and more dynamic motion language."
        ],
        imageSrc: "/projects/Swan Lake Motion Graphics/Motion 2.webp",
        imageAlt: "Element extraction and creative concept for Swan Lake",
        imageCaption: "Element extraction and the creative concept behind the animation system."
      },
      {
        eyebrow: "Design Focus",
        title: "Letting Rhythm, Geometry, And Contrast Drive The Motion",
        body: [
          "The project focused on how a static visual system could become kinetic without losing its graphic identity."
        ],
        bullets: [
          "Musical rhythm",
          "Geometric motion",
          "Color contrast",
          "Poster-to-animation transformation",
          "Motion transitions"
        ],
        imageSrc: "/projects/Swan Lake Motion Graphics/Motion 3.webp",
        imageAlt: "Motion storyboard frames for Swan Lake",
        imageCaption: "Storyboard frames and rhythm-based motion planning."
      },
      {
        eyebrow: "What I Learned",
        title: "Carrying A Visual System Across Media",
        body: [
          "This project helped me understand how visual systems can move across media — from poster composition to animation, from static symbols to rhythm-based storytelling."
        ],
        imageSrc: "/projects/Swan Lake Motion Graphics/Motion 4.webp",
        imageAlt: "Original poster comparison and final visual system for Swan Lake",
        imageCaption: "Comparing the original poster language with the final animation system."
      }
    ]
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getStudentExperimentBySlug = (slug: string) =>
  studentExperiments.find((project) => project.slug === slug);
