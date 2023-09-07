import DarkModeToggle from '@/components/DarkModeToggle';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Fragment } from 'react';
import QueryProviders from '@/context/queryProvider';
import { IPropsChildren } from '@/type/common';
import Link from 'next/link';
import { defaultMetaData } from '../defaulMetaData';
import RssIcon from '@/stories/Icons/RssIcon';
import StorybookIcon from '@/stories/Icons/StorybookIcon';
import GithubIcon from '@/stories/Icons/GithubIcon';

const sans = Open_Sans({ subsets: ['latin'] });
const tabs = [
  { menu: <DarkModeToggle /> },
  { menu: <StorybookIcon /> },
  { menu: <GithubIcon /> },
  { menu: <RssIcon /> },
];

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  ...defaultMetaData,
};

export default function RootLayout({ children }: IPropsChildren) {
  return (
    <html lang='en'>
      <QueryProviders>
        <body className={sans.className}>
          <header className='w-full min-w-360 h-16 px-4 flex flex-row justify-between items-center border-b border-gray-300 '>
            <Link href='/'>
              <span className='text-xl font-bold'>NOSTRSS</span>
            </Link>
            <nav className='flex flex-row gap-4 items-center'>
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
