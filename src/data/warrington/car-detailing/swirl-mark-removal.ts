import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const swirlMarkRemovalWarrington: ServicePageData = {
  slug: 'swirl-mark-removal',
  name: 'Swirl Mark Removal Warrington',
  seo: {
    title: 'Swirl Mark Removal Warrington | Paint Swirl Fix WA1–WA5 | SRV Detailing',
    description:
      'Professional swirl mark removal in Warrington. Machine polishing eliminates circular wash scratches from your clear coat. WA1–WA5 mobile service for all vehicles. From £200.',
    keywords: [
      'swirl mark removal warrington',
      'swirl marks warrington',
      'paint swirls warrington wa1 wa2 wa4',
      'wash swirl removal warrington',
      'swirl mark removal cheshire warrington',
      'car swirl removal warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/swirl-mark-removal',
  },
  icon: Sparkles,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Swirl Mark Removal', href: '/warrington/car-detailing/swirl-mark-removal' },
  ],
  heroTitle: 'Swirl Mark Removal Warrington — Machine Polishing for Wash-Damaged Paint',
  heroDescription:
    'Remove the circular swirl marks and fine scratches left by automated car washes, incorrect hand washing, and abrasive cloths. Professional machine polishing in Warrington restores deep, clear reflectivity to your WA1–WA5 vehicle.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Are Swirl Marks and Where Do They Come From in Warrington?',
      bodyParagraphs: [
        "Swirl marks are fine circular scratches in the clear coat layer of a vehicle's paintwork. They scatter light in all directions rather than reflecting it cleanly, creating that characteristic dull, hazy, or scratch-web appearance that is most visible in direct sunlight or under artificial light. The circular pattern is caused by washing motions — rotating brushes in automated car washes, circular hand washing motions with contaminated cloths or sponges, and dry-wiping operations such as brushing dust off the paint.",
        "Warrington has a significant number of roadside car washes and automated wash facilities on the A49, A57, and in the town centre retail parks. A high volume of HGV and commercial traffic through the Warrington road network means vehicles accumulate grit and road film quickly, driving frequent washing. When that washing is done through automated brushes or with the incorrect technique, the combination of grit contamination and abrasive contact produces the characteristic swirl pattern across every panel. Machine polishing corrects this permanently — restoring the reflective clarity the clear coat was designed to display.",
      ],
    },
    {
      type: 'list',
      heading: 'Sources of Swirl Marks on Warrington Vehicles',
      items: [
        'Roadside automated car washes on A49, A57, and retail park sites — rotating brushes trap grit and drag it across the clear coat in spiral patterns',
        'Hand washing with sponges or chamois leathers — both are contamination traps that deposit grit across the surface',
        'Dry-wiping dust — wiping a dusty car with a dry cloth or duster creates extensive fine scratches across the clear coat',
        'Incorrect detailing by previous owners — using the wrong compounds, wrong pads, or incorrect polisher settings creates buffer trails or hologramming',
        'Dealer pre-delivery wash — most vehicle handover valets use power washes and brushes that leave swirl marks before the car reaches the customer',
      ],
    },
    {
      type: 'process',
      heading: 'Our Swirl Mark Removal Process',
      items: [
        'Paint depth measurement — all panels read before polishing to establish safe working margins',
        'Full decontamination — snow foam, two-bucket hand wash, iron fallout treatment, and clay bar',
        'Panel inspection under raking LED lights — swirl severity mapped across all panels',
        'Compound and pad selection — matched to swirl severity and paint hardness for each panel',
        'Single or two-stage machine polishing — defects removed without excessive material removal from the clear coat',
        'IPA panel wipe — reveals true corrected surface free of oils',
        'Protection application — ceramic coating, sealant, or wax to seal the corrected surface',
      ],
    },
    {
      type: 'list',
      heading: 'Preventing Swirl Marks After Removal',
      items: [
        'Never use automated car washes — the single most effective prevention measure',
        'Use the two-bucket hand wash method with fresh, clean microfibre mitts every wash',
        'Never dry-wipe or dust the paint — use a quick detailer spray and a clean microfibre if dry wipe is needed',
        'Apply ceramic coating or paint sealant after correction — coated surfaces are more scratch-resistant and clean more easily',
        'Use a professional mobile hand car wash service for regular washes — our service is available across WA1–WA5',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does swirl mark removal take in Warrington?',
      answer:
        "Swirl mark removal typically takes 3–6 hours for a standard vehicle depending on severity. A full machine polish across all panels, combined with decontamination preparation and finishing protection, is a 4–8 hour service. We provide time estimates when booking.",
    },
    {
      question: 'Do I need swirl mark removal before ceramic coating?',
      answer:
        "Yes — always. A ceramic coating bonds to and locks in the surface beneath it. Applying coating over swirl marks permanently seals the scratches under the hardened layer. All our ceramic coating packages include at minimum a single-stage polish to ensure swirl-free paint before coating.",
    },
    {
      question: 'How much does swirl mark removal cost in Warrington?',
      answer:
        "Swirl mark removal as a single-stage polish starts from £200. Combined with decontamination and protection it is typically £250–£350. Multi-stage correction for heavily swirled vehicles is from £400. We provide exact quotes based on your vehicle size and swirl severity.",
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Warrington', href: '/warrington/car-detailing/paint-correction', description: 'Multi-stage correction for deeper defects' },
    { label: 'Ceramic Coating Warrington', href: '/warrington/car-detailing/ceramic-coating', description: 'Protect corrected paint with SiO2 coating' },
    { label: 'Exterior Detailing Warrington', href: '/warrington/car-detailing/exterior-detailing', description: 'Full exterior decontamination and protection' },
    { label: 'Car Wash Warrington', href: '/warrington/car-wash', description: 'Safe hand washing to prevent future swirls' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services across WA1–WA5' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '200',
};
