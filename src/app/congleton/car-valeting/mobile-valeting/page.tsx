import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingCongleton } from '@/data/congleton/car-valeting/mobile-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: mobileValetingCongleton.seo.title,
  description: mobileValetingCongleton.seo.description,
  keywords: mobileValetingCongleton.seo.keywords,
  alternates: {
    canonical: mobileValetingCongleton.seo.canonical,
    languages: { 'en-GB': mobileValetingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonMobileValetingPage() {
  return <ServicePageTemplate data={mobileValetingCongleton} location="Congleton" />;
}
