import { Truck } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const mobileValetingMacclesfield: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Valeting Macclesfield',
  icon: Truck,
  seo: {
    title: 'Mobile Car Valeting Macclesfield | At Home Valet SK10 SK11 | SRV Detailing',
    description:
      'Mobile car valeting in Macclesfield. We come to your home, workplace, or any convenient location across SK10 and SK11 with our fully self-contained mobile unit.',
    keywords: [
      'mobile car valeting macclesfield',
      'mobile valet macclesfield',
      'at home car valet macclesfield',
      'mobile valeting sk10',
      'home car valet macclesfield',
      'mobile car clean macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting/mobile-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
    { label: 'Mobile Valeting', href: '/macclesfield/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Car Valeting in Macclesfield',
  heroDescription:
    'Fully mobile car valeting across Macclesfield and SK10/SK11. We bring everything needed to deliver a professional valet at your home, workplace, or estate.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Mobile Valeting — Macclesfield Driveway Service',
      body: 'Our mobile valeting unit is fully self-contained — we carry our own fresh water, waste water tank, power supply, and all professional cleaning products. This means we can operate on any driveway, car park, or estate in Macclesfield without needing access to your water supply or electricity. For Macclesfield commuters who spend their commuting time on the A523 or A537, the ability to book a valet that happens while you work from home is a genuine time-saver.',
    },
    {
      type: 'list',
      heading: 'Areas Covered — Mobile Valeting from Macclesfield',
      items: [
        'Macclesfield town centre (SK10, SK11)',
        'Tytherington estate',
        'Prestbury village',
        'Bollington',
        'Gawsworth',
        'Broken Cross',
        'Surrounding SK10 and SK11 postcodes',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you need access to water for mobile valeting in Macclesfield?',
      answer: 'No — our mobile unit carries its own fresh water tank. We are entirely self-sufficient and can operate on any driveway or car park in Macclesfield.',
    },
    {
      question: 'Can you valet my car at my workplace in Macclesfield?',
      answer: 'Yes — we regularly valet at offices, business parks, and commercial premises across Macclesfield. We just need a parking space alongside your vehicle.',
    },
    {
      question: 'Do you need access to our water supply for mobile valeting in Macclesfield?',
      answer: 'No — our mobile valeting unit is fully self-contained. We carry a fresh water tank, a separate waste water tank, and our own 230V power supply via a petrol generator or inverter setup. This means we can operate on any Macclesfield driveway, car park, or private estate without access to your electricity or outdoor tap. We are fully insured with specialist motor trade and vehicle-in-care coverage. Our Macclesfield mobile unit typically carries enough water for 2–3 vehicles per session.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Macclesfield', href: '/macclesfield/car-valeting/full-valet', description: 'Most popular mobile service' },
    { label: 'Mini Valet Macclesfield', href: '/macclesfield/car-valeting/mini-valet', description: 'Lighter mobile service' },
    { label: 'Car Valeting Macclesfield', href: '/macclesfield/car-valeting', description: 'All valeting services SK10/SK11' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Mobile valeting pricing' },
    { label: 'Macclesfield Areas', href: '/macclesfield/areas', description: 'SK10 and SK11 coverage' },
    { label: 'Mobile Valeting Congleton', href: '/congleton/car-valeting/mobile-valeting', description: 'Also serving CW12' },
    { label: 'Mobile Valeting Wilmslow', href: '/wilmslow/car-valeting/mobile-valeting', description: 'Nearby SK9 service' },
  ],
  schemaPrice: '45',
};
