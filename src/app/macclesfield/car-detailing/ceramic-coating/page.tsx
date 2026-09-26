import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingMacclesfield } from '@/data/macclesfield/car-detailing/ceramic-coating';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: ceramicCoatingMacclesfield.seo.title,
  description: ceramicCoatingMacclesfield.seo.description,
  keywords: ceramicCoatingMacclesfield.seo.keywords,
  alternates: {
    canonical: ceramicCoatingMacclesfield.seo.canonical,
    languages: { 'en-GB': ceramicCoatingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldCeramicCoatingPage() {
  return <ServicePageTemplate data={ceramicCoatingMacclesfield} location="Macclesfield" />;
}
