import { Shield } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const ceramicCoatingMacclesfield: ServicePageData = {
  slug: 'ceramic-coating',
  name: 'Ceramic Coating Macclesfield',
  icon: Shield,
  seo: {
    title: 'Ceramic Coating Macclesfield | Paint Protection SK10 SK11 | SRV Detailing',
    description:
      'Professional ceramic coating in Macclesfield. Long-term paint protection against Peak District salt roads, iron fallout, and A537 road contamination. Mobile application across SK10 and SK11.',
    keywords: [
      'ceramic coating macclesfield',
      'paint protection macclesfield',
      'ceramic coat sk10',
      'car paint protection macclesfield',
      'ceramic coating sk11',
      'nano coating macclesfield',
      'paint sealant macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/ceramic-coating',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Ceramic Coating', href: '/macclesfield/car-detailing/ceramic-coating' },
  ],
  heroTitle: 'Ceramic Coating in Macclesfield',
  heroDescription:
    'Protect your vehicle against the A537, Peak District salt roads, and SK10/SK11 road contamination. Professional ceramic coating applied at your Macclesfield driveway.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Macclesfield Vehicles Need Ceramic Protection',
      body: 'The A537 Cat and Fiddle is among the most-salted routes in England — salt that washes down into Macclesfield town and coats vehicles parked in SK10 and SK11. The Macclesfield commuter rail line also deposits iron fallout across nearby roads and car parks. A ceramic coating creates a chemically bonded sacrificial layer over your clear coat, dramatically slowing the rate at which contaminants bond and etch into the paint.',
    },
    {
      type: 'process',
      heading: 'Our Ceramic Coating Process — Macclesfield',
      steps: [
        'Full wash and iron decontamination to remove bonded contamination',
        'Clay bar treatment to purify the paint surface',
        'Machine polishing to correct any existing defects',
        'Panel wipe with IPA solution to remove polishing oils',
        'Ceramic coating application panel by panel in controlled conditions',
        'Initial cure period — vehicle kept dry for 24 hours',
        'Final inspection and aftercare advice',
      ],
    },
    {
      type: 'list',
      heading: 'What Ceramic Coating Protects Against in Macclesfield',
      items: [
        'Road salt from the A537 and Peak District routes',
        'Iron fallout from the Macclesfield rail corridor',
        'Bird droppings and tree sap (highly acidic)',
        'UV fade from high-elevation exposure',
        'Industrial pollution and brake dust',
        'Light wash-induced scratches',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does ceramic coating last in Macclesfield?',
      answer:
        'A professionally applied ceramic coating typically lasts 2–5 years depending on the grade of coating and how the vehicle is maintained. We recommend a maintenance wash every 6–8 weeks.',
    },
    {
      question: 'How much does ceramic coating cost in Macclesfield?',
      answer:
        'Ceramic coating packages for Macclesfield vehicles start from £300 including full decontamination and single-stage polish. Contact us for a precise quote based on your vehicle size and condition.',
    },
    {
      question: 'Can you apply ceramic coating on a car in Macclesfield without a garage?',
      answer:
        'Yes — we work under a professional canopy on your driveway. We require a sheltered or dry-weather window for application day to ensure proper bonding.',
    },
    {
      question: 'Does the Cat and Fiddle road environment affect ceramic coating in Macclesfield?',
      answer: 'Yes — the A537 Cat and Fiddle is one of the most chemically challenging roads in Cheshire East. Winter road salt, peat bog contamination blown from the Peak District, and frequent freeze-thaw cycles accelerate paint oxidation on vehicles regularly driven this route. Ceramic coating creates a chemically resistant barrier rated to withstand pH 2–12, which significantly outlasts conventional wax under these conditions. We recommend a two-stage paint correction before applying ceramic coating to any vehicle with more than 6 months of A537 exposure.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Macclesfield', href: '/macclesfield/car-detailing/paint-correction', description: 'Remove defects before coating' },
    { label: 'New Car Protection Macclesfield', href: '/macclesfield/car-detailing/new-car-protection', description: 'Ceramic applied to new vehicles' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Transparent pricing guide' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Ceramic Coating Congleton', href: '/congleton/car-detailing/ceramic-coating', description: 'Also serving CW12' },
    { label: 'Ceramic Coating Wilmslow', href: '/wilmslow/car-detailing/ceramic-coating', description: 'Nearby SK9 service' },
    { label: 'Macclesfield Reviews', href: '/macclesfield/reviews', description: 'Customer testimonials' },
  ],
  schemaPrice: '300',
};
