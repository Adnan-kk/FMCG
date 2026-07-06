import { Service, Channel, Category, HelpTarget, EngagementModel } from "./types";

export const APP_CONTACT = {
  name: "Divya",
  title: "FMCG Strategic Consultant",
  phone: "+971 52 441 8720",
  whatsappUrl: "https://wa.me/971524418720?text=Hi%20Divya%2C%20I%20would%20like%20to%20inquire%20about%20your%20FMCG%20business%20support%20services%20in%20the%20UAE.",
  email: "consultancy@fmcgsupport.ae", // professional placeholder
  office: "Dubai, United Arab Emirates",
  experienceSince: 2013,
};

export const HERO_CONTENT = {
  headline: "Accelerating FMCG Growth Across the UAE",
  subtext: "Helping manufacturers, traders, importers, exporters, distributors, and brand owners enter, activate, and grow across the UAE retail market with expert FMCG consulting, retail account activation, sales operations, trade marketing, and key account management support.",
  badge: "B2B Strategic Growth Partner",
};

export const ABOUT_CONTENT = {
  title: "Strategic FMCG Support in the UAE",
  body1: "FMCG Business Support Services helps businesses successfully navigate the UAE’s competitive retail and distribution landscape. With experience across food, non-food, beverages, pharma, nutrition, cosmetics, beauty, tobacco, and consumer goods categories, we support brands from market entry to retail activation and long-term growth.",
  body2: "Led by Divya, an FMCG Strategic Consultant with deep experience in the UAE retail sector since 2013, our approach combines market knowledge, retail relationships, sales strategy, compliance coordination, and practical execution support. We act as your extended boots on the ground, bypassing traditional entry barriers to fast-track your retail listings and scale market share.",
  image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop", // Elegant Dubai Business District
};

export const WHO_WE_HELP: HelpTarget[] = [
  {
    id: "manufacturers",
    title: "Manufacturers",
    description: "Whether local or international, we guide factories looking to secure direct listings in UAE's key accounts, optimize production for Middle East compliance, and build effective distributor channels.",
    painPoints: ["High entry listings fees negotiation", "Navigating local distribution setups", "Lack of direct local retail relationships"],
  },
  {
    id: "traders",
    title: "Traders",
    description: "Assisting trade houses and merchants in identifying high-volume retail categories, liquidating aging inventory, and securing consistent retail shelf space across channels.",
    painPoints: ["Inconsistent retail sell-out", "Slow listings for new product lines", "Optimizing wholesale vs retail margins"],
  },
  {
    id: "importers-exporters",
    title: "Importers & Exporters",
    description: "Streamlining international trade lanes into the UAE. We provide local registration guidance, handle customs clearance liaison, and unlock local retail channels.",
    painPoints: ["Complex import registration rules", "Product compliance rejections", "Identifying reliable local off-takers"],
  },
  {
    id: "brand-owners",
    title: "Brand Owners",
    description: "Elevating brand equity, trade marketing, and positioning. We formulate premium SKU strategies and launch new product developments (NPDs) with maximum high-street visual impact.",
    painPoints: ["Low brand awareness on-shelf", "High competitor marketing spends", "Inefficient sales executive execution"],
  },
  {
    id: "distributors",
    title: "Distributors",
    description: "We work alongside or on behalf of distribution partners to optimize sales force effectiveness, build localized trade marketing activations, and conduct retail channel audits.",
    painPoints: ["Distributor sales force misalignment", "High return rates of aging stocks", "Unmapped out-of-stock (OOS) retail scenarios"],
  }
];

