import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingMacclesfield: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Macclesfield',
  icon: Droplets,
  seo: {
    title: 'Exterior Car Valeting Macclesfield | Outside Car Clean SK10 | SRV Detailing',
    description:
      'Professional exterior car valeting in Macclesfield. Hand wash, wheel clean, glass polish, and tyre dressing across SK10 and SK11. Mobile service at your home.',
    keywords: [
      'exterior car valeting macclesfield',
      'exterior car wash macclesfield',
      'outside car clean macclesfield',
      'exterior valet sk10',
      'car wash macclesfield home',
      'hand wash macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/exterior-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Exterior Valeting', href: '/macclesfield/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Car Valeting in Macclesfield',
  heroDescription:
    'Professional exterior hand wash, wheel clean, glass polish, and tyre dress for Macclesfield vehicles. Mobile service across SK10 and SK11.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Exterior Valeting — Macclesfield',
      body: 'Our exterior valet is a focused, high-quality clean of everything outside the vehicle — using the two-bucket wash method to prevent wash-induced scratches, combined with professional wheel cleaners, glass polish, and tyre dressing. It is the natural complement to an interior valet when you need a specific focus without the commitment of a full valet.',
    },
    {
      type: 'list',
      heading: "Exterior Valet — What's Included",
      items: [
        'Pre-rinse and snow foam pre-soak',
        'Two-bucket hand wash with microfibre mitt',
        'Wheel and wheel arch clean',
        'Tyre dressing applied',
        'Door shuts and jambs cleaned',
        'Exterior glass polish (streak-free)',
        'Trim and rubber dressing',
        'Rinse and touchless dry',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does exterior valeting cost in Macclesfield?',
      answer: 'Exterior valeting starts from £55 for a standard car. We can also add a quick interior vacuum and glass clean for a small additional charge.',
    },
    {
      question: 'Does exterior valeting include wheel cleaning for Macclesfield vehicles?',
      answer: 'Yes — wheel faces, wheel barrels (where accessible), and tyres are included in our exterior valet for Macclesfield vehicles. We use a non-acidic wheel cleaner appropriate for alloy, painted steel, and chrome finishes. Brake dust is a particular issue on vehicles used on Macclesfield\'s hilly SK10 and SK11 roads where braking frequency is higher than on flat urban routes. Tyre dressing is applied as standard for a finished appearance. Wheel wax or ceramic coating for wheels can be added at an agreed extra charge.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Exterior and interior combined' },
    { label: 'Car Wash Macclesfield', href: '/macclesfield/car-wash', description: 'Lighter exterior wash' },
    { label: 'Exterior Detailing Macclesfield', href: '/macclesfield/car-detailing/exterior-detailing', description: 'Deeper exterior restoration' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Exterior valet pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Exterior Valeting Congleton', href: '/congleton/car-valeting/exterior-valeting', description: 'Also serving CW12' },
  ],
  schemaPrice: '55',
};
