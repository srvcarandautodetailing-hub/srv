import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalWarrington } from '@/data/warrington/car-detailing/swirl-mark-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: swirlMarkRemovalWarrington.seo.title,
  description: swirlMarkRemovalWarrington.seo.description,
  keywords: swirlMarkRemovalWarrington.seo.keywords,
  alternates: {
    canonical: swirlMarkRemovalWarrington.seo.canonical,
    languages: { 'en-GB': swirlMarkRemovalWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function SwirlMarkRemovalWarringtonPage() {
  return <ServicePageTemplate data={swirlMarkRemovalWarrington} location="Warrington" />;
}
