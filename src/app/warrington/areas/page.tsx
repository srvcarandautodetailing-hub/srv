import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { CtaSection } from '@/components/shared/CtaSection';
import { warringtonAreas } from '@/data/warrington/areas/areas-data';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Areas We Serve in Warrington | Car Detailing & Valeting | SRV Detailing',
  description:
    'SRV Detailing provides mobile car detailing and valeting across Warrington and surrounding Cheshire — Stockton Heath, Lymm, Birchwood, Great Sankey, and Grappenhall. WA1–WA5 coverage.',
  keywords: ['car detailing warrington areas', 'mobile valeting warrington', 'car care wa1 wa2 wa3 wa4 wa5 cheshire'],
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/warrington/areas',
    languages: { 'en-GB': 'https://www.srvdetailing.co.uk/warrington/areas' },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

const areasSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.srvdetailing.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Warrington', item: 'https://www.srvdetailing.co.uk/warrington' },
        { '@type': 'ListItem', position: 3, name: 'Areas', item: 'https://www.srvdetailing.co.uk/warrington/areas' },
      ],
    },
    {
      '@type': 'WebPage',
      url: 'https://www.srvdetailing.co.uk/warrington/areas',
      name: 'Areas We Serve in Warrington | SRV Detailing',
      isPartOf: { '@id': 'https://www.srvdetailing.co.uk/#website' },
    },
  ],
};

export default function WarringtonAreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }} />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li><Link href="/warrington" className="hover:text-primary">Warrington</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li className="text-foreground font-medium">Areas</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Areas We Serve Across <span className="text-primary">Warrington & WA1–WA5</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional mobile car detailing and valeting across Warrington, Stockton Heath, Lymm, Birchwood, Great Sankey, and Grappenhall. Select your area below.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="text-yellow-500">★★★★★</span> 5-star rated</span>
            <span>·</span>
            <span>Fully insured</span>
            <span>·</span>
            <span>WA1–WA5</span>
            <span>·</span>
            <span>Same week available</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-16">
          {warringtonAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/warrington/areas/${area.slug}`}
              className="group bg-white hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-xl p-5 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {area.postcodeAreas.join(', ')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-bold text-foreground mb-4">About Our Warrington & Cheshire Coverage</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SRV Detailing covers all WA1–WA5 postcodes — Warrington town centre, Stockton Heath, Lymm, Birchwood, Great Sankey, Penketh, Grappenhall, Thelwall, Padgate, Fearnhead, Winwick, and Culcheth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mobile unit is fully self-contained. We bring our own water, power, and all professional equipment. You need nothing at your property except access to your vehicle and a parking space alongside it. No call-out fees for WA1–WA4 postcodes.
          </p>
        </div>

        <CtaSection serviceName="Car Care in Warrington" />
      </main>
    </div>
  );
}
