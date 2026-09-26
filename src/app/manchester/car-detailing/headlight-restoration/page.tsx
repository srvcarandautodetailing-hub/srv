export const dynamic = 'force-static';
export const revalidate = 86400;
import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationManchester } from '@/data/manchester/car-detailing/headlight-restoration';

export const metadata: Metadata = {
  title: headlightRestorationManchester.seo.title,
  description: headlightRestorationManchester.seo.description,
  keywords: headlightRestorationManchester.seo.keywords,
  alternates: { canonical: headlightRestorationManchester.seo.canonical },
};

export default function HeadlightRestorationPage() {
  return <ServicePageTemplate data={headlightRestorationManchester} location="Manchester" />;
}
