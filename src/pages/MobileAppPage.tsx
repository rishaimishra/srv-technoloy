import React from 'react';
import { SEO } from '../components/SEO';
import { Smartphone, CheckCircle2, ShieldCheck, Zap, Layers, Apple } from 'lucide-react';

interface MobileAppPageProps {
  onOpenQuoteRequest: () => void;
}

export const MobileAppPage: React.FC<MobileAppPageProps> = ({
  onOpenQuoteRequest,
}) => {
  return (
    <>
      <SEO
        title="Mobile App Development in Siliguri & West Bengal | SRV Technology"
        description="SRV Technology builds cross-platform and native iOS/Android mobile apps in Siliguri, West Bengal. React Native, Flutter, Swift & Kotlin development. Mobile app agency serving Darjeeling & North Bengal."
        canonical="https://srvtechnology.com/services/mobile-apps"
        keywords={['mobile app development Siliguri', 'app development company West Bengal', 'React Native developer Darjeeling', 'Flutter app North Bengal']}
      />
      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Hero Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-20">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Smartphone className="w-4 h-4" />
          MOBILE ENGINEERING PRACTICE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Mobile App Development <br />
          <span className="text-blue-600">React Native, Flutter & Native Apps</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          We engineer high-performance mobile applications for iOS and Android. Whether you need cross-platform velocity with React Native or Flutter, or maximum platform leverage with native Swift and Kotlin, our team delivers sub-second response times, offline synchronization, and flawless UI/UX.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            SCHEDULE TECHNICAL SCOPING ↗
          </button>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
          Our Mobile Technology Stacks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* React Native */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold">
              RN
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">React Native</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Write once, deploy natively to iOS and Android. Reuses React component state logic across web and mobile while executing native UI components.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Near-native FPS animation performance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Shared JavaScript/TypeScript codebase
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Native bridging to Swift/Kotlin modules
              </li>
            </ul>
            <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider">
              Ideal for: Fast-growing SaaS & Marketplaces
            </div>
          </div>

          {/* Flutter */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold">
              FL
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Flutter (Dart)</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Google’s UI toolkit for compiling pixel-perfect, hardware-accelerated mobile apps using Skia/Impeller graphics engines.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> 60fps / 120fps smooth animations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Identical UI render across screen sizes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Dart ahead-of-time (AOT) compilation
              </li>
            </ul>
            <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider">
              Ideal for: Custom UI/UX & High Graphics Apps
            </div>
          </div>

          {/* Native Swift & Kotlin */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6 font-mono font-bold">
              iOS / Android
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Native iOS & Android</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Pure Swift (iOS) and Kotlin (Android) development for heavy background processing, Bluetooth hardware connectivity, and maximum device APIs.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Direct access to ARKit, CoreML & CameraX
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Zero abstraction layer overhead
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Uncompromised battery & memory optimization
              </li>
            </ul>
            <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider">
              Ideal for: Hardware, Fintech & IoT Apps
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 px-6 md:px-12 xl:px-16 mb-20">
        <div className="max-w-[1450px] mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Mobile Architecture Standards We Enforce
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Encrypted Storage</h3>
              <p className="text-xs text-slate-600">
                AES-256 local database encryption with SQLite/Realm for confidential user data and offline synchronization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Sync</h3>
              <p className="text-xs text-slate-600">
                WebSocket connections and FCM/APNs push notification triggers for immediate operational alerts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Apple className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">App Store Compliance</h3>
              <p className="text-xs text-slate-600">
                Full Apple App Store and Google Play guideline audit to guarantee 100% first-pass review approval.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Layers className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">CI/CD App Pipelines</h3>
              <p className="text-xs text-slate-600">
                Automated Fastlane build deployments for TestFlight and Play Store Internal Testing on every commit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Get in touch with SRV Technology's mobile engineering team for a detailed timeline and technical architecture proposal.
        </p>
        <button
          onClick={onOpenQuoteRequest}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          REQUEST A QUOTE ↗
        </button>
      </div>
    </div>
    </>
  );
};

