import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingWarrington } from '@/data/warrington/car-valeting/interior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorValetingWarrington.seo.title,
  description: interiorValetingWarrington.seo.description,
  keywords: interiorValetingWarrington.seo.keywords,
  alternates: {
    canonical: interiorValetingWarrington.seo.canonical,
    languages: { 'en-GB': interiorValetingWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function InteriorValetingWarringtonPage() {
  return <ServicePageTemplate data={interiorValetingWarrington} location="Warrington" />;
}
