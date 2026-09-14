import { Lightbulb } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const headlightRestorationCongleton: ServicePageData = {
  slug: 'headlight-restoration',
  name: 'Headlight Restoration Congleton',
  seo: {
    title: 'Headlight Restoration Congleton | Yellowed Headlight Repair CW12 | SRV Detailing',
    description:
      'Professional headlight restoration in Congleton. Wet-sanding and machine polishing restores yellowed or clouded headlight lenses to optical clarity. Mobile service across CW12. From £60 per pair.',
    keywords: [
      'headlight restoration congleton',
      'headlight restoration cw12',
      'yellowed headlights congleton',
      'cloudy headlights congleton',
      'headlight polishing congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-detailing/headlight-restoration',
  },
  icon: Lightbulb,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Detailing', href: '/congleton/car-detailing' },
    { label: 'Headlight Restoration', href: '/congleton/car-detailing/headlight-restoration' },
  ],
  heroTitle: 'Headlight Restoration Congleton — Optical Clarity Restored at Your CW12 Door',
  heroDescription:
    'Yellowed, clouded, or oxidised headlight lenses restored to near-original clarity at your Congleton driveway. Professional wet-sanding and machine polishing removes UV oxidation and surface scratching — improving both night visibility and vehicle appearance. From £60 per pair.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Headlights Yellow and Cloud',
      bodyParagraphs: [
        "Modern polycarbonate headlight lenses are coated with a UV-resistant hardcoat at the factory — but this coating degrades over time under UV exposure, creating the characteristic yellowing and clouding seen on vehicles more than 5–7 years old. Once the hardcoat breaks down, the UV oxidation penetrates the polycarbonate itself, causing the opaque, milky appearance that cannot be removed by cleaning alone.",
        "In Congleton, the combination of open-country UV exposure on rural routes and the fine grit from A34 and agricultural lanes contributes to surface scratching of the lens face that compounds the oxidation. This has a direct, measurable effect on beam output — MOT-standard headlight brightness can drop significantly through heavily oxidised lenses. Our restoration process wet-sands through the oxidised surface layer and machine polishes to a clear, smooth finish, then applies a new UV-protective sealant to slow future degradation.",
      ],
    },
    {
      type: 'process',
      heading: 'Headlight Restoration Process',
      items: [
        'Surface assessment — oxidation depth and scratch severity assessed to determine wet-sand grit sequence required',
        'Masking — surrounding paintwork masked to protect from wet-sanding overspray',
        'Wet-sanding — progressive grits (typically 800–2000) applied with wet sand to cut through oxidised surface and heavy scratching',
        'Machine polishing — dual-action polisher with fine cutting and finishing compounds to remove wet-sand marks',
        'UV sealant application — fresh UV-protective coating applied to the restored lens surface to maximise longevity',
        'Final inspection — beam output confirmed visually; lens surface checked for residual haze',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does headlight restoration cost in Congleton?',
      answer:
        'From £60 per pair for standard headlights. Larger or more complex units may carry a slightly higher charge. Confirmed at booking.',
    },
    {
      question: 'How long does headlight restoration last?',
      answer:
        "The restoration is permanent — we remove the oxidised material rather than simply polishing the surface. The new UV sealant we apply typically lasts 1–2 years. Without sealant re-application, the lenses will begin to re-oxidise, though significantly more slowly than the original degradation given the new clear surface.",
    },
    {
      question: 'Will my car pass MOT after headlight restoration?',
      answer:
        "Headlight restoration significantly improves beam output and in most cases brings oxidised lenses back to a level that meets MOT requirements. We cannot guarantee MOT pass as other factors affect the test, but restoring heavily clouded lenses routinely resolves MOT headlight failures.",
    },
    {
      question: 'Does unlit rural driving accelerate headlight degradation for Congleton vehicles?',
      answer: 'UV exposure is the primary cause of polycarbonate lens oxidation and yellowing — so rural driving itself does not accelerate degradation. However, stone chip impact from loose A34 and CW12 road surfaces creates micro-pitting that accelerates oxidation from the surface inward. Vehicles regularly driven on Congleton\'s unlit B-roads and farm lanes also tend to have lenses cleaned less frequently, allowing contamination to bond and etch the surface. Headlight restoration restores clarity and UV resistance; the sealant or lacquer applied after restoration is particularly important for rural vehicles exposed to the high UV levels on open Cheshire East roads without urban shading.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Congleton', href: '/congleton/car-detailing/exterior-detailing', description: 'Often paired with exterior detail' },
    { label: 'Full Valet Congleton', href: '/congleton/car-valeting/full-valet', description: 'Full vehicle service' },
    { label: 'Car Detailing Congleton', href: '/congleton/car-detailing', description: 'All detailing services CW12' },
    { label: 'Car Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Restoration pricing' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Headlight Restoration Macclesfield', href: '/macclesfield/car-detailing/headlight-restoration', description: 'Also serving SK10/SK11' },
    { label: 'Paint Correction Congleton', href: '/congleton/car-detailing/paint-correction', description: 'Paint and lens correction together' },
  ],
  schemaPrice: '60',
};
