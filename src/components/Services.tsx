import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileCheck, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Network, 
  BarChart3, 
  Sparkles, 
  Megaphone, 
  Wallet, 
  ShoppingBag,
  Plus,
  Minus,
  Check,
  ChevronRight
} from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onBookClick: (customMessage?: string) => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCheck":
        return <FileCheck size={22} />;
      case "ShieldCheck":
        return <ShieldCheck size={22} />;
      case "TrendingUp":
        return <TrendingUp size={22} />;
      case "Layers":
        return <Layers size={22} />;
      case "Network":
        return <Network size={22} />;
      case "BarChart3":
        return <BarChart3 size={22} />;
      case "Sparkles":
        return <Sparkles size={22} />;
      case "Megaphone":
        return <Megaphone size={22} />;
      case "Wallet":
        return <Wallet size={22} />;
      case "ShoppingBag":
        return <ShoppingBag size={22} />;
      default:
        return <FileCheck size={22} />;
    }
  };

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="services" className="relative overflow-hidden border-b border-[var(--visible-border)] bg-[var(--pearl-white)] py-20 sm:py-24">
      {/* Decorative architectural background graphics */}
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[var(--soft-aqua)]/45 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-24 left-0 h-48 w-48 rounded-full bg-[var(--primary-blue)]/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="text-left max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-10 bg-[var(--primary-blue)]"></span>
              <span className="text-xs font-bold tracking-widest text-[var(--primary-blue)] uppercase">OUR SERVICES</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--dark-navy)] md:text-4xl lg:whitespace-nowrap">
              Comprehensive Operational Support
            </h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-[var(--muted-text)] sm:text-base">
              Bespoke execution support to accelerate listings, monitor on-shelf execution, audit competitor behavior, and manage trade relations across all emirates.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-xs text-[var(--muted-text)] font-light italic">Click on any service card to view detailed activities</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-none border border-white/[0.18] bg-[var(--primary-blue)] text-left shadow-[0_8px_24px_rgba(16,32,51,0.16)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--primary-blue)] hover:bg-[var(--pearl-white)] hover:shadow-[0_18px_38px_rgba(16,32,51,0.26)] ${
                  isExpanded ? "shadow-[0_14px_30px_rgba(16,32,51,0.22)]" : ""
                }`}
                onClick={() => toggleExpand(service.id)}
              >
                {/* Visual top border active tag */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-white/45 transition-colors duration-300 group-hover:bg-[var(--primary-blue)]"></div>

                <div className="flex-1 p-6 sm:p-7">
                  {/* Icon & Toggle Row */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="rounded-none bg-white/12 p-3 text-[var(--soft-aqua)] transition-all duration-300 group-hover:bg-[var(--soft-aqua)] group-hover:text-[var(--primary-blue)]">
                      {getIcon(service.iconName)}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(service.id);
                      }}
                      className="rounded-none bg-white/15 p-1.5 text-white transition-colors duration-300 group-hover:bg-[var(--soft-aqua)] group-hover:text-[var(--primary-blue)]"
                      title={isExpanded ? "Collapse" : "Expand Details"}
                    >
                      {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[var(--dark-navy)]">{service.title}</h3>
                  <p className="mb-4 text-xs font-light leading-6 text-white/[0.78] transition-colors duration-300 group-hover:text-[var(--muted-text)] sm:text-sm">
                    {service.description}
                  </p>

                  {/* Expandable sub-tasks details with AnimatePresence */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-2 border-t border-white/25 pt-4 transition-colors duration-300 group-hover:border-[var(--primary-blue)]/20">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--soft-aqua)] transition-colors duration-300 group-hover:text-[var(--primary-blue)]">Execution Scope:</p>
                          <ul className="space-y-1.5">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs font-light text-white/[0.84] transition-colors duration-300 group-hover:text-[var(--muted-text)]">
                                <Check size={12} className="shrink-0 text-[var(--soft-aqua)] transition-colors duration-300 group-hover:text-[var(--primary-blue)]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Action Footer */}
                <div className="mt-auto flex items-center justify-between rounded-none border-t border-white/20 px-6 py-4 text-xs transition-colors duration-300 group-hover:border-[var(--primary-blue)]/20 group-hover:bg-white">
                  <span className="flex items-center gap-1 font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary-blue)]">
                    {isExpanded ? "Hide Specific Tasks" : "View Specific Tasks"}
                    <ChevronRight size={12} />
                  </span>
                  
                  {isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookClick(`Hello, I am interested in inquiring about your: "${service.title}" support service for the UAE retail market.`);
                      }}
                      className="rounded-none bg-[var(--soft-aqua)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[var(--dark-navy)] transition-colors hover:bg-white"
                    >
                      Let's Talk Now
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Growth Enquiry prompt */}
        <div className="mt-16 text-center p-8 bg-[var(--primary-blue)] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold">Unsure which services fit your SKU profile?</h4>
          <p className="text-xs text-slate-300 font-light mt-1">Start with a focused review of your product category and a custom activation checklist.</p>
          </div>
          <button
            onClick={() => onBookClick("Hello, I need general guidance on which services best fit our brand's SKU portfolio.")}
            className="w-full md:w-auto shrink-0 bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 transition-colors shadow-lg"
          >
            Let's Talk Now
          </button>
        </div>

      </div>
    </section>
  );
}
