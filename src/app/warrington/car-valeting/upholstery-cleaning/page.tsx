import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningWarrington } from '@/data/warrington/car-valeting/upholstery-cleaning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: upholsteryCleaningWarrington.seo.title,
  description: upholsteryCleaningWarrington.seo.description,
  keywords: upholsteryCleaningWarrington.seo.keywords,
  alternates: {
    canonical: upholsteryCleaningWarrington.seo.canonical,
    languages: { 'en-GB': upholsteryCleaningWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function UpholsteryCleaningWarringtonPage() {
  return <ServicePageTemplate data={upholsteryCleaningWarrington} location="Warrington" />;
}
