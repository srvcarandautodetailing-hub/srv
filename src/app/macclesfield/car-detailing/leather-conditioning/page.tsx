import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningMacclesfield } from '@/data/macclesfield/car-detailing/leather-conditioning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: leatherConditioningMacclesfield.seo.title,
  description: leatherConditioningMacclesfield.seo.description,
  keywords: leatherConditioningMacclesfield.seo.keywords,
  alternates: {
    canonical: leatherConditioningMacclesfield.seo.canonical,
    languages: { 'en-GB': leatherConditioningMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldLeatherConditioningPage() {
  return <ServicePageTemplate data={leatherConditioningMacclesfield} location="Macclesfield" />;
}
