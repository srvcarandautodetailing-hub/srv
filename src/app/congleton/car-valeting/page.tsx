import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { congletonCarValetingPillar } from '@/data/congleton/car-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: congletonCarValetingPillar.seo.title,
  description: congletonCarValetingPillar.seo.description,
  keywords: congletonCarValetingPillar.seo.keywords,
  alternates: {
    canonical: congletonCarValetingPillar.seo.canonical,
    languages: { 'en-GB': congletonCarValetingPillar.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonCarValetingPage() {
  return <PillarPageTemplate data={congletonCarValetingPillar} location="Congleton" />;
}
