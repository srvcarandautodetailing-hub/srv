import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationWarrington } from '@/data/warrington/car-detailing/headlight-restoration';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: headlightRestorationWarrington.seo.title,
  description: headlightRestorationWarrington.seo.description,
  keywords: headlightRestorationWarrington.seo.keywords,
  alternates: {
    canonical: headlightRestorationWarrington.seo.canonical,
    languages: { 'en-GB': headlightRestorationWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function HeadlightRestorationWarringtonPage() {
  return <ServicePageTemplate data={headlightRestorationWarrington} location="Warrington" />;
}
