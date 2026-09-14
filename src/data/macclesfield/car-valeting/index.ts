import { Star, Zap, Truck, Armchair, Droplets, PawPrint, Wind, Layers } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const macclesfieldCarValetingPillar: PillarPageData = {
  slug: 'car-valeting',
  name: 'Car Valeting in Macclesfield',
  seo: {
    title: 'Car Valeting Macclesfield | Mobile Full Valet SK10 SK11 | SRV Detailing',
    description:
      'Professional mobile car valeting in Macclesfield. Mini valet, full valet, interior valet, and mobile valeting across SK10 and SK11. We come to your home or workplace.',
    keywords: [
      'car valeting macclesfield',
      'mobile car valeting macclesfield',
      'full valet macclesfield',
      'mini valet macclesfield',
      'interior car valet macclesfield',
      'car valeting sk10',
      'car valeting sk11',
      'mobile valeting macclesfield',
    ],
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/car-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Macclesfield', href: '/macclesfield' },
    { label: 'Car Valeting', href: '/macclesfield/car-valeting' },
  ],
  heroTitle: 'Car Valeting Macclesfield — Mobile Valet Service for SK10/SK11',
  heroDescription:
    'Mobile car valeting across Macclesfield and SK10/SK11. Mini valet, full valet, and interior deep-clean — delivered to your driveway, workplace, or estate.',
  introText:
    'Macclesfield is one of the most time-pressed commuter towns in Cheshire East. Our mobile valeting service removes the need to travel anywhere — we bring our own water, power, and equipment to your property and deliver a professional finish while you work from home or get on with your morning. From the Tytherington Business Park to Prestbury village driveways, we cover all SK10 and SK11 postcodes on your schedule.',
  services: [
    {
      slug: 'full-valet',
      name: 'Full Valet',
      description: 'Complete interior and exterior valet — the most popular service for Macclesfield vehicles. Inside and out to showroom standard.',
      icon: Star,
      href: '/macclesfield/car-valeting/full-valet',
    },
    {
      slug: 'mini-valet',
      name: 'Mini Valet',
      description: 'Quick exterior wash, interior vacuum, and glass clean — ideal for maintenance between full valets on busy schedules.',
      icon: Zap,
      href: '/macclesfield/car-valeting/mini-valet',
    },
    {
      slug: 'mobile-valeting',
      name: 'Mobile Valeting',
      description: 'Fully mobile valeting service for Macclesfield homes, workplaces, and estates — we bring everything with us.',
      icon: Truck,
      href: '/macclesfield/car-valeting/mobile-valeting',
    },
    {
      slug: 'interior-valeting',
      name: 'Interior Valeting',
      description: 'Deep interior clean focusing on fabrics, carpets, dashboard, and door cards in your Macclesfield vehicle.',
      icon: Armchair,
      href: '/macclesfield/car-valeting/interior-valeting',
    },
    {
      slug: 'exterior-valeting',
      name: 'Exterior Valeting',
      description: 'Exterior wash, wheel clean, tyre dressing, and glass polish — focused exterior service for SK10/SK11 vehicles.',
      icon: Droplets,
      href: '/macclesfield/car-valeting/exterior-valeting',
    },
    {
      slug: 'pet-hair-removal',
      name: 'Pet Hair Removal',
      description: 'Specialist pet hair extraction from seats and carpets — popular with Macclesfield dog owners using Peak District walks.',
      icon: PawPrint,
      href: '/macclesfield/car-valeting/pet-hair-removal',
    },
    {
      slug: 'odour-removal',
      name: 'Odour Removal',
      description: 'Ozone treatment and deep fabric clean to permanently eliminate persistent odours in your Macclesfield vehicle.',
      icon: Wind,
      href: '/macclesfield/car-valeting/odour-removal',
    },
    {
      slug: 'upholstery-cleaning',
      name: 'Upholstery Cleaning',
      description: 'Hot water extraction for fabric seats, carpets, and headliner — removes stains and embedded dirt from SK10 family vehicles.',
      icon: Layers,
      href: '/macclesfield/car-valeting/upholstery-cleaning',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Mobile Car Valeting — Macclesfield Driveway Convenience',
      body: 'Macclesfield commuters spend their time on the A523 and A537, not queuing at a forecourt. Our mobile valeting unit is fully self-contained — we carry fresh water, waste water tank, power supply, and all professional cleaning products. This means we can work on any driveway, business park, or estate without needing your water supply or electricity.',
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing for Car Valeting in Macclesfield',
      items: [
        'Fully mobile and self-contained — no external water or power needed at your property',
        'Two-bucket safe wash method — no automated brushes, no swirl marks on your paintwork',
        'Flexible scheduling including evenings and weekends to fit Macclesfield commuter schedules',
        'Same-week availability across all SK10 and SK11 postcodes',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'Professional results — not a forecourt rush job',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a full valet cost in Macclesfield?',
      answer:
        'A full valet for a standard car costs from £90. Larger vehicles are priced accordingly. View our full valet price list for a complete breakdown.',
    },
    {
      question: 'How long does a mini valet take?',
      answer:
        'A mini valet typically takes 2–3 hours for a standard vehicle. We work efficiently without rushing — quality is our priority.',
    },
    {
      question: 'Do you cover Tytherington Business Park for car valeting?',
      answer:
        'Yes — we regularly valet at Tytherington Business Park and other commercial premises across Macclesfield. We just need a parking space alongside your vehicle.',
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Macclesfield', href: '/macclesfield/car-detailing', description: 'Correction and protection beyond valeting' },
    { label: 'Valeting Prices Macclesfield', href: '/macclesfield/car-valeting/prices', description: 'Full pricing guide' },
    { label: 'Macclesfield Hub', href: '/macclesfield', description: 'All services across Macclesfield and SK10/SK11' },
  ],
};
