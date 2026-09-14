import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetCongleton } from '@/data/congleton/car-valeting/full-valet';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: fullValetCongleton.seo.title,
  description: fullValetCongleton.seo.description,
  keywords: fullValetCongleton.seo.keywords,
  alternates: {
    canonical: fullValetCongleton.seo.canonical,
    languages: { 'en-GB': fullValetCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonFullValetPage() {
  return <ServicePageTemplate data={fullValetCongleton} location="Congleton" />;
}
