export const dynamic = 'force-static';
export const revalidate = 86400;
import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningManchester } from '@/data/manchester/car-valeting/upholstery-cleaning';

export const metadata: Metadata = {
  title: upholsteryCleaningManchester.seo.title,
  description: upholsteryCleaningManchester.seo.description,
  keywords: upholsteryCleaningManchester.seo.keywords,
  alternates: { canonical: upholsteryCleaningManchester.seo.canonical },
};

export default function UpholsteryCleaningPage() {
  return <ServicePageTemplate data={upholsteryCleaningManchester} location="Manchester" />;
}
