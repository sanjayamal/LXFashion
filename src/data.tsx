import type { FeaturedWatch, Stat, Feature, Testimonial, Watch } from "./types";

export const featuredWatches: FeaturedWatch[] = [
  {
    name: "Royal Perpetual",
    price: "$48,500",
    tag: "Limited Edition",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
    desc: "41mm rose gold case with midnight blue dial",
  },
  {
    name: "Nautique Diver",
    price: "$32,000",
    tag: "New Arrival",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
    desc: "Professional 300m water-resistant chronograph",
  },
  {
    name: "Heritage Classic",
    price: "$28,750",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    desc: "Ultra-thin platinum case with enamel dial",
  },
];

export const stats: Stat[] = [
  { value: "185+", label: "Years of Heritage" },
  { value: "12K", label: "Pieces Crafted" },
  { value: "60+", label: "Global Boutiques" },
  { value: "100%", label: "Swiss Made" },
];

export const features: Feature[] = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    ),
    title: "Swiss Precision",
    desc: "Every movement is assembled and tested by master watchmakers in our Geneva atelier, ensuring accuracy to ±2 seconds per day.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
    title: "Rare Materials",
    desc: "Sapphire crystals, 18K gold alloys, and hand-selected gemstones—only the most exceptional materials meet our standards.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Artisan Craft",
    desc: "Each dial is hand-finished with techniques perfected over generations—guilloché, enamelling, and gem-setting by true artisans.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Lifetime Warranty",
    desc: "A CHRONOS timepiece is built to last generations. Every watch comes with our unconditional lifetime service guarantee.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alexander M.",
    role: "Collector, Geneva",
    text: "The Royal Perpetual is simply breathtaking. The attention to detail surpasses anything I've seen from the established houses.",
    stars: 5,
  },
  {
    name: "Catherine L.",
    role: "Editor, Harper's Bazaar",
    text: "CHRONOS represents a new chapter in haute horlogerie. Their commitment to craft is unmatched in the modern era.",
    stars: 5,
  },
  {
    name: "James W.",
    role: "CEO, Sterling Group",
    text: "I've worn luxury watches for decades. My CHRONOS is the only one that consistently draws admiration and inquiry.",
    stars: 5,
  },
];

export const brands = [
  "SWISS MADE",
  "GENEVA SEAL",
  "CHRONOMETER",
  "MANUFACTURE",
  "HAUTE HORLOGERIE",
  "GRAND COMPLICATION",
  "TOURBILLON",
  "PERPETUAL",
];

export const watches: Watch[] = [
  {
    name: "Royal Perpetual",
    price: "$48,500",
    tag: "Limited Edition",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
    desc: "41mm rose gold case with midnight blue dial and perpetual calendar complication.",
    category: "Dress",
    movement: "Automatic",
    caseMaterial: "18K Rose Gold",
    waterResistance: "30m",
  },
  {
    name: "Royal Perpetual Platinum",
    price: "$72,000",
    tag: "Exclusive",
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80",
    desc: "39mm platinum 950 case with silver guilloché dial and moonphase indicator.",
    category: "Dress",
    movement: "Automatic",
    caseMaterial: "Platinum 950",
    waterResistance: "30m",
  },
  {
    name: "Royal Tourbillon",
    price: "$125,000",
    tag: "Grand Complication",
    img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=600&q=80",
    desc: "42mm white gold with flying tourbillon and 72-hour power reserve.",
    category: "Dress",
    movement: "Manual",
    caseMaterial: "18K White Gold",
    waterResistance: "30m",
  },
  {
    name: "Nautique Diver",
    price: "$32,000",
    tag: "New Arrival",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
    desc: "Professional 300m water-resistant chronograph with ceramic bezel.",
    category: "Sport",
    movement: "Automatic",
    caseMaterial: "Titanium",
    waterResistance: "300m",
  },
  {
    name: "Nautique GMT",
    price: "$35,500",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80",
    desc: "Dual timezone with rotating bezel and luminous indices for travel.",
    category: "Sport",
    movement: "Automatic",
    caseMaterial: "Stainless Steel",
    waterResistance: "200m",
  },
  {
    name: "Nautique Chronograph",
    price: "$38,000",
    tag: "New Arrival",
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&q=80",
    desc: "Flyback chronograph with tachymeter scale and 68-hour power reserve.",
    category: "Sport",
    movement: "Automatic",
    caseMaterial: "Titanium",
    waterResistance: "100m",
  },
  {
    name: "Heritage Classic",
    price: "$28,750",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    desc: "Ultra-thin platinum case with hand-painted enamel dial.",
    category: "Dress",
    movement: "Manual",
    caseMaterial: "Platinum 950",
    waterResistance: "30m",
  },
  {
    name: "Heritage 1839",
    price: "$42,000",
    tag: "Anniversary",
    img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&q=80",
    desc: "Limited anniversary edition celebrating our founding year. Hand-engraved case back.",
    category: "Dress",
    movement: "Manual",
    caseMaterial: "18K Yellow Gold",
    waterResistance: "30m",
  },
  {
    name: "Heritage Skeleton",
    price: "$55,000",
    tag: "Artisan",
    img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=600&q=80",
    desc: "Open-worked movement visible through sapphire crystal. 168 hours of hand-finishing.",
    category: "Dress",
    movement: "Manual",
    caseMaterial: "18K Rose Gold",
    waterResistance: "30m",
  },
  {
    name: "Grande Sonnerie",
    price: "$285,000",
    tag: "Grand Complication",
    img: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&q=80",
    desc: "Striking complication with minute repeater and grand sonnerie mechanism. 1,247 components.",
    category: "Complication",
    movement: "Manual",
    caseMaterial: "Platinum 950",
    waterResistance: "30m",
  },
  {
    name: "Astronomique",
    price: "$195,000",
    tag: "Grand Complication",
    img: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&q=80",
    desc: "Perpetual calendar with equation of time, sunrise/sunset, and star chart.",
    category: "Complication",
    movement: "Automatic",
    caseMaterial: "18K White Gold",
    waterResistance: "30m",
  },
  {
    name: "Chronographe Rattrapante",
    price: "$89,000",
    tag: "Limited Edition",
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&q=80",
    desc: "Split-seconds chronograph with column-wheel mechanism and enamel dial.",
    category: "Complication",
    movement: "Manual",
    caseMaterial: "18K Rose Gold",
    waterResistance: "30m",
  },
];
