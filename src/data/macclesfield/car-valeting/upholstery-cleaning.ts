import { Layers } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const upholsteryCleaningMacclesfield: ServicePageData = {
  slug: 'upholstery-cleaning',
  name: 'Upholstery Cleaning Macclesfield',
  icon: Layers,
  seo: {
    title: 'Car Upholstery Cleaning Macclesfield | Seat & Carpet Clean SK10 | SRV Detailing',
    description:
      'Professional car upholstery cleaning in Macclesfield. Hot water extraction for fabric seats, carpets, and headliner across SK10 and SK11. Mobile service at your home.',
    keywords: [
      'car upholstery cleaning macclesfield',
      'car seat cleaning macclesfield',
      'carpet cleaning car macclesfield',
      'upholstery cleaning sk10',
      'fabric seat clean macclesfield',
      'car seat stain removal macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/upholstery-cleaning',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Upholstery Cleaning', href: '/macclesfield/car-valeting/upholstery-cleaning' },
  ],
  heroTitle: 'Car Upholstery Cleaning in Macclesfield',
  heroDescription:
    'Hot water extraction cleaning for fabric car seats, carpets, and headliner in Macclesfield. Remove stains, embedded dirt, and allergens — mobile service across SK10 and SK11.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Upholstery Cleaning — Macclesfield',
      body: 'Hot water extraction — often called steam cleaning — injects hot water and specialist cleaning solution into the fabric under pressure, then immediately extracts it along with dislodged soiling. This method is far more effective than surface cleaning at removing embedded dirt, food residue, spilled drinks, and biological staining. Macclesfield families with children and pets particularly benefit from this deep-clean approach.',
    },
    {
      type: 'list',
      heading: 'What Is Included in Upholstery Cleaning — Macclesfield',
      items: [
        'Pre-treatment of heavily stained areas',
        'Hot water extraction of fabric seats (front and rear)',
        'Hot water extraction of carpets and footwells',
        'Boot carpet extraction',
        'Headliner spot clean',
        'Drying process and ventilation',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does car upholstery cleaning cost in Macclesfield?',
      answer: 'Upholstery cleaning for a standard car starts from £80. This includes all fabric seats and carpets.',
    },
    {
      question: 'How long does upholstery cleaning take to dry?',
      answer: 'Fabric surfaces are typically dry within 2–4 hours in warm weather. We use high-extraction equipment to minimise moisture left behind.',
    },
    {
      question: 'How long does upholstery hot water extraction take to dry in the Macclesfield climate?',
      answer: 'Hot water extraction leaves fabric damp, not wet — our equipment extracts approximately 95% of moisture during the process. In the Macclesfield climate, fabric seats and carpets typically dry within 2–4 hours in summer and 4–8 hours in winter with doors left slightly ajar. We recommend booking morning appointments so drying can occur during the day. In cold or damp weather typical of the SK10 hills, we advise parking in a garage or using a portable fan heater to assist drying. The vehicle is ready for normal use once fabrics are completely dry to the touch.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Valeting Macclesfield', href: '/macclesfield/car-valeting/interior-valeting', description: 'Full interior clean' },
    { label: 'Leather Conditioning Macclesfield', href: '/macclesfield/car-detailing/leather-conditioning', description: 'Specialist leather alternative' },
    { label: 'Pet Hair Removal Macclesfield', href: '/macclesfield/car-valeting/pet-hair-removal', description: 'Often combined with upholstery clean' },
    { label: 'Interior Detailing Macclesfield', href: '/macclesfield/car-detailing/interior-detailing', description: 'Deeper restoration service' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Upholstery Cleaning Congleton', href: '/congleton/car-valeting/upholstery-cleaning', description: 'Also serving CW12' },
  ],
  schemaPrice: '80',
};
