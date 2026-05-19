window.siteData = {
  defaultLanguage: "en",
  languages: [
    { code: "en", label: "EN" },
    { code: "zh-TW", label: "繁" },
    { code: "zh-CN", label: "简" }
  ],
  locales: {
    en: {
      meta: {
        siteTitle: "Shaojie Li | Academic CV",
        description: "Academic CV of Shaojie Li, focusing on education, publications, research projects, experience, and technical skills."
      },
      labels: {
        basicInfo: "Date of Birth:",
        researchDirections: "Research Interests:",
        education: "Education",
        publications: "Publications & Invention Patents",
        projects: "Research Projects",
        experience: "Relevant Experience",
        honors: "Honors",
        skills: "Technical Skills",
        role: "Role: ",
        papers: "Publications",
        patents: "Invention Patents",
        patentType: "Invention Patent",
        patentStatus: "Status: "
      },
      profile: {
        name: "Shaojie Li",
        basicInfo: "1999.06.26",
        photo: "Profile-display-hq.jpg",
        researchDirections: ["Embodied Intelligence", "Multimodal Agents", "Reinforcement Learning", "Computer Vision", "Robotics", "XR/AR Reality Grounding"],
        note: "Research Assistant at The Chinese University of Hong Kong. Interests: embodied intelligence, multimodal agents, reinforcement learning, computer vision, robotics, and uncertainty-aware grounding for XR/AR systems.",
        links: []
      },
      education: [
        {
          period: "2023.05 - 2024.08",
          school: "University of New South Wales",
          major: "Artificial Intelligence",
          degree: "Master",
          note: "Relevant coursework: artificial intelligence, machine vision, algorithm design, neural networks, graph theory, AI project design, game theory, database systems, and front-end engineering."
        },
        {
          period: "2017.06 - 2021.06",
          school: "Shenzhen University",
          major: "Internet of Things Engineering",
          degree: "Bachelor",
          note: "Relevant coursework: software engineering, computer networks, data structures, database systems, digital electronics, microcomputer principles and interfaces, operating systems, and information security."
        }
      ],
      experience: [
        {
          organization: "The Chinese University of Hong Kong (CUHK)",
          role: "Research Assistant",
          period: "2025.05.21 - Present"
        },
        {
          organization: "Hong Kong Centre for Logistics Robotics",
          role: "Assistant Engineer",
          period: "2021.11 - 2023.04"
        }
      ],
      projects: [
        {
          title: "RoboStore Unmanned Retail Terminal System",
          type: "Intelligent Retail System / Integrated Hardware-Software Platform",
          period: "2025.05.21 - Present",
          role: "Responsible for robotic arm control, beverage recognition with computer vision, and device integration.",
          summary: "Developed an end-to-end unmanned retail terminal system covering vision-assisted recognition, robotic-arm dispensing, order payment, inventory management, refund handling, and reconciliation workflows.",
          tags: ["Computer Vision", "Robotic Arm Control", "FastAPI", "SQLAlchemy", "Device Integration"],
          links: []
        },
        {
          title: "Prostate Biopsy Robot",
          type: "Medical Robot / Ultrasound-guided Puncture System",
          period: "2025.08.15 - Present",
          role: "Responsible for control of the collaborative robotic arm and prostate puncture mechanism, as well as device integration.",
          summary: "Built a robotic biopsy workflow in which the doctor positions the robotic arm, after which the system performs automatic puncture while real-time ultrasound displays the needle location.",
          tags: ["Collaborative Robot", "Medical Robot", "Real-time Ultrasound", "Vision Guidance"],
          links: []
        },
        {
          title: "Intelligent Single-scale Flow Evaluation System",
          type: "Medical Health / Time-series Signal Analysis",
          period: "2026.03.02 - Present",
          role: "Responsible for weight time-series data cleaning, segmentation, manual window annotation tooling, dataset construction, 1D CNN model training, and single-file inference UI development.",
          summary: "Predicted fluid flow curves, cumulative volume curves, and core evaluation metrics from a single high-precision weight sensor; upgraded the model from direct cumulative-curve prediction to a physics-constrained flow-first structure followed by integration.",
          tags: ["Time Series", "1D CNN", "NumPy", "Pandas", "Model Evaluation"],
          links: []
        },
        {
          title: "Monocular Projection 3D Imaging Platform",
          type: "Research Platform Development / Computer Vision",
          period: "2021.11 - 2023.04",
          role: "Responsible for interaction logic and serial communication support for the camera, projector, and point-cloud display modules.",
          summary: "Developed a research and demonstration platform for 3D imaging, focusing on coordinated visual-device control and imaging workflow implementation.",
          tags: ["Qt", "Serial Communication", "3D Imaging", "Research Platform"],
          links: []
        },
        {
          title: "Defect Detection Platform",
          type: "Intelligent Inspection Platform / Engineering Implementation",
          period: "2021.11 - 2023.04",
          role: "Responsible for Python module execution, system interaction logic, and database management.",
          summary: "Built a platform for defect detection scenarios, supporting inspection workflows, data flow, and functional module invocation.",
          tags: ["Python", "Database", "Defect Detection", "Visual Inspection"],
          links: []
        },
        {
          title: "HalfCheetah Reinforcement Learning Project",
          type: "Reinforcement Learning",
          period: "Master's Project",
          role: "Responsible for tuning the TQC model and modifying the reward mechanism to improve the locomotion performance of the HalfCheetah robot.",
          summary: "Trained a neural-network-based reinforcement learning agent to maximize locomotion distance in a 2D environment, focusing on model tuning and reward design.",
          tags: ["Reinforcement Learning", "Neural Networks", "TQC"],
          links: []
        },
        {
          title: "Jigsaw Toxic Comment Severity Rating",
          type: "Deep Learning / Natural Language Processing",
          period: "Master's Project",
          role: "Responsible for training and comparing multiple deep learning models, including GPT-3.5, GPT-2, BERT, and GRU.",
          summary: "Built comparative experiments on the Kaggle toxic comment dataset to rate comment toxicity across multiple dimensions.",
          tags: ["NLP", "BERT", "GPT", "GRU"],
          links: []
        },
        {
          title: "Turtle and Penguin Classification",
          type: "Supervised Learning / Computer Vision",
          period: "Master's Project",
          role: "Responsible for image preprocessing, HOG feature extraction, and SVM model training.",
          summary: "Implemented automatic image recognition and processing in Python to train and evaluate turtle and penguin classification models.",
          tags: ["Computer Vision", "HOG", "SVM", "Python"],
          links: []
        },
        {
          title: "Matlab-based Image Processing Program",
          type: "Image Processing",
          period: "Undergraduate / Master's Project",
          role: "Responsible for automatic image recognition and processing, including object recognition, counting, and segmentation.",
          summary: "Implemented coin denomination and quantity recognition, as well as automatic person recognition and individual segmentation in group photos.",
          tags: ["Matlab", "Image Segmentation", "Object Recognition"],
          links: []
        },
        {
          title: "Remote Unattended Terminal Network Fault Solution",
          type: "Embedded System Development",
          period: "Undergraduate Project",
          role: "Developed C programs for ESP-32 on Arduino, enabling dual-mode network and GSM SMS communication control.",
          summary: "Implemented remote control of ESP-32 power switching and lighting, combining embedded systems with communication solutions.",
          tags: ["Arduino", "ESP-32", "Embedded Systems", "GSM"],
          links: []
        }
      ],
      publications: [
        {
          index: "[1]",
          title: "Replay-time Closed-loop Evaluation Protocol for Learned 3D Surgical Dynamics / World Models",
          documentType: "C",
          venue: "NeurIPS 2026 Evaluations & Datasets Track",
          year: "2026",
          status: "Submitted / Under Review",
          rank: "Second author"
        }
      ],
      patents: [],
      honors: [],
      skills: [
        "Research methods: reinforcement learning, computer vision, deep learning, embodied intelligence",
        "Systems and experiments: machine learning modeling, image processing, model training and evaluation, end-to-end intelligent system implementation",
        "Platforms and devices: robotic system integration, embedded development, serial communication, device control and terminal deployment",
        "Programming and tools: Python, C++, C, MATLAB, JavaScript, HTML/CSS, FastAPI, Qt, MySQL",
        "English proficiency: IELTS 7.0"
      ],
      contact: [
        {
          label: "Email",
          value: "sz13530022878@outlook.com"
        },
        {
          label: "GitHub",
          value: "https://github.com/ZUNA999"
        }
      ]
    },
    "zh-CN": {
      meta: {
        siteTitle: "李绍杰 | 学术简历",
        description: "李绍杰的学术简历页面，重点展示教育背景、论文与发明专利、科研项目、相关经历和专业技能。"
      },
      labels: {
        basicInfo: "出生年月：",
        researchDirections: "研究方向：",
        education: "教育背景",
        publications: "论文与发明专利",
        projects: "科研项目",
        experience: "相关经历",
        honors: "其他荣誉",
        skills: "专业技能",
        role: "负责内容：",
        papers: "论文",
        patents: "发明专利",
        patentType: "发明专利",
        patentStatus: "状态："
      },
      profile: {
        name: "李绍杰",
        basicInfo: "1999.6.26",
        photo: "Profile-display-hq.jpg",
        researchDirections: ["具身智能", "多模态 Agent 落地", "强化学习", "计算机视觉", "机器人与智能系统", "XR/AR 真实世界锚定"],
        note: "目前为香港中文大学 Research Assistant，关注具身智能、多模态 Agent 落地、强化学习、计算机视觉、机器人系统，以及 XR/AR 场景中的不确定性感知真实世界锚定。",
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
          period: "2025.05.21 - 至今"
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
          role: "负责机械臂控制、饮料识别（视觉）以及设备联调等核心实现。",
          summary: "面向无人零售终端开发端到端闭环系统，围绕视觉辅助识别、机械臂自动出货、订单支付、库存管理与退款对账等核心流程开展系统实现。",
          tags: ["计算机视觉", "机械臂控制", "FastAPI", "SQLAlchemy", "设备联调"],
          links: []
        },
        {
          title: "前列腺活检机器人",
          type: "医疗机器人 / 视觉引导穿刺系统",
          period: "2025.08.15 - 至今",
          role: "负责协作机械臂与前列腺穿刺结构的控制，以及设备联调。",
          summary: "项目面向前列腺活检场景，在医生完成机械臂定位后执行自动穿刺，并结合实时超声显示穿刺位置，实现机器人控制与视觉引导的协同。",
          tags: ["协作机械臂", "医疗机器人", "实时超声", "视觉引导"],
          links: []
        },
        {
          title: "智能单秤流量评估系统",
          type: "医疗健康 / 时序信号分析",
          period: "2026.03.02 - 至今",
          role: "负责称重时序数据清洗、切段、人工窗口标注工具、训练数据集构建、一维 CNN 模型训练与单文件推理 UI 实现。",
          summary: "项目基于单个高精度称重传感器输入预测体液流量曲线、累计量曲线及核心评估指标，并将模型从直接预测累计量升级为先预测流量再积分得到累计量的物理约束结构，以提升曲线单调性和指标稳定性。",
          tags: ["时间序列", "一维 CNN", "NumPy", "Pandas", "模型评估"],
          links: []
        },
        {
          title: "单目投影 3D 成像平台",
          type: "研究平台开发 / 计算机视觉",
          period: "2021.11 - 2023.04",
          role: "负责摄像机、投影仪和点云显示模块的交互逻辑与串口通信支持。",
          summary: "该平台面向 3D 成像相关研究与演示需求，重点在于视觉设备协同控制与成像流程实现。",
          tags: ["Qt", "串口通信", "3D 成像", "研究平台"],
          links: []
        },
        {
          title: "缺陷检测平台",
          type: "智能检测平台 / 工程实现",
          period: "2021.11 - 2023.04",
          role: "负责 Python 功能模块执行、系统交互逻辑与数据库管理。",
          summary: "项目围绕缺陷检测场景搭建完整平台，支持检测流程、数据流转与功能调用，体现了视觉检测系统的工程实现能力。",
          tags: ["Python", "数据库", "缺陷检测", "视觉检测"],
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
      publications: [
        {
          index: "[1]",
          title: "Replay-time Closed-loop Evaluation Protocol for Learned 3D Surgical Dynamics / World Models",
          translation: "面向三维手术动力学/世界模型的回放时闭环评估协议",
          documentType: "C",
          venue: "NeurIPS 2026 Evaluations & Datasets Track",
          year: "2026",
          status: "已投稿 / 在审",
          rank: "本人二作"
        }
      ],
      patents: [],
      honors: [],
      skills: [
        "研究方向与方法：强化学习、计算机视觉、深度学习、具身智能",
        "系统与实验能力：机器学习建模、图像处理、模型训练与评估、端到端智能系统实现",
        "平台与设备能力：机械臂相关系统联调、嵌入式开发、串口通信、设备控制与终端部署",
        "开发工具与语言：Python、C++、C、MATLAB、JavaScript、HTML/CSS、FastAPI、Qt、MySQL",
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
    },
    "zh-TW": {
      meta: {
        siteTitle: "李紹杰 | 學術履歷",
        description: "李紹杰的學術履歷頁面，重點展示教育背景、論文與發明專利、科研項目、相關經歷和專業技能。"
      },
      labels: {
        basicInfo: "出生年月：",
        researchDirections: "研究方向：",
        education: "教育背景",
        publications: "論文與發明專利",
        projects: "科研項目",
        experience: "相關經歷",
        honors: "其他榮譽",
        skills: "專業技能",
        role: "負責內容：",
        papers: "論文",
        patents: "發明專利",
        patentType: "發明專利",
        patentStatus: "狀態："
      },
      profile: {
        name: "李紹杰",
        basicInfo: "1999.6.26",
        photo: "Profile-display-hq.jpg",
        researchDirections: ["具身智能", "多模態 Agent 落地", "強化學習", "計算機視覺", "機器人與智能系統", "XR/AR 真實世界錨定"],
        note: "目前為香港中文大學 Research Assistant，關注具身智能、多模態 Agent 落地、強化學習、計算機視覺、機器人系統，以及 XR/AR 場景中的不確定性感知真實世界錨定。",
        links: []
      },
      education: [
        {
          period: "2023.05 - 2024.08",
          school: "新南威爾士大學",
          major: "人工智能",
          degree: "碩士",
          note: "相關課程：人工智能、機器視覺、算法設計、神經網絡、圖論、人工智能項目設計、博弈論、數據庫概論、前端工程。"
        },
        {
          period: "2017.06 - 2021.06",
          school: "深圳大學",
          major: "物聯網工程",
          degree: "本科",
          note: "相關課程：軟件工程、計算機網絡、數據結構、數據庫系統概論、數字電子技術、微機原理與接口技術、操作系統、信息安全導論。"
        }
      ],
      experience: [
        {
          organization: "香港中文大學（CUHK）",
          role: "Research Assistant",
          period: "2025.05.21 - 至今"
        },
        {
          organization: "香港物流機器人研究中心",
          role: "助理工程師",
          period: "2021.11 - 2023.04"
        }
      ],
      projects: [
        {
          title: "RoboStore 無人零售終端系統",
          type: "智能零售系統 / 軟硬件一體化平台",
          period: "2025.05.21 - 至今",
          role: "負責機械臂控制、飲料識別（視覺）以及設備聯調等核心實現。",
          summary: "面向無人零售終端開發端到端閉環系統，圍繞視覺輔助識別、機械臂自動出貨、訂單支付、庫存管理與退款對賬等核心流程開展系統實現。",
          tags: ["計算機視覺", "機械臂控制", "FastAPI", "SQLAlchemy", "設備聯調"],
          links: []
        },
        {
          title: "前列腺活檢機器人",
          type: "醫療機器人 / 視覺引導穿刺系統",
          period: "2025.08.15 - 至今",
          role: "負責協作機械臂與前列腺穿刺結構的控制，以及設備聯調。",
          summary: "項目面向前列腺活檢場景，在醫生完成機械臂定位後執行自動穿刺，並結合實時超聲顯示穿刺位置，實現機器人控制與視覺引導的協同。",
          tags: ["協作機械臂", "醫療機器人", "實時超聲", "視覺引導"],
          links: []
        },
        {
          title: "智能單秤流量評估系統",
          type: "醫療健康 / 時序信號分析",
          period: "2026.03.02 - 至今",
          role: "負責稱重時序數據清洗、切段、人工窗口標註工具、訓練數據集構建、一維 CNN 模型訓練與單文件推理 UI 實現。",
          summary: "項目基於單個高精度稱重傳感器輸入預測體液流量曲線、累計量曲線及核心評估指標，並將模型從直接預測累計量升級為先預測流量再積分得到累計量的物理約束結構，以提升曲線單調性和指標穩定性。",
          tags: ["時間序列", "一維 CNN", "NumPy", "Pandas", "模型評估"],
          links: []
        },
        {
          title: "單目投影 3D 成像平台",
          type: "研究平台開發 / 計算機視覺",
          period: "2021.11 - 2023.04",
          role: "負責攝像機、投影儀和點雲顯示模塊的交互邏輯與串口通信支持。",
          summary: "該平台面向 3D 成像相關研究與演示需求，重點在於視覺設備協同控制與成像流程實現。",
          tags: ["Qt", "串口通信", "3D 成像", "研究平台"],
          links: []
        },
        {
          title: "缺陷檢測平台",
          type: "智能檢測平台 / 工程實現",
          period: "2021.11 - 2023.04",
          role: "負責 Python 功能模塊執行、系統交互邏輯與數據庫管理。",
          summary: "項目圍繞缺陷檢測場景搭建完整平台，支持檢測流程、數據流轉與功能調用，體現了視覺檢測系統的工程實現能力。",
          tags: ["Python", "數據庫", "缺陷檢測", "視覺檢測"],
          links: []
        },
        {
          title: "HalfCheetah 強化學習項目",
          type: "強化學習",
          period: "碩士階段",
          role: "負責調優 TQC 模型，並修改環境中的獎勵機制以提升 HalfCheetah 機器人的運動表現。",
          summary: "項目以神經網絡為基礎進行強化學習訓練，目標是在二維平面上最大化機器人移動距離，重點體現在模型調參與獎勵設計。",
          tags: ["強化學習", "神經網絡", "TQC"],
          links: []
        },
        {
          title: "Jigsaw 有害言論嚴重性評級",
          type: "深度學習 / 自然語言處理",
          period: "碩士階段",
          role: "負責多種深度學習模型的訓練與性能比較，包括 GPT-3.5、GPT-2、BERT 和 GRU。",
          summary: "基於 Kaggle 有害評論數據集，構建多模型比較實驗，最終實現對評論毒性在多個維度上的精確評級。",
          tags: ["NLP", "BERT", "GPT", "GRU"],
          links: []
        },
        {
          title: "海龜與企鵝分類任務",
          type: "監督學習 / 計算機視覺",
          period: "碩士階段",
          role: "負責圖像預處理、HOG 特徵提取以及 SVM 模型訓練。",
          summary: "使用 Python 實現圖像自動識別與處理，完成海龜和企鵝分類模型的訓練與評估。",
          tags: ["計算機視覺", "HOG", "SVM", "Python"],
          links: []
        },
        {
          title: "基於 Matlab 的圖像處理程序",
          type: "圖像處理",
          period: "本科 / 碩士階段項目",
          role: "負責圖像自動識別與處理程序設計，包括目標識別、數量統計與圖像分割。",
          summary: "實現了硬幣面值與數量識別，以及合照中人物的自動識別和單獨分割，體現了傳統圖像處理方法的綜合應用。",
          tags: ["Matlab", "圖像分割", "目標識別"],
          links: []
        },
        {
          title: "遠程無人值守終端網絡異常解決方案",
          type: "嵌入式系統開發",
          period: "本科階段",
          role: "基於 Arduino 平台，使用 C 語言為 ESP-32 編寫程序，實現網絡與 GSM 短信雙模通信控制。",
          summary: "項目實現了對 ESP-32 開關電源和燈光的遠程控制，展示了嵌入式系統與通信方案的結合能力。",
          tags: ["Arduino", "ESP-32", "嵌入式", "GSM"],
          links: []
        }
      ],
      publications: [
        {
          index: "[1]",
          title: "Replay-time Closed-loop Evaluation Protocol for Learned 3D Surgical Dynamics / World Models",
          translation: "面向三維手術動力學/世界模型的回放時閉環評估協議",
          documentType: "C",
          venue: "NeurIPS 2026 Evaluations & Datasets Track",
          year: "2026",
          status: "已投稿 / 在審",
          rank: "本人二作"
        }
      ],
      patents: [],
      honors: [],
      skills: [
        "研究方向與方法：強化學習、計算機視覺、深度學習、具身智能",
        "系統與實驗能力：機器學習建模、圖像處理、模型訓練與評估、端到端智能系統實現",
        "平台與設備能力：機械臂相關系統聯調、嵌入式開發、串口通信、設備控制與終端部署",
        "開發工具與語言：Python、C++、C、MATLAB、JavaScript、HTML/CSS、FastAPI、Qt、MySQL",
        "英語能力：雅思 7 分"
      ],
      contact: [
        {
          label: "郵箱",
          value: "sz13530022878@outlook.com"
        },
        {
          label: "GitHub",
          value: "https://github.com/ZUNA999"
        }
      ]
    }
  }
};
