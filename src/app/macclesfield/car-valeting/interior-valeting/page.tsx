import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingMacclesfield } from '@/data/macclesfield/car-valeting/interior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorValetingMacclesfield.seo.title,
  description: interiorValetingMacclesfield.seo.description,
  keywords: interiorValetingMacclesfield.seo.keywords,
  alternates: {
    canonical: interiorValetingMacclesfield.seo.canonical,
    languages: { 'en-GB': interiorValetingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldInteriorValetingPage() {
  return <ServicePageTemplate data={interiorValetingMacclesfield} location="Macclesfield" />;
}
