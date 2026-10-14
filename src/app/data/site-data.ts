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
  image?: string;
  checklist?: string[];
}

export interface RoomProcessItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  tasks: string[];
  description: string;
}

export interface PricingPackageItem {
  id: string;
  title: string;
  rate: string;
  unit: string;
  popular?: boolean;
  featured?: boolean;
  badge?: string;
  description: string;
  features: string[];
}

export interface PropertyPricingTier {
  propertyType: string;
  lightPrice: string;
  tenancyPrice: string;
  tenancyWithCarpetPrice: string;
}

export const ROOM_PROCESS: RoomProcessItem[] = [
  {
    id: 'bedroom',
    name: 'Bedroom Cleaning',
    tagline: 'Peaceful, Allergen-Free Sleep Environment',
    image: 'images/bedroom.jpg',
    tasks: ['Bed Making & Linen Refresh', 'Thorough Dust Removal', 'Deep Carpet Vacuuming', 'Blind & Track Cleaning', 'Furniture & Wardrobe Dusting'],
    description: 'We turn your bedroom into an immaculate retreat. Dust is eliminated from baseboards, lamp fixtures, and under beds so you breathe easy.'
  },
  {
    id: 'kitchen',
    name: 'Kitchen Cleaning',
    tagline: 'Food-Safe, Grease-Free Sanitisation',
    image: 'images/kitchen.jpg',
    tasks: ['Countertop Disinfection', 'Sink & Tap Sanitizing', 'Floor Sweeping & Mopping', 'Appliance Exterior Degreasing', 'Cabinet Fronts Polished'],
    description: 'Our pros tackle grease splatter, limescale, and grime on all cooking stations, ensuring a spotless and hygienic food prep space.'
  },
  {
    id: 'dining-room',
    name: 'Dining Room Cleaning',
    tagline: 'Spotless Elegance for Entertaining',
    image: 'images/dining-room.jpg',
    tasks: ['Furniture & Table Polishing', 'Decoration & Chandelier Dusting', 'Hard Floor Mopping', 'Skirting Board Detailing', 'Glassware Display Buffing'],
    description: 'Every seat, table surface, and accent piece is carefully dusted and polished, ready for warm family gatherings and dinner guests.'
  },
  {
    id: 'living-room',
    name: 'Living Room Cleaning',
    tagline: 'Fresh & Spotless Relaxation Hub',
    image: 'images/living-room.jpg',
    tasks: ['Dust Removal Across All Surfaces', 'Decor Organization & Dusting', 'Deep Carpet & Rug Vacuuming', 'Sofa & Fabric Care', 'Window Sills & Corner Cobwebs'],
    description: 'The heart of your home receives meticulous care. We vacuum sofa crevices, dust media setups safely, and clean high-touch areas.'
  },
  {
    id: 'bathroom',
    name: 'Bathroom Cleaning',
    tagline: 'Hospital-Grade Descaling & Gleaming Shine',
    image: 'images/bathroom.jpg',
    tasks: ['Countertop & Sink Disinfection', 'Deep Toilet & Rim Descaling', 'Shower & Bath Refresh', 'Tile Grout & Floor Mopping', 'Mirror & Chrome Polishing'],
    description: 'Say goodbye to soap scum and limescale. We thoroughly disinfect sanitaryware, polish taps to a mirror finish, and leave tiles sparkling.'
  },
  {
    id: 'laundry-room',
    name: 'Laundry Room Cleaning',
    tagline: 'Clean, Organized & Mould-Free Hygiene',
    image: 'images/laundry-room.jpg',
    tasks: ['Dust Removal on Shelving', 'Countertop Sanitisation', 'Washer & Dryer Wipe-Down', 'Utility Sink Disinfection', 'Floor Mopping & Lint Clean'],
    description: 'We keep your utility room functioning efficiently by cleaning appliance rubbers, removing trapped lint, and wiping all surfaces clean.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'domestic',
    title: 'Regular Domestic Cleaning',
    category: 'residential',
    shortDesc: 'Regular cleaning on your terms: weekly, bi-weekly or monthly. Guaranteed cleanliness, flexible scheduling.',
    description: 'Choosing the right house cleaner makes all the difference. At Bright2Shine, we personally meet and train all our cleaners. They don’t just maintain your home; they support you through every season with reliable, trustworthy care.',
    icon: 'home',
    popular: true,
    features: [
      'Kitchen sink, counters and exterior appliances cleaned',
      'Bathroom deep wash, descaling & mirror polishing',
      'Dusting and sanitising all accessible surfaces',
      'Vacuuming and mopping hard floors',
      'Bed making & linen changes upon request',
      'Detergents provided per session (optional £10)'
    ],
    checklist: [
      'Kitchen surfaces & hobs degreased',
      'Bathrooms scrubbed & sanitized',
      'Bedrooms dusted & beds made',
      'Dining room polished',
      'Living room vacuumed & straightened'
    ],
    startingPrice: '£15/hr',
    turnaround: 'Weekly / Bi-Weekly / Monthly',
    image: 'images/domestic-3.jpg'
  },
  {
    id: 'one-off',
    title: 'One-Off Cleaning Service',
    category: 'residential',
    shortDesc: 'Thorough one-time intensive cleaning service to refresh your entire property from top to bottom.',
    description: 'Perfect for spring cleaning, post-renovation recovery, or getting ready for special events. We tackle hidden corners, dust buildup, and bring back the original shine of your home without ongoing contracts.',
    icon: 'sparkles',
    popular: true,
    features: [
      'Complete room-by-room intensive cleaning',
      'High and low dusting including cobwebs',
      'Doors, frames, skirting boards & switch plates',
      'Deep kitchen and bathroom degreasing & descaling',
      'Floors vacuumed and thoroughly mopped'
    ],
    startingPrice: '£19/hr',
    turnaround: 'Flexible Booking',
    image: 'images/domestic-1.jpg'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning Service',
    category: 'residential',
    shortDesc: 'Maintain sparkle with monthly deep cleaning. Allergy-free living guaranteed especially during warmer seasons.',
    description: 'Our intensive deep clean targets accumulated grime, limescale, allergens, and bacteria. We hand-clean high-touch areas, baseboards, window tracks, and backsplash to restore pure hygiene.',
    icon: 'sparkles',
    features: [
      'Thorough Dusting and Polishing',
      'Detailed Hand Cleaning of High-Touch Areas',
      'Baseboard & Skirting Board Cleaning',
      'Vacuuming and Wipe Down of Window Tracks',
      'Interior Door & Frame Cleaning',
      'Sparkling Interior Window Cleaning',
      'Kitchen Backsplash Deep Clean & Degrease',
      'Full Ceiling Cobweb Removal'
    ],
    checklist: [
      'Thorough Dusting and Polishing',
      'Detailed Hand Cleaning of High-Touch Areas',
      'Baseboard Cleaning',
      'Vacuuming & Wipe Down of Window Tracks',
      'Interior Door Cleaning',
      'Sparkling Interior Window Cleaning',
      'Kitchen Backsplash Deep Clean',
      'Cobweb Removal'
    ],
    startingPrice: '£19/hr',
    turnaround: 'Half-Day / Full-Day',
    image: 'images/domestic-4.jpg'
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning Service',
    category: 'specialist',
    shortDesc: 'Professional high-pressure hot water steam extraction reviving carpet fibres and eliminating allergens.',
    description: 'Industrial-strength hot-water extraction penetrates deep into carpet fabrics to remove stubborn stains, pet dander, dirt mites, and persistent odours without damaging delicate fibres.',
    icon: 'brush',
    features: [
      'Pre-treatment of stubborn spots & heavy foot-traffic areas',
      'Hot-water steam extraction cleaning',
      'Antibacterial odour neutralisation',
      'Rapid drying technology (dry in 2-4 hours)',
      'Safe for pets, toddlers, and wool blends'
    ],
    startingPrice: 'Starting from £90',
    turnaround: '2-4 hr drying time',
    image: 'images/home-3.jpg'
  },
  {
    id: 'upholstery',
    title: 'Upholstery Cleaning Service',
    category: 'specialist',
    shortDesc: 'Gentle yet powerful fabric and leather sofa sanitisation removing stains, grease, and dust.',
    description: 'Give your sofas, armchairs, and dining chairs a second life. We use pH-neutral, fabric-specific detergents that lift embedded dirt and food spills while preserving textile colour.',
    icon: 'brush',
    features: [
      'Fabric assessment & color-fastness testing',
      'Deep foam extraction & steam sanitisation',
      'Grease, coffee, and ink stain treatments',
      'Pet odour elimination & fresh fragrance application'
    ],
    startingPrice: 'From £45/armchair',
    turnaround: 'Same-day available',
    image: 'images/about-1.jpg'
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy Cleaning',
    category: 'specialist',
    shortDesc: 'Comprehensive deposit-back cleaning following estate agent checklists with 72-hour guarantee.',
    description: 'Make sure you have a spotless space. Leave the cleaning to us and have a hassle-free move out or settle in. Backed by our free re-clean guarantee if anything is flagged by your inventory clerk.',
    icon: 'key',
    popular: true,
    features: [
      'Full internal kitchen cupboards & drawers',
      'Oven, hob and extractor fan steam degreased',
      'Fridge/freezer interior wiped and disinfected',
      'Bathrooms descaled, bleached and sanitized',
      'Internal windows, frames, sills & skirting boards',
      'Option to bundle with Carpet Steam Cleaning'
    ],
    checklist: [
      'Standard Cleaning Services',
      'Oven Steam Cleaning',
      'Refrigerator Interior Cleaning',
      'Kitchen Drawer Organization (inside & out)',
      'Bathroom Drawer Cleaning (inside & out)',
      'Interior Window Cleaning (ground-level)',
      'Backsplash Deep Cleaning',
      'Trash Removal'
    ],
    startingPrice: 'From £125',
    turnaround: 'Same-day / Next-day',
    image: 'images/bg2.jpg'
  },
  {
    id: 'ironing',
    title: 'Ironing Services',
    category: 'residential',
    shortDesc: 'Crisp, crease-free garment pressing delivered by experienced professionals.',
    description: 'Take the chore out of laundry day. Our reliable staff press shirts, trousers, dresses, and bed linens with precision, folded or hung just the way you like.',
    icon: 'briefcase',
    features: [
      'Shirts, blouses, and trousers steam-pressed',
      'Bed linen and tablecloth smoothing',
      'Hanger placement or neat folding service',
      'Can be combined with your regular domestic clean'
    ],
    startingPrice: '£15/hr',
    turnaround: 'Flexible Service',
    image: 'images/domestic-2.jpg'
  },
  {
    id: 'disinfection',
    title: 'Electrostatic Disinfection Service',
    category: 'specialist',
    shortDesc: 'Hospital-grade EPA-registered disinfection eradicating 99.9% of bacteria, viruses, and contaminants.',
    description: 'Bright2Shine Electrostatic Disinfection Service is a powerful solution for homes and offices designed to eradicate germs, bacteria and viruses. Utilizing a safe, hospital-grade disinfectant our experts target and eliminate contaminants including coronaviruses, Norovirus, SARS, E. Coli, Salmonella, and more in 30-60 minutes.',
    icon: 'sparkles',
    features: [
      'EPA-registered, pH-neutral disinfectant',
      '100% harmless to people, pets, plants and environment',
      'Diligent coverage of all high-touch surfaces',
      '30 to 60 minute rapid turnaround depending on area size',
      'Comprehensive pathogen and virus elimination'
    ],
    startingPrice: 'Custom Bespoke Quotes',
    turnaround: '30-60 min session',
    image: 'images/fg1.jpg'
  },
  {
    id: 'office',
    title: 'Office & Commercial Cleaning',
    category: 'commercial',
    shortDesc: 'Professional office and commercial cleaning in London tailored to your hours and standards.',
    description: 'Bright2Shine sends dedicated professionals straight to your location in London. Cleaning pros will complete each and all tasks with diligence while taking your personal requirements into full consideration. We stand for high-end equipment and quality cleaning solutions that are not available in-store.',
    icon: 'building',
    features: [
      'Desk, computer & tech surface sanitisation',
      'Kitchenette, breakroom & microwave deep cleans',
      'Restroom hygiene replenishment and sanitisation',
      'Trash bins emptied, bags replaced & recycling sorted',
      'Flexible out-of-hours, evening or weekend visits'
    ],
    startingPrice: 'Tailored Commercial Quotes',
    turnaround: 'Daily / Evening / Weekends',
    image: 'images/bg-1.jpg'
  }
];

