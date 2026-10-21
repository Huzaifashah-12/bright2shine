export interface CommercialServiceItem {
  id: string;
  anchor: string;
  title: string;
  subtitle: string;
  priceTag: string;
  rateInfo: string;
  minHours: string;
  targetAudience: string;
  image: string;
  includesEveryVisit?: string[];
  includesWeekly?: string[];
  includesMonthly?: string[];
  includedItems?: string[];
}

export interface HomeServiceCard {
  id: string;
  title: string;
  price: string;
  rateInfo: string;
  description: string;
  tagline: string;
  icon: string;
  badge?: string;
  linkText: string;
}

export interface RoomProcessItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  tasks: string[];
  description: string;
}

export interface CommercialPriceRow {
  service: string;
  price: string;
  minimum: string;
  bestFor: string;
}

export interface HomePriceRow {
  service: string;
  price: string;
  minimum: string;
  bestFor: string;
}

export interface PropertyPricingTier {
  propertyType: string;
  standardPrice: string;
  tenancyPrice: string;
  tenancyWithCarpetPrice: string;
  afterBuildersPrice: string;
}

export interface SingleJobItem {
  category: 'oven-kitchen' | 'windows';
  item: string;
  price: string;
}

export interface ExtraItem {
  category: 'carpets' | 'upholstery' | 'addons';
  item: string;
  price: string;
  detail?: string;
}

export const COMPANY_DETAILS = {
  name: 'Bright2Shine',
  legalName: 'Bright2Shine Ltd',
  tagline: 'Spotless spaces. Brighter days.',
  phone1: '07494 809603',
  phone1Raw: '+447494809603',
  phoneDisplay: '07494 809603',
  whatsappRaw: '447494809603',
  whatsappLink: 'https://wa.me/447494809603?text=Hi%20Bright2Shine%2C%20I%27d%20like%20a%20free%20cleaning%20quote.',
  email: 'info@bright2shine.com',
  emailCommercial: 'contact@bright2shine.com',
  officeHours: 'Mon–Sat, 8:00am – 7:00pm',
  cleaningAvailability: 'Cleaning available 7 days, including early mornings, evenings and weekends.',
  areasList: [
    'Barking',
    'Dagenham',
    'Ilford',
    'Redbridge',
    'Romford',
    'East Ham',
    'Stratford',
    'Canary Wharf',
    'nearby Essex'
  ],
  standardAreasString: 'Barking · Dagenham · Ilford · Redbridge · Romford · East Ham · Stratford · Canary Wharf · nearby Essex',
  insuranceText: 'Fully insured: £5m / £10m Public Liability · £10m Employers\' Liability. Certificates available on request.',
  staffVettingText: 'Vetted and referenced staff',
  reCleanPromise: 'Free re-clean within 48 hours if anything is missed',
  legalLine: '© 2026 Bright2Shine Ltd. Registered in England & Wales, company no. [COMPANY NUMBER] . Registered office: [REGISTERED OFFICE ADDRESS] .'
};

