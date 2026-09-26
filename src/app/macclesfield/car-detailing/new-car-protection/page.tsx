import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionMacclesfield } from '@/data/macclesfield/car-detailing/new-car-protection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: newCarProtectionMacclesfield.seo.title,
  description: newCarProtectionMacclesfield.seo.description,
  keywords: newCarProtectionMacclesfield.seo.keywords,
  alternates: {
    canonical: newCarProtectionMacclesfield.seo.canonical,
    languages: { 'en-GB': newCarProtectionMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldNewCarProtectionPage() {
  return <ServicePageTemplate data={newCarProtectionMacclesfield} location="Macclesfield" />;
}
