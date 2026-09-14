import { Sofa } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const leatherConditioningMacclesfield: ServicePageData = {
  slug: 'leather-conditioning',
  name: 'Leather Conditioning Macclesfield',
  icon: Sofa,
  seo: {
    title: 'Leather Conditioning Macclesfield | Leather Car Seat Care SK10 | SRV Detailing',
    description:
      'Professional leather conditioning in Macclesfield. Clean and condition leather seats and trim to prevent cracking and restore suppleness across SK10 and SK11.',
    keywords: [
      'leather conditioning macclesfield',
      'leather seat cleaning macclesfield',
      'leather car care macclesfield',
      'leather restoration macclesfield',
      'leather conditioning sk10',
      'leather treatment macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/leather-conditioning',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Leather Conditioning', href: '/macclesfield/car-detailing/leather-conditioning' },
  ],
  heroTitle: 'Leather Conditioning in Macclesfield',
  heroDescription:
    'Clean and condition leather seats and trim in Macclesfield. Prevent cracking, restore suppleness, and protect against UV fade — mobile service across SK10 and SK11.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Leather Care for Macclesfield Vehicles',
      body: 'Leather seats in frequently-used Macclesfield commuter vehicles take a daily beating — compressed by weight, exposed to UV through glass, and subjected to moisture from wet weather gear. Unconditioned leather dries out, cracks, and fades within a few years. Our leather conditioning service cleans the surface of embedded oils, body salts, and soiling, then replenishes the leather with professional-grade conditioner that keeps it supple and protects against cracking.',
    },
    {
      type: 'list',
      heading: 'Our Leather Conditioning Process — Macclesfield',
      items: [
        'pH-balanced leather cleaner applied with soft brush',
        'Agitation to lift embedded soiling from grain',
        'Residue removal with microfibre cloth',
        'Leather conditioner applied and worked in',
        'Final buff to remove excess and restore natural sheen',
        'UV protectant applied to reduce future fading',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does leather conditioning cost in Macclesfield?',
      answer: 'Leather conditioning for a full interior starts from £80. We also offer it as an add-on to any valet or detailing package.',
    },
    {
      question: 'How often should I condition leather seats in Macclesfield?',
      answer: 'We recommend conditioning every 3–6 months for regular-use vehicles. Vehicles that spend time in direct sunlight should be conditioned more frequently.',
    },
    {
      question: 'How often should Macclesfield drivers condition their leather seats?',
      answer: 'Every 3–4 months is optimal for vehicles used on Macclesfield commuter routes. Peak District dust ingress via HVAC systems dries leather faster than in urban environments, and the temperature differential between warm cabin interiors and cold Cheshire winters causes repeated expansion and contraction of leather fibres. We use pH-balanced cleaners to remove built-up body oils and road dust before applying a conditioner with UV inhibitors. Vehicles with Alcantara, nubuck, or perforated leather require specialist products — we assess the material on arrival before selecting the appropriate treatment.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Macclesfield', href: '/macclesfield/car-detailing/interior-detailing', description: 'Full interior restoration' },
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Upholstery Cleaning Macclesfield', href: '/macclesfield/car-valeting/upholstery-cleaning', description: 'Fabric seat alternative' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Leather care pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Leather Conditioning Congleton', href: '/congleton/car-detailing/leather-conditioning', description: 'Also serving CW12' },
  ],
  schemaPrice: '80',
};
