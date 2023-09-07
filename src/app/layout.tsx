import DarkModeToggle from '@/stories/DarkModeToggle';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavLink from '@/stories/NavLink';
import { Fragment } from 'react';
import QueryProviders from '@/context/queryProvider';
import { IPropsChildren } from '@/type/common';
import Link from 'next/link';
import { defaultMetaData } from './defaulMetaData';

const inter = Inter({ subsets: ['latin'] });

const tabs = [
  { menu: <DarkModeToggle /> },
  { menu: <NavLink href='/'>Blog</NavLink> },
  // { menu: <NavLink href=''>Project</NavLink> },
  // { menu: <NavLink href=''>About</NavLink> },
];

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  ...defaultMetaData,
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
