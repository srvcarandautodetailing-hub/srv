import { Car, Sparkles, Droplets } from 'lucide-react';
import type { LocationHubData } from '@/data/types';

export const congletonHub: LocationHubData = {
  slug: 'congleton',
  name: 'Congleton',
  seo: {
    title: 'Car Detailing & Valeting Congleton | Mobile Service CW12 | SRV Detailing',
    description:
      'Professional mobile car detailing and valeting in Congleton. Ceramic coating, paint correction, full valets, and interior restoration. CW12 postcodes covered. 22+ years experience across Cheshire East.',
    keywords: [
      'car detailing congleton',
      'car valeting congleton',
      'mobile car detailing congleton',
      'ceramic coating congleton',
      'paint correction congleton',
      'car cleaning congleton',
      'mobile valeting congleton cw12',
      'car detailing cheshire east congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
  ],
  heroTitle: 'Professional Car Detailing & Valeting in Congleton',
  heroDescription:
    'SRV Detailing serves Congleton and the CW12 postcode with mobile car care matched to the vehicles here — from prestige estate and SUV owners to classic car enthusiasts and rural four-wheel-drive users. Ceramic coatings, paint correction, full valets, and interior restoration, delivered to your driveway. 22+ years of professional expertise.',
  heroImages: [
    {
      src: '/images/gallery/srv-detailing-ceramic-coating-manchester-03.webp.webp',
      alt: 'SRV Detailing professional ceramic coating — mobile car care service covering Congleton and CW12',
    },
    {
      src: '/images/gallery/srv-detailing-ceramic-coating-manchester-05.webp.webp',
      alt: 'SRV Detailing ceramic coating showing exceptional water-beading — accredited mobile detailing in Congleton, Cheshire East',
    },
    {
      src: '/images/gallery/mobile-van.webp.webp',
      alt: 'SRV Detailing fully equipped mobile van serving Congleton, Sandbach, Holmes Chapel, and all CW12 postcodes',
    },
  ],
  introText:
    "Congleton's CW12 postcode brings a distinctive vehicle mix to our booking list — prestige SUVs and executive saloons alongside the Defenders, Discovery 3s, and Land Cruisers that Cheshire East rural driving demands. The A34 through Congleton town centre deposits winter road salt on lower panels from October through March. The agricultural lanes around Somerford, Astbury, and Buglawton carry clay, run-off, and seasonal organic contamination that attaches to bodywork on every country run. The Macclesfield Canal corridor through the town adds humidity and organic debris near towpath-side parking. These are the real conditions CW12 vehicles face — and they require professional decontamination, not an automated brush wash. SRV Detailing is fully mobile and self-contained, covering all Congleton postcodes and surrounding Cheshire East and Staffordshire areas. We bring machine polishers, ceramic coating products, steam cleaners, and hot water extraction systems to your home or workplace.",
  pillars: [
    {
      name: 'Car Detailing',
      description:
        'Restoration-grade paint correction, ceramic SiO2 coating, swirl mark removal, and deep interior detailing for Congleton and CW12.',
      href: '/congleton/car-detailing',
      icon: Sparkles,
    },
    {
      name: 'Car Valeting',
      description:
        'Professional maintenance cleaning — full valets, maintenance valets, interior and exterior packages delivered to your Congleton driveway.',
      href: '/congleton/car-valeting',
      icon: Car,
    },
    {
      name: 'Car Wash',
      description:
        'Mobile hand car wash using the safe two-bucket method. No automated brushes — no swirl marks. We come to your Congleton home.',
      href: '/congleton/car-wash',
      icon: Droplets,
    },
  ],
  areas: [
    { name: 'Sandbach', slug: 'sandbach', href: '/congleton/areas/sandbach' },
    { name: 'Biddulph', slug: 'biddulph', href: '/congleton/areas/biddulph' },
    { name: 'Alsager', slug: 'alsager', href: '/congleton/areas/alsager' },
    { name: 'Holmes Chapel', slug: 'holmes-chapel', href: '/congleton/areas/holmes-chapel' },
    { name: 'Middlewich', slug: 'middlewich', href: '/congleton/areas/middlewich' },
    { name: 'Scholar Green', slug: 'scholar-green', href: '/congleton/areas/scholar-green' },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Your Local Congleton Car Care Specialist',
      bodyParagraphs: [
        "SRV Detailing covers all CW12 postcodes — Congleton town centre, Buglawton, Mossley, Newbold Astbury, West Heath, and the surrounding Cheshire East rural areas — as well as adjacent towns including Sandbach (CW11), Holmes Chapel (CW4), Middlewich (CW10), and the Staffordshire border areas of Biddulph (ST8), Alsager (ST7), and Scholar Green (ST7). Our mobile unit is fully self-contained, carrying its own water supply, power generator, and all professional equipment. You provide nothing except vehicle access.",
        "Congleton presents contamination challenges specific to its position at the southern end of Cheshire East's main A34 corridor. The A34 through the town is a primary winter gritting route, depositing sodium chloride on lower panels and alloy wheels from late October. The A536 north towards Macclesfield and the A534 east towards Sandbach add their own grit exposure. Country lanes around Astbury, Somerford, and the North Rode area carry agricultural clay and silage run-off that bonds to lower body panels and wheel arches. The Macclesfield Canal towpath areas near the town basin create conditions for algal and organic deposit build-up on vehicles parked nearby.",
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing in Congleton',
      items: [
        'Experience with the full range of CW12 vehicles — prestige SUVs, executive saloons, classic cars, and rural-use 4x4s including Defender, Discovery, and Land Cruiser',
        '22+ years professional detailing experience across all paint systems, vehicle types, and interior materials',
        'Fully self-contained mobile unit — own water supply, generator, and professional equipment',
        'Safe hand-wash techniques and paint depth gauges — no shortcuts, no rushed work on high-value vehicles',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'Available 7 days a week including evenings by arrangement',
        'Discrete, professional driveway service — we work without disruption to your home or workplace',
      ],
    },
    {
      type: 'list',
      heading: 'Why Congleton Vehicles Need Regular Professional Care',
      items: [
        'A34 winter road salt applied from Astbury Road to the town centre attacks alloy lacquer and clear coat on every journey from October to March',
        'A536 and A534 routes carry road salt from Macclesfield and Sandbach — vehicles travelling these routes accumulate salt exposure on both sides of CW12',
        'Agricultural lanes around Astbury, Somerford, North Rode, and Buglawton deposit clay, silage residue, and organic run-off on lower panels',
        'Macclesfield Canal humidity and organic debris near the canal basin and towpath areas accelerate contaminant adhesion on vehicles parked nearby',
        'Classic car and heritage vehicle owners in the Congleton area need gentle, specialist care — non-abrasive pH-neutral products and hand techniques that automated washes cannot deliver',
        'Rural 4x4 vehicles used on farm tracks and estate roads accumulate compacted clay, mud, and mineral deposits that require proper decontamination to avoid alloy and brake component corrosion',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you cover Congleton town centre and surrounding CW12 villages?',
      answer:
        'Yes. We cover all of Congleton including the town centre, Buglawton, Mossley, Newbold Astbury, and all CW12 addresses. We also extend to Sandbach, Holmes Chapel, Middlewich, and into the Staffordshire border areas of Biddulph, Alsager, and Scholar Green.',
    },
    {
      question: 'Can you work on classic and heritage vehicles in Congleton?',
      answer:
        "Yes. We regularly work on classic cars, heritage vehicles, and older paint systems in the Congleton area. Older lacquer and single-stage paints require specific, gentler products and techniques — we carry appropriate products and always assess paint condition with a paint depth gauge before any machine work. We never apply correction compounds intended for modern clear coat to older or delicate finishes.",
    },
    {
      question: 'How do I book a car detailing or valeting service in Congleton?',
      answer:
        "Call us on 07375 759686 or use our online booking form. We'll confirm the service, time, and your Congleton address, and come fully equipped. We often have short-notice availability and aim to accommodate same-week bookings across CW12.",
    },
    {
      question: 'Do you need water or electricity at my Congleton property?',
      answer:
        'No. Our mobile unit carries its own fresh water supply and power generator. We need only safe vehicle access and a parking space alongside — nothing from your property.',
    },
    {
      question: 'Do you cover Sandbach, Holmes Chapel, and Macclesfield from Congleton?',
      answer:
        'Yes. Sandbach, Holmes Chapel, Alsager, Middlewich, Biddulph, and Scholar Green are all within our regular service area from Congleton. Macclesfield — approximately 10 miles north — is also covered. All bookable online with no call-out surcharge for CW12 and adjacent postcodes.',
    },
  ],
};
