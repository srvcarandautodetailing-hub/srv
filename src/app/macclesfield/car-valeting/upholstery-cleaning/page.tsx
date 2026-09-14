import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningMacclesfield } from '@/data/macclesfield/car-valeting/upholstery-cleaning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: upholsteryCleaningMacclesfield.seo.title,
  description: upholsteryCleaningMacclesfield.seo.description,
  keywords: upholsteryCleaningMacclesfield.seo.keywords,
  alternates: {
    canonical: upholsteryCleaningMacclesfield.seo.canonical,
    languages: { 'en-GB': upholsteryCleaningMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldUpholsteryCleaningPage() {
  return <ServicePageTemplate data={upholsteryCleaningMacclesfield} location="Macclesfield" />;
}
