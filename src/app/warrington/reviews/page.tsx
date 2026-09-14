import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { CtaSection } from '@/components/shared/CtaSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Customer Reviews Warrington | SRV Detailing',
  description:
    'Read customer reviews for SRV Detailing in Warrington. 5-star rated mobile car detailing and valeting service across WA1–WA5 — serving Stockton Heath, Lymm, Birchwood, Great Sankey, and Grappenhall.',
  keywords: ['srv detailing reviews warrington', 'car detailing reviews warrington', 'car valeting reviews warrington wa1 wa4 wa5'],
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/warrington/reviews',
    languages: { 'en-GB': 'https://www.srvdetailing.co.uk/warrington/reviews' },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
  openGraph: {
    title: 'Customer Reviews Warrington | SRV Detailing',
    description: 'Read customer reviews for SRV Detailing in Warrington. 5-star rated mobile car detailing and valeting service across WA1–WA5.',
    url: 'https://www.srvdetailing.co.uk/warrington/reviews',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [{ url: '/mobile-van.webp', width: 1200, height: 630, alt: 'SRV Detailing mobile valeting — Warrington WA1–WA5' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews Warrington | SRV Detailing',
    description: '5-star rated mobile car detailing and valeting in Warrington. See what our customers say.',
    images: ['/mobile-van.webp'],
  },
};

const reviews = [
  {
    name: 'Daniel F.',
    location: 'Lymm, WA13',
    service: 'Ceramic Coating',
    rating: 5,
    text: "Had my Range Rover Sport ceramic coated after years of M6 motorway miles. The paint correction beforehand removed swirling I thought was permanent, and the coating has transformed how the car looks. SRV were professional throughout and explained every stage clearly.",
  },
  {
    name: 'Rachel K.',
    location: 'Stockton Heath, WA4',
    service: 'Full Valet',
    rating: 5,
    text: "Regular customer for our BMW 5 Series — quarterly full valets since earlier this year. Always punctual, always immaculate results, always discreet on the driveway in Stockton Heath. Couldn't recommend more highly.",
  },
  {
    name: 'Mark T.',
    location: 'Birchwood, WA3',
    service: 'Paint Correction',
    rating: 5,
    text: "My Audi Q5 had swirl marks from the car wash at the retail park. After a two-stage paint correction from SRV, the metallic paint looks as deep and clear as when the car was new. The difference in direct sunlight is extraordinary. Booked the ceramic coating straight afterwards.",
  },
  {
    name: 'Louise B.',
    location: 'Great Sankey, WA5',
    service: 'Pet Hair Removal',
    rating: 5,
    text: "Two Labradors in a Volvo XC90 — the boot and rear seats were completely covered in hair and smelt of wet dog. SRV extracted everything and deodorised the whole interior. It genuinely smells and looks new again. The team was brilliant.",
  },
  {
    name: 'Neil W.',
    location: 'Grappenhall, WA4',
    service: 'Interior Detailing',
    rating: 5,
    text: "Used SRV for a full interior detail before putting my Mercedes E-Class on the market. The leather conditioning in particular was excellent — the seats went from looking tired to genuinely showroom condition. The car sold quickly and at a better price than I expected.",
  },
  {
    name: 'Claire H.',
    location: 'Warrington Town Centre, WA1',
    service: 'New Car Protection',
    rating: 5,
    text: "Booked new car protection for a new Kia Sportage within the first week of collection. SRV applied a ceramic coating after a light prep — the M62 salt and motorway grime just beads straight off. Wish I'd done it on every car I've owned.",
  },
];

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.srvdetailing.co.uk/#business',
      name: 'SRV Detailing',
      telephone: '+447375759686',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Globe House, Globe Lane',
        addressLocality: 'Dukinfield',
        postalCode: 'SK16 4RG',
        addressCountry: 'GB',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: String(reviews.length),
        bestRating: '5',
        worstRating: '1',
      },
      review: reviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
        reviewBody: r.text,
        name: r.service,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.srvdetailing.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Warrington', item: 'https://www.srvdetailing.co.uk/warrington' },
        { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://www.srvdetailing.co.uk/warrington/reviews' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.srvdetailing.co.uk/warrington/reviews#webpage',
      url: 'https://www.srvdetailing.co.uk/warrington/reviews',
      name: 'Customer Reviews Warrington | SRV Detailing',
      isPartOf: { '@id': 'https://www.srvdetailing.co.uk/#website' },
      breadcrumb: { '@id': 'https://www.srvdetailing.co.uk/warrington/reviews#breadcrumb' },
    },
  ],
};

export default function WarringtonReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li><Link href="/warrington" className="hover:text-primary">Warrington</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li className="text-foreground font-medium">Reviews</li>
            </ol>
          </nav>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Warrington Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our Warrington and WA1–WA5 customers say about our mobile car detailing and valeting service — covering Stockton Heath, Lymm, Birchwood, Great Sankey, and Grappenhall.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm text-sm text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span>·</span>
            <span>★★★★★ | Insured | WA1–WA5 | Same Week</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-foreground">{review.name}</p>
              <p className="text-sm text-muted-foreground">
                {review.location} &middot; {review.service}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a
            href="https://share.google/AZFyOF2xIb3XaZetX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            See all our Google Reviews
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Why Warrington Trusts SRV Detailing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-sm">
            {[
              { label: '22+ Years', sub: 'Professional experience' },
              { label: 'Fully Insured', sub: 'Motor trade coverage' },
              { label: 'WA1–WA5', sub: 'Full Warrington coverage' },
              { label: 'Same-Week Available', sub: 'Fast local booking' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-bold text-primary text-lg">{item.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaSection serviceName="Car Care in Warrington" />
      </main>
    </div>
  );
}
