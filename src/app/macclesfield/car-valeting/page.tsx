import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { macclesfieldCarValetingPillar } from '@/data/macclesfield/car-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: macclesfieldCarValetingPillar.seo.title,
  description: macclesfieldCarValetingPillar.seo.description,
  keywords: macclesfieldCarValetingPillar.seo.keywords,
  alternates: {
    canonical: macclesfieldCarValetingPillar.seo.canonical,
    languages: { 'en-GB': macclesfieldCarValetingPillar.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldCarValetingPage() {
  return <PillarPageTemplate data={macclesfieldCarValetingPillar} location="Macclesfield" />;
}
