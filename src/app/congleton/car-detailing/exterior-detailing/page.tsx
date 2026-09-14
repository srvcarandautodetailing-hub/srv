import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingCongleton } from '@/data/congleton/car-detailing/exterior-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorDetailingCongleton.seo.title,
  description: exteriorDetailingCongleton.seo.description,
  keywords: exteriorDetailingCongleton.seo.keywords,
  alternates: {
    canonical: exteriorDetailingCongleton.seo.canonical,
    languages: { 'en-GB': exteriorDetailingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonExteriorDetailingPage() {
  return <ServicePageTemplate data={exteriorDetailingCongleton} location="Congleton" />;
}
