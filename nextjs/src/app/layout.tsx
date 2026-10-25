import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { StoreProvider } from '../shared/store/StoreProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ajijul Hoque | Mobile Application Developer (Flutter)',
  description:
    'Mobile Application Developer with 2 years of professional experience specializing in Flutter, Dart, BLoC, Riverpod, and Clean Architecture. Currently contributing at Softvence IT Limited (1 year 7 months running).',
  keywords: [
    'Ajijul Hoque',
    'Mobile Application Developer',
    'Flutter Developer',
    'Dart SDK',
    'BLoC Pattern',
    'Riverpod',
    'Softvence IT Limited',
    'Clean Architecture',
    'Android Developer',
    'iOS Developer',
    'Cross-Platform Mobile',
    'Firebase Suite',
    'REST APIs',
  ],
  authors: [{ name: 'Ajijul Hoque' }],
  creator: 'Ajijul Hoque',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajijulhoque.dev',
    title: 'Ajijul Hoque | Mobile Application Developer (Flutter)',
    description:
      'Mobile Application Developer with 2 years of experience specializing in Flutter, Dart, and Clean Mobile Architecture. Currently at Softvence IT Limited (1 yr 7 mos running).',
    siteName: 'Ajijul Hoque Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajijul Hoque | Mobile Application Developer (Flutter)',
    description:
      'Mobile Application Developer with 2 years of experience specializing in Flutter, Dart, and Clean Mobile Architecture. Currently at Softvence IT Limited (1 yr 7 mos running).',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Search Engine Optimization
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ajijul Hoque',
    jobTitle: 'Mobile Application Developer (Flutter)',
    description:
      'Mobile Application Developer with 2 years of professional experience specializing in Flutter, Dart, and Clean Mobile Architecture. Currently at Softvence IT Limited (1 yr 7 mos running).',
    url: 'https://ajijulhoque.dev',
    knowsAbout: [
      'Flutter',
      'Dart SDK',
      'Mobile Application Development',
      'BLoC Pattern',
      'Riverpod',
      'Clean Mobile Architecture',
      'REST APIs',
      'Dio',
      'Firebase',
      'Android Development',
      'iOS Development',
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
