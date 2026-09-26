import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const detailingPricesWarrington: ServicePageData = {
  slug: 'prices',
  name: 'Car Detailing Prices Warrington',
  seo: {
    title: 'Car Detailing Prices Warrington | WA1–WA5 Detailing Cost Guide | SRV Detailing',
    description:
      'Car detailing prices in Warrington. Ceramic coating from £300, paint correction from £250, interior detailing from £150. Transparent pricing — no call-out fees for WA1–WA4 customers.',
    keywords: [
      'car detailing prices warrington',
      'ceramic coating cost warrington',
      'paint correction price warrington wa1 wa2 wa4',
      'car detailing cost cheshire warrington',
      'how much car detailing warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Prices', href: '/warrington/car-detailing/prices' },
  ],
  heroTitle: 'Car Detailing Prices in Warrington — Transparent WA1–WA5 Pricing',
  heroDescription:
    'Clear, honest pricing for all car detailing services across Warrington and WA1–WA5. No hidden charges. No call-out fees for WA1–WA4 customers. Prices reflect professional results using correct equipment and products.',
  contentSections: [
    {
      type: 'list',
      heading: 'Warrington Car Detailing Price Guide',
      items: [
        'Ceramic Coating — Entry Level (3-year): from £300 | includes decontamination, clay bar, single-stage correction',
        'Ceramic Coating — Mid-Range (3–4 year): from £500 | enhanced chemical resistance and deeper gloss',
        'Ceramic Coating — Premium (5–7+ year): from £800 | maximum hardness, UV defence, scratch resistance',
        'Paint Correction — Single-Stage: from £250 | removes light to moderate swirl marks and fine scratches',
        'Paint Correction — Two-Stage: from £400 | deeper correction, maximum clarity',
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
      heading: 'What Affects the Price of Car Detailing in Warrington',
      bodyParagraphs: [
        "Car detailing prices reflect the time, products, and expertise required for each specific vehicle. Larger vehicles — Land Rover Discovery, BMW X5, Volvo XC90 — take longer than compact cars across every service stage. Vehicles with heavily defected paint require more correction stages and more time under panel lighting than vehicles with light swirling only. The condition of the interior, the type of leather, and the degree of soiling all affect the time required for interior work.",
        "We never provide flat-rate prices that incentivise rushing work. Our pricing is transparent based on an honest assessment of your vehicle. We provide exact quotes before any work begins and do not add charges without discussion.",
      ],
    },
    {
      type: 'list',
      heading: 'No Call-Out Fees for WA1–WA4 Postcodes',
      items: [
        'No travel surcharge for WA1 (Warrington town centre), WA2 (Padgate, Fearnhead, Winwick), WA3 (Birchwood, Culcheth), and WA4 (Stockton Heath, Grappenhall, Lymm WA13)',
        'Standard travel charge may apply for outer WA5 (Great Sankey, Penketh) and adjacent areas — confirmed at booking',
        'All pricing confirmed in advance — no surprise charges',
      ],
    },
  ],
  faqs: [
    {
      question: 'Why does car detailing cost more than a regular car wash?',
      answer:
        "Professional detailing uses significantly more time, specialist equipment, and professional-grade products than any car wash service. A ceramic coating application involves 6–10 hours of work, paint depth measurement, machine polishing, panel inspection lighting, and careful coating application — none of which is involved in a drive-through wash. The price reflects genuine specialist labour and materials.",
    },
    {
      question: 'Do you charge more for larger vehicles in Warrington?',
      answer:
        "Larger vehicles typically take longer due to their size and complexity of panel shapes. This is reflected in pricing honestly rather than charging a blanket surcharge. We price based on the actual work required. BMW X5, Land Rover Discovery, and Volvo XC90 customers will be quoted accordingly.",
    },
    {
      question: 'Can I get a quote before booking?',
      answer:
        "Yes — always. Call us on 07375 759686 or use our contact form with your vehicle details and the service you're interested in. We provide an accurate quote based on your vehicle and requirements before any commitment.",
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'Overview of all detailing services' },
    { label: 'Ceramic Coating Warrington', href: '/warrington/car-detailing/ceramic-coating', description: 'SiO2 paint protection packages' },
    { label: 'Valeting Prices Warrington', href: '/warrington/car-valeting/prices', description: 'Valeting price guide' },
    { label: 'Pricing Hub', href: '/pricing', description: 'Site-wide pricing reference' },
    { label: 'Book Now', href: '/booking' },
  ],
};
