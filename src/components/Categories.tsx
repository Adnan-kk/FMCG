import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Apple, Eye, ShieldAlert, Sparkles, Plus, CheckCircle, ChevronRight, Check } from "lucide-react";
import { CATEGORIES } from "../data";
import { Category } from "../types";

interface CategoriesProps {
  onBookClick: (categoryName: string) => void;
}

export default function Categories({ onBookClick }: CategoriesProps) {
  const [selectedId, setSelectedId] = useState<string>("food-beverages");

  const activeCategory = CATEGORIES.find((cat) => cat.id === selectedId) || CATEGORIES[0];

  // Specific custom insights for each category to show high expertise
  const categoryInsights: Record<string, { listingTime: string; priorityAgency: string; keySuccessMetric: string }> = {
    "food-beverages": {
      listingTime: "4 - 8 Weeks",
      priorityAgency: "Dubai Municipality (FIRS / Food Registration)",
      keySuccessMetric: "Expiry control, promotional sampling index"
    },
    "beauty-cosmetics": {
      listingTime: "6 - 10 Weeks",
      priorityAgency: "Dubai Municipality (Montaji Registration)",
      keySuccessMetric: "In-store promoter ratio, share-of-shelf (SOS)"
    },
    "personal-care": {
      listingTime: "4 - 6 Weeks",
      priorityAgency: "Dubai Municipality (Product Clearance)",
      keySuccessMetric: "Numeric distribution weighted width"
    },
    "pharma-nutrition": {
      listingTime: "8 - 14 Weeks",
      priorityAgency: "MOHAP (Ministry of Health and Prevention)",
      keySuccessMetric: "Pharmacist advisory influence, OTC visibility"
    },
    "household": {
      listingTime: "4 - 6 Weeks",
      priorityAgency: "Dubai Municipality (Chemical Clearance)",
      keySuccessMetric: "Cross-merchandising compliance rate"
    },
    "non-food": {
      listingTime: "4 - 5 Weeks",
      priorityAgency: "Local Municipality Approvals",
      keySuccessMetric: "Bulk pack SKU options, off-shelf display"
    },
    "tobacco": {
      listingTime: "12 - 16 Weeks",
      priorityAgency: "ESMA (Emirates Authority for Standardization) & Police Liaison",
      keySuccessMetric: "Excise tax alignment, strict layout approval"
    },
    "premium-skus": {
      listingTime: "5 - 8 Weeks",
      priorityAgency: "Premium Category Specifics",
      keySuccessMetric: "Coop premium island features, high basket-size"
    },
    "e-commerce": {
      listingTime: "2 - 3 Weeks",
      priorityAgency: "Digital Vendor Registration",
      keySuccessMetric: "Digital Out-of-Stock (OOS) prevention, content SEO"
    }
  };

  const activeInsight = categoryInsights[activeCategory.id] || {
    listingTime: "4 - 8 Weeks",
    priorityAgency: "Municipality Montaji",
    keySuccessMetric: "On-shelf compliance"
  };

  return (
    <section id="categories" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Absolute graphic elements */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#059669]"></span>
            <span className="text-xs font-bold tracking-widest text-[#059669] uppercase">Product Categories</span>
            <span className="w-6 h-px bg-[#059669]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] tracking-tight">
            Wide Multi-Category FMCG Expertise
          </h2>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            From highly regulated OTC pharmaceuticals and dietary supplements to fast-moving beauty, dairy, and confectionery lines, we navigate segment-specific shelf-activation processes.
          </p>
        </div>

        {/* Dynamic Category Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Category List buttons (Left 5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  className={`w-full text-left p-3.5 px-5 transition-all text-xs sm:text-sm font-semibold tracking-wide border-l-2 flex items-center justify-between ${
                    isActive
                      ? "bg-[#0a2540] text-white border-[#059669] shadow-sm"
                      : "bg-white text-slate-700 border-transparent hover:bg-slate-100 hover:text-[#0a2540]"
                  }`}
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={14} className={`transition-transform duration-200 hidden lg:block ${isActive ? "rotate-90 text-[#059669]" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Category Insight Board (Right 7 columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-lg relative text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Visual Image Banner */}
                <div className="h-[200px] w-full overflow-hidden border border-slate-100 relative">
                  <img
                    src={activeCategory.imageUrl}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover filter saturate-75 grayscale-20 hover:scale-105 hover:saturate-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a2540] text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    Active Portfolio Segment
                  </div>
                </div>

                {/* Info Header */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a2540]">{activeCategory.name}</h3>
                  <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed mt-2">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Compliance & Operations Info Specs */}
                <div className="bg-slate-50 p-5 border-l-4 border-[#059669] grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Estimated Listing Time</span>
                    <p className="text-sm font-bold text-[#0a2540] mt-0.5">{activeInsight.listingTime}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Priority Regulatory Agency</span>
                    <p className="text-sm font-bold text-[#059669] mt-0.5 break-words">{activeInsight.priorityAgency}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Key Growth Metric</span>
                    <p className="text-sm font-bold text-slate-700 mt-0.5">{activeInsight.keySuccessMetric}</p>
                  </div>
                </div>

                {/* Category success factors list */}
                <div className="space-y-2">
                  <h5 className="text-[10px] uppercase font-bold text-[#0a2540] tracking-widest">In-Market Representation Scope:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light">
                    <div className="flex items-center gap-2">
                      <Check size={12} className="text-[#059669] shrink-0" />
                      <span>Product Registration Validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={12} className="text-[#059669] shrink-0" />
                      <span>Listing Slot Negotiations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={12} className="text-[#059669] shrink-0" />
                      <span>Shelf space & Share-of-Shelf (SOS)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={12} className="text-[#059669] shrink-0" />
                      <span>Distributor Execution Auditing</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Inquire Action Row */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-light">Need a direct shelf space assessment for this category?</span>
              <button
                onClick={() => onBookClick(`Hi Divya, I would like to inquire about your specialized support for the: "${activeCategory.name}" product category.`)}
                className="w-full sm:w-auto bg-[#0a2540] hover:bg-[#11385f] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 transition-colors shadow-sm"
              >
                Inquire {activeCategory.name} Listings
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
