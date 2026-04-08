import type { Metadata } from 'next';
import { Outfit, Jost, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import PageTransitionProvider from '@/components/providers/PageTransitionProvider';

const displayFont = Outfit({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
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
  title: {
    default: 'Thriveni Cars | Salem\'s No.1 Multi-Brand Dealership',
    template: '%s | Thriveni Cars'
  },
  description: "Salem's Premier Multi-Brand Dealership. Explore 200+ new and pre-owned vehicles across Maruti Arena, NEXA, Honda, Royal Enfield, and Commercial segments.",
  openGraph: {
    title: 'Thriveni Cars | Multi-Brand Dealership',
    description: "Salem's Premier Multi-Brand Dealership",
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
      <body className="font-body antialiased selection:bg-amber-cta selection:text-white bg-metal-900 min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <PageTransitionProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </PageTransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
