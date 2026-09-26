import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetCongleton } from '@/data/congleton/car-valeting/mini-valet';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: miniValetCongleton.seo.title,
  description: miniValetCongleton.seo.description,
  keywords: miniValetCongleton.seo.keywords,
  alternates: {
    canonical: miniValetCongleton.seo.canonical,
    languages: { 'en-GB': miniValetCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonMiniValetPage() {
  return <ServicePageTemplate data={miniValetCongleton} location="Congleton" />;
}
