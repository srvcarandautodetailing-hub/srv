import { PawPrint } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const petHairRemovalMacclesfield: ServicePageData = {
  slug: 'pet-hair-removal',
  name: 'Pet Hair Removal Macclesfield',
  icon: PawPrint,
  seo: {
    title: 'Pet Hair Removal Macclesfield | Dog Hair Car Clean SK10 SK11 | SRV Detailing',
    description:
      'Professional pet hair removal from cars in Macclesfield. Specialist extraction from seats, carpets, and boot liners across SK10 and SK11. Mobile service at your home.',
    keywords: [
      'pet hair removal macclesfield',
      'dog hair removal car macclesfield',
      'pet hair car clean macclesfield',
      'pet hair removal sk10',
      'dog hair valet macclesfield',
      'pet odour removal car macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/pet-hair-removal',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Pet Hair Removal', href: '/macclesfield/car-valeting/pet-hair-removal' },
  ],
  heroTitle: 'Pet Hair Removal in Macclesfield',
  heroDescription:
    'Specialist pet hair extraction from car seats, carpets, and boot liners in Macclesfield. Mobile service across SK10 and SK11 — ideal for dog owners and Peak District walkers.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Pet Hair Removal for Macclesfield Dog Owners',
      body: 'Macclesfield provides immediate access to Peak District walking routes, making it a popular base for dog owners. Dogs transported regularly leave embedded hair in fabric seats, carpets, and boot liners that a standard vacuum cannot extract. We use specialist rubber tools, compressed air, and professional wet-vacs to lift embedded pet hair from all fabric surfaces, followed by an odour treatment to address the residual pet smell.',
    },
    {
      type: 'list',
      heading: 'What Is Included in Pet Hair Removal — Macclesfield',
      items: [
        'Rubber pet hair removal tool applied to all fabric surfaces',
        'Compressed air to lift hair from seat edges and gaps',
        'Professional wet-vac extraction',
        'Hot water extraction of fabric seats and carpets',
        'Odour neutraliser applied',
        'Boot liner cleaned and dressed',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does pet hair removal cost in Macclesfield?',
      answer: 'Pet hair removal starts from £60 for a standard car. Heavily affected vehicles (daily dog transport with full boot liner and rear seats covered) may take longer and be priced accordingly.',
    },
    {
      question: 'Can you remove pet hair from a car boot liner in Macclesfield?',
      answer: 'Yes — boot liners are one of the most common areas we treat. We remove hair from the boot floor, rear seat back, and sides.',
    },
    {
      question: 'Why is pet hair removal particularly in demand in the Macclesfield area?',
      answer: 'Macclesfield and SK10/SK11 provide direct access to the Peak District via the A537 and A523, making it one of the highest dog-walking areas in Cheshire East. Vehicles used for regular Peak District walks accumulate dog hair, mud, and organic material in seat fabrics and carpets faster than typical urban vehicles. Standard vacuuming removes surface hair but misses hair woven into fabric weave. We use a combination of rubber-blade tools, specialist rubber gloves, and high-power extraction to remove embedded hair that standard domestic vacuums cannot reach. Most pet hair treatments take 1–2 hours.',
    },
  ],
  relatedLinks: [
    { label: 'Odour Removal Macclesfield', href: '/macclesfield/car-valeting/odour-removal', description: 'Eliminate pet odours at source' },
    { label: 'Interior Valeting Macclesfield', href: '/macclesfield/car-valeting/interior-valeting', description: 'Full interior clean' },
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Upholstery Cleaning Macclesfield', href: '/macclesfield/car-valeting/upholstery-cleaning', description: 'Deep fabric extraction' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Pet Hair Removal Congleton', href: '/congleton/car-valeting/pet-hair-removal', description: 'Also serving CW12' },
  ],
  schemaPrice: '60',
};
