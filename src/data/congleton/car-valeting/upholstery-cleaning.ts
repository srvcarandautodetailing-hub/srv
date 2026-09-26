import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const upholsteryCleaningCongleton: ServicePageData = {
  slug: 'upholstery-cleaning',
  name: 'Upholstery Cleaning Congleton',
  seo: {
    title: 'Car Upholstery Cleaning Congleton | Fabric Seat Cleaning CW12 | SRV Detailing',
    description:
      'Professional car upholstery cleaning in Congleton. Hot water extraction removes deep stains from fabric seats, carpets, and mats. Mobile service across CW12. From £80.',
    keywords: [
      'upholstery cleaning congleton',
      'car seat cleaning congleton',
      'fabric seat cleaning congleton cw12',
      'hot water extraction car congleton',
      'car carpet cleaning congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/upholstery-cleaning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Upholstery Cleaning', href: '/congleton/car-valeting/upholstery-cleaning' },
  ],
  heroTitle: 'Upholstery Cleaning Congleton — Hot Water Extraction at Your CW12 Door',
  heroDescription:
    'Professional upholstery cleaning for Congleton vehicles — hot water extraction removes deep staining from fabric seats, carpets, and boot mats that standard cleaning cannot reach. Mobile service across CW12. Ideal for family vehicles, rural-use estates, and dog-transport vehicles.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Upholstery Cleaning for CW12 Vehicles',
      bodyParagraphs: [
        "Hot water extraction is the most effective method for removing deep-set staining from vehicle fabric — it injects a warm water and cleaning solution mixture into the fibre under pressure, then immediately extracts it together with the dissolved contamination. The result is a fabric that is cleaned through its full depth, not just on the surface.",
        "For Congleton's family vehicles and rural-use estates, the most common fabric issues are child food and drink staining embedded over time, muddy boot-area carpet from country walks and outdoor activities, and dog contamination in rear seating and load areas. All of these respond well to hot water extraction treatment that standard valeting equipment cannot replicate.",
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does upholstery cleaning cost in Congleton?',
      answer:
        'From £80 for front seats and footwell carpets. Full interior extraction (all seats, carpets, boot) from £120. Confirmed at booking based on vehicle size and contamination level.',
    },
    {
      question: 'How long does upholstery cleaning take and when can I use the car?',
      answer:
        '60–90 minutes for front seats and footwells; 2–3 hours for a full interior extraction. Fabric needs 2–4 hours to dry fully before normal use — we advise leaving windows slightly open where possible to aid drying.',
    },
    {
      question: 'How long does upholstery cleaning take to dry at Congleton rural properties?',
      answer: 'Hot water extraction leaves fabric damp, not wet — our equipment removes approximately 95% of moisture during the process. In Congleton\'s variable climate, fabric seats and carpets typically dry in 3–5 hours in summer with doors slightly open. In the wetter CW12 autumn and winter months, drying takes 6–10 hours. We recommend morning appointments for outdoor drying time. For rural properties with garage access, post-extraction drying in a covered space with a portable fan is the most reliable method regardless of weather. The vehicle is usable once fabrics are completely dry to the touch — we advise against using seat heaters before fabrics are fully dry as this can encourage mildew in deeply contaminated carpets.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Valeting Congleton', href: '/congleton/car-valeting/interior-valeting', description: 'Full interior clean' },
    { label: 'Leather Conditioning Congleton', href: '/congleton/car-detailing/leather-conditioning', description: 'Specialist leather alternative' },
    { label: 'Pet Hair Removal Congleton', href: '/congleton/car-valeting/pet-hair-removal', description: 'Often combined with upholstery clean' },
    { label: 'Interior Detailing Congleton', href: '/congleton/car-detailing/interior-detailing', description: 'Deeper restoration service' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Upholstery Cleaning Macclesfield', href: '/macclesfield/car-valeting/upholstery-cleaning', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '80',
};
