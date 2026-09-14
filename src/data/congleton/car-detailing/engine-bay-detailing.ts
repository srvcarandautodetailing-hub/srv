import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingCongleton: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Congleton',
  seo: {
    title: 'Engine Bay Detailing Congleton | Engine Clean CW12 | SRV Detailing',
    description:
      'Professional engine bay detailing in Congleton. Safe degreasing, low-pressure rinse, and dressing for a showroom engine bay. Mobile service across CW12. Pre-sale and concours preparation.',
    keywords: [
      'engine bay detailing congleton',
      'engine bay cleaning congleton',
      'engine clean congleton cw12',
      'engine bay detail cheshire east congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Detailing', href: '/congleton/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/congleton/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing Congleton — Safe, Professional Engine Bay Cleaning',
  heroDescription:
    'Professional engine bay detailing at your Congleton driveway. Careful degreasing, low-pressure rinse, and dressing restore your engine bay to a clean, presentable condition without water ingress risk to electrical components. Ideal for pre-sale preparation and classic car presentation.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Engine Bay Detailing for Congleton Vehicles',
      bodyParagraphs: [
        "Engine bay detailing is often the most neglected part of any professional service — and the most frequently remarked upon when done well. A clean, dressed engine bay transforms the presentation of a vehicle at sale, at inspection, or at a classic car event. For buyers assessing a Defender or classic in the Congleton area, an engine bay that reflects the same standard of care as the exterior significantly increases confidence in the vehicle's maintenance history.",
        "Our engine bay process uses a safe, measured approach — alkaline degreaser carefully applied to grimy surfaces, followed by a low-pressure rinse technique that removes contamination without directing water pressure at electrical connectors, sensors, or the ECU housing. All electrical components are individually protected before any liquid is applied. The bay is then dried and all rubber, plastic, and metal surfaces dressed with appropriate products.",
      ],
    },
    {
      type: 'process',
      heading: 'Engine Bay Detailing Process',
      items: [
        'Cold engine assessment — bay inspected for any existing damage, oil leaks, or areas requiring additional protection',
        'Electrical protection — all exposed connectors, ECU housing, and air intake protected with barrier film before any liquid application',
        'Degreaser application — appropriate alkaline degreaser applied to all contaminated surfaces; dwell time managed to dissolve oil and grease without damaging paint',
        'Detail brush agitation — brushes used on difficult areas including cable runs, hose clusters, and bracket bases',
        'Low-pressure rinse — controlled rinse removes degreaser and contamination; no high-pressure directed at electricals',
        'Drying — compressed air used to displace moisture from all recesses and connector areas; surface dried with microfibre',
        'Dressing — rubber hoses, plastic covers, and trim dressed with appropriate non-silicone or satin product; metal surfaces cleaned and brightened',
        'Final inspection — bay checked thoroughly; any residual contamination addressed before completion',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does engine bay detailing cost in Congleton?',
      answer:
        'Engine bay detailing from £60 as a standalone service, from £50 when combined with an exterior or full detail. Classic cars and vehicles with significant oil contamination may carry a small additional charge.',
    },
    {
      question: 'Is engine bay detailing safe for modern vehicles with electronics?',
      answer:
        "Yes, when done correctly. We never use high-pressure water near electrical components. All connectors, the ECU, and air intake are individually protected before any liquid is applied. Our process has been refined over 22+ years to clean effectively while eliminating electrical ingress risk.",
    },
    {
      question: 'Can you clean a very oil-contaminated classic engine bay?',
      answer:
        "Yes. Classic car engine bays with decades of accumulated oil, grease, and old dressing can be significantly improved in a single session, though very heavy contamination may require a second visit. We always set honest expectations about what a single pass will achieve on severe cases.",
    },
    {
      question: 'Is engine bay detailing in demand for older vehicles in the Congleton area?',
      answer: 'Congleton and the surrounding CW12 area has a higher-than-average density of older working vehicles — Land Rovers, Defenders, classic Volvos, and agricultural runabouts that accumulate decades of oil film, dust, and organic material in the engine bay. Engine bay detailing on these vehicles is more labour-intensive than modern cars and requires careful degreaser selection to avoid damaging aged seals and rubber components. We assess the bay thoroughly before starting and use degreasers appropriate to the materials present. For vehicles over 20 years old, we avoid any pressure or volume of water near the ignition system and rely on hand cleaning and steam.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Full interior and exterior service' },
    { label: 'Exterior Detailing Congleton', href: '/congleton/car-detailing/exterior-detailing', description: 'Combined with exterior detail' },
    { label: 'Car Detailing Congleton', href: '/congleton/car-detailing', description: 'All detailing services CW12' },
    { label: 'Car Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Engine bay pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Engine Bay Detailing Macclesfield', href: '/macclesfield/car-detailing/engine-bay-detailing', description: 'Also serving SK10/SK11' },
    { label: 'Headlight Restoration Congleton', href: '/congleton/car-detailing/headlight-restoration', description: 'Often combined with engine detail' },
  ],
  schemaPrice: '60',
};
