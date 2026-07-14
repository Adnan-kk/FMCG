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
    <section id="services" className="py-24 bg-[var(--pearl-white)] relative overflow-hidden border-b border-[var(--visible-border)]">
      {/* Decorative architectural background graphics */}
      <div className="absolute right-0 top-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[var(--primary-blue)]"></span>
              <span className="text-xs font-bold tracking-widest text-[var(--primary-blue)] uppercase">OUR SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] tracking-tight lg:whitespace-nowrap">
              Comprehensive Operational Support
            </h2>
            <p className="mt-3 text-[var(--muted-text)] font-light text-sm sm:text-base">
              Bespoke execution support to accelerate listings, monitor on-shelf execution, audit competitor behavior, and manage trade relations across all emirates.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-xs text-[var(--muted-text)] font-light italic">Click on any service card to view detailed activities</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`bg-[var(--pearl-white)] border text-left flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-pointer group ${
                  isExpanded 
                    ? "border-[var(--primary-blue)] ring-1 ring-[var(--primary-blue)] shadow-md" 
                    : "border-[var(--visible-border)] hover:border-[var(--primary-blue)] hover:shadow-md"
                }`}
                onClick={() => toggleExpand(service.id)}
              >
                {/* Visual top border active tag */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all ${isExpanded ? "bg-[var(--primary-blue)]" : "bg-transparent"}`}></div>

                <div className="p-6 sm:p-8">
                  {/* Icon & Toggle Row */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 transition-colors ${isExpanded ? "bg-[var(--primary-blue)] text-white" : "bg-[var(--primary-blue)]/5 text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white"}`}>
                      {getIcon(service.iconName)}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(service.id);
                      }}
                      className={`p-1.5 rounded-full ${isExpanded ? "bg-[var(--soft-aqua-blue)] text-[var(--primary-blue)]" : "bg-slate-100 text-[var(--muted-text)] group-hover:bg-slate-200"}`}
                      title={isExpanded ? "Collapse" : "Expand Details"}
                    >
                      {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[var(--primary-blue)] mb-3 group-hover:text-[var(--primary-blue)] transition-colors">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--muted-text)] font-light leading-relaxed mb-4">
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
                        <div className="pt-4 mt-4 border-t border-[var(--visible-border)] space-y-2">
                          <p className="text-[10px] uppercase tracking-wider font-bold text-[var(--primary-blue)]">Execution Scope:</p>
                          <ul className="space-y-1.5">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-[var(--dark-navy)] font-light">
                                <Check size={12} className="text-[var(--primary-blue)] shrink-0" />
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
                <div className="px-6 py-4 bg-[var(--pearl-white)]/50 border-t border-[var(--visible-border)] flex justify-between items-center text-xs">
                  <span className="text-[var(--primary-blue)] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {isExpanded ? "Hide Specific Tasks" : "View Specific Tasks"}
                    <ChevronRight size={12} />
                  </span>
                  
                  {isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookClick(`Hello, I am interested in inquiring about your: "${service.title}" support service for the UAE retail market.`);
                      }}
                      className="bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white font-bold px-3 py-1.5 uppercase tracking-widest text-[9px]"
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
