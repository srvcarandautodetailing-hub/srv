import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star } from 'lucide-react';
import { CtaSection } from '@/components/shared/CtaSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Car Detailing Reviews Macclesfield | Customer Testimonials SK10 | SRV Detailing',
  description:
    'Read genuine customer reviews for SRV Detailing in Macclesfield. 5-star mobile car detailing and valeting across SK10 and SK11 — see what our Macclesfield customers say.',
  keywords: ['car detailing reviews macclesfield', 'car valeting reviews macclesfield', 'srv detailing testimonials macclesfield', 'mobile valet reviews sk10'],
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/macclesfield/reviews',
    languages: { 'en-GB': 'https://www.srvdetailing.co.uk/macclesfield/reviews' },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Car Detailing Reviews Macclesfield | SRV Detailing',
    description: 'Genuine customer reviews for SRV Detailing mobile car detailing and valeting in Macclesfield SK10 and SK11.',
    url: 'https://www.srvdetailing.co.uk/macclesfield/reviews',
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

// PLACEHOLDER — replace with real customer reviews before publishing
const reviews = [
  {
    author: 'Tom H.',
    location: 'Prestbury',
    rating: 5,
    date: '2024-11-10',
    service: 'Ceramic Coating',
    text: 'Absolutely spotless result on my BMW 5 Series. The ceramic coating looks incredible and I can already see how water just sheets off the paint. Will be booking again next year.',
  },
  {
    author: 'Claire M.',
    location: 'Tytherington',
    rating: 5,
    date: '2024-10-22',
    service: 'Full Valet',
    text: 'Booked a full valet for my Range Rover after a summer of dog walks and school runs. The result was genuinely like a new car. Brilliant service, very professional team.',
  },
  {
    author: 'James R.',
    location: 'Bollington',
    rating: 5,
    date: '2024-09-15',
    service: 'Paint Correction',
    text: 'Had paint correction done on my Audi before selling. The difference was night and day — deep scratches and swirl marks I\'d lived with for years completely gone. Got a higher sale price as a result.',
  },
  {
    author: 'Sarah L.',
    location: 'Macclesfield',
    rating: 5,
    date: '2024-08-30',
    service: 'Interior Detailing',
    text: 'The interior detailing was exceptional. Two kids and a Labrador had taken their toll on my seats and carpets — SRV restored them to a condition I didn\'t think was possible. Highly recommend.',
  },
  {
    author: 'David W.',
    location: 'Broken Cross',
    rating: 5,
    date: '2024-07-18',
    service: 'New Car Protection',
    text: 'Had a ceramic coating applied to my new car the week after collection. Very glad I did — the paint has stayed flawless even through a full winter. Worth every penny.',
  },
  {
    author: 'Emma K.',
    location: 'Gawsworth',
    rating: 5,
    date: '2024-06-05',
    service: 'Mobile Valeting',
    text: 'Perfect mobile service — they came to my property and worked quietly while I was in a Zoom call. Car came back looking better than the showroom. Will definitely use again.',
  },
];

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.srvdetailing.co.uk/#business',
  name: 'SRV Detailing',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: String(reviews.length),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    datePublished: r.date,
    reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
    reviewBody: r.text,
  })),
};

export default function MacclesfieldReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li><Link href="/macclesfield" className="hover:text-primary">Macclesfield</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li className="text-foreground font-medium">Reviews</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Customer Reviews — <span className="text-primary">Macclesfield</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genuine feedback from SRV Detailing customers across Macclesfield, Prestbury, Bollington, and SK10/SK11.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-lg font-semibold">5.0</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {reviews.map((review, i) => (
            <article key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-semibold text-foreground">{review.author}</span>
                  <span className="text-muted-foreground"> · {review.location}</span>
                </div>
                <span className="text-xs text-muted-foreground">{review.service}</span>
              </div>
            </article>
          ))}
        </div>

        <CtaSection serviceName="Car Detailing in Macclesfield" />
      </main>
    </div>
  );
}
