import React from 'react';
import { Database, Cloud, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

interface ErpSalesforcePageProps {
  onOpenQuoteRequest: () => void;
}

export const ErpSalesforcePage: React.FC<ErpSalesforcePageProps> = ({
  onOpenQuoteRequest,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-24 font-sans">
      {/* Header Banner */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto mb-20">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-xs tracking-widest uppercase font-bold mb-4">
          <Database className="w-4 h-4" />
          ENTERPRISE SYSTEMS PRACTICE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-sans">
          Syspro ERP Implementation & <br />
          <span className="text-blue-600">Salesforce CRM Development</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          SRV Technology delivers end-to-end Syspro ERP implementation and Salesforce CRM engineering. We specialize in customizing Syspro e.net Business Objects, building Lightning Web Components (LWC), and orchestrating bi-directional data pipelines that keep inventory, sales pipelines, and accounting in lockstep.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onOpenQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            REQUEST ERP & CRM SCOPING ↗
          </button>
        </div>
      </div>

      {/* Deep Dive Grid: Syspro ERP & Salesforce */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {/* Syspro ERP Practice */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl border border-blue-200">
                <Database className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Syspro ERP Implementation</h2>
                <span className="text-xs font-mono text-slate-500 font-medium">Enterprise Resource Planning</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Tailored Syspro ERP deployment for manufacturing, distribution, and global supply chain operations. We build custom Business Objects and extend Syspro modules to eliminate manual data re-entry.
            </p>

            <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-4">
              Core Syspro Services
            </h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Syspro e.net Business Objects:</strong> Custom C# / .NET integrations and REST APIs.</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Inventory & Warehouse Management:</strong> Real-time SKU tracking, multi-bin allocations, and lot traceability.</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Supply Chain & Production Scheduling:</strong> Automated bill of materials (BOM) and capacity planning.</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Data Migration & Financial Reporting:</strong> Safe legacy data import, SQL Server tuning, and Crystal Reports.</span>
              </li>
            </ul>

            <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6">
              <span className="text-[11px] font-mono text-slate-500 block mb-2 font-semibold">SYSPRO TECH STACK</span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-blue-700 font-bold">
                <span>Syspro e.net</span> • <span>C# / .NET</span> • <span>SQL Server</span> • <span>Crystal Reports</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenQuoteRequest}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            DISCUSS SYSPRO IMPLEMENTATION
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Salesforce Practice */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl border border-blue-200">
                <Cloud className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Salesforce Development</h2>
                <span className="text-xs font-mono text-slate-500 font-medium">Sales & Service Cloud Engineering</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Custom Salesforce development that empowers sales teams, streamlines service desks, and automates deal workflows with Lightning Web Components (LWC) and Apex logic.
            </p>

            <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-4">
              Core Salesforce Services
            </h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Lightning Web Components (LWC):</strong> Custom responsive interfaces directly embedded in Salesforce orgs.</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Apex Classes & Triggers:</strong> Complex server-side business rules, asynchronous batch jobs, and SOQL queries.</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Syspro & ERP Sync Pipelines:</strong> Bi-directional synchronization for accounts, orders, and custom pricing tiers.</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Sales Cloud & Service Cloud Setup:</strong> Lead routing, pipeline forecasting, and automated SLA ticket handling.</span>
              </li>
            </ul>

            <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6">
              <span className="text-[11px] font-mono text-slate-500 block mb-2 font-semibold">SALESFORCE TECH STACK</span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-blue-700 font-bold">
                <span>Apex</span> • <span>Lightning Web Components</span> • <span>SOQL/SOSL</span> • <span>Salesforce REST API</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenQuoteRequest}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            DISCUSS SALESFORCE DEVELOPMENT
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Integration Diagram Callout */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 px-6 md:px-12 xl:px-16 mb-20">
        <div className="max-w-[1450px] mx-auto text-center">
          <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Unified Syspro ERP + Salesforce Integration Architecture
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Eliminate operational silos. When a sale closes in Salesforce, our real-time API connector instantly provisions the order in Syspro ERP, updates warehouse inventory, and notifies customer service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-mono font-bold text-blue-700 mb-2">STEP 1: SALESFORCE DEAL CLOSE</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Opportunity Closed/Won</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apex trigger validates deal items and triggers secure webhook payload to our microservice middleware.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-mono font-bold text-blue-700 mb-2">STEP 2: MIDDLEWARE VALIDATION</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Business Logic & Auth</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Node.js/C# middleware checks inventory levels in Syspro e.net Business Objects and formats order data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-mono font-bold text-blue-700 mb-2">STEP 3: SYSPRO FULFILLMENT</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">ERP Order Creation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Syspro ERP commits sales order, updates bin allocations, and returns order status back to Salesforce CRM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-16 max-w-[1450px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Modernize Your ERP & CRM Infrastructure?
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
          Consult with SRV Technology's certified Syspro and Salesforce engineering team today.
        </p>
        <button
          onClick={onOpenQuoteRequest}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md"
        >
          SCHEDULE ARCHITECTURE SESSION
        </button>
      </div>
    </div>
  );
};