export const SERVICES: Service[] = [
  {
    id: "account-activation",
    title: "Retail Account Activation",
    description: "Fast-track your listings in premier retail chains. We prepare corporate pitches, negotiate trade terms, secure listing codes, and navigate listing fees (listing slots) effectively.",
    iconName: "FileCheck",
    details: ["Listing slot negotiation", "Product code activation", "Commercial terms alignment", "Initial PO coordination"]
  },
  {
    id: "key-account",
    title: "Key Account Management",
    description: "Nurturing and sustaining premium partnerships with major retail category managers. We drive annual business plans, joint promotional calendars, and shelf space expansion.",
    iconName: "ShieldCheck",
    details: ["Category manager alignment", "Joint Business Planning (JBP)", "Promotional calendar design", "Space-share expansion"]
  },
  {
    id: "sales-operations",
    title: "Sales & Operations Management",
    description: "Building structured operational workflows. We optimize delivery frequencies, bridge forecasting gaps, and monitor key performance indicators (KPIs) of sales teams.",
    iconName: "TrendingUp",
    details: ["Forecast alignment", "Sales force routing plans", "SOP development", "Performance metric analysis"]
  },
  {
    id: "trade-marketing",
    title: "Trade Marketing & Retail Execution",
    description: "Ensuring your products are visible, clean, and dominant. We design point-of-sale materials (POSM), planogram compliance mechanisms, and cross-merchandising plays.",
    iconName: "Layers",
    details: ["Planogram execution audits", "POSM deployment supervision", "In-store promoter management", "Cross-merchandising campaigns"]
  },
  {
    id: "distribution-analysis",
    title: "Distribution Analysis",
    description: "Comprehensive evaluation of existing numeric and weighted distribution. We pinpoint market gaps, white spaces, and sub-distributor opportunities.",
    iconName: "Network",
    details: ["Numeric vs Weighted analysis", "Channel gap mapping", "Distributor margin audits", "Route-to-market optimization"]
  },
  {
    id: "retail-audit",
    title: "Retail Audit & Analytics",
    description: "Data-driven diagnostics on the shelf. We monitor competitor pricing, out-of-stock (OOS) rates, expiry status, share-of-shelf (SOS), and promoter effectiveness.",
    iconName: "BarChart3",
    details: ["Share of Shelf (SOS) auditing", "Out of Stock (OOS) mitigation", "Competitor pricing bench-marking", "Expiry stock forecasting"]
  },
  {
    id: "product-launch",
    title: "New Product Launch Support",
    description: "A complete framework for launching New Product Developments (NPDs) in the UAE. From local taste compliance to commercial trial runs and premium high-profile launch displays.",
    iconName: "Sparkles",
    details: ["Competitor mapping & pricing", "Trial run activation", "Soft-launch campaign curation", "Listing fast-tracking"]
  },
  {
    id: "brand-awareness",
    title: "Brand Awareness & PR",
    description: "Elevating the brand narrative among local trade circles and end-consumers. We coordinate localized PR, media engagements, and target tasting campaigns.",
    iconName: "Megaphone",
    details: ["Trade publication features", "B2B PR representation", "Retail launch events", "Influencer tasting activations"]
  },
  {
    id: "collections-analysis",
    title: "Collections & Ageing Analysis",
    description: "Cash flow protection. We monitor payment outstanding, trade terms compliance, and credit period disputes with retail accounts to expedite collections.",
    iconName: "Wallet",
    details: ["DSO (Days Sales Outstanding) reduction", "Reconciliation support", "Credit risk profiling", "Trade dispute resolution"]
  },
  {
    id: "ecommerce-activation",
    title: "E-Commerce Activation",
    description: "Securing and expanding digital shelf space on Noon, Amazon UAE, Kibsons, Instashop, Careem, and modern trade online portals.",
    iconName: "ShoppingBag",
    details: ["Digital listing integration", "Quick-commerce (Q-Commerce) setup", "Virtual shelf visibility optimization", "E-retail promotional alignment"]
  }
];

