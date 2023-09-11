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

const tags = [
  { tagName: 'react', count: 2 },
  { tagName: 'nextjs', count: 3 },
];

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  ...defaultMetaData,
};

export default function RootLayout({ children }: IPropsChildren) {
  return (
    <html lang='kr'>
      <QueryProviders>
        <body className={sans.className}>
          <header className='w-full min-w-360 h-16 px-4 border-b border-gray-300 flex justify-center'>
            <div className='w-full max-w-7xl flex flex-row justify-between items-center'>
              <Link href='/'>
                <span className='text-xl font-bold'>NOSTRSS</span>
              </Link>
              <nav className='flex flex-row gap-4 items-center'>
                {tabs.map(({ menu }, index) => (
                  <Fragment key={index}>{menu}</Fragment>
                ))}
              </nav>
            </div>
          </header>
          <aside className='hidden xl:flex w-[240px] h-[100vh] bg-slate-500 fixed '>
            {tags.map(({ tagName, count }, index) => (
              <div
                key={index}
                className='flex flex-row justify-between items-center px-4 py-2'
              >
                <span className='text-sm font-bold'>{tagName}</span>
                <span className='text-sm font-bold'>{count}</span>
              </div>
            ))}
          </aside>
          {children}
        </body>
      </QueryProviders>
    </html>
  );
}
