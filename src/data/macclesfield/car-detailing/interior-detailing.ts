import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorDetailingMacclesfield: ServicePageData = {
  slug: 'interior-detailing',
  name: 'Interior Detailing Macclesfield',
  icon: Armchair,
  seo: {
    title: 'Interior Car Detailing Macclesfield | Deep Clean SK10 SK11 | SRV Detailing',
    description:
      'Professional interior car detailing in Macclesfield. Deep clean of seats, carpets, dashboard, and trim across SK10 and SK11. Mobile service — we come to your driveway.',
    keywords: [
      'interior car detailing macclesfield',
      'interior car clean macclesfield',
      'car interior deep clean macclesfield',
      'interior valet macclesfield',
      'seat cleaning macclesfield',
      'interior detailing sk10',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/interior-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Interior Detailing', href: '/macclesfield/car-detailing/interior-detailing' },
  ],
  heroTitle: 'Interior Car Detailing in Macclesfield',
  heroDescription:
    'Professional deep interior clean across Macclesfield and SK10/SK11. Seats, carpets, dashboard, door cards, headliner — restored to showroom condition at your home or workplace.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Interior Detailing for Macclesfield Commuters and Families',
      body: 'Macclesfield families and commuters put their car interiors through heavy use — muddy boots from Peak District walks, wet coats in the footwells, crumbs and drink spills from busy routines. Our interior detailing service uses hot water extraction, specialist upholstery cleaners, and steam to lift embedded soiling that a standard valet cannot address. Leather and hard plastics receive condition-specific treatment to restore both appearance and longevity.',
    },
    {
      type: 'list',
      heading: "What's Included in Interior Detailing — Macclesfield",
      items: [
        'Full vacuum including seats, carpets, boot, and gaps',
        'Hot water extraction for fabric seats and carpets',
        'Leather cleaning and conditioning (leather-trim vehicles)',
        'Dashboard, door card, and plastic trim clean and protect',
        'Headliner spot clean',
        'Interior glass clean (smear-free)',
        'Air vent brushing and interior fragrance',
        'Rubber seal wipe-down',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does interior detailing cost in Macclesfield?',
      answer:
        'Interior detailing for a standard car starts from £150. This includes hot water extraction of fabric surfaces. Vehicles with excessive pet hair or heavy soiling may be quoted slightly higher.',
    },
    {
      question: 'How long does interior detailing take in Macclesfield?',
      answer:
        'Interior detailing typically takes 3–5 hours for a standard vehicle. Heavily soiled vehicles or large SUVs may take longer.',
    },
    {
      question: 'Is interior detailing available at Tytherington Business Park in Macclesfield?',
      answer: 'Yes — Tytherington Business Park is one of our most requested Macclesfield locations for interior detailing. We work alongside your vehicle in the car park; we only need a single adjacent bay and access to the vehicle. Most interior details take 3–5 hours depending on condition. We carry our own wet-dry vacuum, steam cleaner, and extraction equipment. We regularly attend Tytherington during business hours so your vehicle is ready when you finish work. Same-week appointments are typically available across SK10 and SK11.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Upholstery Cleaning Macclesfield', href: '/macclesfield/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabrics' },
    { label: 'Leather Conditioning Macclesfield', href: '/macclesfield/car-detailing/leather-conditioning', description: 'Specialist leather care' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Interior detail pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Interior Detailing Congleton', href: '/congleton/car-detailing/interior-detailing', description: 'Also serving CW12' },
  ],
  schemaPrice: '150',
};
