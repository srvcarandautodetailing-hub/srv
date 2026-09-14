import { Scissors } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const petHairRemovalCongleton: ServicePageData = {
  slug: 'pet-hair-removal',
  name: 'Pet Hair Removal Congleton',
  seo: {
    title: 'Pet Hair Removal Congleton | Dog Hair Car Removal CW12 | SRV Detailing',
    description:
      'Professional pet and dog hair removal in Congleton. Specialist extraction of embedded pet hair from seats, carpets, and crevices. Mobile service across CW12.',
    keywords: [
      'pet hair removal congleton',
      'dog hair removal car congleton',
      'pet hair car congleton cw12',
      'dog hair extraction congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/pet-hair-removal',
  },
  icon: Scissors,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Pet Hair Removal', href: '/congleton/car-valeting/pet-hair-removal' },
  ],
  heroTitle: 'Pet Hair Removal Congleton — Specialist Dog Hair Extraction at Your CW12 Door',
  heroDescription:
    "Professional pet hair removal for Congleton vehicles. Specialist extraction tools and techniques remove embedded dog, cat, and pet hair from seats, carpets, boot areas, and crevices that standard vacuuming cannot shift. Mobile service across all CW12 postcodes — ideal for Congleton's active rural and dog-owning community.",
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Pet Hair Removal for CW12 Vehicles',
      bodyParagraphs: [
        "Congleton's rural character and active outdoor community means that dogs in cars are more the rule than the exception across CW12. Labradors, Spaniels, and working breeds used on rural walks and farm runs deposit hair that embeds into fabric weave and carpet pile in a way that standard vacuum tools cannot effectively extract. The combination of natural hair oil and electrostatic charge causes pet hair to mat into the fibre structure rather than sitting on the surface.",
        "Our pet hair removal service uses specialist rubber extraction tools, professional-grade pet hair attachments, and thorough systematic technique to remove embedded hair from all surfaces — seat fabric, carpet, boot liners, headlining, and door card seams. We follow with a full vacuum to capture all extracted material, and a deodorising treatment to address the biological odour that accumulated pet use generates in fabric-lined interiors.",
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does pet hair removal cost in Congleton?',
      answer:
        'Pet hair removal from £60 for a standard vehicle. Heavy contamination across all surfaces — multiple dogs, extended use — from £90. Confirmed at booking when we understand the extent of the work required.',
    },
    {
      question: 'Can you remove hair from a Defender or working 4x4 boot area?',
      answer:
        'Yes. Defender and working 4x4 boot areas with rubber matting and fabric lining are a common booking from CW12. The combination of working dog hair and rural mud in the boot area requires our specialist extraction tools and extended vacuum technique.',
    },
    {
      question: 'Is pet hair removal available for working dogs and rural vehicles in the Congleton area?',
      answer: 'Yes — working dog and rural vehicle pet hair removal is a regular part of our Congleton work. Working dogs including spaniels, retrievers, and Border Collies shed significantly more than companion breeds, and their hair is often embedded alongside mud and organic debris from Cheshire field work. We use a combination of rubber-blade tools, electrostatic gloves, and high-powered vacuum extraction to remove embedded hair from boot liners, rear seat fabrics, and cargo nets. For vehicles with metal-frame dog guards and wire boot cages, we clean around and behind these fixtures where hair accumulates. We cover all CW12 postcodes and rural areas between Sandbach, Alsager, Biddulph, and Holmes Chapel.',
    },
  ],
  relatedLinks: [
    { label: 'Odour Removal Congleton', href: '/congleton/car-valeting/odour-removal', description: 'Eliminate pet odours at source' },
    { label: 'Interior Valeting Congleton', href: '/congleton/car-valeting/interior-valeting', description: 'Full interior clean' },
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Upholstery Cleaning Congleton', href: '/congleton/car-valeting/upholstery-cleaning', description: 'Deep fabric extraction' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Pet Hair Removal Macclesfield', href: '/macclesfield/car-valeting/pet-hair-removal', description: 'Also serving SK10/SK11' },
  ],
  schemaPrice: '60',
};
