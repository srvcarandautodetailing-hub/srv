import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingCongleton } from '@/data/congleton/car-detailing/interior-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorDetailingCongleton.seo.title,
  description: interiorDetailingCongleton.seo.description,
  keywords: interiorDetailingCongleton.seo.keywords,
  alternates: {
    canonical: interiorDetailingCongleton.seo.canonical,
    languages: { 'en-GB': interiorDetailingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonInteriorDetailingPage() {
  return <ServicePageTemplate data={interiorDetailingCongleton} location="Congleton" />;
}