export const COMMERCIAL_SERVICES: CommercialServiceItem[] = [
  {
    id: 'office',
    anchor: 'office',
    title: 'Office Cleaning',
    subtitle: 'from £21/hr · min. 3 hrs per visit',
    priceTag: 'from £21/hr',
    rateInfo: 'min. 3 hrs per visit',
    minHours: '3 hrs / visit',
    targetAudience: 'Offices, shops, clinics, corporate workspaces, and business centres.',
    image: 'images/bg2.jpg',
    includesEveryVisit: [
      'Empty bins and replace liners',
      'Vacuum carpets and mop hard floors',
      'Wipe and sanitise desks, phones and keyboards (clear desks)',
      'Clean and restock washrooms',
      'Clean kitchen and breakout areas, sinks and microwave exterior',
      'Wipe door handles, light switches and other high-touch points',
      'Spot-clean internal glass'
    ],
    includesWeekly: [
      'Dust skirting boards, ledges and window sills',
      'Clean inside microwaves',
      'Polish meeting-room tables',
      'Clean glass doors'
    ],
    includesMonthly: [
      'High-level dusting',
      'Descale washrooms',
      'Clean inside fridges',
      'Carpet spot treatment',
      'Internal windows'
    ]
  },
  {
    id: 'communal',
    anchor: 'communal',
    title: 'Communal Areas (Blocks of Flats)',
    subtitle: 'from £21/hr · min. 3 hrs per visit',
    priceTag: 'from £21/hr',
    rateInfo: 'min. 3 hrs per visit',
    minHours: '3 hrs / visit',
    targetAudience: 'Property managers, resident management companies (RMCs), housing associations, and landlords.',
    image: 'images/service-area-spree.jpg',
    includedItems: [
      'Sweep and mop stairs, landings and hallways',
      'Vacuum entrance mats',
      'Wipe handrails, door handles, intercom panels and lift interiors',
      'Clean entrance glass',
      'Clean bin stores',
      'Remove cobwebs',
      'Visit report with photos sent to the managing agent'
    ]
  },
  {
    id: 'hostels',
    anchor: 'hostels',
    title: 'Hostels, HMOs & Supported Housing',
    subtitle: 'from £22/hr · min. 3 hrs per visit',
    priceTag: 'from £22/hr',
    rateInfo: 'min. 3 hrs per visit',
    minHours: '3 hrs / visit',
    targetAudience: 'Supported living providers, student accommodations, emergency hostels, and HMO landlords.',
    image: 'images/county-bg.jpg',
    includedItems: [
      'Shared kitchens (worktops, hobs, sinks, fridge exteriors)',
      'Shared bathrooms and toilets (descale and disinfect)',
      'Corridors, stairs and communal lounges',
      'Bin areas and refuse rooms',
      'Room turnaround cleans between residents',
      'Daily or weekly schedules tailored to resident turnover'
    ]
  },
  {
    id: 'schools',
    anchor: 'schools',
    title: 'Schools, Clinics & Places of Worship',
    subtitle: 'from £21/hr · min. 3 hrs per visit',
    priceTag: 'from £21/hr',
    rateInfo: 'min. 3 hrs per visit',
    minHours: '3 hrs / visit',
    targetAudience: 'Primary & secondary schools, nurseries, medical centres, dental clinics, churches, mosques, and community centres.',
    image: 'images/home-3.jpg',
    includedItems: [
      'Classrooms, waiting areas and prayer halls',
      'Washrooms and wudu areas (deep disinfection)',
      'Floors and carpets (vacuumed and mopped)',
      'High-touch points (switches, rails, push-plates sanitised)',
      'Kitchens and staff rooms',
      'Flexible cleaning outside opening and prayer times'
    ]
  },
  {
    id: 'after-builders',
    anchor: 'after-builders',
    title: 'After Builders Cleaning',
    subtitle: '£25/hr · min. 4 hrs',
    priceTag: '£25/hr',
    rateInfo: 'min. 4 hrs',
    minHours: '4 hrs',
    targetAudience: 'Main contractors, fit-out specialists, refurbishers, interior designers, and commercial property owners.',
    image: 'images/domestic-1.jpg',
    includedItems: [
      'Remove builders\' dust from all surfaces',
      'Clean windows, frames and sills',
      'Remove paint spots, silicone and stickers',
      'Vacuum and mop hard floors',
      'Clean kitchens and washrooms ready for immediate handover and use'
    ]
  },
  {
    id: 'windows',
    anchor: 'windows',
    title: 'Commercial Window Cleaning',
    subtitle: 'Free Quote',
    priceTag: 'Free quote',
    rateInfo: 'Scheduled rounds',
    minHours: 'Site assessment',
    targetAudience: 'Offices, retail high-street shops, restaurants, cafes, showrooms, and managed estates.',
    image: 'images/domestic-4.jpg',
    includedItems: [
      'Office, shop and restaurant windows',
      'Inside and outside glass detailing',
      'Frames, sills and ledges washed down',
      'Weekly, fortnightly or monthly regular rounds'
    ]
  }
];

