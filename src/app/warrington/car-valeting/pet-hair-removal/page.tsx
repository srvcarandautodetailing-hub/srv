import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalWarrington } from '@/data/warrington/car-valeting/pet-hair-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: petHairRemovalWarrington.seo.title,
  description: petHairRemovalWarrington.seo.description,
  keywords: petHairRemovalWarrington.seo.keywords,
  alternates: {
    canonical: petHairRemovalWarrington.seo.canonical,
    languages: { 'en-GB': petHairRemovalWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function PetHairRemovalWarringtonPage() {
  return <ServicePageTemplate data={petHairRemovalWarrington} location="Warrington" />;
}
