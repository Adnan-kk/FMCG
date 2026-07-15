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

  // Duplicate each row so both marquees loop continuously.
  const doubleLogos = [...logos, ...logos];

  return (
    <section className="pt-0 pb-20 bg-[var(--pearl-white)] border-b border-[var(--visible-border)] overflow-hidden relative">
      {styleTag}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[var(--primary-blue)]"></span>

            <span className="text-xs font-bold tracking-widest text-[var(--primary-blue)] uppercase">
              RETAIL NETWORK
            </span>

            <span className="w-6 h-px bg-[var(--primary-blue)]"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--primary-blue)] tracking-tight">
            Strong Retail & Distribution Network
          </h2>

          <p className="mt-3 text-[var(--muted-text)] font-light text-sm sm:text-base">
            Experience across leading UAE retail and distribution channels.
          </p>
        </div>
      </div>

      {/* Two-direction retail network marquee */}
      <div className="relative w-full space-y-5 overflow-hidden py-4 sm:space-y-6">

        {/* Left Edge Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[var(--pearl-white)] to-transparent sm:w-28"></div>

        {/* Right Edge Fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[var(--pearl-white)] to-transparent sm:w-28"></div>

        {/* Left-to-right row */}
        <div className="animate-logo-marquee-right flex w-max gap-5 sm:gap-6">
          {doubleLogos.map((logo, index) => (
            <div
              key={`forward-${index}`}
              className="group relative flex h-[84px] w-[155px] shrink-0 select-none items-center justify-center overflow-hidden rounded-lg border border-[var(--visible-border)]/60 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[var(--soft-aqua-blue)]/50 hover:shadow-md sm:h-[90px] sm:w-[180px]"
            >
              <img
                src={logo}
                alt={`Demo logo ${index + 1}`}
                className="w-full h-full object-contain p-5 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Right-to-left row */}
        <div className="animate-logo-marquee-left flex w-max gap-5 sm:gap-6">
          {doubleLogos.map((logo, index) => (
            <div
              key={`reverse-${index}`}
              className="group relative flex h-[84px] w-[155px] shrink-0 select-none items-center justify-center overflow-hidden rounded-lg border border-[var(--visible-border)]/60 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[var(--soft-aqua-blue)]/50 hover:shadow-md sm:h-[90px] sm:w-[180px]"
            >
              <img
                src={logo}
                alt={`Demo logo ${index + 1}`}
                className="h-full w-full object-contain p-5 transition-all duration-300 group-hover:scale-105"
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
        @keyframes logoScrollLeft {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes logoScrollRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
        }

        .animate-logo-marquee-left,
        .animate-logo-marquee-right {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .animate-logo-marquee-left {
          animation: logoScrollLeft 35s linear infinite;
        }

        .animate-logo-marquee-right {
          animation: logoScrollRight 35s linear infinite;
        }

        .animate-logo-marquee-left:hover,
        .animate-logo-marquee-right:hover {
          animation-play-state: paused;
        }
      `,
    }}
  />
);
