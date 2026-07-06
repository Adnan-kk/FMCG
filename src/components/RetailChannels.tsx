import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building, Store, Flame, Utensils, PlaneTakeoff, ShieldCheck, CheckCircle, ChevronRight } from "lucide-react";
import { RETAIL_CHANNELS } from "../data";
import { Channel } from "../types";

interface RetailChannelsProps {
  onBookClick: (channelName: string) => void;
}

export default function RetailChannels({ onBookClick }: RetailChannelsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case "modern-trade":
        return <Store className={colorClass} size={20} />;
      case "cooperative-societies":
        return <Building className={colorClass} size={20} />;
      case "fuel-stations":
        return <Flame className={colorClass} size={20} />;
      case "horeca":
        return <Utensils className={colorClass} size={20} />;
      case "duty-free":
        return <PlaneTakeoff className={colorClass} size={20} />;
      default:
        return <Store className={colorClass} size={20} />;
    }
  };

  return (
    <section id="channels" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#059669]"></span>
            <span className="text-xs font-bold tracking-widest text-[#059669] uppercase">MARKET ACCESS</span>
            <span className="w-8 h-px bg-[#059669]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] tracking-tight">
            Target Retail Channels & Store Networks
          </h2>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            We bypass middlemen barriers to activate direct commercial codes in premium shopping spots, fuel stations, cooperates, and luxury travel retail across the UAE.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RETAIL_CHANNELS.map((channel) => {
            const isHovered = hoveredId === channel.id;
            return (
              <div
                key={channel.id}
                className="relative bg-slate-900 overflow-hidden shadow-lg aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 group border border-slate-800"
                onMouseEnter={() => setHoveredId(channel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image with darken filters */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={channel.imageUrl}
                    alt={channel.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110 filter brightness-40 group-hover:brightness-25"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                </div>

                {/* Corner accent bracket */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-slate-600 group-hover:border-[#059669] transition-colors duration-300"></div>

                {/* Content Overlay */}
                <div className="relative z-10 text-left">
                  {/* Icon Badge */}
                  <div className="inline-flex p-3 bg-[#0a2540] border border-slate-700 text-[#059669] mb-4">
                    {getIcon(channel.id, "text-[#059669]")}
                  </div>

                  {/* Channel Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                    {channel.description}
                  </p>

                  {/* Key Accounts targeted */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Major Target Networks:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {channel.examples.map((ex) => (
                        <span key={ex} className="text-[10px] text-white bg-slate-800/80 border border-slate-700 px-2 py-0.5">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <button
                    onClick={() => onBookClick(channel.name)}
                    className="flex items-center gap-1.5 text-xs text-white font-bold uppercase tracking-wider pt-2 border-t border-slate-800 w-full hover:text-[#059669] transition-colors duration-200"
                  >
                    <span>Request Listing in {channel.name}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Special Custom CTA Card for Niche Channels */}
          <div className="relative bg-[#0a2540] border border-slate-800 p-8 flex flex-col justify-between text-left aspect-[4/5] shadow-xl overflow-hidden group">
            {/* Corner styling */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-emerald-500/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-emerald-500/30"></div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Strategic Niche Target</span>
              <h3 className="text-2xl font-extrabold text-white mt-2 mb-4">Other Specialty Channels</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                Do you have medical, therapeutic, or niche beauty SKU formulations that require highly specific targeting? We coordinate specialized distribution listings in:
              </p>
              
              <ul className="space-y-2 mb-6">
                {["Elite Pharmacies & Clinical Groups", "Independent Organic Retail Shops", "Five-Star Spa Boutique Chains", "Premium Corporate Executive Lounges"].map((niche) => (
                  <li key={niche} className="flex items-center gap-2 text-xs text-slate-200 font-light">
                    <CheckCircle size={12} className="text-[#059669] shrink-0" />
                    <span>{niche}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onBookClick("Niche Channels")}
              className="w-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase tracking-wider py-3 px-4 transition-colors text-center"
            >
              Inquire Specialty Listings
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
