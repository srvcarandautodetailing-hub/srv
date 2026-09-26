export const dynamic = 'force-static';
export const revalidate = 86400;
import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { vehicleWrappingManchester } from '@/data/vehicle-wrapping/vehicle-wrapping-manchester';

export const metadata: Metadata = {
  title: vehicleWrappingManchester.seo.title,
  description: vehicleWrappingManchester.seo.description,
  keywords: vehicleWrappingManchester.seo.keywords,
  alternates: {
    canonical: vehicleWrappingManchester.seo.canonical,
  },
  openGraph: {
    title: vehicleWrappingManchester.seo.title,
    description: vehicleWrappingManchester.seo.description,
    url: vehicleWrappingManchester.seo.canonical,
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [
      {
        url: '/images/gallery/srv-detailing-bmw-m4-competition-exterior-side-rear-manchester-01.webp',
        width: 1600,
        height: 1200,
        alt: 'SRV Detailing vehicle wrapping and custom vehicle graphics — Manchester and Stockport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: vehicleWrappingManchester.seo.title,
    description: vehicleWrappingManchester.seo.description,
    images: ['/images/gallery/srv-detailing-bmw-m4-competition-exterior-side-rear-manchester-01.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function VehicleWrappingManchesterPage() {
  return <ServicePageTemplate data={vehicleWrappingManchester} location="Manchester" />;
}
