import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const paintCorrectionMacclesfield: ServicePageData = {
  slug: 'paint-correction',
  name: 'Paint Correction Macclesfield',
  icon: Sparkles,
  seo: {
    title: 'Paint Correction Macclesfield | Swirl Mark & Scratch Removal SK10 | SRV Detailing',
    description:
      'Professional paint correction in Macclesfield. Machine polishing to remove swirl marks, light scratches, and oxidation across SK10 and SK11. Mobile service at your driveway.',
    keywords: [
      'paint correction macclesfield',
      'swirl mark removal macclesfield',
      'scratch removal macclesfield',
      'machine polishing macclesfield',
      'car polishing macclesfield',
      'paint correction sk10',
      'paint restoration macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/paint-correction',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Paint Correction', href: '/macclesfield/car-detailing/paint-correction' },
  ],
  heroTitle: 'Paint Correction in Macclesfield',
  heroDescription:
    'Machine polishing to remove swirl marks, light scratches, and oxidation from Macclesfield vehicles. Delivered at your home or workplace across SK10 and SK11.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'What Causes Paint Defects on Macclesfield Vehicles',
      body: 'Incorrect washing — especially automated car washes — is the primary cause of swirl marks. Salt-laden grit ground across paint during winter washing compounds the damage. Macclesfield vehicles exposed to A537 road salt and commuter dust accumulate defects quickly. Paint correction uses a machine polisher and diminishing abrasive compounds to safely level the clear coat and eliminate these marks.',
    },
    {
      type: 'comparison',
      heading: 'Single Stage vs Two-Stage Paint Correction',
      comparison: {
        headers: ['', 'Single Stage (from £150)', 'Two Stage (from £250)'],
        rows: [
          ['Defect removal', '60–70%', '85–95%'],
          ['Ideal for', 'Light swirls, minor hazing', 'Deep swirls, scratches, oxidation'],
          ['Time required', '3–4 hours', '6–8 hours'],
          ['Post-correction finish', 'Sealant or wax', 'Sealant, wax, or ceramic coating'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Can paint correction remove deep scratches in Macclesfield?',
      answer:
        'Paint correction removes defects within the clear coat layer. Scratches that have penetrated through to the primer or bare metal require a different repair method. We assess your paintwork before quoting.',
    },
    {
      question: 'How much does paint correction cost in Macclesfield?',
      answer:
        'Single-stage paint correction starts from £150. A two-stage correction starts from £250. Both include a post-correction sealant or wax layer. Ceramic coating can be added at a reduced combined rate.',
    },
    {
      question: 'Why do Macclesfield vehicles suffer more swirl marks than other areas?',
      answer: 'Macclesfield has a high concentration of automated car washes serving the commuter population — notably along the A523 and near the town centre retail parks. Automated brush washes are the primary cause of swirl marks: rotating bristles drag abrasive particles across soft clear coat, creating circular micro-scratches. Salt grit compounds the problem in winter. Vehicles driven on the A537 also accumulate fine peat particles that, when dry-wiped at a forecourt, create characteristic radial scratch patterns. Machine polishing removes these systematically and without further clear coat loss when done correctly.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Macclesfield', href: '/macclesfield/car-detailing/ceramic-coating', description: 'Protect corrected paint long-term' },
    { label: 'Swirl Mark Removal Macclesfield', href: '/macclesfield/car-detailing/swirl-mark-removal', description: 'Single-stage correction option' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Correction pricing from £150' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Paint Correction Congleton', href: '/congleton/car-detailing/paint-correction', description: 'Also serving CW12' },
    { label: 'Paint Correction Wilmslow', href: '/wilmslow/car-detailing/paint-correction', description: 'Nearby SK9 service' },
  ],
  schemaPrice: '250',
};