export const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    id: 'regular',
    title: 'Regular Domestic Cleaning',
    price: '£20/hr',
    rateInfo: 'min. 3 hrs',
    tagline: 'Weekly or fortnightly. Same cleaner each visit.',
    description: 'Reliable, consistent upkeep for your home. Same vetted cleaner every scheduled visit with products & equipment included.',
    icon: 'home',
    linkText: 'Book Regular Clean'
  },
  {
    id: 'one-off',
    title: 'One-Off House Clean',
    price: '£22/hr',
    rateInfo: 'min. 3 hrs',
    tagline: 'Spring clean, before guests',
    description: 'An intensive, top-to-bottom scrub perfect for pre-event prep, seasonal resets, or an overdue refresh.',
    icon: 'sparkles',
    linkText: 'Book One-Off Clean'
  },
  {
    id: 'deep-clean',
    title: 'Deep Cleaning',
    price: '£24/hr',
    rateInfo: 'min. 4 hrs',
    tagline: 'Heavy build-up, first clean',
    description: 'A thorough clean for homes that need extra attention: skirting boards, door frames, splashbacks, limescale, window tracks and high-touch areas.',
    icon: 'shield',
    badge: 'Detailed Care',
    linkText: 'Book Deep Clean'
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy Cleaning',
    price: 'from £145',
    rateInfo: 'Fixed price by size',
    tagline: 'Tenants, landlords & agents',
    description: 'A full top-to-bottom clean for tenants, landlords and agents. Includes oven, inside cupboards, fridge and internal windows. Free re-clean within 48 hours if anything is missed.',
    icon: 'key',
    badge: 'Deposit Guarantee',
    linkText: 'Book Tenancy Clean'
  }
];

export const ROOM_PROCESS: RoomProcessItem[] = [
  {
    id: 'bedroom',
    name: 'Bedroom Cleaning',
    tagline: 'Peaceful, Fresh & Allergen-Free Sleep Environment',
    image: 'images/bedroom.jpg',
    tasks: [
      'Bed making & linen refresh',
      'Thorough dust removal across all surfaces',
      'Deep carpet vacuuming under beds & furniture',
      'Blind & track cleaning',
      'Wardrobe exterior & skirting board detailing'
    ],
    description: 'We turn your bedroom into an immaculate retreat. Dust is eliminated from skirting boards, lamp fixtures, and under beds so you breathe easy.'
  },
  {
    id: 'kitchen',
    name: 'Kitchen Cleaning',
    tagline: 'Food-Safe, Grease-Free Sanitising',
    image: 'images/kitchen.jpg',
    tasks: [
      'Worktop disinfection & degreasing',
      'Sink & tap sanitising and descaling',
      'Floor sweeping and thorough mopping',
      'Appliance exterior degreasing',
      'Cabinet fronts and splashback buffed spotless'
    ],
    description: 'Our cleaners tackle grease splatter, limescale, and grime on all cooking stations, ensuring a spotless and hygienic food prep space.'
  },
  {
    id: 'dining-room',
    name: 'Dining Room Cleaning',
    tagline: 'Spotless Elegance for Entertaining',
    image: 'images/dining-room.jpg',
    tasks: [
      'Dining table and chair polishing',
      'Chandelier and light fitting dusting',
      'Hard floor vacuuming and mopping',
      'Skirting board and ledge detailing',
      'Glassware display and sideboard buffing'
    ],
    description: 'Every seat, table surface, and accent piece is carefully dusted and polished, ready for family meals and dinner guests.'
  },
  {
    id: 'living-room',
    name: 'Living Room Cleaning',
    tagline: 'Fresh & Spotless Relaxation Hub',
    image: 'images/living-room.jpg',
    tasks: [
      'Dust removal across all furniture and surfaces',
      'Deep carpet and rug vacuuming',
      'Sofa crevices and fabric care',
      'Window sills and corner cobweb removal',
      'Skirting boards and electronics wiped safely'
    ],
    description: 'The heart of your home receives meticulous care. We vacuum sofa crevices, dust media setups safely, and clean high-touch areas.'
  },
  {
    id: 'bathroom',
    name: 'Bathroom Cleaning',
    tagline: 'Thorough Descaling & Gleaming Shine',
    image: 'images/bathroom.jpg',
    tasks: [
      'Basin, taps and vanity unit sanitised',
      'Deep toilet, rim and tile descaling',
      'Shower glass descaled and bath refreshed',
      'Tile grout buffed and floor mopped',
      'Mirror and chrome polished to a smear-free shine'
    ],
    description: 'Say goodbye to soap scum and limescale. We thoroughly disinfect sanitaryware, polish taps to a mirror finish, and leave tiles sparkling.'
  },
  {
    id: 'laundry-room',
    name: 'Laundry Room Cleaning',
    tagline: 'Clean, Organised & Mould-Free Hygiene',
    image: 'images/laundry-room.jpg',
    tasks: [
      'Dust removal on shelving and ledges',
      'Worktop and utility sink disinfection',
      'Washing machine and dryer exterior wipe-down',
      'Rubber seal checks and lint trap clearance',
      'Floor mopping and tile sanitising'
    ],
    description: 'We keep your utility room functioning efficiently by cleaning appliance rubbers, removing trapped lint, and wiping all surfaces clean.'
  }
];

