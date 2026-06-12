// Tipos globales del proyecto DismaferWeb

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // SVG path data
  color: string; // Tailwind bg class
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  logoUrl?: string;
  featured: boolean;
  country: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappUrl: string;
    address: string;
    addressShort: string;
    mapUrl: string;
    location: {
      lat: number;
      lng: number;
    };
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    instagram?: string;
  };
  slogan: string;
}
