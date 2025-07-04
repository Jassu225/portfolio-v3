import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { personalInfo } from '@/lib/data';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jaswanth-codes.vercel.app';

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.shortDescription,
  keywords: [
    'Jaswanth Sai Sattenapalli',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Go Developer',
    'Flutter Developer',
    'Web Developer',
    'Software Engineer',
    'Bengaluru',
    'India',
    'Portfolio',
  ],
  authors: [
    {
      name: personalInfo.name,
      url: siteUrl,
    },
  ],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.shortDescription,
    siteName: `${personalInfo.name} - Portfolio`,
    images: [
      {
        url: `${siteUrl}${personalInfo.profilePictureSeo}`,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.shortDescription,
    images: [`${siteUrl}${personalInfo.profilePictureSeo}`],
    creator: '@jassu225',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add verification codes when you set up Google Search Console, etc.
    // google: 'verification_code_here',
    // yandex: 'verification_code_here',
    // yahoo: 'verification_code_here',
  },
  category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: personalInfo.shortDescription,
  url: siteUrl,
  email: personalInfo.email,
  image: `${siteUrl}${personalInfo.profilePictureSeo}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'India',
  },
  sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.twitter],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Go',
    'Flutter',
    'Node.js',
    'Full Stack Development',
    'Frontend Development',
    'Web Development',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Software Engineering',
  },
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'India',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <seo schema>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A65C0" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="canonical" href={siteUrl} /> */}
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
