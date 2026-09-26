import { Star } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const fullValetMacclesfield: ServicePageData = {
  slug: 'full-valet',
  name: 'Full Valet Macclesfield',
  icon: Star,
  seo: {
    title: 'Full Valet Macclesfield | Inside & Outside Car Valet SK10 | SRV Detailing',
    description:
      'Professional full car valet in Macclesfield. Complete interior and exterior clean across SK10 and SK11 — mobile service to your home or workplace.',
    keywords: [
      'full valet macclesfield',
      'full car valet macclesfield',
      'inside outside valet macclesfield',
      'full valet sk10',
      'mobile full valet macclesfield',
      'complete car valet macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/full-valet',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Full Valet', href: '/macclesfield/car-valeting/full-valet' },
  ],
  heroTitle: 'Full Car Valet in Macclesfield',
  heroDescription:
    'Complete interior and exterior valet for Macclesfield vehicles. We come to your home or workplace across SK10 and SK11 and deliver a showroom-standard finish.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Full Valet — Macclesfield',
      body: 'Our full valet is the most popular service for Macclesfield vehicles. It combines a thorough exterior hand wash, wheel clean, and glass polish with a complete interior deep-clean — vacuum, hot-spot cleaning of high-contact areas, dashboard wipe-down, and door card cleaning. The result is a vehicle that looks and smells professionally cleaned from every angle.',
    },
    {
      type: 'list',
      heading: "Full Valet — What's Included",
      items: [
        'Pre-rinse and snow foam pre-soak',
        'Two-bucket hand wash with microfibre mitt',
        'Wheel and tyre clean and dress',
        'Door shuts cleaned',
        'Exterior glass polish (streak-free)',
        'Full interior vacuum (seats, carpets, boot)',
        'Dashboard and centre console wipe-down',
        'Door card and pocket clean',
        'Interior glass clean',
        'Air freshener',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a full valet cost in Macclesfield?',
      answer: 'A full valet for a standard car starts from £90. Larger vehicles such as SUVs are priced slightly higher.',
    },
    {
      question: 'How long does a full valet take in Macclesfield?',
      answer: 'A full valet typically takes 3–4 hours for a standard car. We do not rush the process — quality takes the time it takes.',
    },
    {
      question: 'Can I book a full valet at Tytherington Business Park in Macclesfield?',
      answer: 'Yes — we regularly perform full valets at Tytherington Business Park and other commercial premises across Macclesfield SK10. We need one adjacent parking bay alongside your vehicle and we carry all equipment including water, power, and cleaning materials. A full valet typically takes 4–6 hours depending on vehicle size and condition. Evening and early-morning slots are available for professionals who need the vehicle ready by a specific time. We cover all SK10 and SK11 postcodes with same-week availability most weeks.',
    },
  ],
  relatedLinks: [
    { label: 'Mini Valet Macclesfield', href: '/macclesfield/car-valeting/mini-valet', description: 'Lighter maintenance service' },
    { label: 'Interior Valeting Macclesfield', href: '/macclesfield/car-valeting/interior-valeting', description: 'Interior-focused option' },
    { label: 'Interior Detailing Macclesfield', href: '/macclesfield/car-detailing/interior-detailing', description: 'Deeper interior restoration' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Full valet pricing from £90' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Also serving CW12' },
    { label: 'Macclesfield Reviews', href: '/macclesfield/reviews', description: 'Customer testimonials' },
  ],
  schemaPrice: '90',
};
