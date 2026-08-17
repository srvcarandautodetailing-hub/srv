export const dynamic = 'force-static';
export const revalidate = 86400;
import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingStockport } from '@/data/stockport/car-detailing/exterior-detailing';

export const metadata: Metadata = {
  title: exteriorDetailingStockport.seo.title,
  description: exteriorDetailingStockport.seo.description,
  keywords: exteriorDetailingStockport.seo.keywords,
  alternates: { canonical: exteriorDetailingStockport.seo.canonical },
};

export default function StockportExteriorDetailingPage() {
  return <ServicePageTemplate data={exteriorDetailingStockport} location="Stockport" />;
}
