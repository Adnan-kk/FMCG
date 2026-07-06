import React from "react";
import luluLogo from "../assets/images/lulu1.jpg";
import nestoLogo from "../assets/images/nesto.png";
import almayasLogo from "../assets/images/almayas.png";
import choithramsLogo from "../assets/images/choithramas.jpg";
import grandioseLogo from "../assets/images/Grandiose.png";
import granteLogo from "../assets/images/grante.jpg";
import spinneysLogo from "../assets/images/spinneys.jpg";
import carrefourLogo from "../assets/images/carref.jpg";

export default function KeyAccountsCarousel() {
  // Demo logo images — replace these paths later with your real logos
  const logos = [
    luluLogo,
    nestoLogo,
    almayasLogo,
    choithramsLogo,
    grandioseLogo,
    granteLogo,
    spinneysLogo,
    carrefourLogo,
  ];

  // Double the list for continuous infinite scrolling
  const doubleLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden relative">
      {styleTag}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#059669]"></span>

            <span className="text-xs font-bold tracking-widest text-[#059669] uppercase">
              RETAIL NETWORK
            </span>

            <span className="w-6 h-px bg-[#059669]"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Strong Retail & Distribution Network
          </h2>

          <p className="mt-3 text-slate-500 font-light text-sm sm:text-base">
            Experience across leading UAE retail and distribution channels.
          </p>
        </div>
      </div>

      {/* Auto-scroll Area with edge fades */}
      <div className="relative w-full overflow-hidden py-4">

        {/* Left Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        {/* Right Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Carousel */}
        <div className="animate-logo-marquee gap-6 flex">
          {doubleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] h-[90px] border border-slate-200/60 rounded-lg flex items-center justify-center shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 bg-slate-50/20 select-none group relative overflow-hidden"
            >
              <img
                src={logo}
                alt={`Demo logo ${index + 1}`}
                className="w-full h-full object-contain p-5 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Infinite scrolling animation
const styleTag = (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        @keyframes logoInfiniteScroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logo-marquee {
          display: flex;
          width: max-content;
          animation: logoInfiniteScroll 35s linear infinite;
        }

        .animate-logo-marquee:hover {
          animation-play-state: paused;
        }
      `,
    }}
  />
);
