import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { LayoutWrapper } from '../src/components/layouts/layoutWrapper';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: 'Target your place on the moon',
  icons: {
    icon: [
      // { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    // shortcut: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    statusBarStyle: 'default',
    title: process.env.NEXT_PUBLIC_APP_NAME,
  },
};

export const viewport: Viewport = {
  themeColor: 'blacsk',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-gray-900 text-black antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
    </html>
  );
}
