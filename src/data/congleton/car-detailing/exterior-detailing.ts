import { Paintbrush } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorDetailingCongleton: ServicePageData = {
  slug: 'exterior-detailing',
  name: 'Exterior Detailing Congleton',
  seo: {
    title: 'Exterior Detailing Congleton | Full Paint Decontamination & Polish CW12 | SRV Detailing',
    description:
      'Professional exterior car detailing in Congleton. Full decontamination, clay bar, machine polish, and long-term protection. Mobile service across CW12 — removes A34 salt contamination and rural grit from paintwork.',
    keywords: [
      'exterior detailing congleton',
      'exterior car detailing congleton',
      'paint decontamination congleton',
      'exterior car polish congleton cw12',
      'mobile exterior detailing cheshire east congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-detailing/exterior-detailing',
  },
  icon: Paintbrush,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Detailing', href: '/congleton/car-detailing' },
    { label: 'Exterior Detailing', href: '/congleton/car-detailing/exterior-detailing' },
  ],
  heroTitle: 'Exterior Detailing Congleton — Full Decontamination, Correction & Protection',
  heroDescription:
    'Complete exterior car detailing for Congleton vehicles — professional decontamination removing A34 road salt, agricultural contamination, and bonded ferrous particles, followed by machine correction and long-term protective coating. Mobile service across all CW12 postcodes.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Exterior Detailing Delivers for CW12 Vehicles',
      bodyParagraphs: [
        "Exterior detailing is the complete professional treatment of all external painted surfaces — a process that begins with chemical decontamination and ends with protective coating, addressing everything between these stages with machine polishing and careful hand work. It is significantly more thorough than a valeting wash, which cleans but does not correct or chemically decontaminate.",
        "For Congleton vehicles, the decontamination stage is particularly valuable. A34 and A536 road salt embed into wheel arch liners and lower panel seams. Iron fallout from brake dust bonds to alloy wheel faces and lower painted panels. Agricultural run-off from CW12's rural routes leaves clay particles bonded to lower body work that survive normal washing. The clay bar stage alone — following chemical iron decontamination — physically removes all bonded surface contamination to create the smooth substrate that machine correction and coating require.",
      ],
    },
    {
      type: 'process',
      heading: 'Exterior Detailing Process',
      items: [
        'Pre-inspection — paint depth gauge readings across all panels; condition and defect severity mapped',
        'Snow foam pre-wash — pH-balanced foam encapsulates road salt and rural contamination before contact',
        'Iron fallout chemical treatment — active ferrous decontaminator applied to all panels and wheels; visually identifies and dissolves iron particles',
        'Tar spot dissolution — tar deposits from A34 and agricultural routes removed from lower panels',
        'Two-bucket hand wash — microfibre mitts, pH-neutral shampoo, grit-guard rinse bucket',
        'Clay bar decontamination — full paint surface clayed to remove all remaining bonded contamination',
        'Machine correction — single or two-stage polishing as required to remove swirl marks and restore paint clarity',
        'IPA panel wipe — polishing oils removed before coating application',
        'Protective coating — ceramic SiO2 coating, paint sealant, or carnauba wax applied to all painted surfaces',
        'Wheel and tyre finish — alloys dressed, tyres dressed, wheel arches cleaned and treated',
      ],
    },
    {
      type: 'list',
      heading: 'Why Congleton Vehicles Benefit from Exterior Detailing',
      items: [
        'A34 road salt deposits bonded ferrous and sodium contamination on lower panels and wheel arches that car washing alone cannot fully remove',
        'Agricultural lane clay and silage residue bonds to paintwork in a layer that is invisible after normal washing but detectable with clay bar — this bonded layer causes abrasion under every subsequent wash',
        'Iron fallout from brake systems on modern vehicles, particularly SUVs and performance cars, creates highly corrosive ferrous deposits on alloy faces without chemical decontamination treatment',
        'Machine correction before coating ensures protection is applied over a defect-free surface — maximising gloss depth and coating bonding performance',
        'Classic car owners across Congleton benefit from the gentle approach to decontamination and correction that preserves original paint while removing years of bonded contamination',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does exterior detailing cost in Congleton?',
      answer:
        'Exterior detailing (decontamination, single-stage polish, sealant) from £200. With ceramic coating upgrade from £400. Prices vary by vehicle size and paint condition — contact us for an accurate quote.',
    },
    {
      question: 'How long does exterior detailing take?',
      answer:
        'Typically 4–6 hours for a standard vehicle. Larger SUVs or vehicles with significant contamination from agricultural routes take longer. We provide an accurate time estimate at booking.',
    },
    {
      question: 'What is the difference between exterior detailing and a full valet?',
      answer:
        "A full valet includes interior and exterior cleaning to a very thorough standard. Exterior detailing focuses on the exterior and goes further — adding chemical iron decontamination, clay bar treatment, and machine polishing that a valet does not include. If the interior is fine but the exterior has contamination build-up or paint defects, exterior detailing is the appropriate service.",
    },
    {
      question: 'What exterior detailing is recommended for Congleton 4x4 and SUV owners?',
      answer: 'Congleton\'s mix of rural lanes, the A34 trunk road, and Cheshire East B-roads means 4x4 and SUV owners face above-average contamination from mud, agricultural spray, and road salt. We recommend a full decontamination exterior detail including: iron fallout remover for brake dust and industrial particles from the A34 corridor, clay bar for bonded surface contamination including organic matter, machine polish to remove road-induced micro-scratches, and a hydrophobic sealant rated for 6–12 months. For off-road use, ceramic coating over sealant is worth considering for its self-cleaning water-beading properties and resistance to chemical contamination.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Congleton', href: '/congleton/car-detailing/paint-correction', description: 'Correction before exterior protection' },
    { label: 'Ceramic Coating Congleton', href: '/congleton/car-detailing/ceramic-coating', description: 'Long-term exterior protection' },
    { label: 'Car Wash Congleton', href: '/congleton/car-wash', description: 'Maintenance wash between details' },
    { label: 'Car Detailing Congleton', href: '/congleton/car-detailing', description: 'All detailing services CW12' },
    { label: 'Car Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Exterior detail pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Exterior Detailing Macclesfield', href: '/macclesfield/car-detailing/exterior-detailing', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '200',
};
