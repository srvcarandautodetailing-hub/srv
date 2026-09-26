import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingWarrington } from '@/data/warrington/car-valeting/exterior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorValetingWarrington.seo.title,
  description: exteriorValetingWarrington.seo.description,
  keywords: exteriorValetingWarrington.seo.keywords,
  alternates: {
    canonical: exteriorValetingWarrington.seo.canonical,
    languages: { 'en-GB': exteriorValetingWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function ExteriorValetingWarringtonPage() {
  return <ServicePageTemplate data={exteriorValetingWarrington} location="Warrington" />;
}
