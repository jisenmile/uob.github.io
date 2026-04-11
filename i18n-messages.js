/**
 * 全站文案：按语言分对象，修改对应字段即可。
 * 页面通过 data-i18n="键名" 绑定；切换语言时读取 I18N_MESSAGES[lang][键名]。
 */
(function (global) {
  "use strict";

  /** @type {Record<string, string>} */
  var ZH_CN = {
    lang_label: "语言",
    nav_about: "关于我们",
    nav_global: "全球成功案例",
    nav_services: "课程体系",
    nav_team: "教师团队",
    nav_journey: "学习流程",
    nav_cta: "立即联系",
    brand_subline: "Indonesia Investment Education Center",
    hero_eyebrow:
      "Institutional Approach · Indonesia Equity Market · Research & Training",
    hero_title: "面向全球投资者的印尼股票教学与投资认知体系",
    hero_intro:
      "聚焦印尼股票市场，通过本地市场经验、区域研究框架与系统化教学路径，帮助投资者建立清晰、可执行的分析方法与决策能力。",
    hero_b1: "已形成可复制的教学与服务体系，适用于不同地区投资者",
    hero_b2: "从基础认知到实战理解，构建循序渐进的学习路径",
    hero_b3: "清晰分工的团队服务体系，保障学习与沟通效率",
    hero_b4: "以长期陪伴与持续价值输出为核心的服务模式",
    stat_mf_title: "Market Focus",
    stat_mf_desc: "深耕印尼资本市场，围绕真实市场环境建立教学体系。",
    stat_ts_title: "Team Structure",
    stat_ts_desc: "讲师与助理协同服务，确保沟通顺畅与学习连续性。",
    stat_gr_title: "Global Reach",
    stat_gr_desc: "服务不同地区投资者，具备跨区域沟通与教学经验。",
    stat_ls_title: "Learning System",
    stat_ls_desc: "从认知建立到方法形成的完整学习路径。",
    video_nosupport: "您的浏览器不支持 HTML5 视频播放。",
    about_tag: "About Us",
    about_title: "基于印尼市场的系统化投资教学与服务体系",
    about_lead:
      "以清晰结构与专业内容呈现，帮助投资者快速理解市场逻辑、学习路径与服务方式。",
    about_pos_title: "我们的定位",
    about_pos_body:
      "UOB 体系下，专注印尼股票市场教学与投资认知建立，结合本地市场经验与区域研究框架，构建系统化、可执行的学习与分析体系。",
    about_f1t: "市场基础",
    about_f1s: "以印尼市场经验与研究框架为核心，建立清晰的学习起点。",
    about_f2t: "体系结构",
    about_f2s: "通过结构化内容与清晰路径，让学习过程更可理解、更可执行。",
    about_f3t: "长期价值",
    about_f3s: "强调持续学习与能力提升，而非短期信息获取。",
    about_adv_title: "我们的优势",
    about_a1t: "可复制的教学体系",
    about_a1s: "通过结构化教学与服务流程，形成稳定、可持续的学习模式。",
    about_a2t: "分层学习路径",
    about_a2s: "覆盖从基础认知到进阶分析的不同阶段需求。",
    about_a3t: "稳定服务体系",
    about_a3s: "通过明确分工与持续支持，保障学习体验与沟通效率。",
    about_a4t: "清晰认知与信任建立",
    about_a4s: "让投资者快速理解团队背景、服务内容与合作方式。",
    gs_tag: "Global Success",
    gs_title: "全球多个地区已有成熟教学与服务成功案例",
    gs_pre: "一句话概括：",
    gs_em:
      "我们不仅懂市场，更懂如何把投资教育做成能被信任、能被接受、能持续产生价值的服务体系。",
    gs_c1t: "区域化教学经验",
    gs_c1p:
      "不同市场的投资者，在认知、习惯和沟通方式上存在差异。我们通过不断优化教学结构与接待方式，让不同地区的新客户都能更快进入状态。",
    gs_c2t: "认知建立与信任转化路径",
    gs_c2p:
      "围绕投资者初次接触市场时的认知习惯与决策心理，通过清晰的信息结构与稳定的沟通方式，让客户在理解中建立信任，在信任中逐步进入学习体系。",
    gs_c3t: "高端品牌表达能力",
    gs_c3p:
      "通过专业视觉、团队展示、清晰文案与高质感页面布局，让客户看到的不只是课程，而是一个值得长期接触的专业团队。",
    gs_quote:
      "我们相信，真正能够建立长期信任的，不只是“会讲市场”，而是让客户在第一时间感知专业实力、服务体系与团队价值，并愿意持续深入了解与合作。",
    sv_tag: "Our Services",
    sv_title: "围绕学习、理解、分析与陪伴而建立的课程体系",
    sv_intro:
      "本页面呈现的，不仅是团队信息，更是我们所提供的完整服务与学习框架。每一项内容均围绕一个核心：让投资者清晰理解我们的能力边界、服务方式与合作路径，从而在理性判断下做出更具确定性的选择。",
    sv1no: "Service 01",
    sv1t: "基础认知教学",
    sv1p: "帮助新手了解印尼股票市场基础结构、板块逻辑、市场规则与常见投资误区，让客户从一开始就走在正确方向上。",
    sv2no: "Service 02",
    sv2t: "市场资讯与分析",
    sv2p: "结合市场动态、行业主题与个股逻辑输出更有价值的内容，让客户看到的不只是信息，而是可理解、可吸收的分析框架。",
    sv3no: "Service 03",
    sv3t: "进阶方法训练",
    sv3p: "面向希望进一步提升判断力的学员，帮助他们从“听别人说”过渡到“自己能够看懂市场”。",
    sv4no: "Service 04",
    sv4t: "团队式服务支持",
    sv4p: "通过讲师、主助理与辅助助理的协同服务，让每一位进入体系的客户都能获得更连续、更有人情味的学习体验。",
    tm_tag: "Professional Team",
    tm_title: "专业团队构成，构建稳定且可信的服务体系",
    tm_intro:
      "我们通过清晰的团队结构与明确的职责分工，确保每一位投资者在学习过程中都能获得稳定、连续且高质量的支持。 从专业讲师的市场解析，到助理团队的沟通与服务承接，每一个环节都围绕“专业输出与服务体验”协同运作， 让投资者在理解市场的同时，也建立对团队的长期信任。",
    tm1_role: "Lead Mentor",
    tm1_h: "首席讲师 / 首席导师",
    tm1_p:
      "Stephanus Turangan 拥有超过 30 年印尼金融市场经验，长期深耕资本市场、机构业务与投资策略领域。 他的专业背景、区域经验与管理经历，能够为整个教学体系提供更强的市场逻辑支撑与专业背书。",
    tm1_li1: "拥有印尼金融市场长期实战与管理经验",
    tm1_li2: "负责课程主线、核心分析与高阶市场框架",
    tm1_li3: "帮助学员建立更完整的投资认知与判断逻辑",
    tm2_role: "Primary Assistant",
    tm2_h: "主助理 / 客户经理",
    tm2_p:
      "Raina 负责客户接待、日常沟通、学习规划与后续跟进。她是客户进入体系后最先接触到的重要角色，负责把服务做得更细致、更顺畅、更有温度。",
    tm2_li1: "负责主要客户对接与沟通安排",
    tm2_li2: "协助新客户了解课程与学习路径",
    tm2_li3: "增强社群陪伴感与服务连续性",
    tm3_role: "Support Assistant",
    tm3_h: "辅助助理 / 运营支持",
    tm3_p:
      "Fajar 负责协助日常运营、信息整理与学员支持，帮助整个服务流程保持流畅与高效，让客户在学习过程中获得更稳定的体验。",
    tm3_li1: "负责辅助支持与学员问题处理",
    tm3_li2: "帮助维持日常运营效率",
    tm3_li3: "配合主助理完成服务闭环",
    jr_tag: "Learning Journey",
    jr_title: "结构清晰的学习与服务路径，稳定推进每一步成长",
    jr_intro:
      "我们以清晰的阶段划分与稳定的服务衔接，帮助每一位进入体系的学员，从认知建立到方法形成，逐步完成对市场的理解与应用。",
    jr1_label: "Step 01",
    jr1_t: "了解团队与体系",
    jr1_p:
      "在进入之初，先全面了解团队背景、研究方向与服务结构，建立对整体框架的清晰认知。",
    jr2_label: "Step 02",
    jr2_t: "专业对接与评估",
    jr2_p:
      "由助理团队进行初步沟通与情况了解，根据不同基础与目标，提供匹配的学习路径与安排。",
    jr3_label: "Step 03",
    jr3_t: "进入系统化学习",
    jr3_p:
      "围绕市场结构、分析逻辑与实战理解展开，由浅入深建立完整的投资认知与判断能力。",
    jr4_label: "Step 04",
    jr4_t: "持续跟进与深化",
    jr4_p:
      "通过讲师内容输出与团队支持，持续优化理解与方法，逐步形成稳定且可执行的交易思路。",
    inst_title: "覆盖印尼股票交易、监管与资金体系的核心机构",
    ct_tag: "Contact Our Team",
    ct_title: "现在就和我们联系，开启你的印尼股票学习之路",
    ct_body:
      "如果你正在寻找一个更专业、更清晰、更值得信任的印尼股票教学平台， 欢迎直接联系我们的团队。无论你是刚开始了解市场，还是已经有一定基础， 我们都会根据你的情况，为你提供更合适的学习方向与沟通安排。",
    ct_box_h: "官方沟通通道",
    ct_box_p:
      "所有沟通均由专业团队统一管理与响应，确保信息准确、服务稳定、沟通高效。 建议通过官方渠道直接对接，我们将为你提供清晰的学习方向与后续安排。",
    ct_btn_wa: "WhatsApp 官方咨询通道",
    ct_btn_mail: "📧 官方邮箱",
    ft_line1:
      "© 2026 ASEAN Capital Lab · Indonesia Investment Education Center",
    ft_line2:
      "Systematic Investment Education · Market-Based Approach · Research-Driven Insight · Long-Term Value Creation",
  };

  /** @type {Record<string, string>} */
  var EN = {
    lang_label: "Language",
    nav_about: "About Us",
    nav_global: "Global Success Stories",
    nav_services: "Course System",
    nav_team: "Faculty Team",
    nav_journey: "Learning Journey",
    nav_cta: "Contact Us",
    brand_subline: "Indonesia Investment Education Center",
    hero_eyebrow:
      "Institutional Approach · Indonesia Equity Market · Research & Training",
    hero_title:
      "Indonesia equity education and investment literacy for global investors",
    hero_intro:
      "Focused on the Indonesia stock market, we combine on-the-ground experience, a regional research framework, and a structured learning path to help investors build clear, actionable analysis and decision-making skills.",
    hero_b1:
      "A proven teaching and service model that works for investors across regions",
    hero_b2: "From fundamentals to practical understanding—step by step",
    hero_b3:
      "A clearly structured team model that keeps learning and communication efficient",
    hero_b4: "Long-term partnership and sustained value creation at the core",
    stat_mf_title: "Market Focus",
    stat_mf_desc:
      "Deep roots in Indonesia’s capital markets, with curricula built around real market conditions.",
    stat_ts_title: "Team Structure",
    stat_ts_desc:
      "Mentors and assistants work in concert to keep communication smooth and learning continuous.",
    stat_gr_title: "Global Reach",
    stat_gr_desc:
      "Serving investors across regions with cross-border communication and teaching experience.",
    stat_ls_title: "Learning System",
    stat_ls_desc:
      "A complete path from building awareness to forming repeatable methods.",
    video_nosupport: "Your browser does not support HTML5 video playback.",
    about_tag: "About Us",
    about_title:
      "A systematic investment education and service framework for the Indonesia market",
    about_lead:
      "Clear structure and professional content help investors quickly grasp market logic, learning paths, and how we work.",
    about_pos_title: "Who we are",
    about_pos_body:
      "Within the UOB ecosystem, we specialize in Indonesia equity education and investment literacy—combining local market experience with a regional research framework to build a systematic, actionable learning and analysis system.",
    about_f1t: "Market foundations",
    about_f1s:
      "Grounded in Indonesia market experience and research frameworks to establish a clear starting point.",
    about_f2t: "Structured design",
    about_f2s:
      "Structured content and a clear path make learning easier to understand and execute.",
    about_f3t: "Long-term value",
    about_f3s:
      "Emphasis on continuous learning and capability building—not short-term information chasing.",
    about_adv_title: "Our strengths",
    about_a1t: "Repeatable teaching system",
    about_a1s:
      "Structured teaching and service workflows create a stable, sustainable learning rhythm.",
    about_a2t: "Layered learning paths",
    about_a2s:
      "Coverage from foundational literacy to advanced analysis for different stages.",
    about_a3t: "Reliable service model",
    about_a3s:
      "Clear roles and ongoing support to protect learning quality and communication efficiency.",
    about_a4t: "Clarity and trust",
    about_a4s:
      "Help investors quickly understand team background, services, and how to work with us.",
    gs_tag: "Global Success",
    gs_title: "Proven teaching and service success across multiple regions",
    gs_pre: "In one sentence: ",
    gs_em:
      "We understand markets—and we understand how to turn investment education into a trusted, accepted, and sustainably valuable service.",
    gs_c1t: "Regional teaching experience",
    gs_c1p:
      "Investors differ in cognition, habits, and communication. We refine structure and onboarding so new clients from different regions ramp up faster.",
    gs_c2t: "Trust-building journey",
    gs_c2p:
      "Around first-touch psychology and decision habits, we use clear information architecture and steady communication so trust grows alongside understanding.",
    gs_c3t: "Premium brand expression",
    gs_c3p:
      "Professional visuals, team presence, crisp copy, and polished layout signal not just courses—but a team worth long-term engagement.",
    gs_quote:
      "Lasting trust is not only “talking markets well.” It is helping clients immediately sense professionalism, service quality, and team value—and choose to go deeper.",
    sv_tag: "Our Services",
    sv_title:
      "A curriculum built around learning, understanding, analysis, and partnership",
    sv_intro:
      "This page is not only about our team—it is the full service and learning framework we provide. Everything points to one goal: clarity on our scope, how we work, and how to collaborate—so decisions feel more grounded.",
    sv1no: "Service 01",
    sv1t: "Foundational literacy",
    sv1p: "Help newcomers understand Indonesia market structure, sector logic, rules, and common pitfalls—starting on the right path.",
    sv2no: "Service 02",
    sv2t: "Market insights and analysis",
    sv2p: "Combine market dynamics, themes, and company logic into content that is not just news—but a framework you can absorb.",
    sv3no: "Service 03",
    sv3t: "Advanced method training",
    sv3p: "For investors who want stronger judgment—moving from “listening to others” to “reading the market yourself.”",
    sv4no: "Service 04",
    sv4t: "Team-based support",
    sv4p: "Mentors, lead assistants, and support assistants work together so every client experiences continuity and care.",
    tm_tag: "Professional Team",
    tm_title:
      "A professional team structure for a stable, trustworthy service model",
    tm_intro:
      "Clear structure and explicit roles ensure every investor receives stable, continuous, high-quality support. From mentor-led market analysis to assistant-led communication and service delivery, every step aligns professional output with experience—building long-term trust while understanding markets.",
    tm1_role: "Lead Mentor",
    tm1_h: "Lead Mentor / Chief Instructor",
    tm1_p:
      "Stephanus Turangan brings 30+ years of experience across Indonesia’s financial markets, with deep expertise in capital markets, institutional business, and investment strategy. His background strengthens the program’s market logic and credibility.",
    tm1_li1: "Long-term Indonesia market practice and leadership experience",
    tm1_li2:
      "Owns the core curriculum, advanced analysis, and high-level market framework",
    tm1_li3: "Helps learners build complete investment literacy and judgment",
    tm2_role: "Primary Assistant",
    tm2_h: "Lead Assistant / Client Manager",
    tm2_p:
      "Raina handles onboarding, day-to-day communication, learning planning, and follow-ups. She is often the first touch after you join—making service smoother, warmer, and more attentive.",
    tm2_li1: "Primary client coordination and scheduling",
    tm2_li2: "Helps new clients understand courses and learning paths",
    tm2_li3: "Strengthens community presence and service continuity",
    tm3_role: "Support Assistant",
    tm3_h: "Support Assistant / Operations",
    tm3_p:
      "Fajar supports daily operations, information organization, and learner assistance—keeping workflows efficient and experiences stable.",
    tm3_li1: "Auxiliary support and learner issue handling",
    tm3_li2: "Helps maintain day-to-day operational efficiency",
    tm3_li3: "Works with the lead assistant to close the service loop",
    jr_tag: "Learning Journey",
    jr_title: "A clear learning and service path—steady progress at every step",
    jr_intro:
      "With clear phases and reliable handoffs, we help every learner move from awareness to repeatable methods—and from understanding markets to applying them.",
    jr1_label: "Step 01",
    jr1_t: "Understand the team and framework",
    jr1_p:
      "At the start, review team background, research direction, and service structure to build a clear mental model.",
    jr2_label: "Step 02",
    jr2_t: "Professional intake and assessment",
    jr2_p:
      "Assistants conduct initial conversations, understand your baseline and goals, and propose a suitable learning path.",
    jr3_label: "Step 03",
    jr3_t: "Enter structured learning",
    jr3_p:
      "Progress through market structure, analytical logic, and practical understanding—building literacy and judgment step by step.",
    jr4_label: "Step 04",
    jr4_t: "Ongoing follow-up and deepening",
    jr4_p:
      "Through mentor output and team support, refine methods over time and form a stable, executable investment approach.",
    inst_title:
      "Core institutions across Indonesia’s trading, supervision, and market infrastructure",
    ct_tag: "Contact Our Team",
    ct_title: "Contact us now and start your Indonesia equity learning journey",
    ct_body:
      "If you are looking for a more professional, clearer, and more trustworthy Indonesia equity education platform, reach out directly. Whether you are just starting or already have experience, we will tailor direction and communication to your situation.",
    ct_box_h: "Official channels",
    ct_box_p:
      "All inquiries are managed by our professional team to ensure accuracy, stability, and efficiency. We recommend contacting us through official channels for clear next steps.",
    ct_btn_wa: "WhatsApp (official)",
    ct_btn_mail: "Official email",
    ft_line1:
      "© 2026 ASEAN Capital Lab · Indonesia Investment Education Center",
    ft_line2:
      "Systematic Investment Education · Market-Based Approach · Research-Driven Insight · Long-Term Value Creation",
  };

  /** @type {Record<string, string>} */
  var ID = {
    lang_label: "Bahasa",
    nav_about: "Tentang Kami",
    nav_global: "Kisah Sukses Global",
    nav_services: "Sistem Kursus",
    nav_team: "Tim Pengajar",
    nav_journey: "Alur Belajar",
    nav_cta: "Hubungi Kami",
    brand_subline: "Pusat Edukasi Investasi Indonesia",
    hero_eyebrow:
      "Pendekatan Institusional · Pasar Ekuitas Indonesia · Riset & Pelatihan",
    hero_title:
      "Pendidikan saham Indonesia dan literasi investasi untuk investor global",
    hero_intro:
      "Berfokus pada pasar saham Indonesia, kami menggabungkan pengalaman lapangan, kerangka riset regional, dan jalur pembelajaran terstruktur untuk membantu investor membangun analisis dan pengambilan keputusan yang jelas dan dapat dijalankan.",
    hero_b1:
      "Model pengajaran dan layanan terbukti untuk investor lintas wilayah",
    hero_b2: "Dari fundamental hingga pemahaman praktis—langkah demi langkah",
    hero_b3:
      "Struktur tim yang jelas agar pembelajaran dan komunikasi tetap efisien",
    hero_b4:
      "Kemitraan jangka panjang dan penciptaan nilai berkelanjutan sebagai inti",
    stat_mf_title: "Fokus Pasar",
    stat_mf_desc:
      "Akar kuat di pasar modal Indonesia, kurikulum dibangun dari kondisi pasar nyata.",
    stat_ts_title: "Struktur Tim",
    stat_ts_desc:
      "Mentor dan asisten bekerja selaras agar komunikasi lancar dan pembelajaran berkelanjutan.",
    stat_gr_title: "Jangkauan Global",
    stat_gr_desc:
      "Melayani investor lintas wilayah dengan pengalaman komunikasi dan pengajaran lintas batas.",
    stat_ls_title: "Sistem Belajar",
    stat_ls_desc:
      "Jalur lengkap dari pembentukan pemahaman hingga metode yang berulang.",
    video_nosupport: "Browser Anda tidak mendukung pemutaran video HTML5.",
    about_tag: "Tentang Kami",
    about_title:
      "Kerangka edukasi investasi dan layanan yang sistematis untuk pasar Indonesia",
    about_lead:
      "Struktur yang jelas dan konten profesional membantu investor memahami logika pasar, jalur belajar, dan cara kami bekerja dengan cepat.",
    about_pos_title: "Posisi kami",
    about_pos_body:
      "Dalam ekosistem UOB, kami fokus pada edukasi saham Indonesia dan pembentukan literasi investasi—menggabungkan pengalaman pasar lokal dengan kerangka riset regional untuk membangun sistem pembelajaran dan analisis yang sistematis dan dapat dijalankan.",
    about_f1t: "Dasar pasar",
    about_f1s:
      "Berakar pada pengalaman pasar Indonesia dan kerangka riset untuk titik awal yang jelas.",
    about_f2t: "Struktur sistem",
    about_f2s:
      "Konten terstruktur dan jalur yang jelas membuat pembelajaran lebih mudah dipahami dan dieksekusi.",
    about_f3t: "Nilai jangka panjang",
    about_f3s:
      "Menekankan pembelajaran berkelanjutan dan peningkatan kapabilitas—bukan sekadar informasi jangka pendek.",
    about_adv_title: "Kekuatan kami",
    about_a1t: "Sistem pengajaran yang dapat direplikasi",
    about_a1s:
      "Alur pengajaran dan layanan terstruktur membentuk ritme belajar yang stabil dan berkelanjutan.",
    about_a2t: "Jalur belajar bertingkat",
    about_a2s: "Mencakup tahap dari literasi dasar hingga analisis lanjutan.",
    about_a3t: "Model layanan yang andal",
    about_a3s:
      "Peran jelas dan dukungan berkelanjutan untuk menjaga kualitas belajar dan efisiensi komunikasi.",
    about_a4t: "Kejelasan dan kepercayaan",
    about_a4s:
      "Membantu investor memahami latar belakang tim, layanan, dan cara kerja sama dengan cepat.",
    gs_tag: "Sukses Global",
    gs_title: "Bukti pengajaran dan layanan yang matang di berbagai wilayah",
    gs_pre: "Satu kalimat: ",
    gs_em:
      "Kami memahami pasar—dan kami memahami cara mengubah edukasi investasi menjadi layanan yang dipercaya, diterima, dan bernilai berkelanjutan.",
    gs_c1t: "Pengalaman pengajaran regional",
    gs_c1p:
      "Investor berbeda dalam kognisi, kebiasaan, dan komunikasi. Kami menyempurnakan struktur dan onboarding agar klien baru dari berbagai wilayah lebih cepat masuk ke ritme.",
    gs_c2t: "Jalur membangun kepercayaan",
    gs_c2p:
      "Menjawab kebiasaan kognitif dan psikologi keputusan saat pertama berkenalan dengan pasar—dengan struktur informasi yang jelas dan komunikasi yang stabil.",
    gs_c3t: "Ekspresi merek premium",
    gs_c3p:
      "Visual profesional, penampilan tim, narasi jernih, dan tata letak halus menandakan bukan sekadar kursus—tetapi tim yang layak diikuti jangka panjang.",
    gs_quote:
      "Kepercayaan jangka panjang bukan hanya “pandai berbicara tentang pasar.” Yang penting klien segera merasakan profesionalisme, kualitas layanan, dan nilai tim—dan memilih untuk mendalami.",
    sv_tag: "Layanan Kami",
    sv_title:
      "Kurikulum yang dibangun dari belajar, memahami, menganalisis, dan pendampingan",
    sv_intro:
      "Halaman ini bukan hanya tentang tim—ini kerangka layanan dan pembelajaran lengkap kami. Semuanya mengarah pada satu tujuan: kejelasan tentang ruang lingkup, cara kerja, dan jalur kolaborasi—agar keputusan lebih mantap.",
    sv1no: "Layanan 01",
    sv1t: "Pembelajaran literasi dasar",
    sv1p: "Membantu pemula memahami struktur pasar Indonesia, logika sektor, aturan, dan kesalahan umum—mulai dari arah yang benar.",
    sv2no: "Layanan 02",
    sv2t: "Wawasan dan analisis pasar",
    sv2p: "Menggabungkan dinamika pasar, tema industri, dan logika emiten menjadi konten yang bukan sekadar berita—tetapi kerangka yang dapat diserap.",
    sv3no: "Layanan 03",
    sv3t: "Pelatihan metode lanjutan",
    sv3p: "Bagi investor yang ingin penilaian lebih kuat—dari “mendengar orang lain” menuju “membaca pasar sendiri.”",
    sv4no: "Layanan 04",
    sv4t: "Dukungan berbasis tim",
    sv4p: "Mentor, asisten utama, dan asisten pendukung bekerja sama agar setiap klien merasakan kontinuitas dan kepedulian.",
    tm_tag: "Tim Profesional",
    tm_title:
      "Struktur tim profesional untuk model layanan yang stabil dan terpercaya",
    tm_intro:
      "Struktur yang jelas dan peran yang eksplisit memastikan setiap investor mendapat dukungan yang stabil, berkelanjutan, dan berkualitas. Dari analisis pasar oleh mentor hingga komunikasi dan layanan oleh tim asisten, setiap langkah menyelaraskan output profesional dengan pengalaman—membangun kepercayaan jangka panjang sambil memahami pasar.",
    tm1_role: "Mentor Utama",
    tm1_h: "Mentor Utama / Instruktur Kepala",
    tm1_p:
      "Stephanus Turangan membawa pengalaman lebih dari 30 tahun di pasar keuangan Indonesia, dengan keahlian mendalam di pasar modal, bisnis institusional, dan strategi investasi. Latar belakangnya memperkuat logika pasar dan kredibilitas program.",
    tm1_li1:
      "Pengalaman praktik dan kepemimpinan pasar Indonesia jangka panjang",
    tm1_li2:
      "Memegang kurikulum inti, analisis lanjutan, dan kerangka pasar tingkat tinggi",
    tm1_li3:
      "Membantu peserta membangun literasi investasi dan penilaian yang utuh",
    tm2_role: "Asisten Utama",
    tm2_h: "Asisten Utama / Manajer Klien",
    tm2_p:
      "Raina menangani onboarding, komunikasi harian, perencanaan belajar, dan tindak lanjut—sering menjadi sentuhan pertama setelah Anda bergabung—membuat layanan lebih lancar, hangat, dan perhatian.",
    tm2_li1: "Koordinasi utama klien dan penjadwalan",
    tm2_li2: "Membantu klien baru memahami kursus dan jalur belajar",
    tm2_li3: "Memperkuat kehadiran komunitas dan kontinuitas layanan",
    tm3_role: "Asisten Pendukung",
    tm3_h: "Asisten Pendukung / Operasional",
    tm3_p:
      "Fajar mendukung operasional harian, organisasi informasi, dan bantuan peserta—menjaga alur kerja efisien dan pengalaman stabil.",
    tm3_li1: "Dukungan tambahan dan penanganan isu peserta",
    tm3_li2: "Membantu menjaga efisiensi operasional harian",
    tm3_li3: "Berkolaborasi dengan asisten utama untuk menutup siklus layanan",
    jr_tag: "Perjalanan Belajar",
    jr_title:
      "Jalur belajar dan layanan yang jelas—kemajuan stabil di setiap langkah",
    jr_intro:
      "Dengan fase yang jelas dan serah terima yang andal, kami membantu setiap peserta bergerak dari kesadaran menuju metode yang dapat diulang—dari memahami pasar hingga menerapkannya.",
    jr1_label: "Langkah 01",
    jr1_t: "Kenali tim dan kerangka kerja",
    jr1_p:
      "Di awal, tinjau latar belakang tim, arah riset, dan struktur layanan untuk membangun model mental yang jelas.",
    jr2_label: "Langkah 02",
    jr2_t: "Asesmen dan onboarding profesional",
    jr2_p:
      "Tim asisten melakukan percakapan awal, memahami dasar dan tujuan Anda, dan mengusulkan jalur belajar yang sesuai.",
    jr3_label: "Langkah 03",
    jr3_t: "Masuk ke pembelajaran terstruktur",
    jr3_p:
      "Melalui struktur pasar, logika analisis, dan pemahaman praktis—membangun literasi dan penilaian langkah demi langkah.",
    jr4_label: "Langkah 04",
    jr4_t: "Tindak lanjut dan pendalaman berkelanjutan",
    jr4_p:
      "Melalui konten mentor dan dukungan tim, menyempurnakan metode dari waktu ke waktu dan membentuk pendekatan investasi yang stabil dan dapat dieksekusi.",
    inst_title:
      "Lembaga inti yang mencakup perdagangan, pengawasan, dan infrastruktur pasar modal Indonesia",
    ct_tag: "Hubungi Tim Kami",
    ct_title:
      "Hubungi kami sekarang dan mulai perjalanan belajar saham Indonesia Anda",
    ct_body:
      "Jika Anda mencari platform edukasi saham Indonesia yang lebih profesional, lebih jelas, dan lebih terpercaya, hubungi kami langsung. Baik Anda baru memulai maupun sudah berpengalaman, kami akan menyesuaikan arah dan komunikasi sesuai situasi Anda.",
    ct_box_h: "Saluran resmi",
    ct_box_p:
      "Semua pertanyaan dikelola oleh tim profesional kami untuk memastikan akurasi, stabilitas, dan efisiensi. Kami menyarankan menghubungi melalui saluran resmi untuk langkah selanjutnya yang jelas.",
    ct_btn_wa: "WhatsApp (resmi)",
    ct_btn_mail: "Email resmi",
    ft_line1: "© 2026 ASEAN Capital Lab · Pusat Edukasi Investasi Indonesia",
    ft_line2:
      "Edukasi Investasi Sistematis · Pendekatan Berbasis Pasar · Wawasan Berbasis Riset · Penciptaan Nilai Jangka Panjang",
  };

  global.I18N_MESSAGES = {
    zh: ZH_CN,
    en: EN,
    id: ID,
  };
})(typeof window !== "undefined" ? window : globalThis);
