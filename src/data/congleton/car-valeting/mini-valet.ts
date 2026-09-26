import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetCongleton: ServicePageData = {
  slug: 'mini-valet',
  name: 'Maintenance Valet Congleton',
  seo: {
    title: 'Maintenance Valet Congleton | Mini Valet CW12 | SRV Detailing',
    description:
      'Quick maintenance valet in Congleton — 60 to 90 minutes of professional exterior and interior cleaning at your CW12 door. Ideal between full valets. Hand wash, vacuum, and basic interior clean.',
    keywords: [
      'mini valet congleton',
      'maintenance valet congleton',
      'quick car valet congleton cw12',
      'car valet congleton',
      'mobile mini valet congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/mini-valet',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Maintenance Valet', href: '/congleton/car-valeting/mini-valet' },
  ],
  heroTitle: 'Maintenance Valet Congleton — Quick, Professional Clean at Your CW12 Door',
  heroDescription:
    'Professional maintenance valet in 60–90 minutes at your Congleton driveway. Safe hand wash, wheel clean, vacuum, and basic interior wipe — the ideal way to keep your vehicle in excellent condition between full valets. Covering all CW12 postcodes.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Maintenance Valet?',
      bodyParagraphs: [
        "A maintenance valet is a targeted, time-efficient service that keeps your vehicle looking excellent between full valets — handling the exterior cleaning and light interior refresh without the full scope of a comprehensive valet. It is the ideal service for vehicles on regular schedules: a full valet every 2–3 months, with a maintenance valet every 4–6 weeks to manage the accumulated A34 road salt, agricultural lane contamination, and week-to-week interior use between the larger services.",
        "For Congleton customers using their vehicles on CW12 rural routes in winter, a monthly maintenance valet is particularly valuable — removing the compacting salt and grit before it bonds permanently to lower panels and wheel arches. The service is efficient enough to complete on a weekday morning while you work, or on a Saturday morning before a leisure trip.",
      ],
    },
    {
      type: 'list',
      heading: "What's Included in a Maintenance Valet",
      items: [
        'Snow foam pre-wash — pH-balanced foam safely encapsulates road salt and contamination before contact',
        'Two-bucket hand wash — all exterior panels, roof to sills, with grit-guard rinse bucket',
        'Wheel and tyre clean — iron fallout remover on alloy faces, wheel brushes, tyre dress',
        'Microfibre drying — all panels and door jambs dried thoroughly',
        'Quick detailer protection — spray sealant applied panel by panel for gloss and interim protection',
        'Interior vacuum — front and rear seats, footwells, and boot',
        'Dashboard and door card wipe — hard surfaces cleaned and lightly dressed',
        'Interior glass clean — windscreen and mirrors streak-free from inside',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a maintenance valet cost in Congleton?',
      answer:
        'Maintenance valets from £45 for a standard hatchback or saloon. Larger vehicles from £55. Contact us for an exact quote at booking.',
    },
    {
      question: 'How long does a maintenance valet take?',
      answer:
        '60 to 90 minutes for a standard vehicle. Larger SUVs or 4x4s up to 90 minutes. Significantly faster than a full valet while still maintaining a high presentation standard.',
    },
    {
      question: 'How often should I book a maintenance valet in Congleton?',
      answer:
        'Every 4 to 6 weeks for daily drivers. Monthly is ideal for rural vehicles used on CW12 agricultural and country lanes, where salt and grit accumulation needs regular removal to prevent lower panel and alloy corrosion.',
    },
    {
      question: 'Is a mini valet sufficient for Congleton vehicles with light rural contamination?',
      answer: 'A mini valet is ideal for vehicles that are regularly maintained but need a professional refresh between full valets. For Congleton vehicles with light dust, pollen, or minor mud splash from CW12 rural routes, a mini valet covering exterior hand wash, interior vacuum, and dashboard wipe is sufficient. However, vehicles that have been used on farm tracks or driven through areas with silage or fertiliser spray require a full valet — or at minimum an exterior valet with iron decontamination — to address chemical contamination before it etches the paintwork. We assess the vehicle on arrival and recommend the appropriate service level.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Comprehensive interior and exterior' },
    { label: 'Car Wash Congleton', href: '/congleton/car-wash', description: 'Quick exterior wash service' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Mini valet pricing guide' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Mini Valet Macclesfield', href: '/macclesfield/car-valeting/mini-valet', description: 'Also serving SK10/SK11' },
    { label: 'Mobile Valeting Congleton', href: '/congleton/car-valeting/mobile-valeting', description: 'We come to your location' },
  ],
  schemaPrice: '45',
};