export const RETAIL_CHANNELS: Channel[] = [
  {
    id: "modern-trade",
    name: "Modern Trade",
    description: "The primary high-volume engine of UAE retail, consisting of hypermarket giants and supermarket chains dominating the urban landscape.",
    examples: ["Carrefour", "Lulu Hypermarket", "Spinneys", "Waitrose", "Union Coop", "Sharjah Coop"],
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" // Modern grocery store aisle
  },
  {
    id: "cooperative-societies",
    name: "Cooperative Societies",
    description: "Crucial local retail networks with high consumer trust, particularly among local Emirati communities and long-term UAE residents.",
    examples: ["Union Cooperative", "Sharjah Cooperative", "Abu Dhabi Coop", "Al Maya Group"],
    imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop" // Elegant retail display
  },
  {
    id: "fuel-stations",
    name: "Fuel Station C-Stores",
    description: "Highly lucrative, fast-paced convenience networks with constant foot traffic. Ideal for premium impulse buys, beverages, snacks, and personal care.",
    examples: ["ADNOC Oasis", "ENOC Zoom", "Emarat Plus"],
    imageUrl: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1200&auto=format&fit=crop" // Modern sleek exterior/storefront environment
  },
  {
    id: "horeca",
    name: "HORECA & Foodservice",
    description: "Expanding your reach into hotels, fine dining, upscale cafes, catering firms, and executive offices across the UAE's thriving tourism sector.",
    examples: ["5-Star Hotels & Resorts", "Premium Fine Dining Chains", "Corporate Offices", "Specialty Cafes"],
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop" // Modern restaurant/hotel setup
  },
  {
    id: "duty-free",
    name: "Duty Free",
    description: "High-exposure, high-status international gateways. Perfect for luxury confectionery, premium cosmetics, premium water, and exclusive high-end SKUs.",
    examples: ["Dubai Duty Free", "Abu Dhabi Duty Free"],
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop" // Airport / high-end travel retail
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "food-beverages",
    name: "Food & Beverages",
    description: "Ambient, chilled, frozen, dairy, confectionery, gourmet ingredients, and specialty non-alcoholic premium beverages.",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "beauty-cosmetics",
    name: "Beauty & Cosmetics",
    description: "Skincare, makeup, luxury fragrances, hair care, salon-grade solutions, and niche beauty brands.",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Daily hygiene products, body washes, oral care, baby care, baby wipes, and household toiletries.",
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "pharma-nutrition",
    name: "Pharma & Nutrition",
    description: "Over-the-counter (OTC) wellness supplements, organic protein, superfoods, vitamins, and specialized clinical nutrition.",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "household",
    name: "Household Goods",
    description: "Home cleaning agents, eco-friendly detergents, air fresheners, and durable FMCG home-care goods.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "non-food",
    name: "Non-Food & Sundries",
    description: "Disposables, matches, stationery, charcoal, tissue paper lines, and general merchandise categories.",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "tobacco",
    name: "Tobacco",
    description: "Navigating strict local compliance, health warning registrations, excise tax alignments, and premium counter displays.",
    imageUrl: "https://images.unsplash.com/photo-1527137341206-df6af929c293?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "premium-skus",
    name: "Premium SKUs",
    description: "Artisanal, luxury, high-value small-batch products requiring exclusive target-listing strategies in premium chains.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    description: "Direct-to-consumer digital channels and platform optimization for immediate digital FMCG delivery networks.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "UAE Market Knowledge",
    description: "Deep, hands-on insight into UAE retail dynamics, consumer preferences, regulatory frameworks, and channel behaviors since 2013.",
    metric: "13+ Yrs",
    subtext: "In-Market Expertise"
  },
  {
    title: "Strong Retail Relationships",
    description: "Direct contact avenues with category buyers and senior planners across Carrefour, Spinneys, Union Coop, Lulu, Zoom, and more.",
    metric: "Direct",
    subtext: "Buyer Channel Access"
  },
  {
    title: "Practical Execution Support",
    description: "We are not just high-level consultants; we act as your local boots on the ground, attending buyer reviews and checking shelves in person.",
    metric: "Hands-on",
    subtext: "Field Execution"
  },
  {
    title: "ROI-Focused Approach",
    description: "Every listing slot, promotion, or campaign we coordinate is backed by strict sales targets, keeping your distribution profitable.",
    metric: "100%",
    subtext: "Commercial Focus"
  },
  {
    title: "Multi-Category Experience",
    description: "Broad category mastery across foods, wellness supplements, cosmetics, and non-foods, offering cross-category insights.",
    metric: "Multi-Cat",
    subtext: "Diverse Competence"
  },
  {
    title: "Flexible Engagement Models",
    description: "Whether you need a short-term listing sprint or a long-term dedicated key account consulting partner, we tailor to your scope.",
    metric: "Flexible",
    subtext: "Tailored Structures"
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Retail Account Activation Projects",
    description: "A focused, short-term project targeting specific retail chains. We pitch, list, and activate your codes.",
    suitability: "Ideal for new brand market entry with 1-5 main SKUs."
  },
  {
    title: "Project-Based Assignments",
    description: "Specific tactical scopes, such as distributor audits, collections reconciliation, competitor benchmarking, or new launch trial runs.",
    suitability: "Ideal for brands with existing distribution requiring independent troubleshooting."
  },
  {
    title: "Monthly Strategic Consultancy",
    description: "Retainer-based, continuous strategic support. We act as your off-site commercial director and key account adviser.",
    suitability: "Ideal for growing brands needing active executive leadership without full-time local payroll."
  },
  {
    title: "Full-Time / Extended Support",
    description: "Intense execution where we manage your full daily UAE retail operations, including promoter agency liaison and weekly buyer reviews.",
    suitability: "Ideal for high-volume portfolio brand owners aiming for aggressive market expansion."
  }
];