export const COMMERCIAL_PRICING_TABLE: CommercialPriceRow[] = [
  {
    service: 'Office & commercial: regular contract',
    price: 'from £21/hr',
    minimum: '3 hrs / visit',
    bestFor: 'Offices, shops, clinics, schools'
  },
  {
    service: 'Office & commercial: one-off deep clean',
    price: '£25/hr',
    minimum: '4 hrs',
    bestFor: 'Office moves, quarterly deep clean'
  },
  {
    service: 'Communal areas: blocks of flats',
    price: 'from £21/hr',
    minimum: '3 hrs / visit',
    bestFor: 'Stairs, hallways, lifts, bin stores'
  },
  {
    service: 'Hostels, HMOs & supported housing',
    price: 'from £22/hr',
    minimum: '3 hrs / visit',
    bestFor: 'Shared kitchens, bathrooms, corridors'
  },
  {
    service: 'After builders (commercial)',
    price: '£25/hr',
    minimum: '4 hrs',
    bestFor: 'Fit-outs, refurbishments'
  },
  {
    service: 'Office, shop or restaurant windows',
    price: 'Free quote',
    minimum: 'Custom quote',
    bestFor: 'Commercial premises'
  },
  {
    service: 'Contracts over 20 hrs / week',
    price: 'Free site survey · written quote within 48 hrs',
    minimum: 'Site visit',
    bestFor: 'Daily / multi-site cleaning'
  }
];

export const HOME_PRICING_TABLE: HomePriceRow[] = [
  {
    service: 'Regular domestic cleaning',
    price: '£20/hr',
    minimum: '3 hrs',
    bestFor: 'Weekly or fortnightly. Same cleaner each visit.'
  },
  {
    service: 'One-off house clean',
    price: '£22/hr',
    minimum: '3 hrs',
    bestFor: 'Spring clean, before guests'
  },
  {
    service: 'Deep clean',
    price: '£24/hr',
    minimum: '4 hrs',
    bestFor: 'Heavy build-up, first clean'
  },
  {
    service: 'Ironing',
    price: '£16/hr',
    minimum: 'Add-on only',
    bestFor: 'With any home visit'
  },
  {
    service: 'Airbnb / short-let changeover',
    price: 'from £55',
    minimum: 'Fixed',
    bestFor: 'Studio–1 bed £55 · 2 bed £70'
  }
];

