import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalMacclesfield } from '@/data/macclesfield/car-valeting/pet-hair-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: petHairRemovalMacclesfield.seo.title,
  description: petHairRemovalMacclesfield.seo.description,
  keywords: petHairRemovalMacclesfield.seo.keywords,
  alternates: {
    canonical: petHairRemovalMacclesfield.seo.canonical,
    languages: { 'en-GB': petHairRemovalMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldPetHairRemovalPage() {
  return <ServicePageTemplate data={petHairRemovalMacclesfield} location="Macclesfield" />;
}
