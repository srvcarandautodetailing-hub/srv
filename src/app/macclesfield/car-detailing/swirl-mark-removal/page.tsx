import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalMacclesfield } from '@/data/macclesfield/car-detailing/swirl-mark-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: swirlMarkRemovalMacclesfield.seo.title,
  description: swirlMarkRemovalMacclesfield.seo.description,
  keywords: swirlMarkRemovalMacclesfield.seo.keywords,
  alternates: {
    canonical: swirlMarkRemovalMacclesfield.seo.canonical,
    languages: { 'en-GB': swirlMarkRemovalMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldSwirlMarkRemovalPage() {
  return <ServicePageTemplate data={swirlMarkRemovalMacclesfield} location="Macclesfield" />;
}
