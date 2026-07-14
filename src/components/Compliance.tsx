import React from "react";
import { ShieldCheck, FileCheck, ClipboardList, AlertCircle, Check } from "lucide-react";
import { COMPLIANCE_ITEMS } from "../data";

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-[var(--pearl-white)] border-b border-[var(--visible-border)] relative overflow-hidden">
      {/* Decorative background badge overlay */}
      <div className="absolute right-0 top-0 text-[120px] font-extrabold text-slate-100 uppercase select-none tracking-tighter leading-none origin-top-right -rotate-12 opacity-50 hidden xl:block">
        COMPLIANT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel copy */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[var(--primary-blue)]"></span>
              <span className="text-xs font-bold tracking-widest text-[var(--primary-blue)] uppercase">Regulatory Clearance</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] tracking-tight mb-6">
              Liaison & Regulatory Compliance Coordination
            </h2>

            <p className="text-sm sm:text-base text-[var(--dark-navy)] font-light leading-relaxed mb-6">
              Securing retail listings in the UAE is impossible without proper government approvals, product registrations, and chemical/health clearances. 
            </p>

            <p className="text-xs sm:text-sm text-[var(--muted-text)] font-light leading-relaxed mb-8">
              We bridge the gap between international brand formulations and local standards, advising on label translations, Arabic formatting, testing documents, and dossier preparation.
            </p>

          </div>

          {/* Right panel listing of authorities */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs uppercase font-bold text-[var(--muted-text)] tracking-wider text-left pl-1">Primary Agency Liaison Channels</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPLIANCE_ITEMS.map((item) => {
                return (
                  <div
                    key={item.agency}
                    className="bg-[var(--pearl-white)] border border-[var(--visible-border)] p-6 text-left hover:border-[var(--primary-blue)] transition-colors shadow-sm relative group"
                  >
                    {/* Tiny visual corner accent */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-slate-100 group-hover:bg-[var(--primary-blue)] transition-colors"></div>

                    {/* Agency short identifier */}
                    <span className="inline-block px-2.5 py-0.5 bg-[var(--primary-blue)] text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                      {item.agency}
                    </span>

                    {/* Agency Full Title */}
                    <h4 className="text-sm font-bold text-[var(--primary-blue)] mb-2">
                      {item.fullName}
                    </h4>

                    {/* Description of what they coordinate */}
                    <p className="text-xs text-[var(--muted-text)] leading-relaxed font-light">
                      {item.purpose}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick coordination features bar */}
            <div className="p-5 bg-[var(--pearl-white)] border border-[var(--visible-border)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[var(--dark-navy)]">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[var(--primary-blue)] shrink-0" />
                <span>Ingredient Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[var(--primary-blue)] shrink-0" />
                <span>Arabic Label Adaptation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[var(--primary-blue)] shrink-0" />
                <span>Montaji Dossier Liaison</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
