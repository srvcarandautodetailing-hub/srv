import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningCongleton } from '@/data/congleton/car-detailing/leather-conditioning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: leatherConditioningCongleton.seo.title,
  description: leatherConditioningCongleton.seo.description,
  keywords: leatherConditioningCongleton.seo.keywords,
  alternates: {
    canonical: leatherConditioningCongleton.seo.canonical,
    languages: { 'en-GB': leatherConditioningCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonLeatherConditioningPage() {
  return <ServicePageTemplate data={leatherConditioningCongleton} location="Congleton" />;
}
