import { CircleDashed } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const swirlMarkRemovalMacclesfield: ServicePageData = {
  slug: 'swirl-mark-removal',
  name: 'Swirl Mark Removal Macclesfield',
  icon: CircleDashed,
  seo: {
    title: 'Swirl Mark Removal Macclesfield | Machine Polish SK10 SK11 | SRV Detailing',
    description:
      'Professional swirl mark removal in Macclesfield. Machine polishing to eliminate swirl marks and micro-scratches across SK10 and SK11. Mobile service at your driveway.',
    keywords: [
      'swirl mark removal macclesfield',
      'swirl marks macclesfield',
      'machine polishing macclesfield',
      'car polish macclesfield',
      'swirl mark removal sk10',
      'paint polishing macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/swirl-mark-removal',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'Swirl Mark Removal', href: '/macclesfield/car-detailing/swirl-mark-removal' },
  ],
  heroTitle: 'Swirl Mark Removal in Macclesfield',
  heroDescription:
    'Machine polishing to eliminate swirl marks and micro-scratches from Macclesfield vehicles. Delivered at your home or workplace across SK10 and SK11.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Swirl Marks on Macclesfield Cars — Causes and Removal',
      body: 'Swirl marks are caused by incorrect washing — particularly automated car washes and dry wiping. On dark-coloured vehicles, they are clearly visible in direct sunlight as circular scratches across the paint surface. Our machine polishing service uses a rotary or dual-action polisher with diminishing abrasive compounds to safely reduce the clear coat uniformly, removing the peaks that cause light scatter and eliminating the swirl mark appearance entirely.',
    },
    {
      type: 'list',
      heading: 'What Is Included in Swirl Mark Removal — Macclesfield',
      items: [
        'Pre-wash and iron decontamination',
        'Paint depth gauge readings across all panels',
        'Machine polish with appropriate compound and pad combination',
        'Panel wipe to remove polishing oils',
        'Protective sealant or wax application',
        'Final inspection under LED lighting',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does swirl mark removal cost in Macclesfield?',
      answer: 'Swirl mark removal starts from £200 for a standard car. This includes a single-stage machine polish and protective sealant.',
    },
    {
      question: 'Will swirl marks come back after removal?',
      answer: 'If the vehicle is washed using safe methods going forward, swirl marks will not return at the same rate. We always advise on correct wash technique and can apply a ceramic coating for maximum prevention.',
    },
    {
      question: 'How long does swirl mark removal take on a Macclesfield driveway?',
      answer: 'A single-stage swirl removal typically takes 3–4 hours at your property. We arrive with a fully self-contained setup — no external water or power needed. Most Macclesfield driveways provide sufficient space; we ask for approximately 1.5m clearance on each side of the vehicle. We work in covered or semi-covered conditions where possible to avoid direct sunlight affecting compound performance. Evening and weekend appointments are available to fit around work from home or commuter schedules across SK10 and SK11.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Macclesfield', href: '/macclesfield/car-detailing/paint-correction', description: 'Two-stage correction for deeper defects' },
    { label: 'Ceramic Coating Macclesfield', href: '/macclesfield/car-detailing/ceramic-coating', description: 'Protect after swirl removal' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Swirl removal from £150' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Swirl Mark Removal Congleton', href: '/congleton/car-detailing/swirl-mark-removal', description: 'Also serving CW12' },
    { label: 'Macclesfield Reviews', href: '/macclesfield/reviews', description: 'Customer results' },
  ],
  schemaPrice: '200',
};
