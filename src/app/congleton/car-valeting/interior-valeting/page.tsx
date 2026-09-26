import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingCongleton } from '@/data/congleton/car-valeting/interior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorValetingCongleton.seo.title,
  description: interiorValetingCongleton.seo.description,
  keywords: interiorValetingCongleton.seo.keywords,
  alternates: {
    canonical: interiorValetingCongleton.seo.canonical,
    languages: { 'en-GB': interiorValetingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonInteriorValetingPage() {
  return <ServicePageTemplate data={interiorValetingCongleton} location="Congleton" />;
}
