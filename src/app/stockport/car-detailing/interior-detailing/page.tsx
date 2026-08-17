export const dynamic = 'force-static';
export const revalidate = 86400;
import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingStockport } from '@/data/stockport/car-detailing/interior-detailing';

export const metadata: Metadata = {
  title: interiorDetailingStockport.seo.title,
  description: interiorDetailingStockport.seo.description,
  keywords: interiorDetailingStockport.seo.keywords,
  alternates: { canonical: interiorDetailingStockport.seo.canonical },
};

export default function StockportInteriorDetailingPage() {
  return <ServicePageTemplate data={interiorDetailingStockport} location="Stockport" />;
}
