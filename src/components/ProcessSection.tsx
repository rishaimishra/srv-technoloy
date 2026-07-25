import React, { useState } from 'react';
import { 
  Compass, 
  Layout, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Sparkles,
  Clock,
  Info
} from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  deliverables: string[];
  duration: string;
  highlights: string[];
}

interface ProcessSectionProps {
  onRequestQuote?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onRequestQuote,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Architecture',
      subtitle: 'Requirements Gathering & Technical Blueprint',
      description: 'We analyze your business objectives, system requirements, data workflows, and compliance constraints to design a resilient, future-proof cloud architecture.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      duration: '1 - 2 Weeks',
      deliverables: [
        'Software Architecture Document (SAD)',
        'Tech Stack & Integration Matrix',
        'Data Flow & ERD Blueprints',
        'Milestone Roadmap & Cost Estimate'
      ],
      highlights: [
        'Stakeholder Interviews',
        'Legacy System Audit',
        'Security & Compliance Review'
      ]
    },
    {
      number: '02',
      title: 'UI/UX & Prototyping',
      subtitle: 'Design System & API Specifications',
      description: 'Our design team crafts intuitive user journeys, interactive Figma wireframes, and scalable design tokens while engineers outline complete API contracts.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      duration: '2 - 3 Weeks',
      deliverables: [
        'High-Fidelity Figma Prototypes',
        'Reusable Component Library',
        'User Journey Mapping',
        'OpenAPI / Swagger Specs'
      ],
      highlights: [
        'Accessibility (WCAG 2.1 AA)',
        'Clickable Interactive Wireframes',
        'Design System Documentation'
      ]
    },
    {
      number: '03',
      title: 'Agile Engineering',
      subtitle: 'Sprint-Based Full-Stack Development',
      description: 'Senior engineers build modular, high-performance software in 2-week sprint cycles with test-driven development (TDD) and bi-weekly client demos.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      icon: <Terminal className="w-5 h-5 text-blue-600" />,
      duration: '4 - 12 Weeks',
      deliverables: [
        'Production-Grade Source Code',
        'Live Staging Environment',
        'Bi-Weekly Sprint Demos',
        'Automated CI/CD Pipelines'
      ],
      highlights: [
        'Test-Driven Development',
        'Continuous Integration',
        'Transparent Code Reviews'
      ]
    },
    {
      number: '04',
      title: 'QA, Security & SLA Testing',
      subtitle: 'Penetration Testing & Performance Tuning',
      description: 'We perform automated unit testing, end-to-end load benchmarking, OWASP vulnerability assessments, and SOC2 readiness audits prior to release.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      duration: '1 - 2 Weeks',
      deliverables: [
        'Penetration Testing Audit Report',
        'Automated Test Suite Execution',
        'Sub-Second SLA Validation',
        'SOC2 & ISO Compliance Checklist'
      ],
      highlights: [
        'OWASP Security Audit',
        'Stress & Load Testing',
        'Cross-Browser & Device Verification'
      ]
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      subtitle: 'Zero-Downtime Go-Live & Handover',
      description: 'We execute blue-green deployments on cloud infrastructure (AWS/GCP/Azure), complete zero-loss data migrations, and deliver full source code ownership.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      icon: <Rocket className="w-5 h-5 text-blue-600" />,
      duration: '1 Week',
      deliverables: [
        'Deployed Production Environment',
        'Automated Infrastructure as Code',
        '100% IP Source Code Handover',
        'User Training & Admin Guides'
      ],
      highlights: [
        'Zero-Downtime Migration',
        'Production Smoke Tests',
        'IP & Repository Handover'
      ]
    },
    {
      number: '06',
      title: 'Ongoing SLA & Scaling',
      subtitle: '24/7 Monitoring & Feature Iterations',
      description: 'Our team provides 24/7 infrastructure monitoring, 99.9% uptime SLA maintenance, automated security updates, and continuous feature enhancement.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: <Headphones className="w-5 h-5 text-blue-600" />,
      duration: 'Continuous',
      deliverables: [
        'Real-Time Monitoring Dashboard',
        'Guaranteed SLA Response Times',
        'Monthly Performance Reports',
        'Continuous Iteration Backlog'
      ],
      highlights: [
        '24/7 Uptime Monitoring',
        'Proactive Security Patches',
        'Dedicated SLA Tech Leads'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Architectural Dot Pattern & Light Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-blue-700 font-caps text-xs tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            DEVELOPMENT & DELIVERY LIFECYCLE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Proven Engineering Process
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial architecture discovery to automated deployment and continuous SLA support, we follow a transparent 6-stage lifecycle engineered for predictable, high-quality deliverables.
          </p>
        </div>

        {/* Desktop & Tablet Lifecycle Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`bg-white border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer group relative ${
                  isSelected
                    ? 'border-blue-600 shadow-xl shadow-blue-500/10 ring-2 ring-blue-600/20 -translate-y-1'
                    : 'border-slate-200 hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                {/* Visual Image Banner with Badges Overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-sm font-black text-white font-caps tracking-wider bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm border border-blue-400/30">
                      PHASE {step.number}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-caps font-bold text-slate-800 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-200/80 shadow-sm">
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon Badge Bottom Right of Image */}
                  <div className="absolute bottom-3 right-4 p-2.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-caps font-bold text-blue-600 mb-3 tracking-wider">
                      {step.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Key Deliverables List */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <p className="text-xs font-caps font-bold text-slate-800 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Note Disclaimer Callout */}
        <div className="mb-10 bg-slate-100/90 border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-slate-700 shadow-xs">
          <div className="p-2.5 bg-blue-100/80 text-blue-800 rounded-xl shrink-0 border border-blue-200">
            <Clock className="w-5 h-5 text-blue-700" />
          </div>
          <div className="leading-relaxed">
            <span className="font-bold text-slate-900 font-caps tracking-wider uppercase block sm:inline mr-2">
              PROJECT TIMELINE ADVISORY:
            </span>
            Estimated delivery schedules and milestone durations are tailored during Phase 01 Discovery and may vary based on system architectural complexity, integration scope, and specific enterprise requirements.
          </div>
        </div>

        {/* Process Guarantee & Action Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-blue-700 font-caps text-xs font-bold tracking-widest block mb-2 uppercase">
              TRANSPARENT GOVERNANCE & SOURCE CODE OWNERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Ready to Kick Off Phase 01 for Your Project?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide 100% intellectual property ownership, daily code commits, NDA protection, and transparent milestone tracking on every custom engagement.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            {onRequestQuote && (
              <button
                onClick={onRequestQuote}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-caps text-xs font-bold tracking-wider transition-all shadow-md flex items-center justify-center gap-2 uppercase"
                id="process-request-quote-btn"
              >
                REQUEST FOR QUOTE
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
