import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const displayFont = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const bodyFont = Jost({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap'
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Thriveni Cars | Multi-Brand Dealership',
  description: "Chennai's Premier Multi-Brand Dealership. Explore 200+ new and pre-owned vehicles across Maruti Arena, NEXA, Honda, Royal Enfield, and Commercial segments.",
  openGraph: {
    title: 'Thriveni Cars | Multi-Brand Dealership',
    description: "Chennai's Premier Multi-Brand Dealership",
    siteName: 'Thriveni Cars',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
