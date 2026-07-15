import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#about", important: true },
    { label: "Services", href: "#services", important: true },
    { label: "Market Access", href: "#channels", important: true },
    { label: "Categories", href: "#categories", important: false },
    { label: "Compliance", href: "#compliance", important: false },
    { label: "Contact Us", href: "#contact", important: false },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--dark-navy)] shadow-md py-4 text-white"
          : "bg-[var(--dark-navy)]/90 backdrop-blur-sm py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand area */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center select-none"
          >
            <span className="font-extrabold text-xl sm:text-2xl lg:text-2xl xl:text-3xl tracking-wide leading-none">
  FMCG
</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs xl:text-sm font-semibold tracking-wide text-[var(--pure-white)] hover:text-[var(--soft-aqua)] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--soft-aqua)] hover:after:w-full after:transition-all after:duration-300 ${
                  link.important ? "inline-block" : "hidden xl:inline-block"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 xl:gap-2 text-[11px] xl:text-sm font-bold bg-transparent border border-white hover:bg-[var(--pearl-white)] hover:text-[var(--primary-blue)] px-3 xl:px-4 py-2 rounded-none transition-all duration-200 whitespace-nowrap"
            >
              <span>Let's Talk Now</span>
              <ArrowRight size={11} className="xl:w-3.5 xl:h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-slate-800 text-slate-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen bg-[var(--primary-blue)] border-t border-slate-800 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3 px-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full text-center font-bold bg-transparent border border-white text-white hover:bg-[var(--pearl-white)] hover:text-[var(--primary-blue)] py-3 transition-all"
            >
              Let's Talk Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
