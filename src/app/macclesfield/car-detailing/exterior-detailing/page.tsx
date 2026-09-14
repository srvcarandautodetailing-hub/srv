import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingMacclesfield } from '@/data/macclesfield/car-detailing/exterior-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorDetailingMacclesfield.seo.title,
  description: exteriorDetailingMacclesfield.seo.description,
  keywords: exteriorDetailingMacclesfield.seo.keywords,
  alternates: {
    canonical: exteriorDetailingMacclesfield.seo.canonical,
    languages: { 'en-GB': exteriorDetailingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldExteriorDetailingPage() {
  return <ServicePageTemplate data={exteriorDetailingMacclesfield} location="Macclesfield" />;
}
