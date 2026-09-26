import { MapPin } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const mobileValetingCongleton: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Valeting Congleton',
  seo: {
    title: 'Mobile Car Valeting Congleton | We Come to You CW12 | SRV Detailing',
    description:
      'Professional mobile car valeting in Congleton — we come to your home, farm, or workplace across CW12. No trip to a valet centre. Fully self-contained unit with own water and power.',
    keywords: [
      'mobile car valeting congleton',
      'mobile valeting congleton',
      'mobile valet cw12',
      'car valeting at home congleton',
      'mobile valeting cheshire east congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-valeting/mobile-valeting',
  },
  icon: MapPin,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Valeting', href: '/congleton/car-valeting' },
    { label: 'Mobile Valeting', href: '/congleton/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Valeting Congleton — Professional Car Care at Your Door',
  heroDescription:
    'Fully mobile car valeting across Congleton and CW12 — we come to your home, workplace, or farm with a self-contained unit carrying its own water, power, and all professional equipment. No trip to a valet centre, no queuing — professional results at your convenience.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Mobile Valeting Makes Sense in Congleton',
      bodyParagraphs: [
        "Congleton's spread across the Cheshire countryside and surrounding villages means that driving to a fixed valet facility involves a journey, a wait, and another journey back — time that most CW12 residents and businesses simply don't have. SRV Detailing's fully mobile service eliminates all of this: we arrive at your Congleton home, farm, or workplace at the agreed time, carry everything we need from our unit, and leave your vehicle professionally valeted without you needing to go anywhere.",
        "Our mobile unit is genuinely self-contained — 350 litres of clean water, a professional generator, all cleaning products, extraction equipment, steam cleaners, and professional hand-wash equipment. We do not need a water supply from your property, do not need access to an outdoor tap or hose, and do not need mains electricity. We need only a parking space alongside your vehicle and safe access to it.",
      ],
    },
    {
      type: 'list',
      heading: 'Where We Operate in Congleton',
      items: [
        'Private driveways across all CW12 postcodes — home valeting at your convenience',
        'Farm and rural property driveways — fully self-contained, no facilities required',
        'Commercial premises and business car parks — suitable for fleet vehicles and workplace valeting by arrangement',
        'Sandbach, Holmes Chapel, Middlewich, Alsager, Biddulph, and Scholar Green — all accessible from Congleton with no call-out surcharge for CW12-adjacent postcodes',
        'Macclesfield and the wider Cheshire East area — accessible for regular customers by arrangement',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you really bring your own water and power to Congleton?',
      answer:
        'Yes. Our mobile unit carries 350 litres of clean water and a professional generator. We are entirely self-contained. You need only provide vehicle access and a parking space alongside it — nothing from your property.',
    },
    {
      question: 'Can you come to a farm or rural property in CW12?',
      answer:
        "Yes. We regularly work at rural and farm properties across the Congleton area. We can work on stable farm driveways and accessible rural parking areas. We don't need prepared surfaces — just a stable area alongside the vehicle.",
    },
    {
      question: 'How far do you travel from Congleton?',
      answer:
        'We cover all CW12 postcodes and adjacent areas including Sandbach, Holmes Chapel, Middlewich, Alsager, and Biddulph without a call-out surcharge. A small travel charge applies for more distant locations — confirmed at booking.',
    },
    {
      question: 'How does mobile valeting work for Congleton equestrian and rural properties?',
      answer: 'Our mobile valeting service is specifically set up to work without any infrastructure at the customer\'s property. We carry a minimum 150-litre fresh water tank, a separate sealed waste tank, and our own 230V power supply — meaning we can operate in a stable yard, a field gateway, or a rural farmyard just as effectively as a suburban driveway. For equestrian properties near Congleton, Sandbach, or Holmes Chapel, we regularly clean horse-transport vehicles (trailers and horse boxes are priced separately) as well as the owner\'s personal vehicles. We ask for a flat hardstanding and 1.5m clearance either side of the vehicle.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Most popular mobile service' },
    { label: 'Mini Valet Congleton', href: '/congleton/car-valeting/mini-valet', description: 'Lighter mobile service' },
    { label: 'Car Valeting Congleton', href: '/congleton/car-valeting', description: 'All valeting services CW12' },
    { label: 'Valeting Prices Congleton', href: '/congleton/car-valeting/prices', description: 'Mobile valeting pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Mobile Valeting Macclesfield', href: '/macclesfield/car-valeting/mobile-valeting', description: 'Also serving SK10/SK11' },
    { label: 'Mobile Valeting Stockport', href: '/stockport/car-valeting/mobile-valeting', description: 'Nearby SK service' },
  ],
  schemaPrice: '45',
};