export const HOURLY_PRICING: PricingPackageItem[] = [
  {
    id: 'regular-domestic',
    title: 'Regular Domestic Cleaning',
    rate: '£15',
    unit: '/hr',
    description: 'Best for regular scheduled cleaning weekly, bi-weekly or monthly.',
    features: [
      'Flexible scheduling on your terms',
      'Guaranteed cleanliness & same cleaner consistency',
      'Kitchen, bathrooms, bedrooms & living room',
      'Dusting, vacuuming & hard floor mopping',
      'Eco-safe detergents available (+£10/session)'
    ]
  },
  {
    id: 'one-off',
    title: 'One-Off Cleaning',
    rate: '£19',
    unit: '/hr',
    featured: true,
    badge: 'Popular Choice',
    description: 'Ideal for seasonal spring cleans or a comprehensive property refresh.',
    features: [
      'Top-to-bottom thorough scrub',
      'Inside accessible cupboards & skirting boards',
      'Detailed bathroom descaling & tile buffing',
      'Heavy dust & cobweb elimination',
      'No recurring contract commitment'
    ]
  },
  {
    id: 'deep-clean',
    title: 'Deep Cleaning',
    rate: '£19',
    unit: '/hr',
    description: 'Maintain sparkle with monthly allergy-free living sanitisation.',
    features: [
      'Detailed hand cleaning of high-touch areas',
      'Window tracks & interior glass cleaning',
      'Kitchen backsplash deep clean & degrease',
      'Baseboard & door frame detailing',
      'EPA-registered disinfectants included'
    ]
  },
  {
    id: 'carpet-clean',
    title: 'Carpet Cleaning',
    rate: '£90',
    unit: 'starting from',
    description: 'Industrial steam extraction removing embedded allergens & dirt.',
    features: [
      'High-pressure hot water extraction machinery',
      'Stain pre-treatment & high-traffic recovery',
      'Odour elimination & pet dander removal',
      'Rapid drying in 2-4 hours',
      'Wool and delicate fibre safe'
    ]
  },
  {
    id: 'ironing-service',
    title: 'Ironing Services',
    rate: '£15',
    unit: '/hr',
    description: 'Professional pressing service for clothes, shirts & bed linens.',
    features: [
      'Expert steam-ironed garments',
      'Folded or hung to your instructions',
      'Delicate fabric handling',
      'Can be scheduled alongside regular clean'
    ]
  }
];

