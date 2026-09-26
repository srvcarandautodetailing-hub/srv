import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingCongleton } from '@/data/congleton/car-detailing/engine-bay-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: engineBayDetailingCongleton.seo.title,
  description: engineBayDetailingCongleton.seo.description,
  keywords: engineBayDetailingCongleton.seo.keywords,
  alternates: {
    canonical: engineBayDetailingCongleton.seo.canonical,
    languages: { 'en-GB': engineBayDetailingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonEngineBayDetailingPage() {
  return <ServicePageTemplate data={engineBayDetailingCongleton} location="Congleton" />;
}
