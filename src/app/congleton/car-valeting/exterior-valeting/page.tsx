import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingCongleton } from '@/data/congleton/car-valeting/exterior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorValetingCongleton.seo.title,
  description: exteriorValetingCongleton.seo.description,
  keywords: exteriorValetingCongleton.seo.keywords,
  alternates: {
    canonical: exteriorValetingCongleton.seo.canonical,
    languages: { 'en-GB': exteriorValetingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonExteriorValetingPage() {
  return <ServicePageTemplate data={exteriorValetingCongleton} location="Congleton" />;
}
