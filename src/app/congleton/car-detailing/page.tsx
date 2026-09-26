import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { congletonCarDetailingPillar } from '@/data/congleton/car-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: congletonCarDetailingPillar.seo.title,
  description: congletonCarDetailingPillar.seo.description,
  keywords: congletonCarDetailingPillar.seo.keywords,
  alternates: {
    canonical: congletonCarDetailingPillar.seo.canonical,
    languages: { 'en-GB': congletonCarDetailingPillar.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonCarDetailingPage() {
  return <PillarPageTemplate data={congletonCarDetailingPillar} location="Congleton" />;
}