export const FIXED_PROPERTY_PRICING_TABLE: PropertyPricingTier[] = [
  { propertyType: 'Studio flat', standardPrice: '£110', tenancyPrice: '£145', tenancyWithCarpetPrice: '£235', afterBuildersPrice: '£170' },
  { propertyType: '1 bedroom flat', standardPrice: '£125', tenancyPrice: '£185', tenancyWithCarpetPrice: '£260', afterBuildersPrice: '£215' },
  { propertyType: '2 bedroom flat', standardPrice: '£150', tenancyPrice: '£235', tenancyWithCarpetPrice: '£305', afterBuildersPrice: '£265' },
  { propertyType: '3 bedroom flat', standardPrice: '£170', tenancyPrice: '£275', tenancyWithCarpetPrice: '£355', afterBuildersPrice: '£300' },
  { propertyType: '4 bedroom flat', standardPrice: '£190', tenancyPrice: '£320', tenancyWithCarpetPrice: '£405', afterBuildersPrice: '£340' },
  { propertyType: '5 bedroom flat', standardPrice: '£215', tenancyPrice: '£380', tenancyWithCarpetPrice: '£455', afterBuildersPrice: 'Free survey' },
  { propertyType: '1 bedroom house', standardPrice: '£135', tenancyPrice: '£230', tenancyWithCarpetPrice: '£315', afterBuildersPrice: '£265' },
  { propertyType: '2 bedroom house', standardPrice: '£165', tenancyPrice: '£255', tenancyWithCarpetPrice: '£335', afterBuildersPrice: '£330' },
  { propertyType: '3 bedroom house', standardPrice: '£190', tenancyPrice: '£305', tenancyWithCarpetPrice: '£385', afterBuildersPrice: '£355' },
  { propertyType: '4 bedroom house', standardPrice: '£210', tenancyPrice: '£350', tenancyWithCarpetPrice: '£435', afterBuildersPrice: 'Free survey' },
  { propertyType: '5 bedroom house', standardPrice: '£235', tenancyPrice: '£395', tenancyWithCarpetPrice: '£485', afterBuildersPrice: 'Free survey' }
];

export const SINGLE_JOBS_KITCHEN: SingleJobItem[] = [
  { category: 'oven-kitchen', item: 'Single oven', price: '£55' },
  { category: 'oven-kitchen', item: 'Double oven', price: '£75' },
  { category: 'oven-kitchen', item: 'Range cooker', price: 'from £95' },
  { category: 'oven-kitchen', item: 'Hob or extractor (with oven)', price: '+£20 each' },
  { category: 'oven-kitchen', item: 'Kitchen deep clean', price: '£80' },
  { category: 'oven-kitchen', item: 'Bathroom deep clean', price: '£55' },
  { category: 'oven-kitchen', item: 'Fridge / freezer inside', price: '£25' }
];

export const SINGLE_JOBS_WINDOWS: SingleJobItem[] = [
  { category: 'windows', item: 'Exterior: flat or 1–2 bed house', price: 'from £30' },
  { category: 'windows', item: 'Exterior: 3 bed house', price: '£40' },
  { category: 'windows', item: 'Exterior: 4+ bed house', price: 'from £50' },
  { category: 'windows', item: 'Internal windows (with any clean)', price: '+£25' },
  { category: 'windows', item: 'Office, shop or restaurant windows', price: 'Free quote' }
];

export const EXTRAS_CARPETS: ExtraItem[] = [
  { category: 'carpets', item: 'Bedroom / living room', price: '£35' },
  { category: 'carpets', item: 'Hallway, landing, stairs', price: '£25 each' },
  { category: 'carpets', item: 'Rug small / large', price: '£20 / £35' }
];

