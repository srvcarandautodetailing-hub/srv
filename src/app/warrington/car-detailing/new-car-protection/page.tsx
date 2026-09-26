import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionWarrington } from '@/data/warrington/car-detailing/new-car-protection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: newCarProtectionWarrington.seo.title,
  description: newCarProtectionWarrington.seo.description,
  keywords: newCarProtectionWarrington.seo.keywords,
  alternates: {
    canonical: newCarProtectionWarrington.seo.canonical,
    languages: { 'en-GB': newCarProtectionWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function NewCarProtectionWarringtonPage() {
  return <ServicePageTemplate data={newCarProtectionWarrington} location="Warrington" />;
}
