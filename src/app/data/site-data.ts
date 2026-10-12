export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'specialist';
  shortDesc: string;
  description: string;
  icon: string;
  popular?: boolean;
  features: string[];
  startingPrice: string;
  turnaround: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'domestic',
    title: 'Domestic Cleaning',
    category: 'residential',
    shortDesc: 'Regular weekly or bi-weekly home cleaning tailored to your family routine.',
    description: 'Keep your home fresh, sanitary, and pristine without lifting a finger. Our reliable and vetted domestic cleaners take care of everything from vacuuming and dusting to surface sanitisation and kitchen degreasing.',
    icon: 'home',
    popular: true,
    features: [
      'Dusting and sanitising all accessible surfaces',
      'Vacuuming and mopping hard floors',
      'Kitchen sink, counters and exterior appliances cleaned',
      'Bathroom deep wash, descaling & mirror polishing',
      'Linen changing and bed making (upon request)'
    ],
    startingPrice: 'From £18/hour',
    turnaround: 'Flexible Schedules'
  },
  {
    id: 'office',
    title: 'Office & Workspace Cleaning',
    category: 'commercial',
    shortDesc: 'Spotless workspaces that boost employee wellbeing and create stellar client impressions.',
    description: 'A spotless office fosters productivity and presents a spotless image to your visiting partners and clients. We offer out-of-hours, evening, or weekend cleaning contracts tailored to your business schedule.',
    icon: 'briefcase',
    features: [
      'Desk, workstation & tech surface sanitisation',
      'Kitchenette, breakroom & fridge deep cleans',
      'Restroom hygiene restocking and disinfection',
      'Bins emptied, recycled & liners replaced',
      'Boardroom and reception area preparation'
    ],
    startingPrice: 'Custom Bespoke Contracts',
    turnaround: 'Daily / Evening / Weekends'
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy Cleaning',
    category: 'specialist',
    shortDesc: 'Guaranteed deposit return clean following official estate agent checklists.',
    description: 'Moving out is stressful enough. Our full end-of-tenancy clean delivers a rigorous top-to-bottom scrub designed to meet the strictest landlord inspection standards, complete with a 72-hour re-clean guarantee.',
    icon: 'key',
    popular: true,
    features: [
      'Full oven, extractor fan & hob deep degreasing',
      'Inside and outside of all cupboards and wardrobes',
      'Limescale removal from tiles, taps & shower heads',
      'Skirting boards, switches, sockets & doors washed',
      '72-Hour free re-clean guarantee certificate'
    ],
    startingPrice: 'From £120',
    turnaround: 'Same-day / Next-day Available'
  },
  {
    id: 'deep-clean',
    title: 'One-Off Deep Cleaning',
    category: 'residential',
    shortDesc: 'Intensive top-to-bottom sanitisation for seasonal refreshes or post-event care.',
    description: 'Perfect for spring cleaning, moving into a new property, or recovering after a home gathering. We tackle behind appliances, inside hidden corners, and eradicate long-standing grime and dirt.',
    icon: 'sparkles',
    features: [
      'Moving furniture to clean hard-to-reach areas',
      'Heavy lime scale and mould removal',
      'Interior window cleaning & sills wiping',
      'Wall spot-cleaning & tile grout brushing',
      'Deep steam sanitisation of targeted spaces'
    ],
    startingPrice: 'From £95',
    turnaround: 'Half-day / Full-day Service'
  },
  {
    id: 'carpet',
    title: 'Carpet & Upholstery Cleaning',
    category: 'specialist',
    shortDesc: 'Professional hot-water extraction removing stubborn stains, pet dander and allergens.',
    description: 'Revitalise dull carpets, sofas, and fabrics. Our industrial-grade extraction machinery penetrates deep carpet fibres to eliminate deep-seated dirt, dust mites, and persistent pet odours without damaging fabrics.',
    icon: 'brush',
    features: [
      'Pre-treatment of stubborn stains & heavy traffic paths',
      'Deep hot-water steam extraction cleaning',
      'Odour neutralisation & antibacterial treatment',
      'Rapid drying technology (dry in 2-4 hours)',
      'Safe for pets, babies and wool-blend carpets'
    ],
    startingPrice: 'From £35/room',
    turnaround: '2-4 hr drying time'
  },
  {
    id: 'commercial',
    title: 'Commercial & Retail Cleaning',
    category: 'commercial',
    shortDesc: 'High-standard cleaning for retail stores, clinics, gyms, schools and venues.',
    description: 'Comprehensive facility care for high-footfall commercial spaces throughout East London and Essex. We adhere strictly to COSHH guidelines, providing full risk assessments and hygiene logs.',
    icon: 'building',
    features: [
      'Floor buffing, scrubbing and machine maintenance',
      'High-touch surface sanitisation regimes',
      'Washroom replenishment and deep disinfection',
      'Full COSHH compliance & RAMS documentation',
      'Flexible contracts with dedicated account managers'
    ],
    startingPrice: 'Tailored Commercial Quotes',
    turnaround: '24/7 Availability'
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
  avatarText: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Ilford, Redbridge',
    service: 'End of Tenancy Clean',
    rating: 5,
    date: '2 weeks ago',
    quote: 'Bright2Shine did an unbelievable job on our 3-bedroom rental property. The oven looked brand new and the landlord returned 100% of our deposit with zero disputes. Highly recommended!',
    avatarText: 'SJ'
  },
  {
    id: '2',
    name: 'Tariq Al-Mansoor',
    location: 'Barking (IG11)',
    service: 'Office Cleaning Contract',
    rating: 5,
    date: '1 month ago',
    quote: 'We contracted Bright2Shine for our financial advisory office in Barking. The team is consistently punctual, discreet, and our office always smells revitalised every morning. First-class service.',
    avatarText: 'TM'
  },
  {
    id: '3',
    name: 'Emma & Liam Ward',
    location: 'Romford & East London',
    service: 'Fortnightly Domestic Clean',
    rating: 5,
    date: '3 weeks ago',
    quote: 'With two toddlers and two dogs, keeping up with the house felt impossible. Having Bright2Shine come every other Thursday has been a total game-changer. Trustworthy, friendly, and thorough.',
    avatarText: 'EW'
  },
  {
    id: '4',
    name: 'Dr. Michael Chen',
    location: 'Stratford / East London',
    service: 'Carpet & Deep Clean',
    rating: 5,
    date: 'Last month',
    quote: 'Removed wine stains from a cream wool rug that another cleaning service claimed was impossible to save! Courteous staff and transparent pricing from start to finish.',
    avatarText: 'MC'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Do you bring your own cleaning equipment and eco-friendly supplies?',
    answer: 'Yes! Our cleaners come fully equipped with high-grade commercial tools, vacuums, microfiber systems, and eco-friendly, pet-safe cleaning solutions. If you prefer us to use specific products of your own, just let us know.',
    category: 'Supplies'
  },
  {
    question: 'Are all your cleaners insured and DBS checked?',
    answer: 'Absolutely. Every member of the Bright2Shine team undergoes thorough background vetting, DBS checks, and intensive practical training. We also carry £2M comprehensive public liability insurance for your complete peace of mind.',
    category: 'Safety'
  },
  {
    question: 'How do you price and quote your cleaning services?',
    answer: 'We provide 100% free, no-obligation quotes. For standard homes and end of tenancy cleans, we can provide immediate fixed quotes over the phone, WhatsApp, or through our website form. For commercial spaces, we offer free site visits to calculate exact requirements.',
    category: 'Pricing'
  },
  {
    question: 'What happens if I need to reschedule or cancel my booking?',
    answer: 'We understand schedules change! We offer flexible rescheduling. Simply give us at least 24 hours notice and we will gladly change your appointment time free of charge.',
    category: 'Booking'
  },
  {
    question: 'What areas in London and Essex do you cover?',
    answer: 'We primarily cover Ilford, Barking, Dagenham, Redbridge, Stratford, Romford, Walthamstow, Canary Wharf, and broader East London / Essex border postcodes.',
    category: 'Coverage'
  },
  {
    question: 'What is your satisfaction guarantee for End of Tenancy cleaning?',
    answer: 'Our End of Tenancy cleans include an automatic 72-hour guarantee. In the unlikely event that your inventory clerk or landlord spots any missed area, we return and reclean it completely free of charge.',
    category: 'Guarantee'
  }
];

export const COMPANY_DETAILS = {
  name: 'Bright2Shine Ltd',
  tagline: 'Spotless spaces. Brighter days.',
  phone1: '07466 036791',
  phone1Raw: '07466036791',
  phone2: '07499 896458',
  phone2Raw: '07499896458',
  whatsappRaw: '447466036791',
  email: 'contact@bright2shine.com',
  address: 'F6 Viking, 104 Renwick Road, IG11 0QF, London, UK',
  openingHours: 'Mon - Sun: 7:30 AM - 8:30 PM',
  areasCovered: ['Ilford', 'Barking', 'Redbridge', 'Dagenham', 'Stratford', 'Romford', 'East London & Essex'],
  stats: [
    { label: 'Happy Clients', value: 1250, suffix: '+' },
    { label: 'Cleans Completed', value: 4800, suffix: '+' },
    { label: 'Satisfaction Rate', value: 99, suffix: '%' },
    { label: 'Experienced Cleaners', value: 25, suffix: '+' }
  ]
};
