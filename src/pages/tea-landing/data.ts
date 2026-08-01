export interface StrategyLead {
  name: string;
  brandName: string;
  phone: string;
  monthlyRevenue: string;
}

export interface RegionInfo {
  id: string;
  name: string;
  elevation: string;
  keyBrands: string[];
  description: string;
  flushTypes: string[];
  d2cGrowthRate: string;
  exportDestinations: string[];
}

export interface CaseStudy {
  id: string;
  brandName: string;
  category: string;
  growth: string;
  timeframe: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}

export interface SkuPerformanceItem {
  grade: string;
  code: string;
  soldPercentage: number;
  totalKg: number;
  soldKg: number;
  pricePerKg: number;
}

export interface BrandMetrics {
  season: string;
  onlineOrders: number;
  orderGrowthVsLastMonth: number;
  cpaInr: number;
  inventory: SkuPerformanceItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const REGIONS_DATA: RegionInfo[] = [
  {
    id: 'darjeeling',
    name: 'Darjeeling Specialty Tea Brands',
    elevation: '1,200m - 2,100m Origins',
    keyBrands: ['Single-Estate D2C Labels', 'Boutique First Flush Brands', 'Muscatel Reserve Collections'],
    description: 'Specialty tea brands sourcing directly from iconic Darjeeling valleys. We scale D2C ecommerce stores for luxury single-origin and vintage flush collections for tea connoisseurs in Japan, Europe, and the USA.',
    flushTypes: ['Spring Flush Micro-lots', 'Muscatel Reserve', 'Organic White Needle Collections'],
    d2cGrowthRate: '+340% average online revenue growth',
    exportDestinations: ['UK', 'Germany', 'Japan', 'USA', 'France'],
  },
  {
    id: 'siliguri',
    name: 'Siliguri Direct-Sales Hub Brands',
    elevation: 'Foothills Commercial Hub',
    keyBrands: ['Artisanal Blends Co.', 'High-Growth Subscription Tea Brands', 'Express D2C Dispatch Labels'],
    description: "Agile D2C tea brands operating out of Siliguri's logistics hub. We build high-volume automated Shopify stores with express worldwide air-freight and automated phytosanitary export documentation.",
    flushTypes: ['Wellness Herbal Infusions', 'Specialty Green Teas', 'Gourmet Loose Leaf Blends'],
    d2cGrowthRate: '48hr direct dispatch to international buyers',
    exportDestinations: ['Middle East', 'Southeast Asia', 'Europe', 'North America'],
  },
  {
    id: 'dooars',
    name: 'Dooars Bold & Malty Tea Labels',
    elevation: '90m - 300m Origins',
    keyBrands: ['Chai Blend DTC Brands', 'Corporate Gift Tea Brands', 'Boutique Cafe Wholesale Brands'],
    description: 'High-growth tea brands built on bold, malty CTC and Orthodox teas. We help them scale direct subscriber boxes, corporate gifting portals, and high-margin D2C e-commerce channels.',
    flushTypes: ['Artisanal Masala Chai Blends', 'Orthodox Breakfast Loose Leaf', 'Gourmet CTC Tins'],
    d2cGrowthRate: '+215% profit margin vs wholesale distributor channels',
    exportDestinations: ['Middle East', 'Russia', 'UK', 'Australia'],
  },
  {
    id: 'kurseong',
    name: 'Heritage & Luxury Tea Brands',
    elevation: '1,450m - 1,800m Origins',
    keyBrands: ['Boutique Heritage Labels', 'Rare Reserve Tea Collections', 'Curated Connoisseur Gift Boxes'],
    description: 'Ultra-premium tea brands selling limited-edition micro-lots directly to global collectors. We engineer bespoke digital storefronts that convey provenance, craftsmanship, and luxury.',
    flushTypes: ['Silver Needle White Tea', 'Organic Muscatel Reserve', 'Moonlight Harvest Specials'],
    d2cGrowthRate: '₹6,500/kg avg direct customer realization',
    exportDestinations: ['Japan', 'UK', 'Switzerland', 'USA'],
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'castleton-d2c',
    brandName: 'Vedic Leaf Specialty Tea Brand',
    category: 'Direct-to-Consumer E-Commerce',
    growth: '3.8x Online Revenue',
    timeframe: 'First Flush Launch',
    summary: 'By transitioning from Amazon marketplace dependency to their own dedicated Shopify D2C store, Vedic Leaf launched a pre-order subscriber engine for European collectors, generating ₹48 Lakhs in direct sales.',
    highlights: [
      'Automated WhatsApp price calculator & sampler request bot',
      'Luxury gift packaging selector with personalized wax seal tags',
      'Integrated DHL Express door-to-door global tracking',
    ],
    metrics: [
      { label: 'Marketplace Net Margin', value: '18%' },
      { label: 'Own Store D2C Margin', value: '54%' },
      { label: 'Subscriber Retention', value: '42%' },
    ],
  },
  {
    id: 'makaibari-heritage',
    brandName: 'Himalayan Infusions D2C',
    category: 'Subscription & Global Retail',
    growth: '280% CAC Efficiency',
    timeframe: '90 Days Post-Launch',
    summary: 'Built a mobile-first Shopify + Meta ad engine connecting global tea lovers directly to rare single-origin Darjeeling and Assam micro-lots with automated monthly tea club subscriptions.',
    highlights: [
      'Interactive flavor wheel questionnaire on mobile storefront',
      'Automated SMS & WhatsApp notifications for fresh flush drops',
      'Multi-currency payment gateway supporting USD, EUR, JPY, and INR',
    ],
    metrics: [
      { label: 'E-commerce Conversion', value: '4.6%' },
      { label: 'Cost Per Acquisition', value: '₹280' },
      { label: 'Repeat Purchase Rate', value: '41%' },
    ],
  },
  {
    id: 'dooars-ctc-brand',
    brandName: 'Chai Craft Direct',
    category: 'B2B & D2C Hybrid Brand',
    growth: '₹1.4 Cr D2C Revenue',
    timeframe: '6 Months Scale-Up',
    summary: 'Shifted 40% of sales from low-margin distributor channels to a direct corporate gifting and cafe portal, capturing higher profit margins on artisanal chai blends and gift boxes.',
    highlights: [
      'B2B custom branding portal for corporate bulk buyers',
      'Automated GST invoicing & bulk shipping calculator',
      'Meta & LinkedIn Ad campaigns targeting corporate HRs and café owners',
    ],
    metrics: [
      { label: 'Direct Annual Revenue', value: '₹1.4 Cr' },
      { label: 'Net Profit Margin', value: '38%' },
      { label: 'Average Order Value', value: '₹18,500' },
    ],
  },
];

export const INITIAL_HARVEST_METRICS: BrandMetrics = {
  season: 'Q3 Direct Growth 2026',
  onlineOrders: 342,
  orderGrowthVsLastMonth: 24,
  cpaInr: 280,
  inventory: [
    { grade: 'Top SKU: First Flush Darjeeling Reserve', code: 'DAR-FF1', soldPercentage: 84, totalKg: 500, soldKg: 420, pricePerKg: 7500 },
    { grade: 'Top SKU: Artisanal Masala Chai Tin', code: 'CHAI-ART', soldPercentage: 92, totalKg: 1200, soldKg: 1104, pricePerKg: 1800 },
    { grade: 'Top SKU: Organic White Needle Sampler', code: 'WHITE-SAM', soldPercentage: 68, totalKg: 300, soldKg: 204, pricePerKg: 12000 },
  ],
};

export const SEASON_PRESETS: Record<'spring' | 'summer' | 'autumn', BrandMetrics> = {
  spring: INITIAL_HARVEST_METRICS,
  summer: {
    season: 'Festive Season Campaign 2026',
    onlineOrders: 512,
    orderGrowthVsLastMonth: 38,
    cpaInr: 220,
    inventory: [
      { grade: 'Top SKU: Single-Estate Reserve Box', code: 'RES-BOX', soldPercentage: 94, totalKg: 800, soldKg: 752, pricePerKg: 8800 },
      { grade: 'Top SKU: Artisanal Chai Sampler Pack', code: 'CHAI-PACK', soldPercentage: 88, totalKg: 1500, soldKg: 1320, pricePerKg: 2200 },
      { grade: 'Top SKU: Organic Herbal Detox Infusions', code: 'HERBAL', soldPercentage: 76, totalKg: 600, soldKg: 456, pricePerKg: 4500 },
    ],
  },
  autumn: {
    season: 'Winter Gift Box Season 2026',
    onlineOrders: 640,
    orderGrowthVsLastMonth: 45,
    cpaInr: 195,
    inventory: [
      { grade: 'Top SKU: Luxury Wooden Gift Chest', code: 'GIFT-CHEST', soldPercentage: 98, totalKg: 1000, soldKg: 980, pricePerKg: 9500 },
      { grade: 'Top SKU: Monthly Tea Club Subscription', code: 'SUB-CLUB', soldPercentage: 82, totalKg: 2000, soldKg: 1640, pricePerKg: 3600 },
      { grade: 'Top SKU: Royal First Flush Collection', code: 'ROYAL-FF', soldPercentage: 91, totalKg: 500, soldKg: 455, pricePerKg: 11000 },
    ],
  },
};

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How do you help tea brands reduce dependence on Amazon & Flipkart?',
    answer: 'We build high-converting, mobile-first brand storefronts on Shopify integrated with Meta Ads, Google Shopping, and automated WhatsApp retargeting. This gives you full ownership of your customer data, higher repeat purchase rates, and significantly higher net margins without paying 25-30% platform fees.',
  },
  {
    question: 'Can we acquire high-ticket international customers in Europe, Japan, and the USA?',
    answer: 'Yes. We run geo-targeted Meta and Google campaigns reaching verified tea collectors, specialty tea shops, and connoisseurs. Integrated multi-currency checkout and express air shipping (DHL/FedEx) ensure a frictionless buying experience.',
  },
  {
    question: 'How fast can our D2C tea store and marketing engine go live?',
    answer: 'Our turnkey launch takes 3 to 5 weeks. We design your storefront, set up payment gateways (Razorpay, Stripe, PayPal), integrate logistics tracking, and launch high-converting ad campaigns before your peak sales season.',
  },
  {
    question: 'How does WhatsApp automation increase tea brand repeat orders?',
    answer: "Tea is a high-repeat consumption product. Our WhatsApp engine automatically triggers personalized refill reminders when a customer's tea supply is likely running low, offers exclusive pre-launch access to fresh flush drops, and resolves buyer queries instantly.",
  },
  {
    question: 'Do you manage performance ad campaigns for tea brands?',
    answer: 'Yes. We handle end-to-end performance marketing including Meta (Instagram/Facebook) ads, Google Search & Shopping ads, creative design, copy, and ROAS optimization tailored specifically for beverage and CPG tea brands.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Brand Audit & Margin Analysis',
    description: 'We audit your current sales channels (marketplaces, retail, distributors) and model your direct-to-consumer profit potential.',
  },
  {
    step: '02',
    title: 'High-Converting D2C Storefront',
    description: 'We build a mobile-first Shopify e-commerce store with rich brand storytelling, custom subscription modules, and multi-currency checkout.',
  },
  {
    step: '03',
    title: 'Connoisseur Ads & WhatsApp Retargeting',
    description: 'We deploy precision Meta & Google ad campaigns targeting tea lovers while setting up WhatsApp automation for high repeat purchase rates.',
  },
  {
    step: '04',
    title: 'Logistics Integration & ROAS Scaling',
    description: 'We plug in automated shipping & tracking (Shiprocket/DHL) and optimize ad spend weekly to maximize return on ad spend and net profit.',
  },
];
