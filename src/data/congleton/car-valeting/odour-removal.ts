import { Wind } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const odourRemovalCongleton: ServicePageData = {
  slug: 'odour-removal',
  name: 'Odour Removal Congleton',
  seo: {
    title: 'Car Odour Removal Congleton | Smoke & Pet Smell Removal CW12 | SRV Detailing',
    description:
      'Professional car odour removal in Congleton. Permanently eliminate smoke, pet, farm, food, and damp smells with deep cleaning and ozone treatment. Mobile service across CW12.',
    keywords: [
      'odour removal car congleton',
      'car smell removal congleton',
      'smoke smell car congleton cw12',
      'pet odour removal car congleton',
      'car deodorising congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/odour-removal',
  },
  icon: Wind,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Odour Removal', href: '/congleton/car-valeting/odour-removal' },
  ],
  heroTitle: 'Car Odour Removal Congleton — Permanently Eliminate Vehicle Smells',
  heroDescription:
    'Professional car odour removal at your Congleton driveway — permanently eliminating smoke, pet, farm, food, and damp smells through deep cleaning and professional ozone treatment. No masking, no temporary perfume cover — complete odour elimination.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Odour Removal for Congleton Vehicles',
      bodyParagraphs: [
        "Vehicle odours are caused by biological sources — pet dander and oils, smoke residues, food spills, agricultural and farm contamination, and damp that develops in a saturated fabric interior — that embed into fabric, carpet, headlining, and the HVAC system. Air fresheners mask these sources temporarily; they do not remove them. Permanent odour elimination requires removing the biological source material through deep cleaning, followed by ozone treatment that chemically neutralises any remaining odour molecules throughout the cabin.",
        "In Congleton, the most common odour presentations are working dog smell from Defenders and rural 4x4s, farm and agricultural vehicle contamination, and the damp/musty smell that develops in vehicles frequently used on wet countryside routes with inadequately dried interiors. Our process addresses all of these through deep fabric cleaning and extraction followed by a professional ozone generator cycle that treats the entire cabin including the HVAC system.",
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does odour removal cost in Congleton?',
      answer:
        'Odour removal from £80. Severe cases — heavy smoke, long-term farm use, multiple biological sources — from £120. Confirmed at booking based on the type and severity of odour.',
    },
    {
      question: 'Does ozone treatment permanently remove odours?',
      answer:
        'Yes — ozone chemically neutralises odour molecules throughout the cabin, including in the HVAC system. The treatment eliminates the odour rather than masking it. The result is a fresh, neutral-smelling interior without any chemical or perfume smell.',
    },
    {
      question: 'Can ozone treatment eliminate agricultural odours from Congleton farm vehicles?',
      answer: 'Yes — ozone treatment is highly effective on the organic and chemical odours commonly found in Congleton farm vehicles: silage, manure, feed supplements, and agricultural chemical residues. The ozone gas oxidises odour molecules at a molecular level, permanently eliminating them rather than masking with a fragrance. For vehicles with heavy agricultural contamination, we recommend a thorough interior clean first to remove physical odour sources (organic material, contaminated carpets) before running the ozone treatment — otherwise the ozone is consumed neutralising surface contamination rather than reaching airborne odour molecules throughout the vehicle. Treatment duration is typically 45–60 minutes for a standard vehicle interior.',
    },
  ],
  relatedLinks: [
    { label: 'Pet Hair Removal Congleton', href: '/congleton/car-valeting/pet-hair-removal', description: 'Remove the source of pet odours' },
    { label: 'Interior Valeting Congleton', href: '/congleton/car-valeting/interior-valeting', description: 'Full interior clean before ozone' },
    { label: 'Upholstery Cleaning Congleton', href: '/congleton/car-valeting/upholstery-cleaning', description: 'Hot water extraction for odour sources' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Odour treatment pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Odour Removal Macclesfield', href: '/macclesfield/car-valeting/odour-removal', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '80',
};
