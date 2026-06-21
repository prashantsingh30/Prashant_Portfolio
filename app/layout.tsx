import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, DM_Serif_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-cal',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prashantsingh.dev'),
  title: {
    default: 'Prashant Singh — Software Developer & AI Enthusiast',
    template: '%s | Prashant Singh',
  },
  description:
    'MCA Student and Software Developer specializing in scalable web applications, modern SaaS products, and AI-powered solutions. Java, React, Next.js, and full-stack engineering.',
  keywords: [
    'Prashant Singh',
    'Software Developer',
    'Java Developer',
    'Full Stack Developer',
    'MCA Student',
    'AI Enthusiast',
    'React',
    'Next.js',
    'Mumbai Developer',
  ],
  authors: [{ name: 'Prashant Singh' }],
  creator: 'Prashant Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prashantsingh.dev',
    title: 'Prashant Singh — Software Developer & AI Enthusiast',
    description:
      'Building intelligent software that solves real problems. MCA Student, Software Developer, and AI Enthusiast.',
    siteName: 'Prashant Singh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Singh — Software Developer & AI Enthusiast',
    description:
      'Building intelligent software that solves real problems.',
    creator: '@prashantsingh',
  },
  themeColor: '#0a0a0b',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Prevent theme flash: apply stored/default theme before paint
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';var r=document.documentElement;if(t==='light'){r.classList.add('light');r.classList.remove('dark')}else{r.classList.add('dark');r.classList.remove('light')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          plusJakarta.variable,
          jetbrainsMono.variable,
          dmSerif.variable,
          'font-sans antialiased bg-background text-foreground'
        )}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
