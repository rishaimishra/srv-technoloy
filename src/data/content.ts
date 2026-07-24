import { ServiceItem, CaseStudy, Testimonial, JournalArticle } from '../types';

export const HOTLINK_IMAGES = {
  heroBg: 'https://lh3.googleusercontent.com/aida/AP1WRLtBkrbbjQjT8T15VCDbzzDmW86ymeu-wNaoVsHd3OF7KsRku2I8Nj6cytGT5G7R5qh3cKkbT6L2cyVRapqLrAU-C3lOnT1Vl5Q5m5LhIal_MWlLfRd93dVTnSCLh9sl21y34_nGeqkn6v6Ytstj1TPUWpJ5oKWMaZ7NhJS1Mf29PzRdz3GT3pXvMH5Y8qqoZUUsl3YNf4jHSLD1C8kKYILqqEybprons-VGhx39qMqzAKlXuTwRngXF',
  lumenox: 'https://lh3.googleusercontent.com/aida/AP1WRLsHSmztsVy1EsIIR9j4x9CbAu56cKfcwsWC_VpqXZS_Pe3D5T1Ba9cShICSUG1VNak0G7RgGoV3dIZ-Wrhq-oGivJFY5yHipqKycbciXvaCOkRsZoIDmRzgELsm_bzC-SVEP5clOQMGgXED5CUFYYj66NgyEof74gD2TBXU2ODoVPwlYlKKx76GV4PRDVDQHG1u_Yyxk2tJctv9GIXYVmX64IL5ZvDSkCLjYQ0XkWMsdhuRYsXVZP3V2Q',
  collarHire: 'https://lh3.googleusercontent.com/aida/AP1WRLuR7RYSsY2Ej1vQ0Ke9hjZUztDGJu7SPBHeuozu5KkqNAJIL9OwibAGwCW9U8sBXoe73cpEsE1umsmUp1W1OUNORKC1Qdx7WZYYb0XhEUdyTBselKOUjZAztOE7ZH-OUE45_SvAknuW7kgRZCdiLwHb5qSufD63C2WUV3dld973OK0xueMvhPbk0sMx9FjrjEPIdX3_5ZwVnGoLGpKY19lP8A6D972YIsX_WvvyOi0H7xx-cNaW4_Ozgw',
  theCaryCompany: 'https://lh3.googleusercontent.com/aida/AP1WRLtRKQJZPmNycM8Ypr3eoHsrINqJ65VQujgeOH6Zvx9IGsQa2k1adfnHzhKipHbyp-QZi3tqYdAJUR__j_bp5dNk4fhJSiaQq6-Z4bHP5HzllsO0G47XvprYbiXCWi2TtqsaYnthk7UDa5102mgZsb9EzvxlvVnNjIuGObMJCrMoNXQPPXg6WGMfIOlSvWvqvJtc2aeFWYO3Vieq1xDGc8QPTxtVG_vCUP0OMMGBxp3b6OJieBg7zWRzsw',
  articleSeo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5WshS7FEGEe8e9v63GwJMYs-VN7WwvF9ipVb_do7uv3TAoKkSEGPSO7tvcaspQF6CcOETNJFQMbKOm1mhV7sxv6miHLihpXdS75Tc2ZBUtfKwpTbMCMn5SS6SdMR8MgjVyyVaWeoBMT67oYdgWpQyLzm1zzPxLA4vXPxc-vpS2qbbgzbANhtbDtXpaDyfQkjpmq5WLYcjLDT9Tx9Ne9yk7_StCSy8j5kFWuuQm_4-NP7Ijt4NLnAKGSkHlfFyWHwA7mDyHA0MCQ',
  articleAiMl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGHsG1dJk4WaKv7J3DbOWZ09epwcQJwvDP1jfu9CKIArCwwTKGXHTxW1URehKfBX6u5n44W2oH0nG_3S4UIngMeb_DnbyY53FWS0nT8ek86QkdwoPLuhGvOJ2Eulw3xc_efQJ0S2JuRwt4107F5V4F2bn2LfMMpmyI4SbdUOQVwkUrYLfjrCky-eerofjRrs-Gt8Ni5uesJrBuxPQTHvpYtdNWdnI6t8FNfCN_IG4pU90GNku6790lBItr01QAHwiyKHBJN4UoDw',
  articleEcommerce: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBULpWmA69cRplAHma-uwbAUuuqQf0MjeSSHKOn-2ds9fAJVQXI2sWEtWdA6itVoQZrdFRmp5v2O32uweRhhmRj-llFfFXrGuO9lNNLDDu1NTvYmbdBjIkLyjdrjbS68Y6oPD3tMJ1l52v-zCKxG7Y3pSWc0eYkKk4nCfwaAqBCrftev4ALOy6U9yB4hhro-gUgy9PbvlhvQTcPHUhPW3IseeygZXehzLR5JQ7wIS12xvZ9urC4ydz3W3Nqir1YFtBrcoW2Q05bbg',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    icon: 'code',
    title: 'Custom Software Development',
    description: 'Bespoke enterprise software, high-throughput microservices, SaaS platforms, and cloud architectures built for scalability.',
    detailedFeatures: [
      'Architecting resilient distributed microservices and GraphQL/REST APIs',
      'Modern cloud-native backends in Node.js, Python, Go, and Java',
      'Custom SaaS platforms with multi-tenant data isolation and RBAC',
      'Legacy system modernization, refactoring, and cloud migration',
      'Enterprise security, SOC2 compliance, and high-availability setups'
    ],
    techStack: ['TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes'],
    deliverables: [
      'Production-Ready Source Code',
      'Software Architecture Specifications',
      'Automated CI/CD Pipeline Configuration',
      'Interactive Swagger / OpenAPI Docs'
    ]
  },
  {
    id: 'web-dev',
    icon: 'globe',
    title: 'Website Development',
    description: 'High-performing web platforms and web applications with ultra-fast page load times and responsive UI/UX.',
    detailedFeatures: [
      'Custom React, Next.js, and Vue Single Page & Server-Rendered Applications',
      'Tailwind CSS & modern design systems built for accessible UI/UX',
      'Headless CMS integrations (Strapi, Sanity, Contentful)',
      'Sub-second page load optimization & WCAG 2.1 AA accessibility',
      'Progressive Web App (PWA) offline capabilities'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Node.js'],
    deliverables: [
      'Fully Responsive Website',
      'Figma Interactive Design Systems',
      'Core Web Vitals Performance Report',
      'CMS Admin Training & Documentation'
    ]
  },
  {
    id: 'mobile-dev',
    icon: 'smartphone',
    title: 'Mobile App Development (React Native, Flutter & Native)',
    description: 'Cross-platform and native iOS/Android mobile applications engineered for high performance, smooth UI, and offline capabilities.',
    detailedFeatures: [
      'Cross-platform development using React Native and Flutter',
      'Native iOS (Swift) and Android (Kotlin) high-performance modules',
      'Offline-first architecture with local encrypted sqlite/realm storage',
      'Real-time WebSockets, biometric auth, and Push Notifications',
      'App Store & Google Play publishing pipeline setup'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    deliverables: [
      'iOS App (.ipa) & Android App (.aab) Bundles',
      'Mobile UI/UX Design Assets',
      'App Store Optimization & Release Pipeline',
      'Crashlytics & Real-Time Monitoring Setup'
    ]
  },
  {
    id: 'erp-syspro',
    icon: 'database',
    title: 'ERP Implementation (Syspro ERP)',
    description: 'End-to-end Syspro ERP implementation, customization, module extension, and seamless enterprise integration.',
    detailedFeatures: [
      'Syspro ERP installation, database modeling, and workflow configuration',
      'Custom Syspro e.net Business Objects (e.net solutions) & API integration',
      'Supply chain, inventory management, production scheduling, and finance modules',
      'Legacy ERP data migration to Syspro with zero data loss guarantees',
      'Real-time Syspro automated reporting and custom executive dashboards'
    ],
    techStack: ['Syspro ERP', 'Syspro e.net', 'C# / .NET', 'SQL Server', 'Crystal Reports', 'REST APIs'],
    deliverables: [
      'Configured Syspro ERP Environment',
      'Custom Business Objects & Integration Scripts',
      'Data Migration Verification Logs',
      'Staff Training & Standard Operating Procedures'
    ]
  },
  {
    id: 'cybersecurity',
    icon: 'shield-check',
    title: 'Cybersecurity & Compliance',
    description: 'Enterprise penetration testing, OWASP vulnerability assessments, cloud security hardening, SOC2 compliance, and zero-trust security architecture.',
    detailedFeatures: [
      'Penetration testing & comprehensive vulnerability security audits',
      'Zero-trust network architecture, identity management & MFA implementation',
      'Cloud security posture management (AWS / Azure / GCP hardening)',
      'SOC2 Type II, ISO 27001, HIPAA & GDPR compliance frameworks',
      '24/7 automated threat monitoring, WAF setup & DDoS mitigation'
    ],
    techStack: ['Cloudflare WAF', 'OWASP ZAP', 'CrowdStrike', 'AWS GuardDuty', 'HashiCorp Vault', 'Burp Suite'],
    deliverables: [
      'Comprehensive Security Vulnerability Audit Report',
      'Zero-Trust Architecture Blueprint',
      'SOC2 / ISO 27001 Compliance Playbook',
      'Automated Threat Detection System'
    ]
  },
  {
    id: 'salesforce',
    icon: 'cloud',
    title: 'Salesforce Implementation & Development',
    description: 'Tailored Salesforce Sales Cloud, Service Cloud, Lightning Web Components (LWC), Apex development, and CRM integrations.',
    detailedFeatures: [
      'Salesforce Sales Cloud, Service Cloud, and Experience Cloud deployment',
      'Custom Lightning Web Components (LWC) and Apex triggers/classes',
      'Salesforce integration with Syspro ERP, custom backends, and marketing automation',
      'Process Builder, Flow automation, and custom dashboard development',
      'Salesforce Org health audit, data cleansing, and security permission sets'
    ],
    techStack: ['Salesforce CRM', 'Apex', 'Lightning Web Components (LWC)', 'SOQL/SOSL', 'MuleSoft'],
    deliverables: [
      'Configured Salesforce Org & Data Model',
      'Custom LWC Components & Apex Codebase',
      'Third-Party API Integration Endpoints',
      'User Adoption & Admin Playbooks'
    ]
  },
  {
    id: 'ecommerce',
    icon: 'shopping-cart',
    title: 'E-Commerce Development (Shopify, WordPress & Magento)',
    description: 'Scalable e-commerce store engineering on Shopify, WordPress (WooCommerce), and Magento for high transaction volume.',
    detailedFeatures: [
      'Custom Shopify & Shopify Plus theme/app development (Liquid & Hydrogen)',
      'WooCommerce custom plugin development and high-traffic WordPress optimization',
      'Magento 2 (Adobe Commerce) enterprise store engineering & headless setups',
      'Payment gateway integrations (Stripe, PayPal, Razorpay) and multi-currency',
      'Real-time inventory synchronization with Syspro ERP & Salesforce CRM'
    ],
    techStack: ['Shopify Liquid', 'WooCommerce / WordPress', 'Magento 2', 'PHP', 'GraphQL', 'Stripe'],
    deliverables: [
      'High-Converting E-Commerce Storefront',
      'Custom Plugins / Apps',
      'ERP & Inventory Sync Pipeline',
      'Payment Gateway & Checkout Security Audit'
    ]
  },
  {
    id: 'ai-ml',
    icon: 'cpu',
    title: 'AI/ML Development & Implementation',
    description: 'Cutting-edge AI integration, LLM applications, custom machine learning models, predictive analytics, and automated workflows.',
    detailedFeatures: [
      'Generative AI & LLM integration (Gemini API, OpenAI) for enterprise tasks',
      'Retrieval-Augmented Generation (RAG) with Vector DBs for custom knowledge bases',
      'Predictive analytics models for inventory forecasting & demand planning',
      'Computer Vision, OCR document processing, and NLP sentiment analysis',
      'Automated AI agents for ERP and CRM workflow acceleration'
    ],
    techStack: ['Python', 'PyTorch', 'Gemini API', 'FastAPI', 'Pinecone', 'LangChain', 'TensorFlow'],
    deliverables: [
      'Custom Trained / Fine-Tuned AI Models',
      'RESTful AI Microservice Endpoints',
      'Vector Search Database Setup',
      'Model Accuracy & Performance Benchmarks'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumenox',
    title: 'Lumenox',
    subtitle: 'High-Performance Enterprise Management Platform',
    category: 'REACT / LARAVEL',
    image: HOTLINK_IMAGES.lumenox,
    summary: 'A high-performance enterprise management platform built for scalability and real-time data processing.',
    client: 'Lumenox Corp (USA)',
    year: '2025',
    duration: '6 Months',
    results: [
      { metric: '99.99%', label: 'Uptime SLA' },
      { metric: '4.2x', label: 'Faster Query Processing' },
      { metric: '150k+', label: 'Daily Active Users' }
    ],
    overview: 'Lumenox required a ground-up transformation of their legacy operational dashboard into a resilient, real-time enterprise management ecosystem. SRV Technology engineered a decoupled architecture using React 19 on the front end and high-concurrency Laravel APIs on the backend.',
    challenge: 'The existing platform suffered from database lockups under high concurrency, lagging data updates for regional teams, and an outdated user interface that hindered staff productivity.',
    solution: 'We architected a distributed event-driven system leveraging Redis caching, optimized PostgreSQL database indexing, and a modern micro-frontend UI layer. Real-time updates were implemented using WebSocket push events.',
    techStack: ['React', 'Laravel', 'Redis', 'PostgreSQL', 'Tailwind CSS', 'Docker']
  },
  {
    id: 'collar-hire',
    title: 'Collar Hire',
    subtitle: 'AI-Powered Workforce & Recruitment Ecosystem',
    category: 'PYTHON & AI/ML',
    image: HOTLINK_IMAGES.collarHire,
    summary: 'Revolutionizing the hiring landscape with intelligent matching algorithms and predictive workforce analytics.',
    client: 'Collar Hire Global',
    year: '2024',
    duration: '8 Months',
    results: [
      { metric: '65%', label: 'Reduction in Time-to-Hire' },
      { metric: '92%', label: 'Candidate Match Accuracy' },
      { metric: '500k+', label: 'Resumes Vectorized' }
    ],
    overview: 'Collar Hire is a modern talent acquisition suite that matches job seekers with enterprise positions based on skill embeddings, past experience, and cultural alignment.',
    challenge: 'Recruiters spent 20+ hours per week manually screening resumes and filtering low-relevance applicants.',
    solution: 'SRV Technology developed a custom Python AI pipeline that vectorizes candidate profiles, evaluates skill overlaps using LLM semantic embeddings, and generates predictive suitability scores in real time.',
    techStack: ['Python', 'FastAPI', 'Gemini AI API', 'Pinecone Vector DB', 'React', 'TypeScript']
  },
  {
    id: 'the-cary-company',
    title: 'The Cary Company',
    subtitle: 'Massive-Scale E-Commerce Ecosystem',
    category: 'MAGENTO DEVELOPMENT',
    image: HOTLINK_IMAGES.theCaryCompany,
    summary: 'A massive-scale e-commerce ecosystem optimized for high-volume transactions and seamless global distribution.',
    client: 'The Cary Company Inc.',
    year: '2024',
    duration: '10 Months',
    results: [
      { metric: '+140%', label: 'E-Commerce Revenue Growth' },
      { metric: '1.2s', label: 'Average Page Load Speed' },
      { metric: '45k+', label: 'SKUs Cataloged' }
    ],
    overview: 'The Cary Company is a leading industrial supplier requiring a B2B e-commerce platform capable of dynamic custom pricing tiers, bulk freight shipping calculations, and ERP inventory sync.',
    challenge: 'Managing over 45,000 SKUs with variable tier pricing and real-time warehouse inventory was causing slow site performance and basket abandonments.',
    solution: 'SRV Technology built a headless Magento engine coupled with Elasticsearch for sub-second product filtering, alongside dynamic ERP integration for automated order processing.',
    techStack: ['Magento 2', 'PHP 8.2', 'Elasticsearch', 'Varnish Cache', 'Alpine.js', 'GraphQL']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'I have been working with Vikrant and team from last 4 years and they never let me down. The team is very skilled, punctual, responsive and most importantly they are trustable and transparent. I have been developing Mobile Applications and web applications on different technologies with them since 2018.',
    name: 'Joydip Ghosh',
    role: 'CLIENT',
    source: 'CLIENT',
    initials: 'JG',
    rating: 5
  },
  {
    id: 't2',
    quote: 'Great team and excellent communication. Will definitely work with them in the future. React + Node project.',
    name: 'Rohan',
    role: 'UPWORK',
    source: 'UPWORK',
    initials: 'R',
    rating: 5
  },
  {
    id: 't3',
    quote: 'Always up to the mark, on time delivery, satisfactory results. Have been working with him since last 2 years.',
    name: 'IT Manager, SR',
    role: 'CLIENT',
    source: 'CLIENT',
    initials: 'SR',
    rating: 5
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'syspro-salesforce-integration',
    title: 'Bridging Enterprise ERP and CRM: Syspro & Salesforce Integration Strategies',
    category: 'ENTERPRISE SYSTEMS',
    date: '15 JAN 2026',
    readTime: '6 min read',
    image: HOTLINK_IMAGES.articleSeo,
    summary: 'How real-time synchronization between Syspro ERP and Salesforce Sales Cloud drives operational efficiency and order accuracy.',
    tags: ['Syspro ERP', 'Salesforce', 'Enterprise Integration', 'Apex', 'e.net'],
    content: [
      'For mid-market and global enterprises, disconnecting inventory data in Syspro ERP from sales pipelines in Salesforce creates operational friction and order delays.',
      'By leveraging Syspro e.net Business Objects with custom Salesforce Apex triggers and Lightning Web Components, SRV Technology establishes bi-directional sync for inventory, custom price tiers, and customer order histories.',
      'This architecture ensures sales representatives have instant inventory visibility while warehouse teams receive automated order fulfillment requests as soon as deals close.'
    ]
  },
  {
    id: 'ai-ml-decisions',
    title: 'How AI and Machine Learning Are Helping Smarter Decisions',
    category: 'AI / ML',
    date: '15 JAN 2026',
    readTime: '7 min read',
    image: HOTLINK_IMAGES.articleAiMl,
    summary: 'How predictive modeling and generative AI agents are streamlining supply chains, talent acquisition, and operational risk.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'LLM Integration'],
    content: [
      'Modern enterprises generate terabytes of operational telemetry daily, but actionable insight remains scarce without intelligent automated analysis.',
      'By implementing fine-tuned predictive machine learning models and LLM agents, companies can automate routine data transformations and receive proactive anomaly alerts before system bottlenecks occur.',
      'Our team specializes in creating production-grade AI pipelines that seamlessly hook into existing databases with enterprise-level access controls and data privacy.'
    ]
  },
  {
    id: 'ecommerce-future-2026',
    title: 'The Future of E-Commerce in 2026: Redefining Online Shopping',
    category: 'ECOMMERCE',
    date: '15 JAN 2026',
    readTime: '6 min read',
    image: HOTLINK_IMAGES.articleEcommerce,
    summary: 'Headless storefronts, instant AI shopping assistants, and hyper-personalized checkout flows are shaping the modern shopping cart.',
    tags: ['E-Commerce', 'Magento', 'Headless Web', 'Conversion Rate'],
    content: [
      'The traditional monolithic e-commerce stack is quickly giving way to modular, API-first architecture. Retailers need the agility to push new promotional storefronts in hours rather than weeks.',
      'Integrating 3D product previews, instant localized tax and shipping calculators, and friction-free payment methods directly increases checkout conversion rates by up to 35%.',
      'Learn how SRV Technology built custom high-volume commerce engines for brands like The Cary Company to handle millions in annual transaction volumes.'
    ]
  }
];
