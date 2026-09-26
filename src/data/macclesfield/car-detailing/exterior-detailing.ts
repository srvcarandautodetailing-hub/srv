import { Star } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorDetailingMacclesfield: ServicePageData = {
  slug: 'exterior-detailing',
  name: 'Exterior Detailing Macclesfield',
  icon: Star,
  seo: {
    title: 'Exterior Car Detailing Macclesfield | Paint Decontamination SK10 | SRV Detailing',
    description:
      'Professional exterior car detailing in Macclesfield. Full decontamination, machine polish, and paint protection across SK10 and SK11. Mobile service at your driveway.',
    keywords: [
      'exterior car detailing macclesfield',
      'car paint decontamination macclesfield',
      'exterior car polish macclesfield',
      'exterior detailing sk10',
      'paint decontamination macclesfield',
      'exterior car care macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/exterior-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Exterior Detailing', href: '/macclesfield/car-detailing/exterior-detailing' },
  ],
  heroTitle: 'Exterior Car Detailing in Macclesfield',
  heroDescription:
    'Full exterior decontamination, machine polish, and paint protection for Macclesfield vehicles. Addresses A537 road salt, iron fallout, and SK10/SK11 contamination at your driveway.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Exterior Detailing for Macclesfield Vehicles',
      body: 'A standard car wash removes loose surface contamination but leaves behind bonded iron particles, road salt crystals, and industrial fallout that grip the paint surface and cause accelerated oxidation. Our exterior detailing service uses iron decontamination spray, clay bar treatment, and a machine polish to address all contamination layers before applying a durable protective coating.',
    },
    {
      type: 'list',
      heading: 'Exterior Detailing Process — Macclesfield',
      items: [
        'Pre-rinse and snow foam pre-soak',
        'Hand wash with microfibre mitt',
        'Iron decontamination spray (removes bonded iron particles)',
        'Clay bar decontamination',
        'Machine polish to correct light defects',
        'Paint sealant or ceramic coating',
        'Wheel and tyre clean and dress',
        'Exterior glass polish',
        'Trim and rubber seal protect',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does exterior detailing cost in Macclesfield?',
      answer:
        'Exterior detailing starts from £200 for a standard car and includes full decontamination, machine polish, and sealant. Ceramic coating can be added as an upgrade.',
    },
    {
      question: 'How often should I get exterior detailing in Macclesfield?',
      answer:
        'We recommend a full exterior decontamination and polish once or twice a year, with a maintenance wash every 4–8 weeks. Vehicles on A537 or Snake Pass routes benefit from more frequent decontamination.',
    },
    {
      question: 'What does an exterior detail include for Macclesfield vehicles?',
      answer: 'Our exterior detail for Macclesfield vehicles includes: two-bucket contact wash with pH-neutral shampoo, iron fallout decontamination (removes embedded brake dust and industrial particles), clay bar treatment to remove bonded surface contamination, machine polishing to improve gloss and remove light defects, wheel face and barrel clean, tyre dressing, and a finishing sealant or spray wax layer rated for 3–6 months protection. Iron decontamination is particularly relevant for vehicles parked near the Macclesfield railway line or driven regularly on Cheshire East commuter routes where brake dust and rail particulate contaminate paintwork.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Macclesfield', href: '/macclesfield/car-detailing/paint-correction', description: 'Correction before exterior protection' },
    { label: 'Ceramic Coating Macclesfield', href: '/macclesfield/car-detailing/ceramic-coating', description: 'Long-term exterior protection' },
    { label: 'Car Wash Macclesfield', href: '/macclesfield/car-wash', description: 'Maintenance wash between details' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Exterior detail pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Exterior Detailing Congleton', href: '/congleton/car-detailing/exterior-detailing', description: 'Also serving CW12' },
  ],
  schemaPrice: '200',
};
