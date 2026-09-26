import { PoundSterling } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const valetingPricesMacclesfield: ServicePageData = {
  slug: 'prices',
  name: 'Car Valeting Prices Macclesfield',
  icon: PoundSterling,
  seo: {
    title: 'Car Valeting Prices Macclesfield | SK10 SK11 Valet Costs | SRV Detailing',
    description:
      'Transparent car valeting prices for Macclesfield. Full valet, mini valet, interior valet, and specialist cleaning costs for SK10 and SK11 vehicles.',
    keywords: [
      'car valeting prices macclesfield',
      'how much car valet macclesfield',
      'full valet price macclesfield',
      'car valet cost sk10',
      'mobile valet prices macclesfield',
      'valet price list macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/prices',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Prices', href: '/macclesfield/car-valeting/prices' },
  ],
  heroTitle: 'Car Valeting Prices in Macclesfield',
  heroDescription:
    'Transparent pricing for all car valeting services in Macclesfield. No hidden costs — what you see below is what you pay across SK10 and SK11.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'list',
      heading: 'Car Valeting Price List — Macclesfield',
      items: [
        'Full valet (interior + exterior): from £90',
        'Mini valet (exterior wash + interior vacuum): from £45',
        'Mobile valeting: from £45',
        'Interior valet (deep clean): from £60',
        'Exterior valet (hand wash + wheels + glass): from £55',
        'Pet hair removal: from £60',
        'Odour removal (ozone treatment): from £80',
        'Upholstery cleaning (hot water extraction): from £80',
      ],
    },
    {
      type: 'text',
      heading: 'Pricing Notes — Macclesfield',
      body: 'All prices are for standard-sized cars. SUVs, MPVs, and vans are priced at a slight premium. All valeting services can be combined with detailing packages for a discounted combined rate. Contact us for an exact quote for your vehicle.',
    },
  ],
  faqs: [
    {
      question: 'Do you offer discounts for regular bookings in Macclesfield?',
      answer: 'Yes — customers who book regular maintenance washes or valeting on a schedule receive preferential rates. Contact us to arrange a standing booking.',
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services' },
    { label: 'Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Detailing cost guide' },
    { label: 'Macclesfield Hub', href: '/macclesfield', description: 'Full Macclesfield service hub' },
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Most popular service from £90' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 areas' },
    { label: 'Car Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Congleton CW12 pricing' },
    { label: 'Car Valeting Prices Wilmslow', href: '/wilmslow/car-valeting/prices', description: 'Wilmslow SK9 pricing' },
  ],
};
