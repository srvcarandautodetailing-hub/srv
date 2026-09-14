import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { carWashWarrington } from '@/data/warrington/car-wash';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: carWashWarrington.seo.title,
  description: carWashWarrington.seo.description,
  keywords: carWashWarrington.seo.keywords,
  alternates: {
    canonical: carWashWarrington.seo.canonical,
    languages: { 'en-GB': carWashWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function WarringtonCarWashPage() {
  return <ServicePageTemplate data={carWashWarrington} location="Warrington" />;
}
