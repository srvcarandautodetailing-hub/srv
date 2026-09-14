import { PoundSterling } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const detailingPricesMacclesfield: ServicePageData = {
  slug: 'prices',
  name: 'Car Detailing Prices Macclesfield',
  icon: PoundSterling,
  seo: {
    title: 'Car Detailing Prices Macclesfield | SK10 SK11 Detailing Costs | SRV Detailing',
    description:
      'Transparent car detailing prices for Macclesfield. Ceramic coating, paint correction, interior detailing, and protection package costs for SK10 and SK11 vehicles.',
    keywords: [
      'car detailing prices macclesfield',
      'ceramic coating cost macclesfield',
      'paint correction price macclesfield',
      'car detailing cost sk10',
      'how much car detailing macclesfield',
      'detailing price list macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/prices',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Prices', href: '/macclesfield/car-detailing/prices' },
  ],
  heroTitle: 'Car Detailing Prices in Macclesfield',
  heroDescription:
    'Transparent pricing for all car detailing services in Macclesfield. No hidden costs — what you see below is what you pay across SK10 and SK11.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'list',
      heading: 'Car Detailing Price List — Macclesfield',
      items: [
        'Ceramic coating (2-year): from £300',
        'Ceramic coating (5-year): from £500',
        'Paint correction (single stage): from £150',
        'Paint correction (two stage): from £250',
        'Exterior detailing (decontamination + polish + sealant): from £200',
        'Interior detailing (full deep clean): from £150',
        'New car protection package: from £300',
        'Engine bay detailing: from £60',
        'Headlight restoration (both): from £60',
        'Leather conditioning (full interior): from £80',
        'Swirl mark removal (machine polish): from £200',
      ],
    },
    {
      type: 'text',
      heading: 'Pricing Notes — Macclesfield',
      body: 'All prices are for standard-sized cars. SUVs, MPVs, and vans are priced at a slight premium to reflect the additional time and product required. Combination packages (e.g. paint correction + ceramic coating, or exterior + interior detailing) are priced at a discount versus booking services separately. Contact us for an exact quote.',
    },
  ],
  faqs: [
    {
      question: 'Do you offer combined packages in Macclesfield?',
      answer: 'Yes — booking paint correction alongside ceramic coating, or combining exterior and interior detailing, attracts a package discount versus separate bookings.',
    },
    {
      question: 'Do prices vary by vehicle size in Macclesfield?',
      answer: 'Yes — larger vehicles (SUVs, estate cars, vans) take more time and product. We will confirm the exact price for your vehicle when you enquire.',
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Valeting cost guide' },
    { label: 'Macclesfield Hub', href: '/macclesfield', description: 'Full Macclesfield service hub' },
    { label: 'Ceramic Coating Macclesfield', href: '/macclesfield/car-detailing/ceramic-coating', description: 'From £300' },
    { label: 'Paint Correction Macclesfield', href: '/macclesfield/car-detailing/paint-correction', description: 'From £150 single-stage' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 areas' },
    { label: 'Car Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Congleton CW12 pricing' },
    { label: 'Car Detailing Prices Wilmslow', href: '/wilmslow/car-detailing/prices', description: 'Wilmslow SK9 pricing' },
  ],
};
