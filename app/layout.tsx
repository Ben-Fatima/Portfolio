import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { links } from '@/data/links';
import { profile } from '@/data/profile';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fatimazahra.dev'),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    url: 'https://fatimazahra.dev',
    siteName: profile.name,
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline
  },
  robots: { index: true, follow: true }
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: links.email,
  url: 'https://fatimazahra.dev',
  sameAs: [links.github, links.linkedin]
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
