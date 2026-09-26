import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const valetingPricesWarrington: ServicePageData = {
  slug: 'prices',
  name: 'Car Valeting Prices Warrington',
  seo: {
    title: 'Car Valeting Prices Warrington | WA1–WA5 Valeting Cost | SRV Detailing',
    description:
      'Car valeting prices in Warrington. Maintenance valet from £45, full valet from £90. Transparent pricing for all valeting services across WA1–WA5. No call-out fees for WA1–WA4.',
    keywords: [
      'car valeting prices warrington',
      'full valet cost warrington',
      'mini valet price warrington wa1 wa2 wa4',
      'car valeting cost cheshire warrington',
      'how much car valet warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Prices', href: '/warrington/car-valeting/prices' },
  ],
  heroTitle: 'Car Valeting Prices in Warrington — Clear WA1–WA5 Pricing',
  heroDescription:
    'Transparent, honest pricing for all car valeting services across Warrington and WA1–WA5. No call-out fees for WA1–WA4. No surprise charges. Every price is confirmed before any work begins.',
  contentSections: [
    {
      type: 'list',
      heading: 'Warrington Car Valeting Price Guide',
      items: [
        'Maintenance Valet (exterior hand wash, interior vacuum, dash wipe, glass): from £45 (hatchback) / from £60 (SUV/estate)',
        'Full Valet (complete interior and exterior, 3–4 hours): from £90 (standard) / from £150 (large SUV/estate)',
        'Exterior Valet only (hand wash, wheel decontamination, wax): from £50',
        'Interior Valet only (vacuum, steam, trim, glass): from £60',
        'Mobile Car Wash (snow foam, hand wash, wheels, quick detailer): from £30',
        'Pet Hair Removal: from £60 (light) / from £80–£100 (heavy/large vehicles)',
        'Odour Removal with Ozone Treatment: from £80 (light) / from £120 (deep treatment)',
        'Upholstery Hot Water Extraction: from £80 (seats and carpets)',
        'All prices are per service — no call-out fees for WA1–WA4 postcodes',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects the Price of a Valet in Warrington',
      bodyParagraphs: [
        "Vehicle size is the primary price factor — a Land Rover Discovery or BMW X5 requires significantly more time than a compact hatchback across every stage of a valet. Vehicle condition is the second factor — a heavily soiled interior from outdoor activities at Sankey Valley or months of accumulated motorway road film require more time and product than a vehicle in regular care.",
        "We price honestly based on an accurate assessment of your vehicle rather than incentivising rushed work with artificially low flat rates. Every Warrington customer receives a confirmed price before any work begins.",
      ],
    },
    {
      type: 'list',
      heading: 'No Call-Out Fees for WA1–WA4 Postcodes',
      items: [
        'No travel charge for WA1 (Warrington town centre, Padgate), WA2 (Fearnhead, Winwick, Longford), WA3 (Birchwood, Culcheth), and WA4 (Stockton Heath, Grappenhall, Lymm WA13)',
        'Travel charge confirmed at booking for outer Warrington WA5 (Great Sankey, Penketh) and adjacent Cheshire areas',
        'Regular valeting customers receive priority scheduling and consistent rates',
        'Standing appointments available for weekly, fortnightly, or monthly maintenance valets',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you charge a call-out fee for Warrington?',
      answer:
        'No call-out fee applies for WA1, WA2, WA3, and WA4 postcodes. A travel charge may apply for WA5 and outer Warrington — always confirmed at booking before any commitment.',
    },
    {
      question: 'Why is a professional valet more expensive than a car wash?',
      answer:
        "A professional mobile valet involves significantly more time, specialist equipment, and professional-grade products than any automated or manual car wash. A full valet takes 3–4 hours of careful, skilled work — proper decontamination, safe hand washing, thorough interior treatment, and protective finishing. The price reflects genuine professional labour.",
    },
    {
      question: 'Can I get a quote for my specific vehicle?',
      answer:
        "Yes. Call us on 07375 759686 or use our contact form with your vehicle make, model, and the service you need. We provide an accurate, no-obligation quote before any booking is confirmed.",
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'Overview of all valeting services' },
    { label: 'Detailing Prices Warrington', href: '/warrington/car-detailing/prices', description: 'Detailing price guide' },
    { label: 'Pricing Hub', href: '/pricing', description: 'Site-wide pricing reference' },
    { label: 'Book Now', href: '/booking' },
  ],
};
