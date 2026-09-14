import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const detailingPricesCongleton: ServicePageData = {
  slug: 'prices',
  name: 'Car Detailing Prices Congleton',
  seo: {
    title: 'Car Detailing Prices Congleton | CW12 Detailing Cost Guide | SRV Detailing',
    description:
      'Car detailing prices in Congleton. Ceramic coating from £300, paint correction from £250, interior detailing from £150. Transparent pricing — no call-out fees for CW12 customers.',
    keywords: [
      'car detailing prices congleton',
      'ceramic coating cost congleton',
      'paint correction price congleton cw12',
      'car detailing cost cheshire east congleton',
      'how much car detailing congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-detailing/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Detailing', href: '/congleton/car-detailing' },
    { label: 'Prices', href: '/congleton/car-detailing/prices' },
  ],
  heroTitle: 'Car Detailing Prices in Congleton — Transparent CW12 Pricing',
  heroDescription:
    'Clear, honest pricing for all car detailing services across Congleton and CW12. No hidden charges. No call-out fees for CW12 customers. Prices reflect professional results using correct equipment and products.',
  contentSections: [
    {
      type: 'list',
      heading: 'Congleton Car Detailing Price Guide',
      items: [
        'Ceramic Coating — Entry Level (2-year): from £300 | includes decontamination, clay bar, single-stage correction',
        'Ceramic Coating — Mid-Range (3–4 year): from £500 | enhanced chemical resistance and deeper gloss',
        'Ceramic Coating — Premium (5–7+ year): from £800 | maximum hardness, UV defence, scratch resistance',
        'Paint Correction — Single-Stage: from £250 | removes light to moderate swirl marks and fine scratches',
        'Paint Correction — Two-Stage: from £400 | deeper correction, maximum clarity restoration',
        'New Car Protection: from £300 | decontamination, light polish where needed, 3-year ceramic coating',
        'Exterior Detailing (decontamination, polish, sealant): from £200',
        'Interior Detailing (full restoration): from £150',
        'Leather Conditioning: from £80',
        'Engine Bay Detailing: from £60 standalone, from £50 combined',
        'Headlight Restoration: from £60 per pair',
        'Swirl Mark Removal (single-stage polish): from £200',
        'Full Detail Package (correction + ceramic + interior): from £600',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects the Price of Car Detailing in Congleton',
      bodyParagraphs: [
        "Car detailing prices reflect the time, products, and expertise required for each specific vehicle and its condition. Larger vehicles — Range Rovers, Defenders, commercial-length SUVs — take longer across every service stage. Vehicles used on Congleton's agricultural and rural routes frequently arrive with more significant contamination build-up, requiring extended decontamination stages. Classic cars with older paint systems require more cautious, measured correction work using appropriate products for the specific paint age and type.",
        "We never provide flat-rate prices that incentivise cutting correction stages short. Our pricing is based on an honest assessment of your vehicle's actual condition and requirements. We provide exact quotes before any work begins and do not add charges without prior discussion.",
      ],
    },
    {
      type: 'list',
      heading: 'No Call-Out Fees for CW12 and Adjacent Areas',
      items: [
        'No travel surcharge for all Congleton CW12 addresses',
        'No call-out fee for Sandbach, Holmes Chapel, and immediate CW12 surroundings',
        'Standard travel charge may apply for Biddulph (ST8), Alsager (ST7), and Scholar Green (ST7) — confirmed at booking',
        'All pricing confirmed in advance — no surprise charges on the day',
      ],
    },
  ],
  faqs: [
    {
      question: 'Why does car detailing cost more than a car wash in Congleton?',
      answer:
        "Professional detailing involves significantly more time, specialist equipment, and professional-grade products. A full ceramic coating application requires paint depth measurement, iron decontamination, clay bar, machine polishing, panel inspection lighting, and careful coating application — 6–10 hours of measured, specialist work. The price reflects genuine professional labour and materials, not a margin on a commodity service.",
    },
    {
      question: 'Do you charge extra for Defenders and rural 4x4s in Congleton?',
      answer:
        "Larger vehicles and those with significant agricultural contamination take more time — this is reflected in pricing honestly. A Defender with compacted mud in wheel arches and a contaminated load area genuinely takes longer than a clean executive saloon. We quote accurately at booking so there are no surprises.",
    },
    {
      question: 'Can I get a quote before booking?',
      answer:
        "Yes — always. Call us on 07375 759686 or use our contact form with your vehicle details and the service you're considering. We provide an accurate quote before any commitment.",
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Congleton', href: '/congleton/car-detailing', description: 'All detailing services' },
    { label: 'Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Valeting cost guide' },
    { label: 'Congleton Hub', href: '/congleton', description: 'Full Congleton service hub' },
    { label: 'Ceramic Coating Congleton', href: '/congleton/car-detailing/ceramic-coating', description: 'From £300' },
    { label: 'Paint Correction Congleton', href: '/congleton/car-detailing/paint-correction', description: 'From £150 single-stage' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Macclesfield SK10 pricing' },
    { label: 'Car Detailing Prices Stockport', href: '/stockport/car-detailing/prices', description: 'Stockport SK pricing' },
  ],
};
