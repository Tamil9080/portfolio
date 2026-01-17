import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TAMILSELVAN | AI & Data Science Developer Portfolio",
    template: "%s | TAMILSELVAN"
  },
  description: "Portfolio of TAMILSELVAN, a B.Tech student specializing in Artificial Intelligence and Data Science. Explore my projects in machine learning, web development, and AI applications.",
  keywords: [
    "TAMILSELVAN portfolio",
    "Tamil Selvan",
    "AI developer",
    "Data Science developer",
    "Machine Learning engineer",
    "React developer",
    "Full stack developer",
    "B.Tech AI DS",
    "Artificial Intelligence portfolio",
    "Data Science projects",
    "Python developer",
    "Web development portfolio"
  ],
  authors: [{ name: "TAMILSELVAN" }],
  creator: "TAMILSELVAN",
  publisher: "TAMILSELVAN",
  metadataBase: new URL('https://bstamilselvanofficial.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "TAMILSELVAN | AI & Data Science Developer Portfolio",
    description: "Portfolio of TAMILSELVAN, a B.Tech student specializing in Artificial Intelligence and Data Science. Explore my projects in machine learning, web development, and AI applications.",
    siteName: "TAMILSELVAN Portfolio",
    images: [
      {
        url: '/og-image.png', // Create this image 1200x630px
        width: 1200,
        height: 630,
        alt: 'TAMILSELVAN - AI & Data Science Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TAMILSELVAN | AI & Data Science Developer Portfolio",
    description: "Portfolio of TAMILSELVAN, a B.Tech student specializing in Artificial Intelligence and Data Science.",
    images: ['/og-image.png'], // Same image as OG
    creator: '@yourtwitterhandle', // Update with your Twitter handle
  },
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
  icons: {
    icon: [
      {
        url: "/logo.png",
      },
    ],
    apple: [
      {
        url: "/logo.png",
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'TAMILSELVAN',
    url: 'https://bstamilselvanofficial.vercel.app',
    jobTitle: 'AI & Data Science Developer',
    description: 'B.Tech student specializing in Artificial Intelligence and Data Science',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'RMK COLLEGE OF ENGINEERING AND TECHNOLOGY', // Update with your university
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Data Science',
      'Machine Learning',
      'Web Development',
      'React',
      'Python',
      'Full Stack Development'
    ],
    sameAs: [
      'https://github.com/Tamil9080', // Update with your actual profiles
      'https://www.linkedin.com/in/tamil-selvan-301024294/',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
