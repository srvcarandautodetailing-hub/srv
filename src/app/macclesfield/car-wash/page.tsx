import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { carWashMacclesfield } from '@/data/macclesfield/car-wash';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: carWashMacclesfield.seo.title,
  description: carWashMacclesfield.seo.description,
  keywords: carWashMacclesfield.seo.keywords,
  alternates: {
    canonical: carWashMacclesfield.seo.canonical,
    languages: { 'en-GB': carWashMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldCarWashPage() {
  return <ServicePageTemplate data={carWashMacclesfield} location="Macclesfield" />;
}
