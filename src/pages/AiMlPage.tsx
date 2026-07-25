import React from 'react';
import { Cpu, CheckCircle2, Bot, Sparkles, Database, FileText, BarChart3 } from 'lucide-react';

interface AiMlPageProps {
  onOpenQuoteRequest: () => void;
}

export const AiMlPage: React.FC<AiMlPageProps> = ({
  onOpenQuoteRequest,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Header Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-20">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Cpu className="w-4 h-4" />
          ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          AI & Machine Learning <br />
          <span className="text-blue-600">Development & Implementation</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          We build production-grade AI applications, autonomous agents, and predictive machine learning models. From fine-tuning Gemini LLM APIs and building Retrieval-Augmented Generation (RAG) vector search engines to automating document OCR and embedding predictive intelligence into Syspro ERP and Salesforce CRM.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            BOOK AI DISCOVERY CALL ↗
          </button>
        </div>
      </div>

      {/* AI Solutions Matrix */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
          Enterprise AI/ML Solutions We Deliver
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LLM & Gemini Integration */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <Sparkles className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">LLM & Gemini API Integration</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Integration of Gemini 2.5/3 and foundation models using secure server-side proxies, function calling, and structured JSON outputs.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Gemini API & OpenAI Proxy Backends</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom Prompt Engineering & Guardrails</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Structured Output Validation (Zod/Pydantic)</li>
            </ul>
          </div>

          {/* Custom RAG & Vector DBs */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <Database className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vector Search & RAG Engines</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Allowing AI models to query confidential company knowledge bases without leaking data or hallucinating answers.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Pinecone, Qdrant & PGVector DBs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Hybrid Dense & Sparse Vector Search</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Role-Based Document Access Control</li>
            </ul>
          </div>

          {/* Autonomous AI Agents */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <Bot className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Autonomous Workflow Agents</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Multi-step AI agents that execute database tasks, update Syspro ERP records, send emails, and resolve customer support tickets.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> LangChain & LangGraph Orchestration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Automated Syspro & Salesforce Actions</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Human-in-the-loop Approval Triggers</li>
            </ul>
          </div>

          {/* Predictive Machine Learning */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <BarChart3 className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Analytics & ML</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Custom Python machine learning models built for demand forecasting, inventory reorder timing, and customer churn prediction.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> PyTorch & Scikit-Learn Pipelines</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Syspro ERP Inventory Forecasting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Candidate & Lead Suitability Scoring</li>
            </ul>
          </div>

          {/* Document Processing & OCR */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <FileText className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Document OCR & Data Extraction</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Automated extraction of line items, purchase orders, invoices, and resumes with 99%+ accuracy.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Computer Vision & LayoutLM</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Automated Invoice-to-Syspro Processing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> PDF & Image Table Parsing</li>
            </ul>
          </div>

          {/* Fast Production APIs */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm">
            <Cpu className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">FastAPI & Python Microservices</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Containerized Python microservices wrapped with Docker and hosted on Cloud Run / AWS for ultra-fast response times.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Asynchronous FastAPI Endpoints</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Model Monitoring & Log Telemetry</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> GPU Acceleration & TensorRT Tuning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Add Artificial Intelligence to Your Software?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Consult with SRV Technology's AI/ML engineering team to build custom models and intelligent agents.
        </p>
        <button
          onClick={onOpenQuoteRequest}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          START AI PROJECT DISCOVERY
        </button>
      </div>
    </div>
  );
};

