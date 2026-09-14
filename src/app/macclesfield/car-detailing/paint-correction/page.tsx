import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionMacclesfield } from '@/data/macclesfield/car-detailing/paint-correction';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: paintCorrectionMacclesfield.seo.title,
  description: paintCorrectionMacclesfield.seo.description,
  keywords: paintCorrectionMacclesfield.seo.keywords,
  alternates: {
    canonical: paintCorrectionMacclesfield.seo.canonical,
    languages: { 'en-GB': paintCorrectionMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldPaintCorrectionPage() {
  return <ServicePageTemplate data={paintCorrectionMacclesfield} location="Macclesfield" />;
}
