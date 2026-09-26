import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningCongleton } from '@/data/congleton/car-valeting/upholstery-cleaning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: upholsteryCleaningCongleton.seo.title,
  description: upholsteryCleaningCongleton.seo.description,
  keywords: upholsteryCleaningCongleton.seo.keywords,
  alternates: {
    canonical: upholsteryCleaningCongleton.seo.canonical,
    languages: { 'en-GB': upholsteryCleaningCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonUpholsteryCleaningPage() {
  return <ServicePageTemplate data={upholsteryCleaningCongleton} location="Congleton" />;
}
