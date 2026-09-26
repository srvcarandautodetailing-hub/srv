import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingWarrington } from '@/data/warrington/car-detailing/engine-bay-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: engineBayDetailingWarrington.seo.title,
  description: engineBayDetailingWarrington.seo.description,
  keywords: engineBayDetailingWarrington.seo.keywords,
  alternates: {
    canonical: engineBayDetailingWarrington.seo.canonical,
    languages: { 'en-GB': engineBayDetailingWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function EngineBayDetailingWarringtonPage() {
  return <ServicePageTemplate data={engineBayDetailingWarrington} location="Warrington" />;
}
