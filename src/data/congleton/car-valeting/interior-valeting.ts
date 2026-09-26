import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingCongleton: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Congleton',
  seo: {
    title: 'Interior Valeting Congleton | Car Interior Clean CW12 | SRV Detailing',
    description:
      'Professional interior car valeting in Congleton. Deep vacuum, steam cleaning, trim care, and glass polish — all at your CW12 door. Mobile service. From £60.',
    keywords: [
      'interior valeting congleton',
      'interior car valet congleton',
      'car interior cleaning congleton cw12',
      'interior valet mobile congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/interior-valeting',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Interior Valeting', href: '/congleton/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Valeting Congleton — Professional Interior Clean at Your CW12 Door',
  heroDescription:
    'Interior-focused professional valeting at your Congleton home or workplace. Deep vacuum, steam treatment of hard trim and vents, upholstery spot cleaning, leather wipe, and streak-free glass — delivered to all CW12 postcodes. Ideal when the exterior is clean but the interior needs attention.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'When Interior Valeting Is the Right Service',
      bodyParagraphs: [
        "Interior valeting is the appropriate service when the exterior of your vehicle is acceptable — perhaps recently ceramic coated or washed — but the interior has accumulated contamination from everyday use, family activities, dogs, or rural CW12 driving. Rather than paying for exterior work that isn't needed, interior valeting focuses entirely on the cabin and delivers a thorough result at a lower cost than a full valet.",
        "For Congleton customers, interior valeting is commonly booked after school holiday family use (children, dogs, food), after extended rural driving that has brought mud and outdoor debris into the vehicle, and seasonally as a cabin refresh heading into summer or winter. It is also a popular add-on to a ceramic coating service where the exterior has already been fully treated.",
      ],
    },
    {
      type: 'list',
      heading: "What's Included in an Interior Valet",
      items: [
        'Deep vacuum — seats, all carpets, floor mats, boot, door pockets, seat rails, under seats, and crevices',
        'Steam treatment — dashboard, all hard trim, steering column, gear lever, vents, and door cards',
        'Upholstery spot cleaning — fabric shampoo on stained areas; leather wipe-down and basic conditioning',
        'Interior glass — all windows and mirrors cleaned streak-free from inside',
        'Air vents — brush cleaned and steam treated',
        'Odour neutralisation — basic odour treatment included; ozone treatment available for persistent biological odours',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does interior valeting cost in Congleton?',
      answer:
        'Interior valeting from £60 for a standard hatchback or saloon. Larger vehicles — SUVs, estates, 7-seaters — from £80. Heavily soiled interiors with significant rural contamination from £100. Confirmed at booking.',
    },
    {
      question: 'How long does an interior valet take in Congleton?',
      answer:
        '60–90 minutes for a standard vehicle. Larger vehicles and heavily soiled interiors take longer. We provide an accurate time estimate at booking.',
    },
    {
      question: 'What interior valeting is recommended after Congleton agricultural and market use?',
      answer: 'Vehicles used for transporting animals, produce, or equipment from Congleton\'s rural market catchment require thorough interior treatment before odour becomes embedded. We recommend an interior valet with steam cleaning of rubber floor mats and hard surfaces, hot water extraction of any fabric elements, and an ozone treatment session at the end for persistent organic odours. Animal hair, straw, and grain dust embed deeply into seat fabric and carpet piles and require both mechanical agitation and extraction to fully remove. We cover all CW12 postcodes and can attend farm premises directly — same-week availability for most Congleton area appointments.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Interior Detailing Congleton', href: '/congleton/car-detailing/interior-detailing', description: 'Deeper interior restoration' },
    { label: 'Upholstery Cleaning Congleton', href: '/congleton/car-valeting/upholstery-cleaning', description: 'Hot water extraction for stains' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Interior valet pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Interior Valeting Macclesfield', href: '/macclesfield/car-valeting/interior-valeting', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '60',
};
