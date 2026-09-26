import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { CtaSection } from '@/components/shared/CtaSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Customer Reviews Congleton | SRV Detailing',
  description:
    'Read customer reviews for SRV Detailing in Congleton. 5-star rated mobile car detailing and valeting service across CW12 and Cheshire East — specialists in prestige, classic, and rural vehicles.',
  keywords: ['srv detailing reviews congleton', 'car detailing reviews congleton', 'car valeting reviews congleton cw12'],
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/congleton/reviews',
    languages: { 'en-GB': 'https://www.srvdetailing.co.uk/congleton/reviews' },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
  openGraph: {
    title: 'Customer Reviews Congleton | SRV Detailing',
    description: 'Read customer reviews for SRV Detailing in Congleton. 5-star rated mobile car detailing and valeting across CW12.',
    url: 'https://www.srvdetailing.co.uk/congleton/reviews',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [{ url: '/mobile-van.webp', width: 1200, height: 630, alt: 'SRV Detailing mobile valeting — Congleton CW12' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews Congleton | SRV Detailing',
    description: '5-star rated mobile car detailing and valeting in Congleton. See what our customers say.',
    images: ['/mobile-van.webp'],
  },
};

// PLACEHOLDER: Replace with real customer reviews for Congleton.
// Names, locations, and testimonials below are illustrative only.
const reviews = [
  {
    name: 'David H.',
    location: 'Congleton, CW12',
    service: 'Ceramic Coating',
    rating: 5,
    text: "Had my Land Rover Defender ceramic coated ahead of another winter season on Cheshire's rural lanes. The application was faultless — paint correction done properly first, coating applied panel by panel with care. The beading and contamination resistance on muddy country routes has been exactly as described.",
  },
  {
    name: 'Karen T.',
    location: 'Sandbach, CW11',
    service: 'Full Valet',
    rating: 5,
    text: "Booked a full valet for my BMW 5 Series after months of A34 and M6 commuting. The team arrived on time, worked efficiently, and left the car genuinely showroom standard inside and out. Will be booking a standing monthly maintenance slot.",
  },
  {
    name: 'Michael B.',
    location: 'Holmes Chapel, CW4',
    service: 'Paint Correction',
    rating: 5,
    text: "My Range Rover had swirl marks from three years of automated car washes. After a two-stage paint correction the paint looks better than when I bought it. The depth and clarity in direct sunlight is dramatic. Booked the ceramic coating as a follow-up immediately.",
  },
  {
    name: 'Susan W.',
    location: 'Congleton, CW12',
    service: 'Interior Detailing',
    rating: 5,
    text: "Two Labradors and regular country walks meant the Freelander interior was in a bad state. The hot water extraction on the boot carpet and rear seats removed staining I thought was permanent. Outstanding result — completely transformed.",
  },
  {
    name: 'James C.',
    location: 'Middlewich, CW10',
    service: 'New Car Protection',
    rating: 5,
    text: "Booked new car protection for an Audi Q5 the day after collection. SRV came to our home, applied a light correction and ceramic coating, and the car has been effortless to keep clean since. The A50 salt and grit literally beads straight off.",
  },
  {
    name: 'Patricia L.',
    location: 'Alsager, ST7',
    service: 'Pet Hair Removal',
    rating: 5,
    text: "Three Spaniels in an estate car is not a great combination. SRV extracted every hair and deodorised the whole cabin — the car is genuinely back to looking like new inside. The team was professional, prompt, and thorough throughout.",
  },
];

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.srvdetailing.co.uk/#business',
      name: 'SRV Detailing',
      telephone: '+44-7375-759686',
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
        { '@type': 'ListItem', position: 2, name: 'Congleton', item: 'https://www.srvdetailing.co.uk/congleton' },
        { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://www.srvdetailing.co.uk/congleton/reviews' },
      ],
    },
  ],
};

export default function CongletonReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li><Link href="/congleton" className="hover:text-primary">Congleton</Link></li>
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
            Congleton Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our Congleton and CW12 customers say about our mobile car detailing and valeting service — specialist care for prestige vehicles, classic cars, and rural 4x4s across Cheshire East.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm text-sm text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span>·</span>
            <span>★★★★★ | Insured | CW12 | Same Week</span>
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
            href="https://share.google/PfnRYKg7cZGw1Ozcq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            See all our Google Reviews
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Why Congleton Trusts SRV Detailing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-sm">
            {[
              { label: '22+ Years', sub: 'Professional experience' },
              { label: 'Fully Insured', sub: 'Motor trade coverage' },
              { label: 'CW12 Covered', sub: 'Same-week availability' },
              { label: 'Classic & Rural', sub: 'Specialist expertise' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-bold text-primary text-lg">{item.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaSection serviceName="Car Care in Congleton" />
      </main>
    </div>
  );
}
