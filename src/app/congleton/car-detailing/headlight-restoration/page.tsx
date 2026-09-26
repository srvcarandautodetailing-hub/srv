import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationCongleton } from '@/data/congleton/car-detailing/headlight-restoration';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: headlightRestorationCongleton.seo.title,
  description: headlightRestorationCongleton.seo.description,
  keywords: headlightRestorationCongleton.seo.keywords,
  alternates: {
    canonical: headlightRestorationCongleton.seo.canonical,
    languages: { 'en-GB': headlightRestorationCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonHeadlightRestorationPage() {
  return <ServicePageTemplate data={headlightRestorationCongleton} location="Congleton" />;
}