export const EXTRA_CLEANING_ADDONS = [
  { item: 'Extra Toilet', price: '£30', note: 'Full sanitisation & descaling' },
  { item: 'Extra Bathroom', price: '£40', note: 'Tiles, bath, shower & mirrors' },
  { item: 'Balcony', price: '£50', note: 'Swept, glass wiped & railings washed' },
  { item: 'Personal Items Inside (Clean Around)', price: '£80', note: 'Carefully working around personal belongings' }
];

export const PROPERTY_PRICING_TABLE: PropertyPricingTier[] = [
  { propertyType: 'Studio Flat', lightPrice: '£115', tenancyPrice: '£125', tenancyWithCarpetPrice: '£240' },
  { propertyType: '1 Bedroom Flat', lightPrice: '£130', tenancyPrice: '£190', tenancyWithCarpetPrice: '£265' },
  { propertyType: '2 Bedroom Flat', lightPrice: '£155', tenancyPrice: '£230', tenancyWithCarpetPrice: '£295' },
  { propertyType: '3 Bedroom Flat', lightPrice: '£175', tenancyPrice: '£270', tenancyWithCarpetPrice: '£365' },
  { propertyType: '4 Bedroom Flat', lightPrice: '£195', tenancyPrice: '£320', tenancyWithCarpetPrice: '£410' },
  { propertyType: '5 Bedroom Flat', lightPrice: '£220', tenancyPrice: '£380', tenancyWithCarpetPrice: '£455' },
  { propertyType: '6 Bedroom Flat', lightPrice: '£235', tenancyPrice: 'Custom Quote', tenancyWithCarpetPrice: 'Custom Quote' },
  { propertyType: '2 Bedroom House', lightPrice: '£170', tenancyPrice: '£225', tenancyWithCarpetPrice: '£325' },
  { propertyType: '3 Bedroom House', lightPrice: '£195', tenancyPrice: '£300', tenancyWithCarpetPrice: '£385' },
  { propertyType: '4 Bedroom House', lightPrice: '£210', tenancyPrice: '£350', tenancyWithCarpetPrice: '£435' },
  { propertyType: '5 Bedroom House', lightPrice: '£240', tenancyPrice: '£415', tenancyWithCarpetPrice: '£495' },
  { propertyType: '6 Bedroom House', lightPrice: '£255', tenancyPrice: 'Custom Quote', tenancyWithCarpetPrice: 'Custom Quote' }
];

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  category: 'residential' | 'tenancy' | 'commercial' | 'specialist';
  rating: number;
  date: string;
  quote: string;
  avatarText: string;
  avatarUrl: string;
  verifiedPlatform: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Philip Lopen',
    location: 'London',
    service: 'End of Tenancy Clean',
    category: 'tenancy',
    rating: 5,
    date: '6 hours ago',
    quote: 'Great price · £400–450. The cleaners were superb, friendly and so incredibly helpful. Outstanding service and one that we whole heartedly recommend.',
    avatarText: 'P',
    avatarUrl: '',
    verifiedPlatform: 'Google Reviews'
  },
  {
    id: '2',
    name: 'Dion Rankine',
    location: 'London',
    service: 'Domestic Cleaning',
    category: 'residential',
    rating: 5,
    date: '20 hours ago',
    quote: 'Reasonable price · £300–350. Booking and cleaning all done within 48 hours — very easy to work with and left my property completely spotless. Recommend highly!',
    avatarText: 'D',
    avatarUrl: '',
    verifiedPlatform: 'Google Reviews'
  },
  {
    id: '3',
    name: 'Kim Riches',
    location: 'London',
    service: 'One-off Deep Clean',
    category: 'specialist',
    rating: 5,
    date: '1 week ago',
    quote: 'Great price · £1–50. Very thorough, high quality cleaning. Completed tasks not expected, i.e. emptied bins. Left everything looking amazing.',
    avatarText: 'K',
    avatarUrl: '',
    verifiedPlatform: 'Google Reviews'
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    location: 'Ilford, Redbridge',
    service: 'End of Tenancy Clean',
    category: 'tenancy',
    rating: 5,
    date: '2 weeks ago',
    quote: 'Great price · £250–300. Bright2Shine did an unbelievable job on our 3-bedroom rental property. The oven looked brand new and the landlord returned 100% of our deposit with zero disputes.',
    avatarText: 'S',
    avatarUrl: '',
    verifiedPlatform: 'Google Reviews'
  },
  {
    id: '5',
    name: 'Tariq Al-Mansoor',
    location: 'Barking (IG11)',
    service: 'Office Cleaning Contract',
    category: 'commercial',
    rating: 5,
    date: '1 month ago',
    quote: 'Reasonable price · £180/mo. We contracted Bright2Shine for our financial advisory office in Barking. The team is consistently punctual, discreet, and our office always smells revitalised every morning.',
    avatarText: 'T',
    avatarUrl: '',
    verifiedPlatform: 'Google Reviews'
  },
  {
    id: '6',
    name: 'Eleanor Vance',
    location: 'Canary Wharf',
    service: 'Weekly Domestic Clean',
    category: 'residential',
    rating: 5,
    date: '3 weeks ago',
    quote: 'Great price · £15/hr. Reliable, thorough and communicative. Having Bright2Shine take care of our apartment weekly has freed up our weekends completely.',
    avatarText: 'E',
    avatarUrl: '',
    verifiedPlatform: 'Google Reviews'
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
    answer: 'We provide 100% free, no-obligation quotes. For standard homes and end of tenancy cleans, we offer straightforward hourly rates (£15-£19/hr) and fixed property packages based on bedrooms and bathrooms.',
    category: 'Pricing'
  },
  {
    question: 'What is included in your End of Tenancy cleaning?',
    answer: 'Our End of Tenancy clean follows strict landlord and estate agent checkout checklists: full oven steam degreasing, inside/outside of cupboards, limescale removal from all sanitaryware, doors, skirting boards, plus an optional carpet steam extraction package.',
    category: 'Guarantee'
  },
  {
    question: 'What happens if I need to reschedule or cancel my booking?',
    answer: 'We understand schedules change! We offer flexible rescheduling. Simply give us at least 24 hours notice and we will gladly change your appointment time free of charge.',
    category: 'Booking'
  },
  {
    question: 'What areas in London and Essex do you cover?',
    answer: 'We primarily cover Ilford, Barking, Dagenham, Redbridge, Stratford, Romford, Walthamstow, Canary Wharf, and broader London & Essex postcodes.',
    category: 'Coverage'
  }
];

