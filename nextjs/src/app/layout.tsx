import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  title: 'Ajijul Hoque | AI Systems Architect & Full-Stack Engineer',
  description:
    'Architecting autonomous self-correcting multi-agent reasoning networks using LangGraph, cross-platform Flutter experiences, and 25-year sustainable Clean Architecture with ASP.NET Core, Go, and Rust readiness.',
  keywords: [
    'Ajijul Hoque',
    'AI Engineer',
    'Systems Architect',
    'LangGraph',
    'Multi-Agent Systems',
    'Flutter Developer',
    'Clean Architecture',
    'Next.js 16',
    'FastAPI',
    'ASP.NET Core',
    'Go Gin',
    'Rust Axum',
    'RAG',
  ],
  authors: [{ name: 'Ajijul Hoque' }],
  creator: 'Ajijul Hoque',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajijulhoque.dev',
    title: 'Ajijul Hoque | AI Systems Architect & Full-Stack Engineer',
    description:
      'Autonomous LangGraph agent swarms, cross-platform Flutter applications, and 25-year sustainable Clean Architecture.',
    siteName: 'Ajijul Hoque Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajijul Hoque | AI Systems Architect',
    description:
      'Autonomous LangGraph agent swarms, cross-platform Flutter applications, and 25-year sustainable Clean Architecture.',
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
    jobTitle: 'AI Systems Architect & Full-Stack Engineer',
    description:
      'Specialist in LangGraph multi-agent swarms, cross-platform Flutter development, and 25-year sustainable Clean Architecture.',
    url: 'https://ajijulhoque.dev',
    knowsAbout: [
      'LangGraph',
      'Artificial Intelligence',
      'Multi-Agent Systems',
      'Clean Architecture',
      'Flutter',
      'Python',
      'FastAPI',
      'ASP.NET Core',
      'Go',
      'Rust',
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
      <body>{children}</body>
    </html>
  );
}
