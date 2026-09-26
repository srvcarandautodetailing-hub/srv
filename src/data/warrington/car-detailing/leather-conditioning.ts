import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const leatherConditioningWarrington: ServicePageData = {
  slug: 'leather-conditioning',
  name: 'Leather Conditioning Warrington',
  seo: {
    title: 'Leather Conditioning Warrington | Car Leather Care WA1–WA5 | SRV Detailing',
    description:
      'Professional car leather conditioning in Warrington. pH-balanced cleaning, nourishing conditioning and UV protection for company cars, family SUVs, and prestige vehicles across WA1–WA5.',
    keywords: [
      'leather conditioning warrington',
      'car leather care warrington',
      'leather seat cleaning warrington wa1 wa4',
      'leather conditioning cheshire warrington',
      'company car leather conditioning warrington',
      'range rover leather care warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/leather-conditioning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Leather Conditioning', href: '/warrington/car-detailing/leather-conditioning' },
  ],
  heroTitle: 'Leather Conditioning Warrington — Expert Care for WA1–WA5 Vehicle Interiors',
  heroDescription:
    'Professional leather care in Warrington. pH-balanced cleaning removes ingrained soiling, premium conditioner restores suppleness and natural oils, and UV-protective finisher guards against heat-induced cracking — delivered to your Warrington home or workplace.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Leather Conditioning Is Essential for Warrington Vehicles',
      bodyParagraphs: [
        "Warrington is home to a high concentration of business professionals — workers at Birchwood Park, Omega South, and Gemini retail park, as well as commuters using the M6/M62 corridor — many of whom drive company cars or personal BMW, Mercedes, Audi, and Volvo saloons and SUVs with leather interiors as standard. Leather is a natural material that requires regular cleaning and conditioning to maintain its suppleness, colour depth, and tactile quality. Without care, it dries out, cracks along seam lines and bolster wear points, and develops a sticky or stiff surface texture.",
        "Warrington's climate creates specific challenges for vehicle leather. Heated seats in winter — used extensively through the long cold season on early morning commutes on the M62 — draw moisture from leather rapidly, causing accelerated drying and micro-cracking along seat creases. The combination of heated seat use, winter cabin heating, and the damp Mersey Valley atmosphere creates a cycle of rapid moisture loss and slow replenishment that ages leather interiors prematurely in vehicles without regular conditioning. Family SUVs used for school runs and weekend activities at Lymm Dam and Sankey Valley accumulate soiling from outdoor use that embeds in leather grain if not addressed.",
      ],
    },
    {
      type: 'process',
      heading: 'Our Leather Conditioning Process',
      items: [
        'Initial assessment — evaluate leather type (perforated, plain, Nappa, Valcona, Alcantara), colour, and current condition',
        'pH-balanced leather cleaner application — applied with appropriate brushes and microfibre cloths, removing ingrained soiling from grain channels and perforations',
        'Stubborn stain treatment — specific treatments for dye transfer (denim marks on light leather), food staining, and aged soiling',
        'Conditioner application — nourishing leather conditioner worked into all leather surfaces, restoring natural oils and suppleness',
        'Absorption period — conditioner allowed to penetrate the leather grain before buffing',
        'UV protectant finisher — applied to all exposed leather surfaces to block UV degradation and provide a light, natural-appearance sheen',
        'Final inspection and assessment — customer briefed on condition and recommended care frequency',
      ],
    },
    {
      type: 'list',
      heading: 'Leather Types We Treat in Warrington',
      items: [
        'BMW Merino leather and Vernasca leather — common in 3 Series, 5 Series, X5, and M Sport models throughout Warrington and Stockton Heath',
        'Mercedes-AMG Nappa leather, Artico semi-leather — popular in business spec C-Class and E-Class vehicles used by Warrington professionals',
        'Audi Valcona leather and Fine Nappa — RS and S-line variants driven regularly on the M62 corridor',
        'Volvo Nappa and Sensus leather — popular choice among Warrington family buyers for safety-focused SUVs',
        'Land Rover and Range Rover Oxford Leather — used for countryside activities at Lymm Dam and Sankey Valley',
        'Any luxury or premium leather interior from all UK-sold marques',
      ],
    },
    {
      type: 'list',
      heading: 'How Often Should Leather Be Conditioned?',
      items: [
        'Daily-use company cars and commuter vehicles: every 3–4 months — frequent heated seat use and commuter wear requires regular replenishment of natural oils',
        'Family SUVs used for school runs and dog walks: every 3 months — outdoor activities bring soiling that embeds in grain channels',
        'Garaged or low-mileage vehicles: every 6 months minimum — even low-use leather dries without conditioning',
        'Following any interior detailing or hot water extraction: immediate conditioning — cleaning processes remove some natural oils from leather',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is leather conditioning included in a full valet?',
      answer:
        "A full valet includes leather wipe-down and basic conditioning as standard. Our dedicated leather conditioning service is a more thorough process using specialist pH-balanced cleaners, premium conditioners, and UV protectant finishers — taking more time and achieving a deeper result. It can be booked as a standalone service or added to any valet.",
    },
    {
      question: 'Can you restore cracked leather in a BMW or Mercedes?',
      answer:
        "Surface drying and early cracking can often be improved significantly with our cleaning and conditioning treatment. Deep cracking, colour loss, or structural breakdown in heavily aged leather requires specialist leather repair work beyond detailing. We assess on arrival and advise honestly on expected results.",
    },
    {
      question: 'How much does leather conditioning cost in Warrington?',
      answer:
        "Standalone leather conditioning starts from £80 for a standard two-seat vehicle and from £100 for a full four/five-seat interior. Larger prestige vehicles with complex leather specifications from £120. We provide exact quotes on request.",
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Warrington', href: '/warrington/car-detailing/interior-detailing', description: 'Complete interior restoration including leather' },
    { label: 'Upholstery Cleaning Warrington', href: '/warrington/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabric seats' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services across WA1–WA5' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '80',
};
