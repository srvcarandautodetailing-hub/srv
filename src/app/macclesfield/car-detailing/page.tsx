import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { macclesfieldCarDetailingPillar } from '@/data/macclesfield/car-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: macclesfieldCarDetailingPillar.seo.title,
  description: macclesfieldCarDetailingPillar.seo.description,
  keywords: macclesfieldCarDetailingPillar.seo.keywords,
  alternates: {
    canonical: macclesfieldCarDetailingPillar.seo.canonical,
    languages: { 'en-GB': macclesfieldCarDetailingPillar.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldCarDetailingPage() {
  return <PillarPageTemplate data={macclesfieldCarDetailingPillar} location="Macclesfield" />;
}
