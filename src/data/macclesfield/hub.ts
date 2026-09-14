import { Car, Sparkles, Droplets } from 'lucide-react';
import type { LocationHubData } from '@/data/types';

export const macclesfieldHub: LocationHubData = {
  slug: 'macclesfield',
  name: 'Macclesfield',
  seo: {
    title: 'Car Detailing & Valeting Macclesfield | SRV Detailing | SK10 SK11',
    description:
      'Professional mobile car detailing and valeting in Macclesfield. SRV Detailing comes to your driveway across SK10 and SK11 — ceramic coating, paint correction, full valet and more. Free quote today.',
    keywords: [
      'car detailing macclesfield',
      'car valeting macclesfield',
      'mobile car detailing macclesfield',
      'ceramic coating macclesfield',
      'paint correction macclesfield',
      'car wash macclesfield',
      'sk10 car detailing',
      'sk11 car valeting',
      'mobile valeting macclesfield',
      'car care macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
  ],
  heroTitle: 'Car Detailing & Valeting in Macclesfield',
  heroDescription:
    'SRV Detailing brings professional mobile car care to your door across Macclesfield, Bollington, Prestbury, and the SK10/SK11 area. No forecourt queues — we come to your driveway, workplace, or estate.',
  introText:
    'Macclesfield sits at the foot of the Peak District — and Pennine roads, the A537 Cat and Fiddle, and salt-heavy commuter routes across the A523 all take their toll on paintwork. SRV Detailing specialises in mobile car detailing and valeting that saves you time: we arrive fully equipped with our own water, power, and professional-grade products. Whether you need a maintenance wash, a pre-sale full valet, a multi-stage paint correction, or a long-term ceramic coating, we deliver the same standard used by prestige dealers — at your property, on your schedule.',
  pillars: [
    {
      name: 'Car Detailing',
      description:
        'Paint correction, ceramic coating, interior detailing, and protection packages for Macclesfield vehicles. We address the specific contamination profile of SK10/SK11 roads.',
      href: '/macclesfield/car-detailing',
      icon: Sparkles,
    },
    {
      name: 'Car Valeting',
      description:
        'Mini valet, full valet, interior deep-clean, and mobile valeting for Macclesfield driveways. Quick turnaround for busy commuters and families.',
      href: '/macclesfield/car-valeting',
      icon: Car,
    },
    {
      name: 'Car Wash',
      description:
        'Hand car wash and exterior wash service for Macclesfield. Safe wash methods — no automatic brushes, no swirl marks.',
      href: '/macclesfield/car-wash',
      icon: Droplets,
    },
  ],
  areas: [
    { name: 'Bollington', slug: 'bollington', href: '/macclesfield/areas/bollington' },
    { name: 'Gawsworth', slug: 'gawsworth', href: '/macclesfield/areas/gawsworth' },
    { name: 'Tytherington', slug: 'tytherington', href: '/macclesfield/areas/tytherington' },
    { name: 'Prestbury', slug: 'prestbury', href: '/macclesfield/areas/prestbury' },
    { name: 'Broken Cross', slug: 'broken-cross', href: '/macclesfield/areas/broken-cross' },
    { name: 'Congleton', slug: 'congleton', href: '/macclesfield/areas/congleton' },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Why Macclesfield Cars Need Professional Protection',
      body: 'The A537 Cat and Fiddle is one of the most-salted roads in England during winter — and it drains straight into Macclesfield. Combined with the iron fallout from railway commuter routes and the fine brake dust generated on steep descent roads from the Peak District, SK10/SK11 paintwork deteriorates faster than most owners realise. A professional decontamination and protective coating applied at your property stops this deterioration in its tracks.',
    },
    {
      type: 'text',
      heading: 'Mobile Detailing — We Come to Your Macclesfield Driveway',
      body: 'Macclesfield is a commuter town with demanding schedules. Our mobile service means you never lose a Saturday to a detailing appointment. We work around you — early mornings, evenings, and weekends — and arrive with everything needed to deliver a showroom finish. From Tytherington estates to Prestbury village driveways and Bollington terrace streets, we operate across all SK10 and SK11 postcodes.',
    },
    {
      type: 'list',
      heading: 'Services Available in Macclesfield',
      items: [
        'Ceramic coating — 2–5 year paint protection',
        'Paint correction — single and two-stage swirl removal',
        'Full valet — interior and exterior deep clean',
        'Mini valet — maintenance wash and interior freshen',
        'Engine bay detailing',
        'Leather conditioning',
        'Headlight restoration',
        'Pet hair and odour removal',
        'New car protection packages',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you offer car detailing at home in Macclesfield?',
      answer:
        'Yes — all our services are fully mobile. We come to your home, workplace, or any suitable location across Macclesfield and the SK10/SK11 postcode area.',
    },
    {
      question: 'How long does a ceramic coating take in Macclesfield?',
      answer:
        'A full paint decontamination, single-stage polish, and ceramic coating application typically takes 6–8 hours. We book a full day for this service so the vehicle can cure undisturbed.',
    },
    {
      question: 'Do you cover Bollington and Prestbury?',
      answer:
        'Yes — we cover all areas within the SK10 and SK11 postcode, including Bollington, Prestbury, Tytherington, Gawsworth, and Broken Cross. We also serve neighbouring Congleton (CW12) and Wilmslow (SK9).',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept bank transfer, card payment, and cash. Full payment is taken on the day once you are happy with the result.',
    },
  ],
};
