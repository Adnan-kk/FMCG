import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import KeyAccountsCarousel from "./components/KeyAccountsCarousel";
import WhoWeHelp from "./components/WhoWeHelp";
import Services from "./components/Services";
import RetailChannels from "./components/RetailChannels";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import EngagementModels from "./components/EngagementModels";
import Compliance from "./components/Compliance";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { APP_CONTACT } from "./data";
import { MessageSquare } from "lucide-react";

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState("");
  const formRef = useRef<HTMLDivElement | null>(null);

  // Helper to scroll smoothly to the growth enquiry intake form with correct offset
  const scrollToForm = () => {
    if (formRef.current) {
      const offset = 80; // matches header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = formRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // General Growth Enquiry Booking action
  const handleGeneralBook = () => {
    setPrefilledMessage("Hello, I would like to schedule a free diagnostic growth enquiry to discuss our FMCG growth roadmap in the UAE.");
    scrollToForm();
  };

  // Context-specific booking trigger
  const handleContextBook = (customText: string) => {
    setPrefilledMessage(customText);
    scrollToForm();
  };

  // Channel-specific booking trigger
  const handleChannelBook = (channelName: string) => {
    setPrefilledMessage(`Hello, I am interested in exploring listing opportunities specifically for: "${channelName}" stores in the UAE.`);
    scrollToForm();
  };

  // Category-specific booking trigger
  const handleCategoryBook = (categoryName: string) => {
    setPrefilledMessage(`Hello, we are looking for strategic business support and account activation for our: "${categoryName}" product line in the UAE retail market.`);
    scrollToForm();
  };

  // Engagement model-specific booking trigger
  const handleEngagementBook = (modelName: string) => {
    setPrefilledMessage(`Hello, we are interested in discussing cooperation terms for your: "${modelName}" engagement model.`);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] font-sans antialiased text-[var(--dark-navy)]">
      
      {/* Header bar with responsive corporate links */}
      <Header onBookClick={handleGeneralBook} />

      {/* Main Core Landing Structure */}
      <main>
        {/* Hero section with backdrop imagery */}
        <Hero onBookClick={handleGeneralBook} />

        {/* Narrative Strategic business support profile */}
        <About onBookClick={handleGeneralBook} />

        {/* Premium infinite auto-scrolling Key Accounts expertise carousel */}
        <KeyAccountsCarousel />

        {/* Target Profile Sector Tabs */}
        <WhoWeHelp onBookClick={handleContextBook} />

        {/* 10 core service activities cards */}
        <Services onBookClick={handleContextBook} />

        {/* Modern trade store networks directories */}
        <RetailChannels onBookClick={handleChannelBook} />

        {/* Multi-category directory with regulatory indicators */}
        <Categories onBookClick={handleCategoryBook} />

        {/* Corporate advantage metrics bento */}
        <WhyChooseUs />

        {/* Scalable partnership structures */}
        <EngagementModels onBookClick={handleEngagementBook} />

        {/* Government clearance compliance guidelines */}
        <Compliance />

        {/* Dynamic Growth Enquiry Booking Intake & Direct Profile Desk */}
        <ContactForm 
          prefilledMessage={prefilledMessage} 
          onClearPrefill={() => setPrefilledMessage("")}
          formRef={formRef} 
        />
      </main>

      {/* High-end corporate footer */}
      <Footer />

      {/* Persistent Elegant Floating Quick-Actions Panel */}
      <div className="fixed bottom-[10.5rem] right-6 z-40 sm:right-8">
        
        {/* Floating WhatsApp Action button */}
        <a
          href={APP_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group"
          title="Direct WhatsApp Chat"
        >
          <MessageSquare size={20} className="shrink-0" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-xs uppercase tracking-wider pl-0 group-hover:pl-2 whitespace-nowrap">
            Chat with FMCG Support Team
          </span>
        </a>
      </div>

    </div>
  );
}
