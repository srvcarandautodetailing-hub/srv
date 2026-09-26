import { ShieldCheck } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const newCarProtectionMacclesfield: ServicePageData = {
  slug: 'new-car-protection',
  name: 'New Car Protection Macclesfield',
  icon: ShieldCheck,
  seo: {
    title: 'New Car Protection Macclesfield | Ceramic Coat New Vehicle SK10 | SRV Detailing',
    description:
      'Protect your new car before it faces Macclesfield roads. Ceramic coating, paint film, and sealant packages applied before first contamination. Mobile service across SK10 and SK11.',
    keywords: [
      'new car protection macclesfield',
      'new car ceramic coating macclesfield',
      'paint protection new car macclesfield',
      'new car detailing macclesfield',
      'new car sealant macclesfield',
      'new car protection sk10',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-detailing/new-car-protection',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Detailing', href: '/macclesfield/car-detailing' },
    { label: 'New Car Protection', href: '/macclesfield/car-detailing/new-car-protection' },
  ],
  heroTitle: 'New Car Protection in Macclesfield',
  heroDescription:
    'Protect your new vehicle before Peak District salt roads and SK10/SK11 commuter contamination do lasting damage. Ceramic coating and sealant packages at your Macclesfield driveway.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Protect a New Car in Macclesfield',
      body: 'New cars leave the showroom with dealer-applied protection that is often thin and short-lived. On the A523 and A537 — roads that carry significant winter salt traffic — an unprotected new car will show contamination bonding within weeks. Applying a professional ceramic coating immediately after collection means your paint is sealed before it is ever exposed to road salt, iron fallout, or industrial pollution.',
    },
    {
      type: 'list',
      heading: "New Car Protection Package — What's Included",
      items: [
        'New car inspection for transport damage and dealer-applied product removal',
        'Gentle decontamination wash',
        'Light machine polish to correct any pre-delivery handling marks',
        'Ceramic coating application',
        '12-month aftercare plan and maintenance advice',
      ],
    },
  ],
  faqs: [
    {
      question: 'Should I get ceramic coating on a new car in Macclesfield?',
      answer:
        'Yes — the ideal time is before the car faces any road contamination. New paint is the easiest surface to coat correctly, and you get the full benefit of the protection from day one.',
    },
    {
      question: 'How much does new car protection cost in Macclesfield?',
      answer:
        'New car protection packages start from £300 and include decontamination, light polish, and ceramic coating. Contact us with your vehicle details for an exact quote.',
    },
    {
      question: 'Should I apply new car protection before or after collecting from the Macclesfield dealership?',
      answer: 'Ideally within the first 48–72 hours of collection and before the vehicle has been driven more than 200 miles in typical road conditions. The longer paint is exposed to road contaminants, brake dust, and water spotting without protection, the more preparation work is required before coating. We can come directly to your Macclesfield home or the Tytherington/Bollington area after you collect the vehicle. It is also worth avoiding the dealership\'s promotional wash — dealer prep washes frequently introduce swirl marks that need correcting before protection is applied.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Macclesfield', href: '/macclesfield/car-detailing/ceramic-coating', description: 'Highest-grade new car protection' },
    { label: 'Paint Correction Macclesfield', href: '/macclesfield/car-detailing/paint-correction', description: 'Pre-coating correction if needed' },
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'All detailing services SK10/SK11' },
    { label: 'Car Detailing Prices Macclesfield', href: '/macclesfield/car-detailing/prices', description: 'Protection package pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'New Car Protection Congleton', href: '/congleton/car-detailing/new-car-protection', description: 'Also serving CW12' },
    { label: 'Macclesfield Reviews', href: '/macclesfield/reviews', description: 'Protection results' },
  ],
  schemaPrice: '300',
};
