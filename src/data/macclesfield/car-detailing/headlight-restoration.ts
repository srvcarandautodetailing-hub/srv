import { Eye } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const headlightRestorationMacclesfield: ServicePageData = {
  slug: 'headlight-restoration',
  name: 'Headlight Restoration Macclesfield',
  icon: Eye,
  seo: {
    title: 'Headlight Restoration Macclesfield | Yellow Headlight Fix SK10 | SRV Detailing',
    description:
      'Professional headlight restoration in Macclesfield. Remove yellowing, haze, and oxidation from headlight lenses across SK10 and SK11. Mobile service at your driveway.',
    keywords: [
      'headlight restoration macclesfield',
      'headlight cleaning macclesfield',
      'yellowed headlights macclesfield',
      'headlight polish macclesfield',
      'headlight restoration sk10',
      'cloudy headlights macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/headlight-restoration',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Headlight Restoration', href: '/macclesfield/car-detailing/headlight-restoration' },
  ],
  heroTitle: 'Headlight Restoration in Macclesfield',
  heroDescription:
    'Remove yellowing, haze, and oxidation from your headlight lenses in Macclesfield. Safer night driving and improved vehicle appearance — mobile service across SK10 and SK11.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Headlight Restoration Matters in Macclesfield',
      body: 'Macclesfield sits at the edge of the Peak District, where unlit roads require maximum headlight output. UV-oxidised, yellowed headlight lenses can reduce light output by up to 70%, creating a genuine road safety concern — and an MOT advisory or failure. Our restoration process sands through the oxidation layers and applies a UV-resistant sealant to restore clarity that typically lasts 1–2 years.',
    },
    {
      type: 'list',
      heading: 'Headlight Restoration Process — Macclesfield',
      items: [
        'Initial assessment of oxidation depth',
        'Wet sand through multiple grits to remove surface oxidation',
        'Machine polish to restore optical clarity',
        'UV sealant application to prevent re-oxidation',
        'Final inspection in natural light',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does headlight restoration cost in Macclesfield?',
      answer: 'Headlight restoration for both headlights starts from £60. Single headlight restoration is available at a reduced rate.',
    },
    {
      question: 'How long does headlight restoration last?',
      answer: 'With UV sealant applied, restoration typically lasts 12–24 months. Vehicles parked in direct sunlight may need retreating sooner.',
    },
    {
      question: 'How long does headlight restoration last on Macclesfield vehicles?',
      answer: 'After professional wet-sanding and machine polishing, clarity is typically restored to factory standard. We apply a UV-resistant clear lacquer or lens sealant which protects the restoration for 12–24 months under normal Macclesfield driving conditions. The A537 and A523 involve significant UV and stone chip exposure; vehicles parked outdoors in Macclesfield year-round will require re-treatment sooner than garaged vehicles. We recommend combining headlight restoration with a full exterior detail to maximise the lifespan of the result.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Macclesfield', href: '/macclesfield/car-detailing/exterior-detailing', description: 'Often paired with exterior detail' },
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Full vehicle service' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Restoration pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Headlight Restoration Congleton', href: '/congleton/car-detailing/headlight-restoration', description: 'Also serving CW12' },
    { label: 'Paint Correction Macclesfield', href: '/macclesfield/car-detailing/paint-correction', description: 'Paint and lens correction together' },
  ],
  schemaPrice: '60',
};
