import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingCongleton } from '@/data/congleton/car-detailing/ceramic-coating';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: ceramicCoatingCongleton.seo.title,
  description: ceramicCoatingCongleton.seo.description,
  keywords: ceramicCoatingCongleton.seo.keywords,
  alternates: {
    canonical: ceramicCoatingCongleton.seo.canonical,
    languages: { 'en-GB': ceramicCoatingCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonCeramicCoatingPage() {
  return <ServicePageTemplate data={ceramicCoatingCongleton} location="Congleton" />;
}
