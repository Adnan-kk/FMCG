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
  Trash2,
  AlertCircle
} from "lucide-react";
import { APP_CONTACT, CATEGORIES, SERVICES } from "../data";
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
          <p className="mt-4 text-sm font-light text-[var(--dark-navy)]/75 sm:text-base">
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
              <p className="mt-1 text-xs font-light text-[var(--dark-navy)]/75">
                Provide corporate parameters to prepare an optimized listings audit report prior to our call.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                    <p className="mx-auto mt-2 max-w-md text-sm font-light leading-relaxed text-[var(--dark-navy)]/75">
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
                <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--dark-navy)]/80">
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
                        <p className="mt-1 text-xs font-medium text-[var(--dark-navy)]/75">Service Priority: {b.serviceNeeded}</p>
                        <p className="mt-2 text-[9px] font-mono text-[var(--dark-navy)]/70">Sent: {b.submittedAt}</p>
                      </div>
                      <button
                        onClick={() => deleteBooking(idx)}
                        className="p-1 text-[var(--dark-navy)]/70 transition-colors hover:text-red-500"
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

          {/* Right Panel: FMCG Support Team Direct Profile (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Business Support Team Card */}
            <div className="bg-[var(--primary-blue)] text-white p-8 border border-white/20 text-left relative overflow-hidden">
              {/* Highlight bracket corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--primary-blue)]/30"></div>
              
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--soft-aqua)]">Direct Liaison Desk</span>
              <h3 className="text-2xl font-extrabold text-white mt-1 mb-2">FMCG Support Team</h3>
              <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/[0.92]">
                UAE FMCG Business Support Team (Since 2013)
              </p>

              <div className="space-y-4 text-xs font-light text-white/[0.92]">
                <div className="flex items-start gap-3">
                  <Phone size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-white/[0.72]">Mobile Direct</span>
                    <a href={`tel:${APP_CONTACT.phone}`} className="text-white/[0.95] transition-colors hover:text-[var(--soft-aqua)] font-medium text-sm">
                      {APP_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-white/[0.72]">Fast WhatsApp Response</span>
                    <a
                      href={APP_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/[0.95] transition-colors hover:text-[var(--soft-aqua)] underline font-medium text-sm"
                    >
                      Click to Chat Immediately
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-white/[0.72]">Corporate Inquiries</span>
                    <span className="text-sm font-medium text-white/[0.95]">{APP_CONTACT.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[var(--soft-aqua)] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-white/[0.72]">Liaison Area</span>
                    <span className="text-sm font-medium text-white/[0.95]">{APP_CONTACT.office}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-6 text-[10px] font-light leading-relaxed text-white/[0.72]">
                Direct in-person strategic alignment workshops available for verified manufacturers, importers, and trading groups across executive hubs in Dubai, Abu Dhabi, and Sharjah.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
