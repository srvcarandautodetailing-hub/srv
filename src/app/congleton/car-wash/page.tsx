import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { carWashCongleton } from '@/data/congleton/car-wash';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: carWashCongleton.seo.title,
  description: carWashCongleton.seo.description,
  keywords: carWashCongleton.seo.keywords,
  alternates: {
    canonical: carWashCongleton.seo.canonical,
    languages: { 'en-GB': carWashCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonCarWashPage() {
  return <ServicePageTemplate data={carWashCongleton} location="Congleton" />;
}
