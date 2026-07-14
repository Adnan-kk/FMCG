import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Factory, TrendingUp, Import, ShieldAlert, CheckCircle, Users, Sparkles, Truck, ChevronRight } from "lucide-react";
import { WHO_WE_HELP } from "../data";

interface WhoWeHelpProps {
  onBookClick: (customMessage?: string) => void;
}

export default function WhoWeHelp({ onBookClick }: WhoWeHelpProps) {
  const [activeTab, setActiveTab] = useState<string>("manufacturers");

  // Map icon names to components
  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case "manufacturers":
        return <Factory className={colorClass} size={24} />;
      case "traders":
        return <TrendingUp className={colorClass} size={24} />;
      case "importers-exporters":
        return <Import className={colorClass} size={24} />;
      case "brand-owners":
        return <Sparkles className={colorClass} size={24} />;
      case "distributors":
        return <Truck className={colorClass} size={24} />;
      default:
        return <Users className={colorClass} size={24} />;
    }
  };

  const activeData = WHO_WE_HELP.find((item) => item.id === activeTab) || WHO_WE_HELP[0];

  return (
    <section id="whowehelp" className="py-24 bg-[var(--pearl-white)] border-b border-[var(--visible-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[var(--primary-blue)]"></span>
            <span className="text-xs font-bold tracking-widest text-[var(--primary-blue)] uppercase">Target Sectors</span>
            <span className="w-6 h-px bg-[var(--primary-blue)]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] tracking-tight">
            Tailored Solutions for Your Business
          </h2>
          <p className="mt-4 text-[var(--muted-text)] font-light text-base md:text-lg">
            Whether you are entering the Gulf market for the first time or looking to optimize an underperforming distributor network, we align our strategic support to your specific structure.
          </p>
        </div>

        {/* Responsive Layout: Vertical Tabs on Desktop, Accordion/Grid on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Tabs (Left 4 columns) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase font-bold text-[var(--muted-text)] tracking-wider mb-2 text-left">Select Your Profile</p>
            {WHO_WE_HELP.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-5 transition-all duration-300 flex items-center justify-between border-l-4 ${
                    isActive
                      ? "bg-[var(--primary-blue)] text-white border-[var(--primary-blue)] shadow-md"
                      : "bg-[var(--pearl-white)] text-[var(--dark-navy)] border-transparent hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {getIcon(item.id, isActive ? "text-white" : "text-[var(--primary-blue)]")}
                    <div>
                      <h4 className="font-bold text-sm sm:text-base tracking-wide">{item.title}</h4>
                      <p className={`text-xs mt-0.5 font-light ${isActive ? "text-slate-300" : "text-[var(--muted-text)]"}`}>
                        FMCG support structures
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? "rotate-90 text-[var(--primary-blue)]" : "text-[var(--muted-text)]"}`} />
                </button>
              );
            })}
          </div>

          {/* Dynamic Details Panel (Right 7 columns) */}
          <div className="lg:col-span-7 bg-[var(--pearl-white)] border border-[var(--visible-border)] p-6 sm:p-8 md:p-10 text-left min-h-[440px] flex flex-col justify-between shadow-sm relative">
            {/* Highlight bracket */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-300"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[var(--primary-blue)] text-white">
                    {getIcon(activeData.id, "text-white")}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--muted-text)]">Target Client Group</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--primary-blue)]">{activeData.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--dark-navy)] text-sm sm:text-base leading-relaxed font-light">
                  {activeData.description}
                </p>

                {/* Key Pain Points in the UAE */}
                <div>
                  <h5 className="text-xs uppercase font-bold text-red-600 tracking-wider mb-3 flex items-center gap-1.5">
                    <ShieldAlert size={14} />
                    Common UAE Market Challenges Faced
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeData.painPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 bg-[var(--pearl-white)] border border-red-100 p-3">
                        <span className="text-red-500 font-bold text-xs mt-0.5">•</span>
                        <span className="text-xs text-[var(--dark-navy)] font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Interventions */}
                <div>
                  <h5 className="text-xs uppercase font-bold text-[var(--primary-blue)] tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle size={14} />
                    How We Help You Succeed
                  </h5>
                  <p className="text-xs text-[var(--muted-text)] font-black leading-relaxed mb-1">
                    Through direct representation, we provide clear listing paths, category buyer reviews, and inventory audits to convert these bottlenecks into growth.
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* CTA action tailored to tab selection */}
            <div className="mt-8 pt-6 border-t border-[var(--visible-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[var(--muted-text)] font-light text-center sm:text-left">
                Need a specific proposal for your <strong>{activeData.title}</strong> setup?
              </p>
              <button
                onClick={() => onBookClick(`Hello, I am interested in business support services specifically for ${activeData.title}.`)}
                className="w-full sm:w-auto bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white text-xs font-bold uppercase tracking-wider py-3 px-5 transition-all"
              >
                Start Your Growth
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
