import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  CalendarCheck2, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown,
  Trash2,
  AlertCircle
} from "lucide-react";
import { APP_CONTACT, CATEGORIES, SERVICES, FAQS } from "../data";
import { BookingSubmission } from "../types";

interface ContactFormProps {
  prefilledMessage: string;
  onClearPrefill: () => void;
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactForm({ prefilledMessage, onClearPrefill, formRef }: ContactFormProps) {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("food-beverages");
  const [serviceNeeded, setServiceNeeded] = useState("account-activation");
  const [message, setMessage] = useState("");
  
  // App UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [myBookings, setMyBookings] = useState<BookingSubmission[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Sync Prefilled Message from Parent
  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      // Determine if prefill corresponds to a specific service or category to adjust state
      const matchedService = SERVICES.find(s => prefilledMessage.toLowerCase().includes(s.title.toLowerCase()));
      if (matchedService) {
        setServiceNeeded(matchedService.id);
      }
      const matchedCategory = CATEGORIES.find(c => prefilledMessage.toLowerCase().includes(c.name.toLowerCase()));
      if (matchedCategory) {
        setCategory(matchedCategory.id);
      }
    }
  }, [prefilledMessage]);

  // Load Existing Bookings from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("fmcg_growth enquiry_bookings");
    if (saved) {
      try {
        setMyBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !company) {
      return;
    }

    setIsSubmitting(true);

    // Simulate high-end corporate database insert
    setTimeout(() => {
      const newSubmission: BookingSubmission = {
        name,
        email,
        phone,
        company,
        category: CATEGORIES.find(c => c.id === category)?.name || category,
        serviceNeeded: SERVICES.find(s => s.id === serviceNeeded)?.title || serviceNeeded,
        message,
        submittedAt: new Date().toLocaleString(),
      };

      const updatedBookings = [newSubmission, ...myBookings];
      setMyBookings(updatedBookings);
      localStorage.setItem("fmcg_growth enquiry_bookings", JSON.stringify(updatedBookings));

      setIsSubmitting(false);
      setIsSuccess(true);
      onClearPrefill();

      // Reset fields
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    }, 1200);
  };

  const deleteBooking = (idx: number) => {
    const updated = myBookings.filter((_, i) => i !== idx);
    setMyBookings(updated);
    localStorage.setItem("fmcg_growth enquiry_bookings", JSON.stringify(updated));
  };

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--pearl-white)] relative border-b border-[var(--visible-border)] scroll-mt-12" ref={formRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title blocks */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[var(--primary-blue)]"></span>
            <span className="text-xs font-bold tracking-widest text-[var(--primary-blue)] uppercase">Contact & Booking</span>
            <span className="w-8 h-px bg-[var(--primary-blue)]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] tracking-tight">
            Schedule a Diagnostic Strategy Call
          </h2>
          <p className="mt-4 text-[var(--muted-text)] font-light text-sm sm:text-base">
            Discuss listings feasibility, product compliance, or distributor performance in depth. Complete our diagnostic intake form below.
          </p>
        </div>

        {/* Dual Panel Intake System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Form, Bookings tracking (7 columns) */}
          <div className="lg:col-span-7 bg-[var(--pearl-white)] border border-[var(--visible-border)] p-6 sm:p-10 relative">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-blue)]"></div>

            <div className="text-left mb-8">
              <h3 className="text-xl font-bold text-[var(--primary-blue)] flex items-center gap-2">
                <CalendarCheck2 className="text-[var(--primary-blue)]" size={20} />
                FMCG Growth Enquiry Intake Form
              </h3>
              <p className="text-xs text-[var(--muted-text)] font-light mt-1">
                Provide corporate parameters to prepare an optimized listings audit report prior to our call.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        Client Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Michael Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. michael@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        WhatsApp / Contact Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elite Global Foods"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        Primary FMCG Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-medium"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        Strategic Support Priority
                      </label>
                      <select
                        value={serviceNeeded}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-medium"
                      >
                        {SERVICES.map((ser) => (
                          <option key={ser.id} value={ser.id}>
                            {ser.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                      Business Support Scope & SKU Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please summarize your product portfolio, target retail channels, and current listing bottlenecks..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[var(--pearl-white)] border border-[var(--visible-border)] focus:border-[var(--primary-blue)] px-4 py-3 text-sm text-[var(--dark-navy)] outline-none transition-colors rounded-none font-light resize-none"
                    ></textarea>
                  </div>

                  {prefilledMessage && (
                    <div className="flex items-center justify-between bg-[var(--soft-aqua-blue)] text-[var(--dark-navy)] p-3.5 border border-[var(--soft-aqua-blue)] text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[var(--primary-blue)] shrink-0" />
                        <span>Applying query parameters selected from prior section click.</span>
                      </div>
                      <button
                        type="button"
                        onClick={onClearPrefill}
                        className="text-[var(--primary-blue)] hover:text-[var(--primary-blue-hover)] font-bold underline uppercase text-[9px]"
                      >
                        Reset Form
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white font-bold uppercase tracking-wider py-4 px-6 text-sm transition-all duration-200 shadow-md disabled:bg-[var(--primary-blue)]/50 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="animate-spin" size={16} />
                        <span>Validating Parameters...</span>
                      </>
                    ) : (
                      <span>Let's Talk Now</span>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[var(--pearl-white)] border border-[var(--visible-border)] p-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-[var(--soft-aqua-blue)] text-[var(--primary-blue)] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-[var(--primary-blue)]">Intake Successfully Received</h4>
                    <p className="text-sm text-[var(--muted-text)] font-light mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for scheduling your growth enquiry with <strong>FMCG Support Team</strong>. Our analytics department will audit your specified FMCG category prior to contacting you via WhatsApp or phone within 24 working hours.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--pearl-white)] text-xs text-[var(--dark-navy)] border border-[var(--visible-border)] inline-block text-left w-full">
                    <p className="font-bold text-[var(--primary-blue)] uppercase text-[10px] mb-2 tracking-wide">Submitted Parameters Summary:</p>
                    <p className="mb-1"><strong>Client Name:</strong> To be verified by FMCG Support Team</p>
                    <p className="mb-1"><strong>Category Target:</strong> {CATEGORIES.find(c => c.id === category)?.name || category}</p>
                    <p><strong>Required Support:</strong> {SERVICES.find(s => s.id === serviceNeeded)?.title || serviceNeeded}</p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white font-bold text-xs uppercase tracking-wider py-3 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulated Live Bookings Tracker widget underneath */}
            {myBookings.length > 0 && (
              <div className="mt-10 pt-8 border-t border-[var(--visible-border)] text-left">
                <h4 className="text-xs uppercase font-bold text-[var(--muted-text)] tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[var(--soft-aqua-blue)]0 rounded-full animate-pulse"></span>
                  My Registered Growth Enquiry Requests ({myBookings.length})
                </h4>
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {myBookings.map((b, idx) => (
                    <div key={idx} className="bg-[var(--pearl-white)] border border-[var(--visible-border)] p-4 relative flex justify-between items-start gap-4 shadow-sm">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[var(--primary-blue)]">{b.company}</span>
                          <span className="text-[10px] bg-slate-100 text-[var(--dark-navy)] px-2 py-0.5 font-medium">{b.category}</span>
                        </div>
                        <p className="text-xs text-[var(--muted-text)] mt-1 font-medium">Service Priority: {b.serviceNeeded}</p>
                        <p className="text-[9px] text-[var(--muted-text)] mt-2 font-mono">Sent: {b.submittedAt}</p>
                      </div>
                      <button
                        onClick={() => deleteBooking(idx)}
                        className="text-[var(--muted-text)] hover:text-red-500 p-1 transition-colors"
                        title="Delete record"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Panel: FMCG Support Team Direct Profile & B2B FAQs (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Business Support Team Card */}
            <div className="bg-[var(--primary-blue)] text-white p-8 border border-slate-800 text-left relative overflow-hidden">
              {/* Highlight bracket corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--primary-blue)]/30"></div>
              
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--soft-aqua)]">Direct Liaison Desk</span>
              <h3 className="text-2xl font-extrabold text-white mt-1 mb-2">FMCG Support Team</h3>
              <p className="text-xs text-[var(--soft-aqua-blue)] font-semibold tracking-wider uppercase mb-6">
                UAE FMCG Business Support Team (Since 2013)
              </p>

              <div className="space-y-4 text-xs font-light text-slate-200">
                <div className="flex items-start gap-3">
                  <Phone size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--muted-text)] block text-[10px] uppercase font-bold">Mobile Direct</span>
                    <a href={`tel:${APP_CONTACT.phone}`} className="hover:text-[var(--soft-aqua-blue)] transition-colors font-medium text-sm">
                      {APP_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--muted-text)] block text-[10px] uppercase font-bold">Fast WhatsApp Response</span>
                    <a
                      href={APP_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--soft-aqua-blue)] transition-colors underline font-medium text-sm"
                    >
                      Click to Chat Immediately
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--muted-text)] block text-[10px] uppercase font-bold">Corporate Inquiries</span>
                    <span className="font-medium text-sm text-slate-300">{APP_CONTACT.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--muted-text)] block text-[10px] uppercase font-bold">Liaison Area</span>
                    <span className="font-medium text-sm text-slate-300">{APP_CONTACT.office}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-[10px] text-[var(--muted-text)] leading-relaxed font-light">
                Direct in-person strategic alignment workshops available for verified manufacturers, importers, and trading groups across executive hubs in Dubai, Abu Dhabi, and Sharjah.
              </div>
            </div>

            {/* B2B FAQ Accordion */}
            <div className="text-left">
              <h4 className="text-xs uppercase font-bold text-[var(--muted-text)] tracking-wider mb-4 pl-1">Intake FAQ Guide</h4>
              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div key={index} className="border border-[var(--visible-border)] bg-[var(--pearl-white)]">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 flex justify-between items-center text-left hover:bg-[var(--pearl-white)] transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-bold text-[var(--primary-blue)] pr-4">{faq.q}</span>
                        <ChevronDown size={16} className={`text-[var(--muted-text)] transition-transform duration-200 ${isOpen ? "rotate-180 text-[var(--primary-blue)]" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-xs text-[var(--muted-text)] font-light leading-relaxed border-t border-[var(--visible-border)]">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
