import { Zap } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetMacclesfield: ServicePageData = {
  slug: 'mini-valet',
  name: 'Mini Valet Macclesfield',
  icon: Zap,
  seo: {
    title: 'Mini Valet Macclesfield | Quick Car Valet SK10 SK11 | SRV Detailing',
    description:
      'Professional mini car valet in Macclesfield. Quick exterior wash, interior vacuum, and glass clean across SK10 and SK11. Mobile service at your home or workplace.',
    keywords: [
      'mini valet macclesfield',
      'quick car valet macclesfield',
      'mini valet sk10',
      'budget car valet macclesfield',
      'express valet macclesfield',
      'mini car clean macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/mini-valet',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Mini Valet', href: '/macclesfield/car-valeting/mini-valet' },
  ],
  heroTitle: 'Mini Car Valet in Macclesfield',
  heroDescription:
    'Quick, professional mini valet for Macclesfield vehicles. Exterior wash, interior vacuum, and glass clean — mobile service across SK10 and SK11.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Mini Valet — Macclesfield',
      body: 'The mini valet is ideal for Macclesfield commuters who want a clean, presentable car without the time investment of a full valet. We wash the exterior, clean the wheels, vacuum the interior, and polish the glass — everything needed to make the car look well-maintained on a busy schedule.',
    },
    {
      type: 'list',
      heading: "Mini Valet — What's Included",
      items: [
        'Exterior hand wash (two-bucket method)',
        'Wheel and tyre clean',
        'Interior vacuum',
        'Interior glass clean',
        'Exterior glass polish',
        'Door shuts wiped',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a mini valet cost in Macclesfield?',
      answer: 'A mini valet starts from £45 for a standard car.',
    },
    {
      question: 'How long does a mini valet take in Macclesfield?',
      answer: 'A mini valet typically takes 2–3 hours. We work thoroughly without rushing.',
    },
    {
      question: 'How often should Macclesfield commuters book a mini valet?',
      answer: 'Every 4–6 weeks is optimal for Macclesfield commuters driving on A523 and A537 routes. The Peak District road network deposits fine peat dust and winter salt residue that builds up on carpets and door sills between full valets. A regular mini valet removes this accumulation before it becomes embedded. Many of our SK10 and SK11 customers book on a rolling monthly schedule so their vehicle is consistently presentable for client-facing commuting. We offer flexible cancellation and rescheduling with 24-hour notice.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Comprehensive interior and exterior' },
    { label: 'Car Wash Macclesfield', href: '/macclesfield/car-wash', description: 'Quick exterior wash service' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Mini valet pricing guide' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Mini Valet Congleton', href: '/congleton/car-valeting/mini-valet', description: 'Also serving CW12' },
    { label: 'Mobile Valeting Macclesfield', href: '/macclesfield/car-valeting/mobile-valeting', description: 'We come to your location' },
  ],
  schemaPrice: '45',
};
