import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalCongleton } from '@/data/congleton/car-valeting/pet-hair-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: petHairRemovalCongleton.seo.title,
  description: petHairRemovalCongleton.seo.description,
  keywords: petHairRemovalCongleton.seo.keywords,
  alternates: {
    canonical: petHairRemovalCongleton.seo.canonical,
    languages: { 'en-GB': petHairRemovalCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonPetHairRemovalPage() {
  return <ServicePageTemplate data={petHairRemovalCongleton} location="Congleton" />;
}
