import React from "react";
import { motion } from "motion/react";
import { Shield, Clock, FileCheck, HelpCircle, ArrowRight, Check } from "lucide-react";
import { ENGAGEMENT_MODELS } from "../data";

interface EngagementModelsProps {
  onBookClick: (modelName: string) => void;
}

export default function EngagementModels({ onBookClick }: EngagementModelsProps) {
  const getIcon = (index: number, colorClass: string) => {
    switch (index) {
      case 0:
        return <FileCheck className={colorClass} size={20} />;
      case 1:
        return <Shield className={colorClass} size={20} />;
      case 2:
        return <Clock className={colorClass} size={20} />;
      case 3:
        return <HelpCircle className={colorClass} size={20} />;
      default:
        return <FileCheck className={colorClass} size={20} />;
    }
  };

  return (
    <section id="engagement" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#059669]"></span>
            <span className="text-xs font-bold tracking-widest text-[#059669] uppercase">Cooperation Structures</span>
            <span className="w-8 h-px bg-[#059669]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] tracking-tight">
            Flexible & Scalable Engagement Models
          </h2>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            We adapt to your budget, in-house team capacity, and growth stage. Choose from tactical sprint projects to dedicated monthly strategic retainer consultancies.
          </p>
        </div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ENGAGEMENT_MODELS.map((model, idx) => {
            const isHighlight = idx === 2; // Monthly consultancy is the standard best-seller
            return (
              <div
                key={model.title}
                className={`border text-left p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isHighlight
                    ? "bg-[#0a2540] text-white border-[#059669] shadow-xl"
                    : "bg-slate-50 text-slate-800 border-slate-200 hover:border-[#0a2540] hover:shadow-md"
                }`}
              >
                {/* Visual Popular Badge */}
                {isHighlight && (
                  <div className="absolute top-0 right-0 bg-[#059669] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                    Recommended Model
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className={`p-3 inline-flex mb-6 ${isHighlight ? "bg-[#059669] text-white" : "bg-slate-200 text-[#0a2540]"}`}>
                    {getIcon(idx, isHighlight ? "text-white" : "text-[#0a2540]")}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight mb-3">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${isHighlight ? "text-slate-300" : "text-slate-500"}`}>
                    {model.description}
                  </p>
                </div>

                {/* Suitability and Actions */}
                <div>
                  <div className={`p-4 border-t mb-6 ${isHighlight ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white"}`}>
                    <span className="text-[9px] uppercase tracking-wider font-bold block mb-1 text-[#059669]">Best Suited For:</span>
                    <p className={`text-xs font-light leading-normal ${isHighlight ? "text-slate-200" : "text-slate-600"}`}>
                      {model.suitability}
                    </p>
                  </div>

                  <button
                    onClick={() => onBookClick(model.title)}
                    className={`w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isHighlight
                        ? "bg-[#059669] hover:bg-[#047857] text-white"
                        : "bg-[#0a2540] hover:bg-[#11385f] text-white"
                    }`}
                  >
                    <span>Inquire this Model</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}
