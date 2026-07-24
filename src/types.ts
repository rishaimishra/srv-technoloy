export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  detailedFeatures: string[];
  techStack: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  summary: string;
  client: string;
  year: string;
  duration: string;
  results: { metric: string; label: string }[];
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  galleryImages?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  source: 'CLIENT' | 'UPWORK';
  initials?: string;
  rating?: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
}

