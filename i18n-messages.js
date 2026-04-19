/**
 * Site copy by language. Keys match data-i18n attributes on the page.
 */
(function (global) {
  "use strict";

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
      "Indonesia Equity Education And Investment Literacy for Global Investors",
    hero_intro:
      "Focused on the Indonesia stock market, we combine on-the-ground experience, a regional research framework, and a structured learning path to help investors build clear, actionable analysis and decision-making skills.",
    hero_b1:
      "A proven teaching and service model that works for investors across all regions",
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
      "Serving investors across all regions with cross-border communication and teaching experience.",
    stat_ls_title: "Learning System",
    stat_ls_desc:
      "A complete path from building awareness to forming repeatable methods.",
    video_nosupport: "Your browser does not support HTML5 video playback.",
    about_tag: "About Us",
    about_title:
      "A Systematic Investment Education And Service Framework For The Indonesian Market.",
    about_lead:
      "Clarity in structure and professionalism in content allow investors to efficiently comprehend market trends, learning processes, and how we operate.",
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
    gs_title: "Proven Teaching And Service Success Across Multiple Regions.",
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
      "A Clear Path of Learning and Service and Steady Progress at Every Step.",
    sv_intro:
      "This page is not only about our team—it is the full service and learning framework we provide. Everything points to one goal: clarity on our scope, how we work, and how to collaborate—so decisions feel more grounded.",
    sv1no: "Service 01",
    sv1t: "Foundational literacy",
    sv1p: "Experienced in providing investment education to clients of various ages, regions, and backgrounds, adapting communication so it stays clear and relevant for each participant.",
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
    tm2_h: "Lead Assistant / Vice Chief Instructor",
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
      "Core Institutions Across Indonesian's Trading, Supervision, And Market Infrastructure.",
    ct_tag: "Contact Our Team",
    ct_title:
      "Contact Us Now And Start Your Indonesian Equity Learning Journey.",
    ct_body:
      "If you are looking for a more professional, clearer, and more trustworthy Indonesia equity education platform, reach out directly. Whether you are just starting or already have experience, we will tailor direction and communication to your situation.",
    ct_box_h: "Official Channels",
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
      "Pendidikan Ekuitas Dan Literasi Investasi Indonesia Untuk Investor Global",
    hero_intro:
      "Berfokus pada pasar saham Indonesia, kami menggabungkan pengalaman lapangan, kerangka riset regional, dan jalur pembelajaran terstruktur untuk membantu investor membangun analisis dan pengambilan keputusan yang jelas dan dapat dijalankan.",
    hero_b1:
      "Model pengajaran dan layanan terbukti untuk investor seluruh wilayah",
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
      "Melayani investor seluruh wilayah dengan pengalaman komunikasi dan pengajaran lintas batas.",
    stat_ls_title: "Sistem Belajar",
    stat_ls_desc:
      "Jalur lengkap dari pembentukan pemahaman hingga metode yang berulang.",
    video_nosupport: "Browser Anda tidak mendukung pemutaran video HTML5.",
    about_tag: "Tentang Kami",
    about_title:
      "Kerangka Kerja Pendidikan Dan Layanan Investasi yang Sistematis untuk Pasar Indonesia.",
    about_lead:
      "Struktur yang jelas dan konten profesional membantu investor memahami logika pasar, jalur belajar, dan cara kami bekerja dengan cepat.",
    about_pos_title: "SIAPA KITA",
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
    gs_title:
      "Terbukti Sukses Dalam Pengajaran Dan Pelayanan Di Berbagai Wilayah.",
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
      "Kurikulum Yang Dibangun Berdasarkan Pembelajaran, Pemahaman, Analisis, Dan Kemitraan.",
    sv_intro:
      "Halaman ini bukan hanya tentang tim—ini kerangka layanan dan pembelajaran lengkap kami. Semuanya mengarah pada satu tujuan: kejelasan tentang ruang lingkup, cara kerja, dan jalur kolaborasi—agar keputusan lebih mantap.",
    sv1no: "Layanan 01",
    sv1t: "Pembelajaran literasi dasar",
    sv1p: "Berpengalaman dalam memberikan edukasi investasi kepada klien dari beragam usia, wilayah, dan karakter, dengan kemampuan menyesuaikan gaya komunikasi agar mudah dipahami dan relevan bagi setiap peserta. ",
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
      "Struktur Tim Profesional Untuk Model Layanan Yang Stabil dan Terpercaya",
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
    tm2_h: "Asisten Utama / Wakil Instruktur Kepala",
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
      " Jalur Pembelajaran Dan Pelayanan Yang  Jelas Serta Kemajuan Yang Stabil Di Setiap Langkah",
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
      "Lembaga-Lembaga Inti Di Seluruh Infrastuktur Perdagangan, Pengawasan, Dan Pasar Indonesia.",
    ct_tag: "Hubungi Tim Kami",
    ct_title:
      "Hubungi Kami Sekarang Dan Mulailah Perjalanan Pembelajaran Kesetaraan Anda Di Indonesia.",
    ct_body:
      "Jika Anda mencari platform edukasi saham Indonesia yang lebih profesional, lebih jelas, dan lebih terpercaya, hubungi kami langsung. Baik Anda baru memulai maupun sudah berpengalaman, kami akan menyesuaikan arah dan komunikasi sesuai situasi Anda.",
    ct_box_h: "Saluran Resmi",
    ct_box_p:
      "Semua pertanyaan dikelola oleh tim profesional kami untuk memastikan akurasi, stabilitas, dan efisiensi. Kami menyarankan menghubungi melalui saluran resmi untuk langkah selanjutnya yang jelas.",
    ct_btn_wa: "WhatsApp (Resmi)",
    ct_btn_mail: "Email Resmi",
    ft_line1: "© 2026 ASEAN Capital Lab · Pusat Edukasi Investasi Indonesia",
    ft_line2:
      "Edukasi Investasi Sistematis · Pendekatan Berbasis Pasar · Wawasan Berbasis Riset · Penciptaan Nilai Jangka Panjang",
  };

  global.I18N_MESSAGES = {
    en: EN,
    id: ID,
  };
})(typeof window !== "undefined" ? window : globalThis);
