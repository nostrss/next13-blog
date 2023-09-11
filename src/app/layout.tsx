import DarkModeToggle from '@/components/DarkModeToggle';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import QueryProviders from '@/context/queryProvider';
import { IPropsChildren, TagCounts } from '@/type/common';
import { defaultMetaData } from '../defaulMetaData';
import RssIcon from '@/stories/Icons/RssIcon';
import StorybookIcon from '@/stories/Icons/StorybookIcon';
import GithubIcon from '@/stories/Icons/GithubIcon';
import { BASE_URL } from '@/constant';
import Header from '@/stories/Header';
import TagLabel from '@/stories/TagLabel';
import Taglist from '@/components/Taglist';

const sans = Open_Sans({ subsets: ['latin'] });
export const menus = [
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
    <html lang='kr'>
      <QueryProviders>
        <body className={sans.className}>
          <Header menus={menus} />
          <div className='w-full flex flex-col items-center'>
            <section className='w-full max-w-[1440px] flex flex-row justify-center'>
              {children}
              {/* <Taglist /> */}
            </section>
          </div>
        </body>
      </QueryProviders>
    </html>
  );
}
