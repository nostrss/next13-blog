import { Metadata } from 'next';

export const defaultMetaData: Metadata = {
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
  colorScheme: 'light',
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
