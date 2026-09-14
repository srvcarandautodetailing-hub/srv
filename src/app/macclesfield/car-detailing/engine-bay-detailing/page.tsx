import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingMacclesfield } from '@/data/macclesfield/car-detailing/engine-bay-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: engineBayDetailingMacclesfield.seo.title,
  description: engineBayDetailingMacclesfield.seo.description,
  keywords: engineBayDetailingMacclesfield.seo.keywords,
  alternates: {
    canonical: engineBayDetailingMacclesfield.seo.canonical,
    languages: { 'en-GB': engineBayDetailingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldEngineBayDetailingPage() {
  return <ServicePageTemplate data={engineBayDetailingMacclesfield} location="Macclesfield" />;
}
