export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  priceStartingAt: number;
  duration: string;
  recommendedGuests: string;
  overview: string;
  inclusions: string[];
  features: string[];
  bestFor: string;
  packages: {
    name: string;
    price: number;
    description: string;
    includes: string[];
  }[];
}

export interface ThemeItem {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  category: string;
  description?: string;
  palette: string[];
  paletteNames: string[];
  image: string;
  imageTall?: string;
  imageTall2?: string;
  imageDetail?: string;
  popularFor: string;
  decorElements: string[];
  tentStyle: string;
  beddingStyle: string;
  lightingType: string;
  headline?: string;
  narrative?: string;
  exploreHighlight?: string;
  stayHighlight?: string;
  vibeHighlight?: string;
}

export interface ThemeGalleryPhoto {
  id: string;
  themeId: string;
  themeTitle: string;
  image: string;
  caption: string;
  location: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Teepees' | 'Bell Tents' | 'Boho Picnics' | 'Starlight Cinema' | 'Decor & Details';
  image: string;
  span: 'small' | 'wide' | 'tall' | 'featured';
  caption: string;
  location: string;
  tags: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  theme: string;
  service: string;
  location: string;
  guestCount: number;
  image: string;
  story: string;
  highlight: string;
  decorHighlights: string[];
  quote: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  eventType: string;
  rating: number;
  review: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  readTime: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  author: string;
  image: string;
  tags: string[];
}

export interface BookingState {
  serviceId: string;
  themeId: string;
  date: string;
  guestCount: number;
  locationDistrict: string;
  addOns: string[];
  specialRequests: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}
