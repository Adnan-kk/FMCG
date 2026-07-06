import { motion } from "motion/react";
import { CheckCircle2, Award, Calendar, HelpCircle } from "lucide-react";
import { ABOUT_CONTENT, APP_CONTACT } from "../data";
import AboutImage from "../assets/images/About.jpg";

interface AboutProps {
  onBookClick: () => void;
}

export default function About({ onBookClick }: AboutProps) {
  const categoriesBrief = [
    "Food & Beverages",
    "Non-Food & Sundries",
    "Beauty & Cosmetics",
    "Personal Care",
    "Pharma & OTC Wellness",
    "Nutrition & Superfoods",
    "Tobacco Products",
    "E-Commerce Brands"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vertical watermark */}
      <div className="absolute left-4 top-20 text-[100px] font-extrabold text-slate-100 uppercase select-none tracking-tighter leading-none origin-top-left rotate-90 opacity-40 hidden xl:block">
        STRATEGY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Narrative Copy */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#059669]"></span>
              <span className="text-xs font-bold tracking-widest text-[#059669] uppercase">ABOUT US</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a2540] tracking-tight leading-tight mb-6">
              {ABOUT_CONTENT.title}
            </h2>

            <div className="space-y-6 text-slate-600 font-normal leading-relaxed text-sm sm:text-base">
              <p className="font-medium text-[#0a2540] text-base">
                {ABOUT_CONTENT.body1}
              </p>
              <p className="font-light">
                {ABOUT_CONTENT.body2}
              </p>
              <p className="font-light">
                Our operations go far beyond traditional consulting report-writing. We coordinate directly with local municipalities for product registration, prepare corporate commercial pitches for key retail accounts, arrange category manager negotiations, audit retail shelf-share compliance, and help stabilize collection cycles.
              </p>
            </div>

            {/* Quick Experience Info Box */}
            <div className="mt-8 p-6 bg-white border-l-4 border-[#059669] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Consultancy Directed By</h4>
                <p className="text-lg font-bold text-[#0a2540] mt-1">{APP_CONTACT.name}</p>
                <p className="text-xs text-slate-500 font-medium">FMCG Strategic Consultant | Active in UAE Retail since 2013</p>
              </div>
              <button 
                onClick={onBookClick}
                className="shrink-0 bg-[#0a2540] hover:bg-[#11385f] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors"
              >
                Connect with Divya
              </button>
            </div>
          </div>

          {/* Right Panel: Showcase Image & Category Overlays */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Main Picture Frame */}
            <div className="relative border border-slate-200 p-3 bg-white shadow-xl">
              <img
                src={AboutImage}
                alt="Divya FMCG Consultancy UAE"
                className="w-full h-[360px] md:h-[450px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlapping Absolute Box detailing our category competence */}
              <div className="absolute -bottom-8 -left-6 bg-[#0a2540] text-white p-6 md:p-8 max-w-xs shadow-2xl border border-slate-800 text-left">
                <h4 className="text-xs uppercase tracking-widest text-[#059669] font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  Active Categories
                </h4>
                <p className="text-xs text-slate-300 font-light mb-4 leading-relaxed">
                  Securing retail market activation across key specialized segments:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {categoriesBrief.slice(0, 5).map((cat) => (
                    <div key={cat} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 size={12} className="text-[#059669] shrink-0" />
                      <span className="font-light">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative background block behind image */}
            <div className="absolute -top-6 -right-6 w-1/2 h-1/2 bg-slate-200/50 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
