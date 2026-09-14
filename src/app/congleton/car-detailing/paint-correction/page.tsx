import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionCongleton } from '@/data/congleton/car-detailing/paint-correction';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: paintCorrectionCongleton.seo.title,
  description: paintCorrectionCongleton.seo.description,
  keywords: paintCorrectionCongleton.seo.keywords,
  alternates: {
    canonical: paintCorrectionCongleton.seo.canonical,
    languages: { 'en-GB': paintCorrectionCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonPaintCorrectionPage() {
  return <ServicePageTemplate data={paintCorrectionCongleton} location="Congleton" />;
}
