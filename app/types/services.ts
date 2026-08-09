// app/types/services.ts

export interface ServiceStat {
  label: string;
  val: string;
}

export interface Service {
  id: string;          // The URL slug (e.g., 'ui-ux-design')
  title: string;       // The Name
  description: string; // Short text for the card
  longDesc: string;    // Detailed text for the strategy page
  icon: string;        // The symbol
  stats: ServiceStat[];// The numeric data points
  bgImage: string;     // Background image URL
}