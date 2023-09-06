import DarkModeToggle from '@/stories/DarkModeToggle';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavLink from '@/stories/NavLink';
import { Fragment } from 'react';
import QueryProviders from '@/context/queryProvider';
import { IPropsChildren } from '@/type/common';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const tabs = [
  { menu: <DarkModeToggle /> },
  { menu: <NavLink href='/'>Blog</NavLink> },
  // { menu: <NavLink href=''>Project</NavLink> },
  // { menu: <NavLink href=''>About</NavLink> },
];

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: {
    template: `%s | Nostrss's Dev Blog`,
    default: `Nostrss's Dev Blog`,
  },
  description: 'Nostrss Blog Post List',
  generator: 'Next.js',
  applicationName: 'Nostrss Dev Blog',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Nostrss', url: 'https://github.com/nostrss' }],
  // colorScheme: 'dark',
  creator: 'Nostrss',
  publisher: 'Nostrss',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL('https://nostrss.github.io/'),
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    // },
  },
  openGraph: {
    title: `Nostrss's Dev Blog`,
    description: 'Nostrss Blog Post List',
    // url: 'https://nextjs.org',
    siteName: `Nostrss's Dev Blog`,
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'ko_KR',
    type: 'website',
  },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  // icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
};

export default function RootLayout({ children }: IPropsChildren) {
  return (
    <html lang='en'>
      <QueryProviders>
        <body className={inter.className}>
          <header className='w-full min-w-360 h-16 px-4 flex flex-row justify-between items-center border-b border-gray-300 '>
            <Link href='/'>
              <span>NOSTRSS</span>
            </Link>
            <nav className='flex flex-row gap-2 items-center'>
              {tabs.map(({ menu }, index) => (
                <Fragment key={index}>{menu}</Fragment>
              ))}
            </nav>
          </header>
          {children}
        </body>
      </QueryProviders>
    </html>
  );
}
