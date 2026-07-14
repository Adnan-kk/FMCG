import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-24 bg-[var(--primary-blue)] text-white relative overflow-hidden">
      {/* Absolute decorative mesh elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-[var(--primary-blue)]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-slate-800/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[var(--soft-aqua)]"></span>
            <span className="text-xs font-bold tracking-widest text-[var(--soft-aqua)] uppercase">Competitive Advantage</span>
            <span className="w-8 h-px bg-[var(--soft-aqua)]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Why Partner With FMCG UAE Support
          </h2>
          <p className="mt-4 text-slate-300 font-light text-sm sm:text-base">
            We operate as an agile, on-demand strategic extension of your commercial team, ensuring you secure maximum listing space at optimized costs.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[var(--dark-navy)]/80 border border-[var(--visible-border)]/50 p-6 sm:p-8 text-left flex flex-col justify-between relative group hover:border-[var(--soft-aqua)] transition-all duration-300"
              >
                {/* Decorative upper bracket */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--visible-border)]/50 group-hover:border-[var(--soft-aqua)] transition-all duration-300"></div>

                <div>
                  {/* High metric highlight */}
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-[var(--soft-aqua)] tracking-tighter">
                      {item.metric}
                    </span>
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest border-b border-[var(--visible-border)]/40 pb-1">
                      {item.subtext}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--soft-aqua)]"></span>
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Micro accent arrow in footer */}
                <div className="mt-8 pt-4 border-t border-[var(--visible-border)]/50 flex justify-end">
                  <ArrowUpRight size={14} className="text-[var(--soft-aqua)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Confidence Statement */}
        <div className="mt-16 text-center border-t border-[var(--visible-border)]/50 pt-10">
          <p className="text-xs text-slate-300 uppercase tracking-widest">
            Committed to your growth • 100% Client Retention Rate • 13+ Years Local Operational Relationships
          </p>
        </div>

      </div>
    </section>
  );
}
