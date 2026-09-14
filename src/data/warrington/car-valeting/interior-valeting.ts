import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingWarrington: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Warrington',
  seo: {
    title: 'Interior Valeting Warrington | Interior Car Clean WA1–WA5 | SRV Detailing',
    description:
      'Professional interior car valeting in Warrington. Thorough vacuum, steam clean of trim and vents, upholstery care, glass clean. WA1–WA5 mobile service. From £60.',
    keywords: [
      'interior valeting warrington',
      'interior car clean warrington',
      'interior valet wa1 wa2 wa4 wa5',
      'car interior cleaning warrington',
      'interior valet cheshire warrington',
      'mobile interior valet warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/interior-valeting',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Interior Valeting', href: '/warrington/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Valeting Warrington — Professional Interior Clean at Your WA1–WA5 Door',
  heroDescription:
    'When your Warrington vehicle only needs interior attention, our dedicated interior valet delivers a thorough professional clean — deep vacuum, steam treatment, trim and dashboard care, upholstery treatment, and streak-free glass — at your home or workplace.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'When an Interior Valet Is the Right Choice',
      bodyParagraphs: [
        "An interior valet is the dedicated service for vehicles whose exterior is in good condition but whose cabin has accumulated use — company cars after a busy week on the road, family SUVs after activities at Lymm Dam or Sankey Valley, or commuter cars used daily on the M62 corridor. When the outside needs nothing more than maintenance and the inside is what needs attention, booking a standalone interior valet is the most efficient use of time and cost.",
        "Our interior valeting service is thorough. It is not a quick wipe — it is a systematic clean of every interior surface using appropriate products and techniques for each material. Steam cleaning for hard plastic trim and vents (which a damp cloth cannot effectively clean), correct cleaners for leather and fabric respectively, and professional glass cleaner that removes all haze and smear from interior windows.",
      ],
    },
    {
      type: 'list',
      heading: 'Interior Valet — What Is Included',
      items: [
        'Full interior strip-out of floor mats and movable items',
        'Thorough vacuum of all surfaces — seats, carpets, mats, boot, door pockets, and crevices',
        'Compressed air blow-out of air vents, speaker grilles, and switch surrounds',
        'Steam cleaning of all hard surfaces — dashboard, console, door cards, gear surround, and A-pillars',
        'Dashboard, console, and trim cleaning and dressing with appropriate product',
        'Upholstery wipe — leather cleaned with pH-balanced cleaner; fabric seats spot-cleaned',
        'Interior glass cleaned streak-free — all windows, mirrors, and screen',
        'Odour neutralisation — deodoriser applied to freshen the cabin air',
      ],
    },
    {
      type: 'list',
      heading: 'Why Warrington Interiors Need Regular Attention',
      items: [
        'Company car workers at Birchwood, Omega, and Gemini business parks accumulate daily fine dust and food debris in cabins during commutes',
        'Family cars used for school runs, sports activities, and outdoor recreation at Lymm Dam and Sankey Valley bring in mud, food, and organic contamination regularly',
        'Damp Mersey Valley autumn and winter conditions bring moisture and condensation into cabins, creating bacterial growth in carpets without regular cleaning',
        'Pre-sale preparation — a clean, fresh interior is essential for achieving the sale price a well-maintained vehicle warrants',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does an interior valet take in Warrington?',
      answer:
        '60–90 minutes for a standard vehicle. Larger SUVs and prestige cars with more complex interiors take 90–120 minutes. Vehicles with heavy soiling, pet hair, or extensive staining may take longer.',
    },
    {
      question: 'How much does an interior valet cost in Warrington?',
      answer:
        'Interior valets start from £60 for a standard hatchback and from £75 for a larger SUV or estate car. Exact pricing confirmed at booking.',
    },
    {
      question: 'Can you add an exterior wash to an interior valet?',
      answer:
        "Yes. A maintenance valet combines both interior and exterior cleaning efficiently, or we can add an exterior wash to an interior valet booking. The most cost-effective option is a maintenance valet if both are needed.",
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Warrington', href: '/warrington/car-detailing/interior-detailing', description: 'Deep restoration beyond standard valeting' },
    { label: 'Upholstery Cleaning Warrington', href: '/warrington/car-valeting/upholstery-cleaning', description: 'Hot water extraction for seats and carpets' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting services across WA1–WA5' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
