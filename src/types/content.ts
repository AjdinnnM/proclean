export type NavLink = { label: string; href: string };

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  priceLabel: string;
  badge?: string;
  image: string;
  imagePosition?: string;
  pageUrl?: string;
  highlights: string[];
};

export type Benefit = {
  title: string;
  description: string;
  icon: "shield" | "leaf" | "handshake" | "clock" | "award" | "sparkles";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  location: string;
  before: string;
  after: string;
  afterObjectPosition?: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export type Reference = {
  name: string;
  service: string;
  location: string;
  image: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    logoText: string;
  };
  contact: {
    phone: string;
    phoneLink: string;
    email: string;
    address: string;
    city: string;
    serviceArea: string;
    hours: string;
    whatsapp?: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    heading: string;
    highlight: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Stat[];
    image: string;
    imageAlt: string;
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    services: Service[];
  };
  benefits: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Benefit[];
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: ProcessStep[];
    note: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: GalleryItem[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Testimonial[];
  };
  references: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Reference[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: FAQ[];
  };
  contactCta: {
    heading: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  footer: {
    description: string;
    columns: { title: string; links: NavLink[] }[];
    legal: string;
    social: { label: string; href: string; icon: "facebook" | "instagram" | "linkedin" | "youtube" }[];
  };
};
