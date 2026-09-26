import { Wind } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const odourRemovalMacclesfield: ServicePageData = {
  slug: 'odour-removal',
  name: 'Odour Removal Macclesfield',
  icon: Wind,
  seo: {
    title: 'Car Odour Removal Macclesfield | Smell Elimination SK10 SK11 | SRV Detailing',
    description:
      'Professional car odour removal in Macclesfield. Ozone treatment and deep fabric clean to eliminate persistent smells across SK10 and SK11. Mobile service at your home.',
    keywords: [
      'car odour removal macclesfield',
      'car smell removal macclesfield',
      'ozone treatment car macclesfield',
      'odour removal sk10',
      'car deodoriser macclesfield',
      'smoke smell removal car macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/odour-removal',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Odour Removal', href: '/macclesfield/car-valeting/odour-removal' },
  ],
  heroTitle: 'Car Odour Removal in Macclesfield',
  heroDescription:
    'Eliminate persistent car odours in Macclesfield. Ozone treatment and deep fabric cleaning to remove smoke, pet, food, and damp smells — mobile service across SK10 and SK11.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Car Odour Removal — Macclesfield',
      body: 'Persistent car odours — from pet transport, food spills, tobacco smoke, or damp — cannot be masked with air fresheners. They require the source to be physically cleaned and the airborne molecules to be neutralised. Our ozone treatment process generates ozone inside the sealed vehicle, which oxidises odour-causing molecules in the air, fabric fibres, and ventilation system. Combined with a hot water extraction clean of fabric surfaces, this permanently eliminates rather than masks odours.',
    },
    {
      type: 'list',
      heading: 'Odour Removal Process — Macclesfield',
      items: [
        'Source identification and physical cleaning of affected surfaces',
        'Hot water extraction of fabric seats, carpets, and headliner',
        'Ozone generator treatment inside sealed vehicle (45–90 minutes)',
        'Ventilation and air out period',
        'Final interior freshen and air freshener',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does car odour removal cost in Macclesfield?',
      answer: 'Odour removal including ozone treatment starts from £80. Heavily contaminated vehicles may require a longer ozone cycle.',
    },
    {
      question: 'Does ozone treatment really eliminate car odours permanently?',
      answer: 'Yes — when the source is cleaned first and ozone is applied correctly, the treatment eliminates odours permanently rather than masking them. If the source (e.g. wet carpet from a leak) is not addressed, the odour will return.',
    },
    {
      question: 'How does ozone odour removal work and is it safe for Macclesfield vehicles?',
      answer: 'Ozone (O₃) treatment works by flooding the vehicle interior with ozone gas, which oxidises and breaks down odour molecules at a molecular level — eliminating the source rather than masking it. The treatment runs for 30–60 minutes with the vehicle sealed. After treatment, the vehicle needs to air out for 30–60 minutes before re-entry. Ozone is safe for all interior materials when correctly dosed — we calibrate output to vehicle volume. It is particularly effective for smoke, pet, mould, and food odours common in family vehicles used on Macclesfield rural routes. Ozone treatment should be preceded by a thorough interior clean to remove physical odour sources first.',
    },
  ],
  relatedLinks: [
    { label: 'Pet Hair Removal Macclesfield', href: '/macclesfield/car-valeting/pet-hair-removal', description: 'Remove the source of pet odours' },
    { label: 'Interior Valeting Macclesfield', href: '/macclesfield/car-valeting/interior-valeting', description: 'Full interior clean before ozone' },
    { label: 'Upholstery Cleaning Macclesfield', href: '/macclesfield/car-valeting/upholstery-cleaning', description: 'Hot water extraction for odour sources' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Odour treatment pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Odour Removal Congleton', href: '/congleton/car-valeting/odour-removal', description: 'Also serving CW12' },
  ],
  schemaPrice: '80',
};
