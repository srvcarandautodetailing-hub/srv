import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingWarrington: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Warrington',
  seo: {
    title: 'Engine Bay Detailing Warrington | Engine Bay Clean WA1–WA5 | SRV Detailing',
    description:
      'Professional engine bay detailing in Warrington. Safe degreasing, careful rinse, and dressing — engine bays restored to showroom condition for commercial and prestige vehicles across WA1–WA5.',
    keywords: [
      'engine bay detailing warrington',
      'engine bay clean warrington',
      'engine bay cleaning wa1 wa2 wa3 wa4 wa5',
      'engine bay detail cheshire warrington',
      'engine cleaning warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/warrington/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing Warrington — Safe Clean for WA1–WA5 Vehicles',
  heroDescription:
    'Professional engine bay detailing in Warrington. Safe degreasing of M6/M62 motorway grime, Birchwood and Omega business park contamination, and heavy industrial use deposits — engine bays restored to showroom presentation without risk to electrical components.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Engine Bay Detailing Matters in Warrington',
      bodyParagraphs: [
        "Warrington sits at the junction of the M6, M62, and M56 motorways — one of the busiest road intersections in the North West. Vehicles driven daily through this network accumulate a specific type of engine bay contamination: heavy traffic film, diesel particulate deposit, and motorway road spray that builds up on engine covers, hoses, and wiring harnesses faster than in lower-traffic areas. Workers from Birchwood Park, Omega South, and Gemini retail park who commute on the M62 corridor see this contamination in concentrated form on their vehicles.",
        "Engine bay detailing is not simply spraying water under the bonnet. It is a methodical process of degreasing specific surfaces with appropriate products, protecting electrical components and air intakes from moisture, applying controlled low-pressure rinsing, compressed air drying, and then dressing plastic, rubber, and silicon components to a clean, factory-appearance finish. Done correctly, it is completely safe. Done carelessly, it can damage electronics, air filtration, and fuel systems. We have the experience and equipment to do it correctly on every vehicle type — from Birchwood Park company cars to the BMW, Mercedes, and Land Rover prestige vehicles in Stockton Heath and Lymm.",
      ],
    },
    {
      type: 'process',
      heading: 'Engine Bay Detailing Process',
      items: [
        'Cold engine inspection — engine bay assessed only when the engine is fully cold to prevent steam burns and thermal shock',
        'Protection of sensitive components — air filter, fuse box, battery terminals, and exposed electrical connectors covered before any liquid application',
        'Degreaser application — appropriate alkaline degreaser applied to contaminated surfaces and allowed to dwell',
        'Agitation — soft brushes used on stubborn grease deposits, surfaces cleaned by hand in accessible areas',
        'Low-pressure rinse — controlled water application specifically directed away from protected electrical components',
        'Compressed air drying — air blower used to displace water from all components, crevices, and wiring harnesses',
        'Final drying — any remaining moisture removed with microfibre cloths',
        'Plastic and rubber dressing — all plastic covers, rubber hoses, and silicon components dressed with appropriate protectant for a clean, factory appearance',
        'Final inspection — engine bay check under bright lighting before closing',
      ],
    },
    {
      type: 'list',
      heading: 'Benefits of a Detailed Engine Bay',
      items: [
        'Improved presentation for private sale or part-exchange valuations — a clean bay signals good maintenance',
        'Easier identification of leaks, cracks, and deteriorating components against a clean background',
        'Reduced fire risk from accumulated oil, fuel residues, and combustible debris on hot components',
        'Protection of rubber and plastic components from UV degradation through regular dressing',
        'Essential preparation for ceramic coating and paint correction — a clean bay completes the full detail correctly',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is engine bay cleaning safe for modern cars in Warrington?',
      answer:
        'Yes, when carried out correctly. Modern vehicles are designed to withstand rain and road spray in the engine bay. Professional engine bay detailing uses appropriately targeted low-pressure water, protected electrical components, and immediate drying with compressed air. We do not use pressure washers or indiscriminate water application. Our process is safe for all current vehicle makes and models.',
    },
    {
      question: 'Do you offer engine bay detailing as a standalone service in Warrington?',
      answer:
        'Yes. Engine bay detailing can be booked as a standalone service or added to any exterior detail or full valet. It typically takes 1–2 hours as a standalone service depending on the size and condition of the engine bay.',
    },
    {
      question: 'How much does engine bay detailing cost in Warrington?',
      answer:
        'Engine bay detailing starts from £60 as a standalone service. Combined with an exterior detail or full valet, it can be added from £50. Contact us for an accurate quote based on your vehicle.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Warrington', href: '/warrington/car-detailing/exterior-detailing', description: 'Complete exterior decontamination and protection' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services across WA1–WA5' },
    { label: 'Detailing Prices Warrington', href: '/warrington/car-detailing/prices', description: 'Full pricing guide' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
