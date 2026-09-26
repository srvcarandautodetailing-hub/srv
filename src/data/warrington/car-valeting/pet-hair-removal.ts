import { Scissors } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const petHairRemovalWarrington: ServicePageData = {
  slug: 'pet-hair-removal',
  name: 'Pet Hair Removal Warrington',
  seo: {
    title: 'Pet Hair Removal Warrington | Dog Hair Car Clean WA1–WA5 | SRV Detailing',
    description:
      'Professional pet hair removal from car interiors in Warrington. Specialist extraction of embedded dog and cat hair from seats, carpets, and crevices. WA1–WA5 mobile service.',
    keywords: [
      'pet hair removal warrington',
      'dog hair removal car warrington',
      'pet hair car clean warrington wa1 wa4 wa5',
      'car pet hair removal cheshire warrington',
      'dog hair seat removal warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/pet-hair-removal',
  },
  icon: Scissors,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Pet Hair Removal', href: '/warrington/car-valeting/pet-hair-removal' },
  ],
  heroTitle: 'Pet Hair Removal Warrington — Specialist Dog Hair Extraction for WA1–WA5 Vehicles',
  heroDescription:
    'Warrington and the surrounding Cheshire countryside are dog-walking country — Risley Moss, Sankey Valley, Lymm Dam, and Woolston Eyes are popular routes. Our specialist pet hair removal service uses professional extraction techniques to remove embedded dog and cat hair from fabric seats, carpets, boot liners, and seat crevices across WA1–WA5.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Pet Hair Removal Requires Specialist Techniques',
      bodyParagraphs: [
        "Pet hair — particularly the dense undercoat of Labrador Retrievers, Cocker Spaniels, and Springer Spaniels common in Cheshire households — becomes deeply embedded in fabric seat weaves, carpet pile, and the foam backing beneath. A standard vacuum cleaner, even a powerful one, removes surface hair but leaves the embedded fibres undisturbed. Professional pet hair removal combines specialist rubber extraction tools, dedicated pet hair removal mitts, and high-powered vacuum techniques to extract hair from the fabric substrate rather than just the surface.",
        "Warrington residents regularly walk dogs at Risley Moss Nature Reserve, Sankey Valley Country Park, Lymm Dam, Statham village, and Woolston Eyes — all areas where dogs pick up a combination of mud, wet grass, and seasonal shedding that transfers heavily to vehicle interiors. Family SUVs used for the school run and weekend outdoor activities in the Mersey Valley accumulate pet hair significantly faster than vehicles with a single designated use.",
      ],
    },
    {
      type: 'list',
      heading: 'Our Pet Hair Removal Process',
      items: [
        'Pre-assessment — identify affected areas and hair density across all surfaces',
        'Rubber removal tool — specialist rubber pet hair extraction tools used to agitate and loosen embedded hair from fabric',
        'Compressed air — blow-out of crevices, seat rails, and seatbelt guides where hair accumulates',
        'High-powered vacuum with specialist attachments — extracts loosened hair from all surfaces',
        'Seat seam and crevice treatment — detailed attention to seat folds, headrest slots, and door pocket openings',
        'Boot liner treatment — pet hair from boot carpets and boot liner panels removed thoroughly',
        'Interior deodorisation — pet odour neutraliser applied to freshen the cabin after hair removal',
      ],
    },
    {
      type: 'list',
      heading: 'Vehicles and Situations We Regularly Treat in Warrington',
      items: [
        'Family SUVs used for dog walks at Risley Moss, Sankey Valley, and Lymm Dam — Land Rover Discovery, BMW X5, Volvo XC90, and Ford Kuga',
        'Hatchbacks and estate cars used for Labrador, Spaniel, and Border Collie transport across the WA postcode area',
        'All vehicle types between private sales — pet hair is one of the most common reasons for reduced valuations on used vehicles',
        'Seasonal heavy accumulation after autumn and winter — Cheshire dogs shed more heavily in spring, and winter walks in wet conditions intensify hair transfer',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does pet hair removal take in Warrington?',
      answer:
        "1–3 hours depending on the density of hair and the size of the vehicle. A lightly affected hatchback takes about an hour. A heavily affected SUV or estate with a full boot of dog hair can take 2–3 hours. We advise honestly when booking.",
    },
    {
      question: 'How much does pet hair removal cost in Warrington?',
      answer:
        'Pet hair removal starts from £60 for a standard vehicle with light to moderate hair accumulation. Heavily affected vehicles and large SUVs start from £80–£100. Combined with an interior valet or full valet, pet hair removal is available at a reduced add-on rate.',
    },
    {
      question: 'Can pet hair removal be combined with odour removal?',
      answer:
        "Yes — and it often should be. Pet hair carries odour-producing dander and bacteria that deodourisation alone does not address if the physical hair is still present. We recommend combining pet hair removal with our interior deodourisation service, and ozone treatment for persistent pet smells.",
    },
  ],
  relatedLinks: [
    { label: 'Odour Removal Warrington', href: '/warrington/car-valeting/odour-removal', description: 'Ozone treatment for pet and other odours' },
    { label: 'Interior Valeting Warrington', href: '/warrington/car-valeting/interior-valeting', description: 'Full interior professional clean' },
    { label: 'Upholstery Cleaning Warrington', href: '/warrington/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabric seats' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting services across WA1–WA5' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
