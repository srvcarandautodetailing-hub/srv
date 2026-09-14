import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingWarrington: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Warrington',
  seo: {
    title: 'Exterior Valeting Warrington | Exterior Car Valet WA1–WA5 | SRV Detailing',
    description:
      'Professional exterior car valeting in Warrington. Hand wash, wheel decontamination, drying, and protective wax or sealant. Safe two-bucket method for all vehicles. WA1–WA5 mobile service.',
    keywords: [
      'exterior valeting warrington',
      'exterior car valet warrington',
      'exterior valet wa1 wa2 wa4 wa5',
      'car exterior clean warrington',
      'exterior valet cheshire warrington',
      'mobile exterior valet warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/exterior-valeting',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Exterior Valeting', href: '/warrington/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Valeting Warrington — Safe Hand Wash for WA1–WA5 Vehicles',
  heroDescription:
    'When your interior is clean but your exterior needs professional attention, our exterior valet delivers a thorough snow foam pre-wash, two-bucket hand wash, iron fallout treatment on wheels, drying, and protective wax or sealant — all at your Warrington door.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'When an Exterior Valet Is the Right Choice in Warrington',
      bodyParagraphs: [
        "An exterior valet is the efficient choice when your vehicle's interior is clean but the exterior has accumulated M62/M6 road film, A49/A57 salt deposits, or HGV spray that needs proper professional treatment. Business park workers at Birchwood Park, Omega South, and Gemini who park outdoors all day accumulate a specific layer of traffic and industrial contamination on their vehicles that a basic wash cannot fully address.",
        "Our exterior valet uses exactly the same safe techniques as our full valet exterior stage — snow foam pre-soak, two-bucket hand wash with clean microfibre mitts, dedicated wheel brushes, iron fallout removal, microfibre hand drying, and protective wax or sealant application. Nothing is skipped, and no automated equipment or brushes are ever used.",
      ],
    },
    {
      type: 'list',
      heading: 'Exterior Valet — What Is Included',
      items: [
        'Snow foam pre-wash — pH-balanced foam applied with lance, encapsulates M62/M6 road salt and brake dust before any contact',
        'Two-bucket hand wash — microfibre mitts, pH-neutral shampoo, grit guard method on every panel',
        'Iron fallout removal on alloy wheels — chemical treatment dissolves embedded ferrous brake and industrial dust particles',
        'Dedicated wheel brush cleaning of alloy faces, spokes, and barrel',
        'Tyre cleaning and dressing',
        'Tar spot treatment on lower panels where needed',
        'Thorough rinse and hand dry with large plush microfibre drying towels',
        'Door jambs and sills wiped down',
        'Wax or sealant protection applied to all painted surfaces',
        'Exterior glass cleaned streak-free',
      ],
    },
    {
      type: 'list',
      heading: 'Why Professional Exterior Valeting Matters in Warrington',
      items: [
        'Road salt from A49, A57, M62, and M6 grit routes actively damages bare paint — regular decontamination is the only prevention',
        'Iron fallout from heavy industrial traffic on the Warrington motorway network and business park areas deposits onto paint and alloys between every wash',
        'Cheshire Plain wind carries agricultural dust and Mersey Valley damp that bonds to paintwork surfaces without protective sealant',
        'Business park workers with outdoor parking at Birchwood, Omega, and Gemini benefit from regular exterior maintenance between full valets',
        'Safe hand washing prevents the swirl marks that automated car washes introduce to all paint finishes',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does an exterior valet take in Warrington?',
      answer:
        '60–90 minutes for a standard vehicle. Larger SUVs and estate cars take 75–90 minutes. We confirm exact timing at booking.',
    },
    {
      question: 'How much does an exterior valet cost in Warrington?',
      answer:
        'Exterior valets start from £50 for a standard vehicle and from £60 for larger SUVs and estate cars. Exact pricing confirmed at booking.',
    },
    {
      question: 'What is the difference between an exterior valet and a car wash?',
      answer:
        "An exterior valet is more thorough than a basic hand car wash. It includes iron fallout removal on wheels, tar spot treatment on lower panels, and a protective wax or sealant application in addition to the standard wash and dry. A car wash is a clean. A valet is a clean plus decontamination plus protection.",
    },
  ],
  relatedLinks: [
    { label: 'Car Wash Warrington', href: '/warrington/car-wash', description: 'Regular exterior hand wash' },
    { label: 'Exterior Detailing Warrington', href: '/warrington/car-detailing/exterior-detailing', description: 'Full decontamination, correction and protection' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting services across WA1–WA5' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '50',
};
