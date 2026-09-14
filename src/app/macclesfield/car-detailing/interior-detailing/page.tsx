import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingMacclesfield } from '@/data/macclesfield/car-detailing/interior-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorDetailingMacclesfield.seo.title,
  description: interiorDetailingMacclesfield.seo.description,
  keywords: interiorDetailingMacclesfield.seo.keywords,
  alternates: {
    canonical: interiorDetailingMacclesfield.seo.canonical,
    languages: { 'en-GB': interiorDetailingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldInteriorDetailingPage() {
  return <ServicePageTemplate data={interiorDetailingMacclesfield} location="Macclesfield" />;
}
