import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalCongleton } from '@/data/congleton/car-detailing/swirl-mark-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: swirlMarkRemovalCongleton.seo.title,
  description: swirlMarkRemovalCongleton.seo.description,
  keywords: swirlMarkRemovalCongleton.seo.keywords,
  alternates: {
    canonical: swirlMarkRemovalCongleton.seo.canonical,
    languages: { 'en-GB': swirlMarkRemovalCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonSwirlMarkRemovalPage() {
  return <ServicePageTemplate data={swirlMarkRemovalCongleton} location="Congleton" />;
}
