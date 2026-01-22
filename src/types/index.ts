// Project types
export interface Project {
  _id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  images: SanityImage[];
  liveUrl?: string;
  order: number;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// Site settings
export interface SiteSettings {
  email: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

// Service type for homepage
export interface Service {
  title: string;
  description: string;
}

// Collaborator type for about page
export interface Collaborator {
  name: string;
  role: string;
  url?: string;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
}
