import { Metadata } from 'next';
import {
  BASE_URL,
  DEFAULT_APP_NAME,
  DEFAULT_GENERATOR,
  DEFAULT_META_AUTHOR_NAME,
  DEFAULT_META_AUTHOR_URL,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_KEYWORDS,
  DEFAULT_META_TITLE,
  DEFAULT_REFERRER,
  LIGHT_MODE,
  RSS_ATOM_URL,
  RSS_JSON_URL,
  RSS_XML_URL,
} from './constant';

export const defaultMetaData: Metadata = {
  title: {
    template: `%s | ${DEFAULT_META_TITLE}`,
    default: DEFAULT_META_TITLE,
  },
  description: DEFAULT_META_DESCRIPTION,
  generator: DEFAULT_GENERATOR,
  applicationName: DEFAULT_APP_NAME,
  referrer: DEFAULT_REFERRER,
  keywords: DEFAULT_META_KEYWORDS,
  authors: {
    name: DEFAULT_META_AUTHOR_NAME,
    url: DEFAULT_META_AUTHOR_URL,
  },

  colorScheme: LIGHT_MODE,
  creator: DEFAULT_META_AUTHOR_NAME,
  publisher: DEFAULT_META_AUTHOR_NAME,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    // },
    types: {
      'application/rss+xml': RSS_XML_URL,
      'application/atom+xml': RSS_ATOM_URL,
      'application/json': RSS_JSON_URL,
    },
  },
  openGraph: {
    title: DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    url: 'https://nextjs.org',
    siteName: DEFAULT_APP_NAME,
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
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    // siteId: '1467726470533754880',
    // creator: '@nextjs',
    // creatorId: '1467726470533754880',
    // images: ['https://nextjs.org/og.png'],
  },
};
