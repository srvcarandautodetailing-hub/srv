import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationMacclesfield } from '@/data/macclesfield/car-detailing/headlight-restoration';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: headlightRestorationMacclesfield.seo.title,
  description: headlightRestorationMacclesfield.seo.description,
  keywords: headlightRestorationMacclesfield.seo.keywords,
  alternates: {
    canonical: headlightRestorationMacclesfield.seo.canonical,
    languages: { 'en-GB': headlightRestorationMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldHeadlightRestorationPage() {
  return <ServicePageTemplate data={headlightRestorationMacclesfield} location="Macclesfield" />;
}
