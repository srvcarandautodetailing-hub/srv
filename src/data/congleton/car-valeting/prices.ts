import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const valetingPricesCongleton: ServicePageData = {
  slug: 'prices',
  name: 'Car Valeting Prices Congleton',
  seo: {
    title: 'Car Valeting Prices Congleton | CW12 Valet Cost Guide | SRV Detailing',
    description:
      'Car valeting prices in Congleton. Full valet from £90, maintenance valet from £45, interior valet from £60. Transparent pricing — no call-out fees for CW12 customers.',
    keywords: [
      'car valeting prices congleton',
      'full valet cost congleton',
      'car valet price cw12',
      'how much car valet congleton',
      'mobile valeting prices congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Prices', href: '/congleton/car-valeting/prices' },
  ],
  heroTitle: 'Car Valeting Prices in Congleton — Transparent CW12 Pricing',
  heroDescription:
    'Clear, honest pricing for all car valeting services across Congleton and CW12. No hidden charges. No call-out fees for CW12 customers. Every price based on actual professional time and materials.',
  contentSections: [
    {
      type: 'list',
      heading: 'Congleton Car Valeting Price Guide',
      items: [
        'Maintenance Valet (exterior wash + interior vacuum + glass): from £45',
        'Exterior Valet (hand wash, wheel decontamination, wax protection): from £55',
        'Interior Valet (deep vacuum, steam trim, glass): from £60',
        'Full Valet (complete interior and exterior): from £90',
        'Full Valet — Large SUV / Working 4x4 / Estate: from £150',
        'Mobile Hand Car Wash (exterior wash and dry): from £30',
        'Pet Hair Removal: from £60',
        'Odour Removal (deep clean + ozone treatment): from £80',
        'Upholstery Cleaning (hot water extraction): from £80',
        'Engine Bay Clean: from £60 standalone, from £50 combined',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects Valeting Prices in Congleton',
      bodyParagraphs: [
        "Vehicle size is the primary pricing factor — a Defender, Range Rover, or large estate takes meaningfully longer than a hatchback or saloon across every service stage. Vehicle contamination level also affects price: CW12 rural vehicles arriving with compacted agricultural mud in wheel arches and significant interior soiling from countryside use take longer than comparably sized urban vehicles. We assess honestly at booking and provide an accurate quote before any work begins.",
        "All pricing is confirmed before work starts. We do not add charges on the day without prior discussion. If we arrive and the condition is significantly different from what was described at booking, we'll advise and agree any adjustment before proceeding.",
      ],
    },
    {
      type: 'list',
      heading: 'No Call-Out Fees for CW12 and Adjacent Areas',
      items: [
        'No travel surcharge for all Congleton CW12 addresses',
        'No call-out fee for Sandbach, Holmes Chapel, and immediate CW12 surroundings',
        'Small travel charge for Biddulph (ST8), Alsager (ST7), Scholar Green (ST7) — confirmed at booking',
        'All pricing confirmed in advance — no surprise charges',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you charge more for rural and agricultural vehicles in Congleton?',
      answer:
        'Vehicles with significant agricultural contamination — compacted wheel arch mud, silage contamination, heavy interior rural use — take longer and are priced accordingly. This reflects the actual work required, not a penalty for vehicle type. We quote accurately at booking.',
    },
    {
      question: 'Is there a minimum booking in Congleton?',
      answer:
        'No minimum booking value. Our smallest service is a mobile hand car wash from £30.',
    },
    {
      question: 'Can I get a quote before booking?',
      answer:
        'Yes. Call us on 07375 759686 or use our contact form with your vehicle details and the service you want. We provide accurate quotes before any commitment.',
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services' },
    { label: 'Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Detailing cost guide' },
    { label: 'Congleton Hub', href: '/congleton', description: 'Full Congleton service hub' },
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Most popular service from £90' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Car Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Macclesfield SK10 pricing' },
    { label: 'Car Valeting Prices Stockport', href: '/stockport/car-valeting/prices', description: 'Stockport SK pricing' },
  ],
};
