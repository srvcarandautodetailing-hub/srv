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
        url: '/images/gallery/srv-detailing-full-commercial-van-wrap-vw-caddy-mcr-smart-repairs-manchester.webp',
        width: 2040,
        height: 1536,
        alt: 'Vehicle wrapping Manchester — full commercial van wrap by SRV Detailing, Stockport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: vehicleWrappingManchester.seo.title,
    description: vehicleWrappingManchester.seo.description,
    images: ['/images/gallery/srv-detailing-full-commercial-van-wrap-vw-caddy-mcr-smart-repairs-manchester.webp'],
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
