import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingMacclesfield } from '@/data/macclesfield/car-valeting/mobile-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: mobileValetingMacclesfield.seo.title,
  description: mobileValetingMacclesfield.seo.description,
  keywords: mobileValetingMacclesfield.seo.keywords,
  alternates: {
    canonical: mobileValetingMacclesfield.seo.canonical,
    languages: { 'en-GB': mobileValetingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldMobileValetingPage() {
  return <ServicePageTemplate data={mobileValetingMacclesfield} location="Macclesfield" />;
}
