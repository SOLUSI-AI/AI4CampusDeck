import { Experience, Venture, SkillItem, QAItem, MarketSignal } from './types';

// ==================== INDONESIAN DATA ====================

export const EXPERIENCES_ID: Experience[] = [
  {
    id: 'exp-voxia',
    role: 'Chief Executive Officer (CEO) & Founder',
    company: 'VOXIA Solusi AI Terpadu',
    period: '2023 - Present',
    location: 'Indonesia (Jakarta/Remote)',
    description: 'Memimpin garda depan teknologi kecerdasan buatan dalam mempercepat inovasi dan transformasi digital bagi institusi, BUMN, dan korporasi di seluruh Indonesia.',
    bullets: [
      'Merancang arsitektur kecerdasan buatan terpadu berskala enterprise dengan penekanan pada keamanan data dan kedaulatan digital Indonesia.',
      'Mengembangkan model NLP (Natural Language Processing) kustom dan agen AI otonom untuk otomatisasi keputusan bisnis yang presisi.',
      'Menyediakan konsultasi eksekutif tingkat tinggi terkait adopsi regulasi AI dan roadmap transformasi digital nasional.',
      'Mengintegrasikan model Vision AI dan Predictive Analytics untuk meningkatkan akurasi analisis bisnis operasional hingga 85%.'
    ],
    techStack: ['Enterprise LLMs', 'PyTorch', 'NLP Custom Pipeline', 'Vision AI', 'Secure Cloud Architecture', 'Generative-AI Consultation'],
    logoType: 'voxia',
    websiteUrl: 'https://voxia.id/'
  },
  {
    id: 'exp-invezthink',
    role: 'Founder & Chief Architect',
    company: 'INVEZTHINK Educational Platform',
    period: '2022 - Present',
    location: 'Global (Online/Remote)',
    description: 'Menyusun visi teknis platform pembelajaran finansial modern dengan visual simulasi bertenaga AI untuk memudahkan pemahaman pasar keuangan dunia.',
    bullets: [
      'Mendesain platform interaktif untuk visualisasi pola pasar (Market Pattern Recognition) berbasis algoritma machine learning.',
      'Menyediakan media edukasi analisis pasar finansial tingkat lanjut tanpa memberikan rekomendasi finansial (Educational Not Financial Advice).',
      'Membangun sistem simulasi trading virtual berlatensi rendah untuk membantu pembelajar menguji strategi secara akademis.',
      'Mengelola pertumbuhan platform yang menghubungkan ribuan pembelajar aktif dengan alat komputasi analisis visual modern.'
    ],
    techStack: ['Market Analytics Engine', 'Pattern Recognition', 'Interactive Charting', 'TypeScript/Next.js', 'Low-Latency Databases'],
    logoType: 'invezthink',
    websiteUrl: 'https://app.invezthink.com/en/'
  },
  {
    id: 'exp-consultant',
    role: 'Senior AI Consultant & Digital Strategist',
    company: 'Independent Technical Consultant',
    period: '2019 - 2022',
    location: 'Indonesia',
    description: 'Mendampingi berbagai jajaran direksi dalam menyusun strategi adopsi awan (cloud), pemipaan data terdistribusi (data pipeline), serta penyelarasan regulasi AI.',
    bullets: [
      'Menyusun kerangka kerja adopsi teknologi berisiko rendah melalui teknik Proof-of-Concept (PoC) berbasis AI.',
      'Menyelenggarakan lokakarya teknologi data-driven untuk menjembatani kesenjangan pemahaman teknis dengan strategi komersial.',
      'Memodernisasi sistem warisan (legacy systems) korporasi menjadi mikroarsitektur berbasis ketersediaan tinggi.'
    ],
    techStack: ['Cloud Migration', 'Data Strategy', 'Integration Systems', 'Machine Learning Strategy'],
    logoType: 'consultancy'
  },
  {
    id: 'exp-developer',
    role: 'Lead Full-Stack Developer & Analyst',
    company: 'Fintech & Tech Agencies',
    period: '2015 - 2019',
    location: 'Indonesia',
    description: 'Membangun aplikasi web tangguh berskala besar dengan fokus utama pada ketersediaan tinggi, kecepatan respons kilat, serta visibilitas data dinamis.',
    bullets: [
      'Mengimplementasikan mesin analitis grafik real-time untuk menampilkan arus transaksi tanpa hambatan memori browser.',
      'Memimpin tim pengembang beranggotakan 6 staf dalam mengadopsi standar penulisan kode TypeScript yang aman dan teruji.',
      'Menerapkan keamanan siber tingkat aplikasi yang tahan terhadap serangan eksploitasi data sensitif pengguna.'
    ],
    techStack: ['React/React Native', 'Node.js', 'MongoDB', 'Redis Caching', 'Secure API Design'],
    logoType: 'generic'
  },
  {
    id: 'exp-maxxsales',
    role: 'Founder & CEO',
    company: 'MaxxSales - AI-Powered Sales Growth OS',
    period: '2026 - Present',
    location: 'Indonesia (Jakarta/Remote)',
    description: 'Meluncurkan dan memimpin pengembangan Sistem Operasi Pertumbuhan Bisnis berbasis AI yang mengintegrasikan 3-chain tactical briefing, competitive intelligence, dan AI content generation untuk membantu pengusaha Indonesia mengatasi ketidakpastian strategi bisnis.',
    bullets: [
      'Merancang arsitektur 3-chain sequential AI pipeline (GapAnalyzer \u2192 ExecutionPlan \u2192 CommsWriter) yang menghasilkan briefing taktis harian terpersonalisasi.',
      'Mengembangkan 6 modul dashboard inti: Daily Sales Pulse, Competitor War Room, Customer Insight, Strategy Forge, Content Generator, dan AI Chatbot Copilot.',
      'Mengimplementasikan dual-backend architecture (Express.js + Cloudflare Workers + Hono) untuk skalabilitas optimal.',
      'Membangun DNA Business Canvas — wizard profil bisnis 6-tab yang menjadi fondasi personalisasi seluruh fitur AI.'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Recharts', 'Cloudflare Workers + Hono', 'OpenRouter AI', '3-Chain Prompt Pipeline'],
    logoType: 'maxxsales',
    websiteUrl: 'https://maxxsales.id/'
  }
];

export const VENTURES_ID: Venture[] = [
  {
    name: 'VOXIA Solusi AI Terpadu',
    headline: 'Solusi AI Terpadu untuk Transformasi Digital Indonesia',
    url: 'https://voxia.id/',
    role: 'CEO & Founder',
    description: 'Platform konsultan dan penyedia solusi kecerdasan buatan terpadu berskala komersial yang dirancang khusus untuk memenuhi standar digitalisasi industri Indonesia abad ke-21. Kami membantu mengubah Big Data perusahaan Anda menjadi keputusan taktis otonom.',
    features: [
      'Layanan Integrasi AI Lokal Aman (On-Prem / Private Cloud)',
      'Asisten Virtual Pintar Korporat dengan Konseptual Bahasa Indonesia Alami',
      'Mesin Analitik Prediktif & Pengenalan Visual Presisi Tinggi',
      'Pelatihan & Sertifikasi Kesiapan Sumber Daya Manusia Hadapi Era Gen-AI'
    ],
    analyticsType: 'ai-chat'
  },
  {
    name: 'INVEZTHINK',
    headline: 'Educational Platform: AI-Powered Market Analysis Tools for Learning',
    url: 'https://app.invezthink.com/en/',
    role: 'Founder',
    description: 'Platform edukasi mutakhir yang dilengkapi dengan perangkat analitis visual bertenaga AI untuk mengenali pergerakan pasar. Seluruh modul didesain khusus demi mempercepat proses belajar terstruktur. Kami selalu menekankan bahwa ini adalah platform pembelajaran mandiri, bukan saran keuangan profesional.',
    features: [
      'Sinyal Analisis Pola Pasar Berbasis Pola Candlestick Matematis',
      'Simulator Visual Strategi Pembatasan Risiko secara Interaktif',
      'Kurikulum Pembelajaran Terstruktur dari Dasar hingga Mahir',
      'Penyaringan Emosi Pengambil Keputusan Menggunakan Disiplin Komputasi'
    ],
    analyticsType: 'trading-view'
  },
  {
    name: 'MaxxSales',
    headline: 'AI-Powered Sales Growth OS untuk Pengusaha Indonesia',
    url: 'https://maxxsales.id/',
    role: 'Founder & CEO',
    description: 'Sistem Operasi Pertumbuhan Bisnis berbasis AI yang mengubah data bisnis mentah menjadi strategi taktis harian. Dilengkapi 3-chain tactical briefing, competitor intelligence, customer segmentation, content generation, dan daily strategy execution dalam satu platform terpadu.',
    features: [
      'Daily Sales Pulse — Briefing taktis harian dengan 3-chain AI pipeline (Gap Analyzer \u2192 Execution Plan \u2192 Comms Writer)',
      'Competitor War Room — Profil kompetitor dengan AI SWOT analysis dan radar chart comparison',
      'Customer Insight — Segmentasi pelanggan dengan estimasi LTV, analisis churn risk, dan rekomendasi retensi berbasis AI',
      'Strategy Forge — Blueprint strategi marketing 5-11 pillar berdasarkan Business DNA'
    ],
    analyticsType: 'maxxsales'
  }
];

export const QA_ITEMS_ID: QAItem[] = [
  {
    category: 'about',
    question: 'Siapakah Iwan Cahyo Suryadi?',
    answer: 'Iwan Cahyo Suryadi adalah seorang Tech Entrepreneur, AI Pioneer, dan konsultan transformasi digital yang berbasis di Indonesia. Sebagai pemimpin dari VOXIA, INVEZTHINK, dan MaxxSales, beliau berfokus pada pemanfaatan kecerdasan buatan yang fungsional dan aman demi mengangkat daya saing digital Indonesia.'
  },
  {
    category: 'voxia',
    question: 'Apa kontribusi VOXIA bagi ekosistem bisnis Indonesia?',
    answer: 'VOXIA (voxia.id) menghadirkan teknologi AI termutakhir ke ekosistem lokal secara aman, efisien, dan siap-integrasi. Kami merancang asisten suara pintar, kecerdasan dokumen, serta model prediksi khusus untuk perusahaan besar dan BUMN guna melipatgandakan kecepatan operasional mereka.'
  },
  {
    category: 'invezthink',
    question: 'Bagaimana INVEZTHINK memajukan literasi pasar digital?',
    answer: 'INVEZTHINK (app.invezthink.com/en/) menyediakan simulator analitis visual bertenaga AI untuk mengedukasi peserta didik tentang pergerakan pasar secara presisi tanpa bersandar pada spekulasi kosong. Platform ini melatih kedisiplinan logis tanpa melibatkan rekomendasi beli/jual langsung.'
  },
  {
    category: 'collaboration',
    question: 'Bagaimana saya dapat berkolaborasi atau berkonsultasi langsung?',
    answer: 'Anda dapat segera membuka sesi diskusi pribadi dengan menekan tombol WhatsApp atau merujuk ke LinkedIn. Pak Iwan Cahyo sangat menyambut baik diskusi kemitraan strategis, proyek implementasi AI korporat, maupun kegiatan seminar kepemimpinan teknologi.'
  },
  {
    category: 'maxxsales',
    question: 'Apa itu MaxxSales dan bagaimana cara kerjanya?',
    answer: 'MaxxSales (maxxsales.id) adalah AI-Powered Sales Growth Operating System yang dirancang khusus untuk pengusaha Indonesia. Platform ini mengatasi 3 masalah utama pengusaha: (1) tidak punya strategi — melalui Daily Sales Pulse dengan 3-chain AI briefing harian (GapAnalyzer \u2192 ExecutionPlan \u2192 CommsWriter), (2) tidak tahu kelemahan kompetitor — melalui Competitor War Room dengan AI SWOT analysis, (3) buang waktu 3 jam sehari mikir konten — melalui AI Content Generator. Cukup isi DNA Business Canvas sekali, dan MaxxSales menghasilkan briefing harian yang siap eksekusi.'
  }
];


// ==================== ENGLISH DATA ====================

export const EXPERIENCES_EN: Experience[] = [
  {
    id: 'exp-voxia',
    role: 'Chief Executive Officer (CEO) & Founder',
    company: 'VOXIA Integrated AI Solutions',
    period: '2023 - Present',
    location: 'Indonesia (Jakarta/Remote)',
    description: 'Leading the vanguard of artificial intelligence technology in accelerating innovation and digital transformation for institutions, state-owned enterprises (BUMN), and corporations across Indonesia.',
    bullets: [
      'Designed unified enterprise-scale artificial intelligence architecture emphasizing data security and digital sovereignty for Indonesia.',
      'Developed custom NLP (Natural Language Processing) models and autonomous AI agents for high-precision business decision automation.',
      'Provided high-level executive consultation regarding AI regulation adoption and the national digital transformation roadmap.',
      'Integrated Vision AI models and Predictive Analytics to improve operational business analysis accuracy by up to 85%.'
    ],
    techStack: ['Enterprise LLMs', 'PyTorch', 'NLP Custom Pipeline', 'Vision AI', 'Secure Cloud Architecture', 'Generative-AI Consultation'],
    logoType: 'voxia',
    websiteUrl: 'https://voxia.id/'
  },
  {
    id: 'exp-invezthink',
    role: 'Founder & Chief Architect',
    company: 'INVEZTHINK Educational Platform',
    period: '2022 - Present',
    location: 'Global (Online/Remote)',
    description: 'Formulated the technical vision of a modern financial learning platform with AI-powered simulation visuals to simplify the understanding of global financial markets.',
    bullets: [
      'Designed interactive platform for Market Pattern Recognition based on machine learning algorithms.',
      'Provided educational media for advanced financial market analysis without offering financial recommendations (Educational Not Financial Advice).',
      'Built a low-latency virtual trading simulation system to help learners test strategies academically.',
      'Managed platform growth connecting thousands of active learners with modern visual analysis computing tools.'
    ],
    techStack: ['Market Analytics Engine', 'Pattern Recognition', 'Interactive Charting', 'TypeScript/Next.js', 'Low-Latency Databases'],
    logoType: 'invezthink',
    websiteUrl: 'https://app.invezthink.com/en/'
  },
  {
    id: 'exp-consultant',
    role: 'Senior AI Consultant & Digital Strategist',
    company: 'Independent Technical Consultant',
    period: '2019 - 2022',
    location: 'Indonesia',
    description: 'Assisted various boards of directors in formulating cloud adoption strategies, distributed data pipelines, and AI regulation alignment.',
    bullets: [
      'Formulated low-risk technology adoption frameworks through AI-powered Proof-of-Concept (PoC) techniques.',
      'Conducted data-driven technology workshops to bridge the gap between technical understanding and commercial strategy.',
      'Modernized corporate legacy systems into highly available microservice-based architecture.'
    ],
    techStack: ['Cloud Migration', 'Data Strategy', 'Integration Systems', 'Machine Learning Strategy'],
    logoType: 'consultancy'
  },
  {
    id: 'exp-developer',
    role: 'Lead Full-Stack Developer & Analyst',
    company: 'Fintech & Tech Agencies',
    period: '2015 - 2019',
    location: 'Indonesia',
    description: 'Built robust large-scale web applications with a primary focus on high availability, lightning-fast response times, and dynamic data visibility.',
    bullets: [
      'Implemented real-time graphical analysis engines to present transaction flows without choking browser memory.',
      'Led a developing team of 6 engineers in adopting safe and thoroughly tested TypeScript coding standards.',
      'Implemented application-level cybersecurity resilient to sensitive user data exploitation attacks.'
    ],
    techStack: ['React/React Native', 'Node.js', 'MongoDB', 'Redis Caching', 'Secure API Design'],
    logoType: 'generic'
  },
  {
    id: 'exp-maxxsales',
    role: 'Founder & CEO',
    company: 'MaxxSales - AI-Powered Sales Growth OS',
    period: '2026 - Present',
    location: 'Indonesia (Jakarta/Remote)',
    description: 'Launched and led the development of an AI-powered Business Growth Operating System integrating 3-chain tactical briefing, competitive intelligence, and AI content generation to help Indonesian entrepreneurs overcome business strategy uncertainty.',
    bullets: [
      'Architected a 3-chain sequential AI pipeline (GapAnalyzer \u2192 ExecutionPlan \u2192 CommsWriter) generating personalized daily tactical briefings.',
      'Developed 6 core dashboard modules: Daily Sales Pulse, Competitor War Room, Customer Insight, Strategy Forge, Content Generator, and AI Chatbot Copilot.',
      'Implemented dual-backend architecture (Express.js + Cloudflare Workers + Hono) for optimal scalability.',
      'Built DNA Business Canvas — a 6-tab business profile wizard serving as the personalization foundation for all AI features.'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Recharts', 'Cloudflare Workers + Hono', 'OpenRouter AI', '3-Chain Prompt Pipeline'],
    logoType: 'maxxsales',
    websiteUrl: 'https://maxxsales.id/'
  }
];

export const VENTURES_EN: Venture[] = [
  {
    name: 'VOXIA Integrated AI Solutions',
    headline: 'Integrated AI Solutions for Indonesia\'s Digital Transformation',
    url: 'https://voxia.id/',
    role: 'CEO & Founder',
    description: 'A commercial-scale integrated artificial intelligence solutions provider and consulting platform designed to fulfill the digitization standards of 21st-century Indonesian industries. We help transform your enterprise Big Data into tactical autonomous decisions.',
    features: [
      'Secure Local AI Integration Services (On-Prem / Private Cloud)',
      'Corporate Smart Virtual Assistants with Natural Indonesian Contextual Understanding',
      'High-Precision Predictive Analytics & Visual Recognition Engines',
      'Training & Certification for HR Readiness Facing the Gen-AI Era'
    ],
    analyticsType: 'ai-chat'
  },
  {
    name: 'INVEZTHINK',
    headline: 'Educational Platform: AI-Powered Market Analysis Tools for Learning',
    url: 'https://app.invezthink.com/en/',
    role: 'Founder',
    description: 'An elite educational platform equipped with AI-powered visual analysis tools to recognize market trends. All modules are custom-designed to accelerate structured learning. We emphasize that this is a self-study platform, not professional financial advice.',
    features: [
      'Mathematical Candlestick-Based Market Pattern Analysis Signals',
      'Interactive Risk Management Strategy Visual Simulators',
      'Structured Learning Curriculum from Beginner to Advanced',
      'Decision-Maker Emotion Filtering via Computational Discipline'
    ],
    analyticsType: 'trading-view'
  },
  {
    name: 'MaxxSales',
    headline: 'AI-Powered Sales Growth OS for Indonesian Entrepreneurs',
    url: 'https://maxxsales.id/',
    role: 'Founder & CEO',
    description: 'An AI-powered Business Growth Operating System that transforms raw business data into daily tactical strategies. Equipped with 3-chain tactical briefing, competitor intelligence, customer segmentation, content generation, and daily strategy execution in one unified platform.',
    features: [
      'Daily Sales Pulse — AI-powered tactical briefing with 3-chain pipeline (Gap Analyzer \u2192 Execution Plan \u2192 Comms Writer)',
      'Competitor War Room — Competitor profiles with AI SWOT analysis and radar chart comparison',
      'Customer Insight — Customer segmentation with LTV estimation, churn risk analysis, and AI retention recommendations',
      'Strategy Forge — 5-11 pillar marketing strategy blueprint based on Business DNA'
    ],
    analyticsType: 'maxxsales'
  }
];

export const QA_ITEMS_EN: QAItem[] = [
  {
    category: 'about',
    question: 'Who is Iwan Cahyo Suryadi?',
    answer: 'Iwan Cahyo Suryadi is a Tech Entrepreneur, AI Pioneer, and digital transformation consultant based in Indonesia. Leading VOXIA, INVEZTHINK, and MaxxSales, he focuses on leveraging functional and secure artificial intelligence to elevate Indonesia\'s digital competitiveness.'
  },
  {
    category: 'voxia',
    question: 'How does VOXIA contribute to the Indonesian business ecosystem?',
    answer: 'VOXIA (voxia.id) delivers state-of-the-art AI technology to the local ecosystem in a secure, efficient, and integration-ready format. We design smart voice assistants, document intelligence, and specialized predictive models for major enterprises and state-owned companies to multiply their operational speed.'
  },
  {
    category: 'invezthink',
    question: 'How does INVEZTHINK advance digital market literacy?',
    answer: 'INVEZTHINK (app.invezthink.com/en/) provides AI-powered visual analysis simulators to educate learners on precise market movements without relying on empty speculation. This platform trains logical discipline without involving direct buy/sell recommendations.'
  },
  {
    category: 'collaboration',
    question: 'How can I collaborate or consult directly?',
    answer: 'You can immediately start a private discussion session by tapping the WhatsApp button or visiting LinkedIn. Mr. Iwan Cahyo highly welcomes strategic partnership talks, corporate AI implementation projects, or technology leadership seminar events.'
  },
  {
    category: 'maxxsales',
    question: 'What is MaxxSales and how does it work?',
    answer: 'MaxxSales (maxxsales.id) is an AI-Powered Sales Growth Operating System designed specifically for Indonesian entrepreneurs. The platform solves 3 core problems: (1) no clear strategy — through Daily Sales Pulse with 3-chain AI daily briefing (GapAnalyzer \u2192 ExecutionPlan \u2192 CommsWriter), (2) not knowing competitor weaknesses — through Competitor War Room with AI SWOT analysis, (3) wasting 3 hours daily on content — through AI Content Generator. Fill in the DNA Business Canvas once, and MaxxSales delivers execution-ready daily briefings.'
  }
];


// ==================== SHARED UTILITIES ====================

export const SKILLS: SkillItem[] = [
  { name: 'Generative AI & LLMs Customization', level: 95, category: 'AI_ML' },
  { name: 'Natural Language Processing (NLP)', level: 93, category: 'AI_ML' },
  { name: 'Computer Vision & Deep Learning', level: 88, category: 'AI_ML' },
  { name: 'Fintech Market Simulation Algorithm', level: 92, category: 'Fintech' },
  { name: 'Mathematical Modeling & Price Action', level: 90, category: 'Fintech' },
  { name: 'Educational Platform Curriculum Design', level: 85, category: 'E_Learning' },
  { name: 'National Digital Transformation Synergy', level: 94, category: 'Consulting' },
  { name: 'Enterprise Cloud System Architecture', level: 91, category: 'Architecture' },
  { name: 'Cross-functional Technology Leadership', level: 96, category: 'Consulting' },
  { name: 'AI SaaS Platform Architecture', level: 90, category: 'Architecture' }
];

export const MOCK_MARKET_DATA: MarketSignal[] = [
  { time: '10:00', price: 15420, aiPrediction: 'BUY', confidence: 91 },
  { time: '11:00', price: 15450, aiPrediction: 'BUY', confidence: 84 },
  { time: '12:00', price: 15435, aiPrediction: 'HOLD', confidence: 72 },
  { time: '13:00', price: 15410, aiPrediction: 'SELL', confidence: 88 },
  { time: '14:00', price: 15490, aiPrediction: 'BUY', confidence: 95 },
  { time: '15:00', price: 15510, aiPrediction: 'HOLD', confidence: 68 },
  { time: '16:00', price: 15530, aiPrediction: 'BUY', confidence: 89 },
];