export const ABOUT_US_DATA = {
  heroTagline: 'Residential and Commercial Cleaning Services',
  heroTitle: 'Bright2Shine Loves Cleaning Spaces!',
  intro: "Welcome to Bright2Shine, London's premier cleaning company. With a passion for cleanliness, we provide top-notch domestic and commercial cleaning services to homes and businesses across the city. Dedicated to delivering exceptional cleaning results exceeding our customers' expectations and building long-lasting relationships.",
  features: [
    {
      title: 'Instant Online Booking',
      desc: 'See real-time availability, get an estimate, and book online in minutes. Experience the convenience of our streamlined scheduling.'
    },
    {
      title: 'Flexible Scheduling',
      desc: 'Cleaning on your terms. Easily re-schedule, book recurring visits, or plan one-off deep cleans with total peace of mind.'
    },
    {
      title: 'Trusted Professionals',
      desc: 'All London cleaners we work with are carefully vetted, background-checked, and well-trained to meet the highest standard.'
    }
  ],
  commitmentTitle: 'Our Eco-Friendly Commitment',
  commitmentText: "London's trusted eco-friendly cleaning company. We're passionate about delivering exceptional cleaning services while prioritizing the well-being of our community and the environment. We exclusively use environmentally safe, non-toxic products to minimize ecological footprints.",
  commitmentPoints: [
    'Reduced Carbon Footprint',
    'Minimized Plastic Waste',
    'Family-Friendly and Non-Toxic',
    'Hospital-Grade EPA-Registered Disinfectants'
  ]
};

export const COMPANY_DETAILS = {
  name: 'Bright2Shine Ltd',
  tagline: 'Spotless spaces. Brighter days.',
  phone1: '07466 036791',
  phone1Raw: '07466036791',
  phone2: '07499 896458',
  phone2Raw: '07499896458',
  whatsappRaw: '447466036791',
  email: 'info@bright2shine.com',
  email2: 'contact@bright2shine.com',
  emails: ['info@bright2shine.com', 'contact@bright2shine.com'],
  address: 'F6 Viking, 104 Renwick Road, IG11 0QF, London, UK',
  openingHours: 'Mon - Sun: 7:30 AM - 8:30 PM',
  areasCovered: ['Ilford', 'Barking', 'Redbridge', 'Dagenham', 'Stratford', 'Romford', 'Canary Wharf', 'East London & Essex'],
  stats: [
    { label: 'Happy Clients', value: 1250, suffix: '+' },
    { label: 'Cleans Completed', value: 4800, suffix: '+' },
    { label: 'Satisfaction Rate', value: 99, suffix: '%' },
    { label: 'Experienced Cleaners', value: 25, suffix: '+' }
  ]
};
