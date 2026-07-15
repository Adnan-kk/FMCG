import { MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { HERO_CONTENT, APP_CONTACT } from "../data";
import BannerImage from "../assets/images/Baner.jpg";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative mt-[72px] min-h-[680px] overflow-hidden md:h-[600px] md:min-h-[600px] xl:mt-[78px]">
      <img
        src={BannerImage}
        alt="Dubai Premium Business District"
        className="absolute inset-0 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#102033]/90 from-0% via-[#244A83]/55 via-35% to-transparent to-60%" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-10 sm:px-6 sm:py-12 md:h-full md:min-h-0 lg:px-8 lg:py-14">
        <div className="max-w-[820px] text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#DCEFF1] sm:mb-5 sm:text-sm">
            B2B Strategic Growth Partner
          </p>

          <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl 2xl:text-6xl">
            Accelerating FMCG Business Growth Across the UAE
          </h1>

          <p className="mb-7 max-w-2xl text-sm font-light leading-relaxed text-white sm:mb-8 sm:text-base md:text-lg xl:text-xl">
            {HERO_CONTENT.subtext}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-3 rounded-none bg-[var(--primary-blue)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-blue-hover)] hover:shadow-[var(--primary-blue)]/20"
            >
              <Calendar size={18} />
              <span>Let's Talk Now</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={APP_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-none border-2 border-white/70 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-[#102033]/70"
            >
              <MessageSquare size={18} className="text-[#DCEFF1]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