export const COMPLIANCE_ITEMS = [
  {
    agency: "MOHAP",
    fullName: "Ministry of Health and Prevention",
    purpose: "Mandatory for wellness products, medical beauty, health foods, pharmaceutical OTCs, and therapeutic cosmetic registrations."
  },
  {
    agency: "DHA",
    fullName: "Dubai Health Authority",
    purpose: "Securing approvals for nutritional counseling programs, clinical wellness center collaborations, and specialized pharmacy distribution."
  },
  {
    agency: "Dubai / Sharjah Police",
    fullName: "Security & Chemical Compliance Liaison",
    purpose: "Coordinating mandatory documentation approvals for regulated consumer sundries, chemical cleaning compounds, and bulk imports."
  },
  {
    agency: "Municipal Product Registration",
    fullName: "Dubai Municipality (Montaji) & Sharjah Municipality",
    purpose: "Registering food items (FIRS), cosmetics (Montaji), household detergents, and baby care lines before physical customs entry."
  }
];

export const FAQS = [
  {
    q: "How does the listing process work with major chains like Carrefour or Spinneys?",
    a: "We begin with product validation and compliance checks. Next, we prepare a high-impact buyer presentation focused on category gaps and profitability. We coordinate the review meeting, negotiate the commercial listing fees, set up vendor portals, and secure the initial opening PO."
  },
  {
    q: "Do you act as a distributor or a business consultant?",
    a: "We are strategic FMCG consultants and operational execution partners. We do not buy inventory ourselves; instead, we represent your interest to ensure the distributors you choose perform optimally, or we activate direct retail codes in your name so you control your brand equity."
  },
  {
    q: "Can you help resolve payment issues (ageing collections) with UAE retailers?",
    a: "Yes. Collection disputes and ageing credit terms are major pain points in the UAE retail market. We analyze trade ledger discrepancies, assist in reconciling claims with retailers' finance departments, and establish structured collection schedules."
  },
  {
    q: "What is your experience in the UAE market?",
    a: "Our consultancy is led by Divya, an active UAE FMCG Strategic Consultant who has been operating directly in the UAE retail space since 2013, overseeing major brand activations and distributor turnarounds."
  }
];
