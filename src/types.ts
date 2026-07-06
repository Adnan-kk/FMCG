export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  examples: string[];
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface HelpTarget {
  id: string;
  title: string;
  description: string;
  painPoints: string[];
}

export interface EngagementModel {
  title: string;
  description: string;
  suitability: string;
}

export interface BookingSubmission {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: string;
  serviceNeeded: string;
  message: string;
  submittedAt: string;
}
