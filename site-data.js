window.siteData = {
  meta: {
    siteTitle: "李绍杰 | 学术简历",
    description: "李绍杰的学术简历页面，重点展示教育背景、研究经历、科研项目和专业技能。"
  },
  profile: {
    name: "李绍杰",
    basicInfo: "Research Assistant，香港中文大学（CUHK） | 人工智能硕士 | 本科：深圳大学物联网工程",
    researchDirections: ["强化学习", "计算机视觉", "自然语言处理", "智能系统与终端平台"],
    note: "目前关注强化学习、计算机视觉与智能系统在实际场景中的落地，具备机器学习、图像处理、嵌入式开发和端到端平台系统实现经验。",
    links: []
  },
  education: [
    {
      period: "2023.05 - 2024.08",
      school: "新南威尔士大学",
      major: "人工智能",
      degree: "硕士",
      note: "相关课程：人工智能、机器视觉、算法设计、神经网络、图论、人工智能项目设计、博弈论、数据库概论、前端工程。"
    },
    {
      period: "2017.06 - 2021.06",
      school: "深圳大学",
      major: "物联网工程",
      degree: "本科",
      note: "相关课程：软件工程、计算机网络、数据结构、数据库系统概论、数字电子技术、微机原理与接口技术、操作系统、信息安全导论。"
    }
  ],
  experience: [
    {
      organization: "香港中文大学（CUHK）",
      role: "Research Assistant",
      period: "2025.05.21 - 至今",
      note: "当前主要围绕智能零售终端与系统平台相关项目开展研究与工程实现。"
    },
    {
      organization: "香港物流机器人研究中心",
      role: "助理工程师",
      period: "2021.11 - 2023.04"
    }
  ],
  projects: [
    {
      title: "RoboStore 无人零售终端系统",
      type: "智能零售系统 / 软硬件一体化平台",
      period: "2025.05.21 - 至今",
      role: "负责后端服务、终端购物端、微信小程序端、设备联调工具及部署文档等核心工程实现，打通库存管理、订单创建、支付、离线取货码、设备出货、异常退款与对账流程。",
      summary: "项目面向无人零售柜与智能售货机，构建集远程仓储管理、机台端自助购物、支付结算、自动出货与设备联调于一体的端到端闭环系统。系统采用 FastAPI + SQLAlchemy 构建后端服务，配套 Electron + React 触摸屏客户端、微信小程序购物端，以及设备侧扫码验签模拟工具和本地部署文档，重点处理库存预占、离线令牌、防重放、支付回调、多端协同以及线上交易流程与线下物理出货流程的融合问题。",
      tags: ["FastAPI", "SQLAlchemy", "Electron", "React", "微信小程序", "设备联调"],
      links: []
    },
    {
      title: "单目投影 3D 成像平台",
      type: "研究平台开发 / 计算机视觉",
      period: "2021.11 - 2023.04",
      role: "负责 Qt 界面设计，以及摄像机、投影仪和点云显示等模块的操作界面与串口通信支持。",
      summary: "该平台面向 3D 成像相关研究与演示需求，工作重点在于研究平台的人机交互设计与设备协同控制。",
      tags: ["Qt", "串口通信", "3D 成像", "研究平台"],
      links: []
    },
    {
      title: "缺陷检测平台",
      type: "智能检测平台 / 工程实现",
      period: "2021.11 - 2023.04",
      role: "负责前端界面构建、Python 功能执行、前后端交互、数据库管理，以及 Logo 设计和 UI 优化。",
      summary: "项目围绕缺陷检测场景搭建完整平台，覆盖界面、数据流与功能调用，体现了工程实现与系统整合能力。",
      tags: ["Python", "前后端交互", "数据库", "缺陷检测"],
      links: []
    },
    {
      title: "HalfCheetah 强化学习项目",
      type: "强化学习",
      period: "硕士阶段",
      role: "负责调优 TQC 模型，并修改环境中的奖励机制以提升 HalfCheetah 机器人的运动表现。",
      summary: "项目以神经网络为基础进行强化学习训练，目标是在二维平面上最大化机器人移动距离，重点体现在模型调参与奖励设计。",
      tags: ["强化学习", "神经网络", "TQC"],
      links: []
    },
    {
      title: "Jigsaw 有害言论严重性评级",
      type: "深度学习 / 自然语言处理",
      period: "硕士阶段",
      role: "负责多种深度学习模型的训练与性能比较，包括 GPT-3.5、GPT-2、BERT 和 GRU。",
      summary: "基于 Kaggle 有害评论数据集，构建多模型比较实验，最终实现对评论毒性在多个维度上的精确评级。",
      tags: ["NLP", "BERT", "GPT", "GRU"],
      links: []
    },
    {
      title: "海龟与企鹅分类任务",
      type: "监督学习 / 计算机视觉",
      period: "硕士阶段",
      role: "负责图像预处理、HOG 特征提取以及 SVM 模型训练。",
      summary: "使用 Python 实现图像自动识别与处理，完成海龟和企鹅分类模型的训练与评估。",
      tags: ["计算机视觉", "HOG", "SVM", "Python"],
      links: []
    },
    {
      title: "基于 Matlab 的图像处理程序",
      type: "图像处理",
      period: "本科 / 硕士阶段项目",
      role: "负责图像自动识别与处理程序设计，包括目标识别、数量统计与图像分割。",
      summary: "实现了硬币面值与数量识别，以及合照中人物的自动识别和单独分割，体现了传统图像处理方法的综合应用。",
      tags: ["Matlab", "图像分割", "目标识别"],
      links: []
    },
    {
      title: "远程无人值守终端网络异常解决方案",
      type: "嵌入式系统开发",
      period: "本科阶段",
      role: "基于 Arduino 平台，使用 C 语言为 ESP-32 编写程序，实现网络与 GSM 短信双模通信控制。",
      summary: "项目实现了对 ESP-32 开关电源和灯光的远程控制，展示了嵌入式系统与通信方案的结合能力。",
      tags: ["Arduino", "ESP-32", "嵌入式", "GSM"],
      links: []
    }
  ],
  publications: [],
  honors: [],
  skills: [
    "编程语言：Python、C++、C、JavaScript、MATLAB",
    "开发框架与工具：Qt、React、Django、MySQL、FastAPI",
    "研究与工程能力：机器学习建模、图像处理、前后端交互、数据库管理、设备联调与端到端系统实现",
    "英语能力：雅思 7 分"
  ],
  contact: [
    {
      label: "邮箱",
      value: "sz13530022878@outlook.com"
    },
    {
      label: "GitHub",
      value: "https://github.com/ZUNA999"
    }
  ]
};
