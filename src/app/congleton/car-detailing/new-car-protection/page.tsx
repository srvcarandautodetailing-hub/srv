import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionCongleton } from '@/data/congleton/car-detailing/new-car-protection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: newCarProtectionCongleton.seo.title,
  description: newCarProtectionCongleton.seo.description,
  keywords: newCarProtectionCongleton.seo.keywords,
  alternates: {
    canonical: newCarProtectionCongleton.seo.canonical,
    languages: { 'en-GB': newCarProtectionCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonNewCarProtectionPage() {
  return <ServicePageTemplate data={newCarProtectionCongleton} location="Congleton" />;
}
