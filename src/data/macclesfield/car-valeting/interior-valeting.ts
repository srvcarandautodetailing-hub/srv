import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingMacclesfield: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Macclesfield',
  icon: Armchair,
  seo: {
    title: 'Interior Car Valeting Macclesfield | Interior Clean SK10 SK11 | SRV Detailing',
    description:
      'Professional interior car valeting in Macclesfield. Deep clean of seats, carpets, dashboard, and door cards across SK10 and SK11. Mobile service at your driveway.',
    keywords: [
      'interior car valeting macclesfield',
      'interior car clean macclesfield',
      'car interior valet macclesfield',
      'interior valet sk10',
      'seat cleaning macclesfield',
      'carpet cleaning car macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/interior-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Interior Valeting', href: '/macclesfield/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Car Valeting in Macclesfield',
  heroDescription:
    'Deep interior clean for Macclesfield vehicles. Seats, carpets, dashboard, and door cards professionally cleaned — mobile service across SK10 and SK11.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Interior Valeting — Macclesfield',
      body: 'A thorough interior valet covers every surface inside the vehicle — seats (fabric or leather), carpets, footwells, boot, dashboard, centre console, door cards, and interior glass. We use hot water extraction to lift embedded dirt from fabric surfaces, and specialist plastics cleaners and conditioners on hard surfaces. The result removes years of accumulated soiling in a single appointment.',
    },
    {
      type: 'list',
      heading: "Interior Valet — What's Included",
      items: [
        'Full vacuum of all seating, carpets, and boot',
        'Hot water extraction of fabric surfaces',
        'Dashboard, console, and door card clean',
        'Interior glass clean (smear-free)',
        'Cup holder and pocket clean',
        'Air vent detail brush',
        'Rubber seal wipe-down',
        'Air freshener',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does interior valeting cost in Macclesfield?',
      answer: 'Interior valeting for a standard car starts from £60. Heavily soiled vehicles or those with significant pet hair may be priced slightly higher.',
    },
    {
      question: 'How long does interior valeting take?',
      answer: 'Interior valeting typically takes 2–4 hours depending on the condition and size of the vehicle.',
    },
    {
      question: 'What does an interior valet include for SK10 vehicles?',
      answer: 'Our interior valet for SK10 Macclesfield vehicles includes: full vacuum of seats, carpets, boot, and door card pockets; dashboard, centre console, and door card wipe-down with appropriate surface-specific products; glass clean on all interior screens; fabric seat spot treatment for visible stains; and a finishing interior dressing on plastics and rubbers. For vehicles with child car seats, we work around them unless you prefer to remove them first. The service takes 2–3 hours on a standard car and is priced from £60 depending on condition.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Interior Detailing Macclesfield', href: '/macclesfield/car-detailing/interior-detailing', description: 'Deeper interior restoration' },
    { label: 'Upholstery Cleaning Macclesfield', href: '/macclesfield/car-valeting/upholstery-cleaning', description: 'Hot water extraction for stains' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Interior valet pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Interior Valeting Congleton', href: '/congleton/car-valeting/interior-valeting', description: 'Also serving CW12' },
  ],
  schemaPrice: '60',
};
