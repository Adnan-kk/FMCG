import React from "react";
import { ArrowUp, MessageSquare, Phone } from "lucide-react";
import { APP_CONTACT } from "../data";

const navigationLinks = [
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Market Access", "#channels"],
  ["Categories", "#categories"],
  ["Compliance", "#compliance"],
  ["Contact Us", "#contact"],
] as const;

const liaisonItems = [
  "Ministry of Health (MOHAP)",
  "Dubai Health Authority (DHA)",
  "Montaji Municipality Portals",
  "Dubai / Sharjah Police Security",
  "Emirates Authority (ESMA)",
];

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(anchor);

    if (element) {
      const offset = 80;
      const position = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  const linkClassName = "group inline-flex w-fit items-center text-sm leading-6 text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-[var(--soft-aqua)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--soft-aqua)]";

  return (
    <footer className="relative border-t border-white/[0.12] bg-[var(--dark-navy)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4 lg:gap-x-10">
          <section aria-labelledby="footer-brand" className="max-w-sm">
            <h2 id="footer-brand" className="font-[Montserrat,sans-serif] text-xl font-extrabold uppercase tracking-[0.12em] text-white">
              FMCG <span className="text-sm font-semibold text-[var(--soft-aqua)]"></span>
            </h2>
            <p className="mt-4 font-[Poppins,sans-serif] text-sm leading-7 text-white/[0.78]">
              Bespoke market entry, retail listing activation, and continuous operational key account management business support. Actively boosting brand equity and commercial distribution across major hypermarkets and Cooperatives.
            </p>
            <p className="mt-5 inline-flex rounded-md border border-[var(--soft-aqua)]/30 bg-[var(--soft-aqua)]/10 px-3 py-2 font-[Poppins,sans-serif] text-xs font-medium leading-5 text-[var(--soft-aqua)]">
              Authorized Liaison Area: All 7 UAE Emirates
            </p>
          </section>

          <nav aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className="font-[Montserrat,sans-serif] text-xs font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </h2>
            <ul className="mt-5 space-y-2.5 font-[Poppins,sans-serif]">
              {navigationLinks.map(([label, anchor]) => (
                <li key={label}>
                  <a href={anchor} onClick={handleNavigation(anchor)} className={linkClassName}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-liaisons">
            <h2 id="footer-liaisons" className="font-[Montserrat,sans-serif] text-xs font-bold uppercase tracking-[0.16em] text-white">
              Active Liaisons
            </h2>
            <ul className="mt-5 space-y-2.5 font-[Poppins,sans-serif] text-sm leading-6 text-white/[0.78]">
              {liaisonItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--soft-aqua)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <address aria-labelledby="footer-desk" className="not-italic">
            <div className="rounded-[14px] border border-white/[0.12] bg-[#172b43] p-6 shadow-[0_14px_32px_rgba(0,0,0,0.2)]">
              <h2 id="footer-desk" className="font-[Montserrat,sans-serif] text-xs font-bold uppercase tracking-[0.16em] text-white">
                Business Support Desk
              </h2>
              <p className="mt-5 font-[Poppins,sans-serif] text-sm font-semibold leading-6 text-white">
                {APP_CONTACT.name}
              </p>
              <p className="mt-1 font-[Poppins,sans-serif] text-xs font-medium uppercase tracking-wide text-white/[0.75]">
                {APP_CONTACT.title}
              </p>
              <a href={`tel:${APP_CONTACT.phone}`} className={`${linkClassName} mt-5 gap-2`}>
                <Phone size={16} aria-hidden="true" className="shrink-0 text-[var(--soft-aqua)]" />
                <span>{APP_CONTACT.phone}</span>
              </a>
              <a
                href={APP_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-[var(--soft-aqua)]/70 px-3 py-2 font-[Poppins,sans-serif] text-xs font-semibold text-[var(--soft-aqua)] transition-colors duration-200 hover:border-[var(--soft-aqua)] hover:bg-[var(--soft-aqua)] hover:text-[var(--dark-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--soft-aqua)]"
              >
                <MessageSquare size={15} aria-hidden="true" />
                WhatsApp Support
              </a>
            </div>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.12] pt-6 font-[Poppins,sans-serif] text-xs leading-5 text-white/[0.78] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 FMCG UAE | Developed by{" "}
            <a
              href="https://pixelprosolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition-colors hover:text-[var(--soft-aqua)]"
            >
              PixelPro Solution
            </a>
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-6 right-6 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-blue)] text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--primary-blue-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--soft-aqua)]"
      >
        <ArrowUp size={19} aria-hidden="true" />
      </button>
    </footer>
  );
}
