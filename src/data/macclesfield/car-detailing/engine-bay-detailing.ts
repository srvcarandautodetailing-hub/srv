import { Settings } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingMacclesfield: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Macclesfield',
  icon: Settings,
  seo: {
    title: 'Engine Bay Detailing Macclesfield | Engine Clean SK10 SK11 | SRV Detailing',
    description:
      'Professional engine bay detailing in Macclesfield. Safe degreasing and dressing for engines across SK10 and SK11. Mobile service — we come to your driveway.',
    keywords: [
      'engine bay detailing macclesfield',
      'engine clean macclesfield',
      'engine bay clean macclesfield',
      'engine bay detailing sk10',
      'mobile engine clean macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/engine-bay-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/macclesfield/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing in Macclesfield',
  heroDescription:
    'Safe, professional engine bay cleaning and dressing in Macclesfield. We come to your SK10 or SK11 driveway and restore your engine bay to a factory-fresh appearance.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Engine Bay Detailing — Macclesfield',
      body: 'A clean engine bay makes fault-finding easier, improves cooling efficiency, and is essential before any pre-sale inspection. We use low-pressure water application, workshop-grade degreasers, and careful hand agitation to remove oil build-up, grime, and road salt residue without damaging electrical components or sensors. All rubber and plastic surfaces are finished with a dressing that restores deep colour and prevents future cracking.',
    },
  ],
  faqs: [
    {
      question: 'Is engine bay detailing safe in Macclesfield?',
      answer:
        'Yes — when performed correctly. We use low-pressure water, avoid direct application to sensitive electrical components, and always allow the engine to cool before starting. We have never caused a fault through engine bay cleaning.',
    },
    {
      question: 'How much does engine bay detailing cost in Macclesfield?',
      answer:
        'Engine bay detailing starts from £60. Vehicles with heavy oil contamination or a large engine bay may be priced slightly higher.',
    },
    {
      question: 'Is engine bay detailing safe for modern Macclesfield vehicles with electronic components?',
      answer: 'Yes — when carried out correctly. We use low-pressure steam and targeted degreasers rather than high-pressure water washing. All sensitive electronics (ECU housing, fuse boxes, alternator, sensors) are masked or dried immediately after treatment. We have cleaned engine bays on vehicles from classic pre-1980 Cheshire farm vehicles through to current-generation hybrid and electric platforms. We do not perform engine bay cleaning in heavy rain or below 5°C. Most Macclesfield appointments take place on covered driveways or in garages which provides ideal working conditions.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Full interior and exterior service' },
    { label: 'Exterior Detailing Macclesfield', href: '/macclesfield/car-detailing/exterior-detailing', description: 'Combined with exterior detail' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Engine bay pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Engine Bay Detailing Congleton', href: '/congleton/car-detailing/engine-bay-detailing', description: 'Also serving CW12' },
    { label: 'Headlight Restoration Macclesfield', href: '/macclesfield/car-detailing/headlight-restoration', description: 'Often combined with engine detail' },
  ],
  schemaPrice: '60',
};
