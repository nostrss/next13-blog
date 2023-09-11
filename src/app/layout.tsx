import DarkModeToggle from '@/components/DarkModeToggle';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Fragment } from 'react';
import QueryProviders from '@/context/queryProvider';
import { IPropsChildren, TagCounts } from '@/type/common';
import Link from 'next/link';
import { defaultMetaData } from '../defaulMetaData';
import RssIcon from '@/stories/Icons/RssIcon';
import StorybookIcon from '@/stories/Icons/StorybookIcon';
import GithubIcon from '@/stories/Icons/GithubIcon';
import { BASE_URL } from '@/constant';
import Header from '@/stories/Header';
import TagLabel from '@/stories/TagLabel';

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

const fetchTagsData = async () => {
  const data = await fetch(`${BASE_URL}/api/tags`, {
    method: 'GET',
  });

  return data.json();
};

export default async function RootLayout({ children }: IPropsChildren) {
  const tags: TagCounts[] = await fetchTagsData();
  tags.sort((a, b) => b.count - a.count);

  return (
    <html lang='kr'>
      <QueryProviders>
        <body className={sans.className}>
          <Header menus={menus} />
          <aside className='hidden xl:flex flex-row flex-wrap gap-4 items-start justify-start content-start w-[240px] h-[100vh] fixed '>
            {tags.map(({ tagName, count }, index) => (
              <div
                key={index}
                className='flex flex-row justify-between items-center '
              >
                <TagLabel tag={`${tagName}(${count})`} />
              </div>
            ))}
          </aside>
          {children}
        </body>
      </QueryProviders>
    </html>
  );
}
