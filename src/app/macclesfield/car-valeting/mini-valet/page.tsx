import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetMacclesfield } from '@/data/macclesfield/car-valeting/mini-valet';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: miniValetMacclesfield.seo.title,
  description: miniValetMacclesfield.seo.description,
  keywords: miniValetMacclesfield.seo.keywords,
  alternates: {
    canonical: miniValetMacclesfield.seo.canonical,
    languages: { 'en-GB': miniValetMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldMiniValetPage() {
  return <ServicePageTemplate data={miniValetMacclesfield} location="Macclesfield" />;
}
