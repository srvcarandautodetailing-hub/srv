import type { Metadata } from 'next';
import { LocationHubTemplate } from '@/components/pages/LocationHubTemplate';
import { congletonHub } from '@/data/congleton/hub';

export const dynamic = 'force-static';
export const revalidate = 86400;

// Supplemental LocalBusiness schema — uses @id to MERGE with root-layout entity.
// geo coordinates: Congleton town centre CW12 (53.1634, -2.2021)
const congletonPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.srvdetailing.co.uk/#business',
  name: 'SRV Detailing',
  url: 'https://www.srvdetailing.co.uk/congleton',
  telephone: '+447375759686',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Globe House, Globe Lane',
    addressLocality: 'Dukinfield',
    postalCode: 'SK16 4RG',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Congleton' },
    { '@type': 'AdministrativeArea', name: 'Cheshire East' },
    { '@type': 'Place', name: 'Sandbach' },
    { '@type': 'Place', name: 'Biddulph' },
    { '@type': 'Place', name: 'Alsager' },
    { '@type': 'Place', name: 'Holmes Chapel' },
    { '@type': 'Place', name: 'Middlewich' },
    { '@type': 'Place', name: 'Scholar Green' },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.1634',
    longitude: '-2.2021',
  },
};

export const metadata: Metadata = {
  title: congletonHub.seo.title,
  description: congletonHub.seo.description,
  keywords: congletonHub.seo.keywords,
  alternates: {
    canonical: congletonHub.seo.canonical,
    languages: { 'en-GB': congletonHub.seo.canonical, 'x-default': congletonHub.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
    'ICBM': '53.1634, -2.2021',
  },
  openGraph: {
    title: congletonHub.seo.title,
    description: congletonHub.seo.description,
    url: congletonHub.seo.canonical,
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [{ url: '/mobile-van.webp', width: 1200, height: 630, alt: 'SRV Detailing mobile car care — Congleton CW12' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: congletonHub.seo.title,
    description: congletonHub.seo.description,
    images: ['/mobile-van.webp'],
  },
};

export default function CongletonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(congletonPageSchema) }}
      />
      <LocationHubTemplate data={congletonHub} />
    </>
  );
}
