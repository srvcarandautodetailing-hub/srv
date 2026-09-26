import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AreaPageTemplate } from '@/components/pages/AreaPageTemplate';
import { getCongletonAreaBySlug, getAllCongletonAreaSlugs } from '@/data/congleton/areas/areas-data';
import { breadcrumbJsonLd, HOME, CONGLETON, CONGLETON_AREAS, BASE, slugToName } from '@/lib/breadcrumb';

export const dynamic = 'force-static';
export const revalidate = 86400;

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return getAllCongletonAreaSlugs().map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const data = getCongletonAreaBySlug(area);
  if (!data) return {};
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: data.seo.canonical,
      languages: { 'en-GB': data.seo.canonical },
    },
    robots: { index: true, follow: true },
    other: {
      'geo.region': 'GB-CHE',
      'geo.placename': `${data.name}, Congleton`,
      'geo.position': `${data.coordinates.latitude};${data.coordinates.longitude}`,
      'ICBM': `${data.coordinates.latitude}, ${data.coordinates.longitude}`,
    },
  };
}

export default async function CongletonAreaPage({ params }: Props) {
  const { area } = await params;
  const data = getCongletonAreaBySlug(area);
  if (!data) notFound();

  const crumbs = breadcrumbJsonLd([
    HOME,
    CONGLETON,
    CONGLETON_AREAS,
    { name: slugToName(area), url: `${BASE}/congleton/areas/${area}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <AreaPageTemplate data={data} />
    </>
  );
}
