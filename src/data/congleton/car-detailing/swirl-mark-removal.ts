import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const swirlMarkRemovalCongleton: ServicePageData = {
  slug: 'swirl-mark-removal',
  name: 'Swirl Mark Removal Congleton',
  seo: {
    title: 'Swirl Mark Removal Congleton | Paint Swirl Correction CW12 | SRV Detailing',
    description:
      'Professional swirl mark removal in Congleton. Machine polishing eliminates wash swirls, fine scratches, and paint haze from your clear coat. Mobile service across CW12 — from £200.',
    keywords: [
      'swirl mark removal congleton',
      'swirl marks congleton',
      'paint swirl removal cw12',
      'car swirl mark removal congleton',
      'machine polishing swirl removal congleton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/congleton/car-detailing/swirl-mark-removal',
  },
  icon: Sparkles,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Congleton', href: '/congleton' },
    { label: 'Car Detailing', href: '/congleton/car-detailing' },
    { label: 'Swirl Mark Removal', href: '/congleton/car-detailing/swirl-mark-removal' },
  ],
  heroTitle: 'Swirl Mark Removal Congleton — Machine Polishing for Haze-Free Paintwork',
  heroDescription:
    'Professional swirl mark removal delivered to your Congleton driveway. Machine polishing eliminates the web of fine scratches caused by automated car washes and incorrect hand washing — restoring deep gloss and reflectivity to your clear coat. From £200.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'What Causes Swirl Marks in Congleton',
      bodyParagraphs: [
        "Swirl marks are microscopic scratches in the clear coat — the circular pattern reflects how contaminated wash media (brushes, sponges, or inadequate microfibre) is dragged across the paint surface during washing. The pattern is circular because of the rotational motion of automated brush washes, or the circular motion of hand washing with a sponge or contaminated mitt.",
        "In Congleton, the primary swirl source is the A34 roadside automated car wash facilities used by residents who find them convenient and accessible. These facilities use rotating brushes that drag whatever grit and contamination is on the vehicle across the paint with each rotation — every wash adding to the cumulative swirl depth. Vehicles that use agricultural routes and then go through an automated wash are carrying clay and grit into the brushes, making each pass more abrasive than it would be on an urban vehicle.",
      ],
    },
    {
      type: 'list',
      heading: 'Swirl Mark Removal — What We Do',
      items: [
        'Paint depth gauge readings — establishes clear coat thickness and sets the safe correction boundary before any machine work',
        'Full decontamination — iron fallout, tar, clay bar — all bonded contamination removed to reveal the true swirl severity under panel lighting',
        'Test spot correction — compound and pad combination tested on a small area before committing to full correction',
        'Machine polishing — dual-action polisher with appropriate compound removes swirl marks panel by panel under inspection lighting',
        'IPA verification wipe — all correction oils removed to confirm true corrected surface',
        'Protective finish — paint sealant or ceramic coating applied to lock in results and extend swirl resistance',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does swirl mark removal cost in Congleton?',
      answer:
        'Single-stage swirl mark removal from £200 for a standard vehicle. Larger vehicles or those with more severe paint haze from £300. Contact us for an accurate quote based on your vehicle.',
    },
    {
      question: 'Will swirl marks come back after removal?',
      answer:
        "Yes — if you return to the same washing method. After correction, we recommend our mobile hand wash service or at minimum the two-bucket method at home. Ceramic coating over the corrected paint significantly improves resistance to future swirling. We advise on the correct ongoing wash protocol as part of every correction service.",
    },
    {
      question: 'Are swirl marks worse on dark paint?',
      answer:
        "Yes. Dark colours — black, dark blue, graphite, deep red — display swirl marks far more visibly than light colours. The contrast between the clear coat and the base coat means that even shallow clear coat scratches catch light prominently on dark finishes. This doesn't make them harder to remove — but it does mean the improvement after correction is dramatic and highly visible.",
    },
    {
      question: 'How long does swirl mark removal take at a Congleton rural property?',
      answer: 'A single-stage swirl removal takes 3–4 hours at your property. We are fully self-contained — no external water or power supply needed — which is important for Congleton\'s rural properties and farm locations without a convenient outdoor tap. We operate on any level hardstanding including gravel driveways, concrete pads, and tarmac. For properties on the A34, A54, or rural CW12 lanes, we ask for a clear working space of approximately 1.5m either side of the vehicle. Weekend appointments are available for those with working-week schedules, and we cover all CW12 and adjacent postcodes from our base.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Congleton', href: '/congleton/car-detailing/paint-correction', description: 'Two-stage correction for deeper defects' },
    { label: 'Ceramic Coating Congleton', href: '/congleton/car-detailing/ceramic-coating', description: 'Protect after swirl removal' },
    { label: 'Car Detailing Congleton', href: '/congleton/car-detailing', description: 'All detailing services CW12' },
    { label: 'Car Detailing Prices Congleton', href: '/congleton/car-detailing/prices', description: 'Swirl removal from £150' },
    { label: 'Congleton Areas', href: '/congleton/areas', description: 'CW12 coverage areas' },
    { label: 'Swirl Mark Removal Macclesfield', href: '/macclesfield/car-detailing/swirl-mark-removal', description: 'Also serving SK10/SK11' },
    { label: 'Congleton Reviews', href: '/congleton/reviews', description: 'Customer results' },
  ],
  schemaPrice: '200',
};
