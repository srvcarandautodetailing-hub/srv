import { Wind } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const odourRemovalWarrington: ServicePageData = {
  slug: 'odour-removal',
  name: 'Odour Removal Warrington',
  seo: {
    title: 'Odour Removal Warrington | Car Smell Removal WA1–WA5 | SRV Detailing',
    description:
      'Professional car odour removal in Warrington. Deep cleaning and ozone treatment permanently eliminates dog, smoke, damp, and food smells from vehicle interiors. WA1–WA5 mobile service.',
    keywords: [
      'odour removal warrington',
      'car smell removal warrington',
      'ozone treatment warrington wa1 wa2 wa4',
      'smoke smell removal car warrington',
      'pet smell removal car warrington',
      'car odour removal cheshire warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/odour-removal',
  },
  icon: Wind,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Odour Removal', href: '/warrington/car-valeting/odour-removal' },
  ],
  heroTitle: 'Odour Removal Warrington — Permanent Smell Elimination for WA1–WA5 Vehicles',
  heroDescription:
    'Permanently eliminate persistent odours from your Warrington vehicle. Our deep cleaning and ozone treatment process neutralises dog, smoke, damp, food, and chemical smells at their molecular source — not masking them, but destroying them.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Air Fresheners Do Not Solve Car Odour Problems',
      bodyParagraphs: [
        "An air freshener masks odour — it adds a competing smell rather than addressing the source. For persistent odours in vehicle interiors, the source must be eliminated. Smoke residue permeates headlinings, seat foam, carpet backing, and plastic trim. Pet dander and bacteria embedded in fabric seating produce odour continuously. Damp brought in from Risley Moss, Sankey Valley, and Lymm Dam dog walks — particularly after wet weather in the Mersey Valley — creates mildew in under-seat carpets that worsens with time and the humidity particular to Warrington's riverside location.",
        "Our odour removal process begins with deep cleaning — physical removal of odour sources through steam cleaning, hot water extraction, and treatment of all affected surfaces. For persistent odours, we follow deep cleaning with ozone treatment: an ozone generator introduced to the closed vehicle cabin produces ozone (O3) that chemically oxidises odour molecules in the air and on all surfaces it contacts. Ozone treatment eliminates odour at the molecular level — it is the same process used in property fire and flood remediation and is the only reliably effective treatment for deep-set pet and smoke smells.",
      ],
    },
    {
      type: 'process',
      heading: 'Our Odour Removal Process',
      items: [
        'Source identification — inspect the interior to identify odour sources and severity',
        'Deep interior clean — steam cleaning of all hard surfaces, hot water extraction of carpets and fabric seats, thorough vacuum',
        'Targeted treatment — specific cleaning of known odour sources: tobacco deposits on headlining and plastics, pet dander in seat fabric, mildew in carpet backing',
        'Ozone generation — professional ozone generator introduced to the closed cabin; treatment duration depends on severity',
        'Ventilation — cabin thoroughly aired after ozone treatment',
        'Final inspection — cabin assessed and any residual odour sources addressed',
        'Deodoriser — fresh, neutral cabin deodoriser applied as a finishing measure',
      ],
    },
    {
      type: 'list',
      heading: 'Odours We Treat in Warrington',
      items: [
        'Dog and pet odours — from regular walks at Risley Moss Nature Reserve, Sankey Valley Country Park, Lymm Dam, and Statham village footpaths',
        'Tobacco and cigarette smoke — surface deposits on all interior materials including headlining, plastics, and seat foam',
        'Damp and mildew — from wet dogs, wet outdoor clothing, or Mersey Valley humidity entering the cabin during autumn and winter',
        'Food and drink spills — particularly in family SUVs used for school runs and sports activities',
        'Commuter food odours — takeaway and fast food smells from regular eating in the car during morning and evening rush hours on the M62 corridor',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is ozone treatment safe for my car interior?',
      answer:
        "Yes, when applied correctly by a professional. Ozone at appropriate concentrations does not damage upholstery, leather, plastics, or electronics when applied for the correct duration. The vehicle must be unoccupied during treatment, and properly ventilated afterwards. We use calibrated equipment and proven treatment durations matched to odour severity.",
    },
    {
      question: 'How long does odour removal take in Warrington?',
      answer:
        "Deep cleaning typically takes 1–2 hours. Ozone treatment takes a further 1–3 hours depending on severity. The total service is usually 2–4 hours. For extremely heavy contamination, a repeat treatment may be recommended.",
    },
    {
      question: 'How much does car odour removal cost in Warrington?',
      answer:
        "Odour removal starts from £80 for a basic treatment. Combined deep clean and ozone treatment from £120 depending on vehicle size and odour severity. We provide an honest assessment when booking.",
    },
    {
      question: 'Will the odour return after treatment?',
      answer:
        "Ozone treatment permanently eliminates the odour molecules it contacts. If there are remaining physical odour sources — such as ongoing pet access without protective seat covers — some odour may return. We aim to remove all physical sources during the deep clean stage so that the ozone treatment achieves a permanent result.",
    },
  ],
  relatedLinks: [
    { label: 'Pet Hair Removal Warrington', href: '/warrington/car-valeting/pet-hair-removal', description: 'Remove embedded pet hair before odour treatment' },
    { label: 'Interior Valeting Warrington', href: '/warrington/car-valeting/interior-valeting', description: 'Full interior professional clean' },
    { label: 'Upholstery Cleaning Warrington', href: '/warrington/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabric seats' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting services across WA1–WA5' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '80',
};
