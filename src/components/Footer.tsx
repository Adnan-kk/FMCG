import React from "react";
import { MessageSquare, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { APP_CONTACT } from "../data";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#0A2540] text-white border-t border-slate-800 relative">
      
      {/* Decorative vertical divider line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800/40 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand & Subtitle (4 columns) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <span className="block mb-4 font-extrabold text-xl tracking-wider uppercase text-white">
              FMCG <span className="text-[#059669] font-medium text-sm">SUPPORT UAE</span>
            </span>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Bespoke market entry, retail listing activation, and continuous operational key account management consultancy. Actively boosting brand equity and commercial distribution across major hypermarkets and Cooperatives.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-light">
               Authorized Liaison Area: All 7 UAE Emirates
            </div>
          </div>

          {/* Column 2: Navigation Links (2 columns) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h5 className="text-xs uppercase font-bold text-[#059669] tracking-widest">Navigation</h5>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {["About Us", "Services", "Market Access", "Categories", "Compliance"].map((label, idx) => {
                const anchors = ["#about", "#services", "#channels", "#categories", "#compliance"];
                return (
                  <li key={label}>
                    <a
                      href={anchors[idx]}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(anchors[idx]);
                        if (element) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const position = elementRect - bodyRect - offset;
                          window.scrollTo({ top: position, behavior: "smooth" });
                        }
                      }}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Compliance Agencies (3 columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h5 className="text-xs uppercase font-bold text-slate-400 tracking-widest">Active Liaisons</h5>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              <li>• Ministry of Health (MOHAP)</li>
              <li>• Dubai Health Authority (DHA)</li>
              <li>• Montaji Municipality Portals</li>
              <li>• Dubai / Sharjah Police Security</li>
              <li>• Emirates Authority (ESMA)</li>
            </ul>
          </div>

          {/* Column 4: Contact Information Desk (3 columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h5 className="text-xs uppercase font-bold text-[#059669] tracking-widest">Consultant Desk</h5>
            <div className="space-y-3 text-xs text-slate-300 font-light">
              <p className="font-semibold text-white">{APP_CONTACT.name}</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold">FMCG Strategic Consultant</p>
              <div className="flex items-center gap-2 pt-1">
                <Phone size={12} className="text-[#059669]" />
                <a href={`tel:${APP_CONTACT.phone}`} className="hover:text-emerald-400">
                  {APP_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={12} className="text-[#059669]" />
                <a href={APP_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 underline font-medium">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Legal Footer Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
          <div className="text-center sm:text-left">
            © 2026 FMCG UAE | Developed by{" "}
            <a
              href="https://pixelprosolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              PixelPro Solution
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
