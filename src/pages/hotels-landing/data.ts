export interface PropertyPreset {
  id: string;
  name: string;
  location: string;
  rooms: number;
  websiteEnquiries: number;
  costPerEnquiry: string;
  avgResponseTime: string;
  commissionAvoided: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewFormData {
  fullName: string;
  propertyName: string;
  phone: string;
  location: string;
  propertySize: string;
}

export const PROPERTY_PRESETS: PropertyPreset[] = [
  {
    id: 'darjeeling-homestay',
    name: 'Darjeeling Homestay',
    location: 'Darjeeling, WB',
    rooms: 8,
    websiteEnquiries: 24,
    costPerEnquiry: '₹180–280',
    avgResponseTime: 'Under 15 min',
    commissionAvoided: '₹42,500/mo',
  },
  {
    id: 'digha-resort',
    name: 'Digha Beachside Resort',
    location: 'Digha, WB',
    rooms: 22,
    websiteEnquiries: 68,
    costPerEnquiry: '₹140–220',
    avgResponseTime: 'Under 8 min',
    commissionAvoided: '₹1,28,000/mo',
  },
  {
    id: 'kolkata-boutique',
    name: 'Kolkata Heritage Hotel',
    location: 'Kolkata, WB',
    rooms: 16,
    websiteEnquiries: 45,
    costPerEnquiry: '₹210–310',
    avgResponseTime: 'Under 10 min',
    commissionAvoided: '₹1,05,000/mo',
  },
  {
    id: 'mandarmani-stay',
    name: 'Mandarmani Sea View Villa',
    location: 'Mandarmani, WB',
    rooms: 12,
    websiteEnquiries: 38,
    costPerEnquiry: '₹160–250',
    avgResponseTime: 'Under 12 min',
    commissionAvoided: '₹78,000/mo',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Will this actually reduce our OTA dependency, or just add another cost?',
    answer: "The goal is direct bookings that don't carry a commission. Most properties see the effect gradually over 60–90 days as the website and ads mature — we report on this monthly so you can see it happening.",
  },
  {
    id: 'faq-2',
    question: "We're a small homestay — is this only for big hotels?",
    answer: "No. Independent homestays and boutique properties are exactly who this is built for — you don't need an in-house marketing team to benefit.",
  },
  {
    id: 'faq-3',
    question: 'How long before we see results?',
    answer: 'Website and campaign setup typically takes 1–2 weeks. Meaningful enquiry flow usually builds over the following 4–8 weeks as campaigns are optimised.',
  },
  {
    id: 'faq-4',
    question: 'Is there a long-term contract?',
    answer: 'We start with a short initial engagement so you can evaluate results before committing longer-term. We believe in performance-based partnerships.',
  },
];