export const EXTRAS_UPHOLSTERY: ExtraItem[] = [
  { category: 'upholstery', item: 'Armchair', price: '£25' },
  { category: 'upholstery', item: '2 / 3-seater sofa', price: '£50 / £70' },
  { category: 'upholstery', item: 'Corner sofa', price: '£95' },
  { category: 'upholstery', item: 'Dining/office chair', price: '£10 each' },
  { category: 'upholstery', item: 'Mattress S / D / K', price: '£30 / £40 / £50' }
];

export const EXTRAS_ADDONS: ExtraItem[] = [
  { category: 'addons', item: 'Extra toilet', price: '£25' },
  { category: 'addons', item: 'Extra bathroom', price: '£35' },
  { category: 'addons', item: 'Balcony', price: '£40' },
  { category: 'addons', item: 'Furniture left inside', price: '£70' },
  { category: 'addons', item: 'Heavy soiling (6+ months)', price: '+20%' }
];

export const COMMERCIAL_FAQS = [
  {
    question: 'Do you offer a free site survey?',
    answer: 'Yes, for all commercial premises.'
  },
  {
    question: 'Can you clean outside business hours?',
    answer: 'Yes: early mornings, evenings and weekends.'
  },
  {
    question: 'Do you bring products and equipment?',
    answer: 'Yes, everything is included.'
  },
  {
    question: 'Can we have the same cleaners each visit?',
    answer: 'Yes, we assign a regular team.'
  },
  {
    question: 'What if something is missed?',
    answer: 'Tell us within 48 hours and we\'ll re-clean it free.'
  },
  {
    question: 'What is your minimum booking?',
    answer: '3 hours per visit (4 hours for deep and after-builders cleans).'
  },
  {
    question: 'How do I pay?',
    answer: 'Commercial clients are invoiced monthly.'
  }
];

export const HOME_FAQS = [
  {
    question: 'Do you bring your own cleaning equipment and supplies?',
    answer: 'Yes, all cleaning products and equipment are included in every price. If you have specific preferred detergents, our team is happy to accommodate.'
  },
  {
    question: 'Are all your cleaners insured and vetted?',
    answer: 'Yes. All staff are vetted and referenced. Bright2Shine Ltd carries comprehensive £5m / £10m Public Liability and £10m Employers\' Liability insurance.'
  },
  {
    question: 'What is included in an End of Tenancy clean?',
    answer: 'End of Tenancy includes oven, inside cupboards, fridge and internal windows. Backed by our free re-clean within 48 hours if anything is missed.'
  },
  {
    question: 'What happens if I need to cancel or reschedule?',
    answer: 'Less than 24 hours\' notice incurs a 50% cancellation fee. You can reschedule easily by contacting us at least 24 hours in advance.'
  },
  {
    question: 'What areas in London and Essex do you cover?',
    answer: 'We cover Barking, Dagenham, Ilford, Redbridge, Romford, East Ham, Stratford, Canary Wharf and nearby Essex.'
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    number: '1',
    title: 'Request a free quote',
    detail: 'by form, email or WhatsApp. We reply within 2 working hours.',
    icon: 'mail'
  },
  {
    number: '2',
    title: 'Free site survey',
    detail: 'we visit your premises, or confirm details by phone and photos for homes.',
    icon: 'search'
  },
  {
    number: '3',
    title: 'Written quote & cleaning plan',
    detail: 'tasks, frequency, hours and a fixed price within 48 hours.',
    icon: 'clipboard'
  },
  {
    number: '4',
    title: 'Onboarding',
    detail: 'keys and alarm codes, site induction and a named contact.',
    icon: 'key'
  },
  {
    number: '5',
    title: 'Cleaning starts',
    detail: 'the same trained, uniformed team with all products and equipment.',
    icon: 'sparkles'
  },
  {
    number: '6',
    title: 'Quality checks',
    detail: 'supervisor inspections and checklist sign-off.',
    icon: 'check-circle'
  },
  {
    number: '7',
    title: 'Review & adjust',
    detail: 'monthly check-in. Anything missed is re-cleaned free within 48 hours.',
    icon: 'refresh'
  }
];
