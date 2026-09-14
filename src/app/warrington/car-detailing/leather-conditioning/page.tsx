import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningWarrington } from '@/data/warrington/car-detailing/leather-conditioning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: leatherConditioningWarrington.seo.title,
  description: leatherConditioningWarrington.seo.description,
  keywords: leatherConditioningWarrington.seo.keywords,
  alternates: {
    canonical: leatherConditioningWarrington.seo.canonical,
    languages: { 'en-GB': leatherConditioningWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function LeatherConditioningWarringtonPage() {
  return <ServicePageTemplate data={leatherConditioningWarrington} location="Warrington" />;
}
