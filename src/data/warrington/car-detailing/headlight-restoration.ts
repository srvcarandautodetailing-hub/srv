import { Lightbulb } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const headlightRestorationWarrington: ServicePageData = {
  slug: 'headlight-restoration',
  name: 'Headlight Restoration Warrington',
  seo: {
    title: 'Headlight Restoration Warrington | Cloudy Headlight Fix WA1–WA5 | SRV Detailing',
    description:
      'Professional headlight restoration in Warrington. Wet-sanding and machine polishing removes yellowing and cloudiness from plastic headlight lenses. WA1–WA5 mobile service from £60.',
    keywords: [
      'headlight restoration warrington',
      'cloudy headlights warrington',
      'headlight polishing warrington wa1 wa2 wa4',
      'headlight cleaning warrington',
      'headlight restoration cheshire warrington',
      'yellow headlights warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/headlight-restoration',
  },
  icon: Lightbulb,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Headlight Restoration', href: '/warrington/car-detailing/headlight-restoration' },
  ],
  heroTitle: 'Headlight Restoration Warrington — Clarity Restored for WA1–WA5 Vehicles',
  heroDescription:
    'Restore cloudy, yellowed, and oxidised headlight lenses to optical clarity with our professional wet-sanding and machine polishing process. Mobile headlight restoration in Warrington from £60 per pair — no lens replacement required.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Headlights Yellow Faster on Warrington Roads',
      bodyParagraphs: [
        "Modern vehicle headlights use polycarbonate plastic lenses rather than glass. Polycarbonate is strong and lightweight but degrades under UV exposure over time. The factory UV coating on the lens surface gradually breaks down, causing the underlying plastic to oxidise — producing the characteristic yellowing, haziness, and dull appearance common on vehicles more than 5 years old. Constant motorway driving on the M62 and M6 accelerates this process: the combination of prolonged UV exposure at higher speeds, spray from HGV and lorry traffic, and winter road salt contact degrades the lens coating significantly faster than urban-only driving.",
        "Mersey Valley weather patterns bring persistent dampness and humidity through autumn and winter that further attacks polycarbonate lens surfaces. The spray from heavy goods vehicles on the M62 — carrying road salt and chemical de-icers — deposits a fine film on headlight lenses that, combined with UV exposure, creates an accelerated oxidation cycle specific to motorway-corridor locations like Warrington. Headlight restoration removes the oxidised plastic layer and applies a fresh UV protective coating, restoring both optical clarity and light output.",
      ],
    },
    {
      type: 'process',
      heading: 'Headlight Restoration Process',
      items: [
        'Assessment — evaluate the degree of oxidation and determine the required sanding grades',
        'Mask surrounding paintwork — paint-safe masking tape applied around each lens to protect the surrounding clear coat',
        'Wet-sanding — progressive sanding stages from coarser to finer grades remove the oxidised surface layer',
        'Machine polishing — rotary or dual-action polisher with cutting compound removes sanding marks and restores clarity',
        'Refinement polish — final polish stage achieves optical clarity and surface smoothness',
        'UV protective sealant — topcoat applied to the restored lens to protect against future UV oxidation',
        'Final inspection — optical clarity checked before completion',
      ],
    },
    {
      type: 'list',
      heading: 'Benefits of Headlight Restoration',
      items: [
        'Restores up to 90% of original light output — significant safety improvement for Warrington\'s complex motorway junctions and unlit country lanes',
        'Removes the aged, neglected appearance from the front of a vehicle',
        'Considerably cheaper than lens replacement — OEM headlight units for BMW, Mercedes, and Range Rover can cost £500–£2,000+ per unit',
        'Takes 1–2 hours as a mobile service at your Warrington address',
        'UV sealant coating extends the restored finish for 1–3 years',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does headlight restoration last in Warrington?',
      answer:
        "Our headlight restoration includes a UV protective sealant coating that typically lasts 1–3 years depending on the vehicle's exposure to sunlight and motorway spray. Regular wax application over the headlights extends longevity.",
    },
    {
      question: 'Can all headlights be restored?',
      answer:
        "Polycarbonate headlights with oxidation or yellowing respond well to restoration. Severely cracked, chipped, or internally fogged lenses (condensation inside the unit) may not be restorable by polishing alone. We assess each lens before starting and advise honestly on achievable results.",
    },
    {
      question: 'How much does headlight restoration cost in Warrington?',
      answer:
        'Headlight restoration starts from £60 per pair for a standard vehicle, from £80 for larger or more heavily oxidised lenses. Combined with any other service, headlight restoration can be added from £50 per pair.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Warrington', href: '/warrington/car-detailing/exterior-detailing', description: 'Complete exterior decontamination and protection' },
    { label: 'Paint Correction Warrington', href: '/warrington/car-detailing/paint-correction', description: 'Machine polishing for paint defects' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services across WA1–WA5' },
    { label: 'Detailing Prices Warrington', href: '/warrington/car-detailing/prices', description: 'Full pricing guide' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
