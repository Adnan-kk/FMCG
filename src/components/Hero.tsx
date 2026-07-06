import { motion } from "motion/react";
import { MessageSquare, Calendar, ChevronRight, Award, Shield, Users } from "lucide-react";
import { HERO_CONTENT, APP_CONTACT } from "../data";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A2540] pt-24 overflow-hidden">
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="/assets/images1/Baner.jpg"
          alt="Dubai Premium Business District"
          className="w-full h-full object-cover filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/50 to-transparent"></div>
      </div>

      {/* Decorative architectural lines to fit premium modern style */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block pointer-events-none z-10">
        <svg className="w-full h-full text-emerald-500/10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="30" x2="30" y2="100" stroke="currentColor" strokeWidth="0.3" />
          <line x1="100" y1="60" x2="60" y2="100" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left 8 columns on desktop) */}
          <div className="lg:col-span-8 text-left">
            
            {/* Elegant upper badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#059669]/10 border border-[#059669]/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#059669] mb-6"
            >
              <Award size={12} />
              <span>{HERO_CONTENT.badge}</span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6"
            >
              Accelerating <span className="text-[#059669]">FMCG</span> <br />
              <span className="text-[#059669]">Growth</span> Across the UAE
            </motion.h1>

            {/* Subtext with absolute readability */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8 font-light"
            >
              {HERO_CONTENT.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={onBookClick}
                className="group flex justify-center items-center gap-3 bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-none transition-all duration-300 shadow-lg hover:shadow-[#059669]/20"
              >
                <Calendar size={18} />
                <span>Book a Consultation</span>
                <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={APP_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-3 bg-transparent hover:bg-slate-800/80 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 border-2 border-slate-600 hover:border-white rounded-none transition-all duration-300"
              >
                <MessageSquare size={18} className="text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Soft corporate confidence highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800"
            >
              <div className="flex items-start gap-3">
                <Shield className="text-[#059669] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Proven Results</h4>
                  <p className="text-xs text-slate-400 mt-1">Direct retail accounts listed and managed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="text-[#059669] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide uppercase">UAE Expert Since</h4>
                  <p className="text-xs text-slate-400 mt-1">In-market presence since 2013</p>
                </div>
              </div>

              <div className="hidden sm:flex items-start gap-3">
                <Award className="text-[#059669] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Full-Scale Coverage</h4>
                  <p className="text-xs text-slate-400 mt-1">Food, Beauty, OTC & Non-Food</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Quick Floating Mini-Card (Right 4 columns on desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#0A2540]/80 backdrop-blur-md border border-slate-700 p-8 text-left shadow-2xl relative"
            >
              {/* Highlight corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#059669]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#059669]"></div>

              <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase block mb-2">Extended Ground Support</span>
              <h3 className="text-xl font-bold text-white mb-4">Direct Buyer Relations</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                Secure your shelf share in Lulu, Carrefour, ADNOC Oasis, Zoom, and leading Coops. We directly pitch to and negotiate with category decision-makers.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs py-2 border-b border-slate-800">
                  <span className="text-slate-400">Consultancy Leader</span>
                  <span className="font-semibold text-white">{APP_CONTACT.name}</span>
                </div>
                <div className="flex justify-between text-xs py-2 border-b border-slate-800">
                  <span className="text-slate-400">In-Market Presence</span>
                  <span className="font-semibold text-emerald-400">Since {APP_CONTACT.experienceSince}</span>
                </div>
                <div className="flex justify-between text-xs py-2">
                  <span className="text-slate-400">Coverage Location</span>
                  <span className="font-semibold text-white">All 7 UAE Emirates</span>
                </div>
              </div>

              <button
                onClick={onBookClick}
                className="w-full mt-6 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase tracking-wider py-3 px-4 transition-colors duration-200"
              >
                Inquire About Listing Codes
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Slide Indicator element */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 opacity-70">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-1 h-8 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full h-1/3 bg-[#059669]"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
