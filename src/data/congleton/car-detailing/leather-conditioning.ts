import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const leatherConditioningCongleton: ServicePageData = {
  slug: 'leather-conditioning',
  name: 'Leather Conditioning Congleton',
  seo: {
    title: 'Leather Conditioning Congleton | Car Leather Care CW12 | SRV Detailing',
    description:
      'Professional leather conditioning in Congleton. pH-balanced cleaning, nourishing conditioner, and UV-protective protectant for prestige and classic car leather interiors. Mobile service across CW12.',
    keywords: [
      'leather conditioning congleton',
      'car leather care congleton',
      'leather cleaning congleton cw12',
      'leather treatment congleton',
      'car leather restoration congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-detailing/leather-conditioning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Detailing', href: '/congleton/car-detailing' },
    { label: 'Leather Conditioning', href: '/congleton/car-detailing/leather-conditioning' },
  ],
  heroTitle: 'Leather Conditioning Congleton — Expert Leather Care at Your CW12 Driveway',
  heroDescription:
    'Professional leather conditioning for prestige and classic vehicles in Congleton. pH-balanced cleaning removes ingrained contamination; nourishing conditioner restores suppleness; UV-protective protectant prevents future fading and cracking. Mobile service across all CW12 postcodes.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Professional Leather Conditioning for CW12 Vehicles',
      bodyParagraphs: [
        "Leather seating in prestige and classic vehicles requires regular specialist care that the standard leather wipe included in a valet does not provide. The combination of Cheshire East's climate — wetter than the UK average, with significant seasonal temperature variation — and frequent rural vehicle use accelerates leather degradation when maintenance is inconsistent. Leather that dries out loses suppleness, begins to crack, and fades — a process that is reversible in its early stages but not when the leather has progressed to cracking through the top coat.",
        "Our leather conditioning service uses pH-balanced professional cleaners that remove ingrained body oil, dust, and surface contamination without stripping the leather's natural oils or damaging its protective finish. We follow with a high-quality leather conditioner that replenishes lost oils and restores the soft, pliable character of properly maintained leather. A final UV-protective leather protectant is applied — particularly important for classic vehicles with older leather formulations that are more UV-sensitive than modern automotive leather.",
      ],
    },
    {
      type: 'process',
      heading: 'Leather Conditioning Process',
      items: [
        'Leather type assessment — leather grade and condition mapped; products selected for specific leather type (modern automotive, classic natural, Alcantara)',
        'pH-balanced cleaning — professional leather cleaner applied with soft brushes to all seating surfaces, bolsters, side panels, and steering wheel rim',
        'Contamination extraction — stubborn ingrained body oil and surface dirt removed with low-moisture microfibre technique',
        'Conditioner application — high-quality leather conditioner massaged into all surfaces and left to absorb fully',
        'Buff and inspect — excess conditioner removed; surfaces inspected for uniform absorption',
        'UV protectant application — UV-protective leather protectant applied to all surfaces to prevent future fading',
        'Final inspection — all leather surfaces checked for colour uniformity and sheen consistency',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does leather conditioning cost in Congleton?',
      answer:
        'Leather conditioning from £80 as a standalone service. Combined with interior detailing or full valet — included at a reduced add-on rate. Larger vehicles and multi-zone leather (front + rear + doors) quoted at booking.',
    },
    {
      question: 'How often should I condition leather in my vehicle?',
      answer:
        'Every 3–4 months for daily-use vehicles. Classic cars used seasonally benefit from conditioning at the start and end of each season to prevent winter drying and summer UV fading.',
    },
    {
      question: 'Can you restore leather that has already started to crack?',
      answer:
        "Light cracking and early surface dry-out can be significantly improved with deep conditioning — multiple applications over time restore significant suppleness. Advanced cracking that has penetrated through the top coat requires leather repair rather than conditioning; we will advise honestly on what conditioning can and cannot achieve on your specific leather.",
    },
    {
      question: 'How does the Congleton rural climate affect leather seat maintenance?',
      answer: 'Congleton\'s climate is wetter and more variable than urban Greater Manchester. The CW12 area sits on the edge of the Pennine rain shadow, with higher humidity and regular temperature swings between cold mornings and warm afternoons. These conditions accelerate leather drying and cracking if the material is not conditioned regularly. We recommend conditioning every 3 months for vehicles garaged outdoors in the Congleton area — and every 2 months for leather exposed to direct sunlight via large glass roofs, which is common in higher-specification vehicles driven by Congleton commuters on the A34/A536. We use pH-balanced products that work across all leather grades including semi-aniline, full-grain, and bi-cast.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Congleton', href: '/congleton/car-detailing/interior-detailing', description: 'Full interior restoration' },
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Upholstery Cleaning Congleton', href: '/congleton/car-valeting/upholstery-cleaning', description: 'Fabric seat alternative' },
    { label: 'Car Detailing Congleton', href: '/congleton/car-detailing', description: 'All detailing services CW12' },
    { label: 'Car Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Leather care pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Leather Conditioning Macclesfield', href: '/macclesfield/car-detailing/leather-conditioning', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '80',
};
