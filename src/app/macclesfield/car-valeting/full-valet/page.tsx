import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetMacclesfield } from '@/data/macclesfield/car-valeting/full-valet';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: fullValetMacclesfield.seo.title,
  description: fullValetMacclesfield.seo.description,
  keywords: fullValetMacclesfield.seo.keywords,
  alternates: {
    canonical: fullValetMacclesfield.seo.canonical,
    languages: { 'en-GB': fullValetMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldFullValetPage() {
  return <ServicePageTemplate data={fullValetMacclesfield} location="Macclesfield" />;
}
