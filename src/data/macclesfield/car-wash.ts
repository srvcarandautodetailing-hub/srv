import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const carWashMacclesfield: ServicePageData = {
  slug: 'car-wash',
  name: 'Car Wash Macclesfield',
  icon: Car,
  seo: {
    title: 'Car Wash Macclesfield | Hand Car Wash SK10 SK11 | SRV Detailing',
    description:
      'Professional hand car wash in Macclesfield. SRV Detailing comes to your home or workplace across SK10 and SK11 — safe wash methods, no automatic brushes, no swirl marks.',
    keywords: [
      'car wash macclesfield',
      'hand car wash macclesfield',
      'mobile car wash macclesfield',
      'car wash sk10',
      'car wash sk11',
      'exterior car wash macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-wash',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Wash', href: '/macclesfield/car-wash' },
  ],
  heroTitle: 'Car Wash in Macclesfield',
  heroDescription:
    'Mobile hand car wash across Macclesfield and SK10/SK11. We come to your home or workplace with safe wash methods that protect your paintwork — no automated brushes, no swirl marks.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Safe Hand Car Wash — Macclesfield',
      body: 'Automated car washes use rotating brushes that grind road grit across your paintwork, leaving microscopic scratches with every pass. Our hand wash service uses the two-bucket method, pH-neutral shampoos, and microfibre wash mitts that lift contamination away from the surface rather than dragging it across. The result is a genuinely clean car with no wash-induced swirl marks — visible in direct sunlight on any dark-coloured vehicle.',
    },
    {
      type: 'text',
      heading: 'Mobile Wash — We Come to Your Macclesfield Driveway',
      body: 'Macclesfield commuters lose enough time on the A523 without adding a forecourt queue. We come to you — home, workplace, or any off-road parking space — and complete the wash while you get on with your day. Our unit is fully self-contained with its own water and power.',
    },
    {
      type: 'list',
      heading: "What's Included in Our Macclesfield Car Wash",
      items: [
        'Pre-rinse and snow foam pre-soak',
        'Two-bucket hand wash with microfibre mitt',
        'Wheel and tyre cleaning',
        'Door shuts wiped down',
        'Rinse and touchless dry with filtered water',
        'Exterior glass clean',
        'Tyre dressing applied',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a car wash cost in Macclesfield?',
      answer:
        'Our standard exterior hand wash starts from £30 for a standard car. Larger vehicles such as SUVs and vans are priced slightly higher. Contact us for a quick quote.',
    },
    {
      question: 'Do you wash cars at home in Macclesfield?',
      answer:
        'Yes — we are fully mobile and operate across all SK10 and SK11 postcodes. We bring our own water and power so we need nothing from your property except access to the vehicle.',
    },
    {
      question: 'Why avoid automated car washes in Macclesfield for long-term paint health?',
      answer: 'Automated car washes with rotating brush systems cause swirl marks by dragging abrasive particles across paint at speed. Macclesfield\'s road conditions — particularly A537 and A523 grit and peat dust — mean vehicles arrive at wash facilities with a higher-than-average surface contamination load. When this contamination is worked into the paint by a brush, it causes micro-scratches visible in direct sunlight. Our hand wash service uses the two-bucket method with separate wash and rinse buckets, grit guards, and clean microfibre mitts, eliminating this risk. Vehicles washed correctly every 2–4 weeks maintain their paint clarity significantly longer than those put through automated washes.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Upgrade to a full valet' },
    { label: 'Exterior Valeting Macclesfield', href: '/macclesfield/car-valeting/exterior-valeting', description: 'More thorough exterior service' },
    { label: 'Exterior Detailing Macclesfield', href: '/macclesfield/car-detailing/exterior-detailing', description: 'Premium exterior restoration' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Macclesfield Hub', href: '/macclesfield', description: 'Full Macclesfield service hub' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Car Wash Congleton', href: '/congleton/car-wash', description: 'Also serving CW12' },
  ],
  schemaPrice: '30',
};
