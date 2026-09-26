import type { Metadata } from 'next';
import { LocationHubTemplate } from '@/components/pages/LocationHubTemplate';
import { macclesfieldHub } from '@/data/macclesfield/hub';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: macclesfieldHub.seo.title,
  description: macclesfieldHub.seo.description,
  keywords: macclesfieldHub.seo.keywords,
  alternates: {
    canonical: macclesfieldHub.seo.canonical,
    languages: { 'en-GB': macclesfieldHub.seo.canonical },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: macclesfieldHub.seo.title,
    description: macclesfieldHub.seo.description,
    url: macclesfieldHub.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: macclesfieldHub.seo.title,
    description: macclesfieldHub.seo.description,
  },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
    'ICBM': '53.2580, -2.1240',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoDetailing',
      '@id': 'https://www.srvdetailing.co.uk/#business',
      name: 'SRV Detailing',
      url: 'https://www.srvdetailing.co.uk',
      telephone: '+447375759686',
      priceRange: '££',
      areaServed: [
        { '@type': 'City', name: 'Macclesfield', containedInPlace: { '@type': 'AdministrativeArea', name: 'Cheshire East' } },
        { '@type': 'City', name: 'Bollington' },
        { '@type': 'City', name: 'Prestbury' },
        { '@type': 'City', name: 'Tytherington' },
        { '@type': 'City', name: 'Gawsworth' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Car Detailing & Valeting Services — Macclesfield',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Coating Macclesfield' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint Correction Macclesfield' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Valet Macclesfield' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Valeting Macclesfield' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      url: 'https://www.srvdetailing.co.uk/macclesfield',
      name: macclesfieldHub.seo.title,
      isPartOf: { '@id': 'https://www.srvdetailing.co.uk/#website' },
      about: { '@id': 'https://www.srvdetailing.co.uk/#business' },
    },
  ],
};

export default function MacclesfieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LocationHubTemplate data={macclesfieldHub} />
    </>
  );
}
