import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingCongleton: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Congleton',
  seo: {
    title: 'Exterior Valeting Congleton | Exterior Car Valet CW12 | SRV Detailing',
    description:
      'Professional exterior car valeting in Congleton. Hand wash, wheel decontamination, drying, and protective wax or sealant — all at your CW12 door. Mobile service.',
    keywords: [
      'exterior valeting congleton',
      'exterior car valet congleton',
      'exterior car clean congleton cw12',
      'exterior hand wash congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/exterior-valeting',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Exterior Valeting', href: '/congleton/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Valeting Congleton — Hand Wash & Protection at Your CW12 Door',
  heroDescription:
    'Exterior-focused professional valeting at your Congleton driveway. Snow foam, safe hand wash, wheel decontamination, microfibre dry, and protective wax or sealant — without touching the interior. Ideal when the cabin is clean but the exterior has accumulated A34 salt and CW12 rural contamination.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'When Exterior Valeting Is the Right Service',
      bodyParagraphs: [
        "Exterior valeting is the right choice when the interior of your vehicle is in acceptable condition but the exterior has built up contamination that a hand car wash alone doesn't fully address. The exterior valet adds iron fallout decontamination and a protective wax or sealant finish over the hand wash, making it meaningfully more protective than a standard wash while keeping the price and time below a full valet.",
        "For Congleton customers on the A34 or using rural CW12 routes in winter, an exterior valet every 4–6 weeks removes the accumulation of road salt, agricultural run-off, and brake dust that corrodes alloy lacquer and lower panel clear coat when left untreated.",
      ],
    },
    {
      type: 'list',
      heading: "What's Included in an Exterior Valet",
      items: [
        'Snow foam pre-wash — pH-balanced foam safely encapsulates A34 road salt and CW12 contamination before any contact',
        'Two-bucket hand wash — all panels roof to sills using clean microfibre mitts',
        'Iron fallout removal — chemical decontamination of alloy wheel faces and lower panels',
        'Tar spot treatment — tar deposits dissolved from lower panels',
        'Pressure rinse and microfibre dry — all panels, door jambs, and fuel cap area',
        'Wax or sealant protection — synthetic wax or sealant applied to all painted surfaces for protection and gloss',
        'Tyre dressing — dressed for a clean satin finish',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does exterior valeting cost in Congleton?',
      answer:
        'Exterior valeting from £55 for a standard hatchback. Larger vehicles from £70. Confirmed at booking.',
    },
    {
      question: 'What is the difference between exterior valeting and a car wash?',
      answer:
        "An exterior valet adds iron fallout chemical decontamination and a protective wax or sealant application over and above the hand wash. The decontamination stage removes bonded ferrous particles that survive normal washing. The protective finish extends gloss and prevents fresh contamination from bonding as readily.",
    },
    {
      question: 'How do you handle Cheshire mud and agricultural contamination in exterior valeting?',
      answer: 'Cheshire East clay mud is particularly tenacious compared to sandy or chalky soils — it bonds to paint and wheel surfaces under rain and dries to a hard crust. Our exterior valet process for Congleton vehicles with heavy mud contamination begins with a pre-rinse and foam application to soften dried mud before any contact wash. We never drag dried mud across the paint surface as this causes scratching. Wheel barrels and arches receive targeted pressure rinsing before hand washing. For vehicles with agricultural chemical contamination (fertiliser spray residue, silage runoff), we use a diluted decontamination pre-wash before the main wash stage to neutralise chemical residues.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Exterior and interior combined' },
    { label: 'Car Wash Congleton', href: '/congleton/car-wash', description: 'Lighter exterior wash' },
    { label: 'Exterior Detailing Congleton', href: '/congleton/car-detailing/exterior-detailing', description: 'Deeper exterior restoration' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Exterior valet pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Exterior Valeting Macclesfield', href: '/macclesfield/car-valeting/exterior-valeting', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '55',
};
