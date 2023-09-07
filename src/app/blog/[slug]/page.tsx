import { API_BASE_URL } from '@/constant';
import CommentList from '@/stories/CommentList';
import MarkDownViewer from '@/stories/MarkDownViewer';
import { useEffect, useState } from 'react';

export default async function BlogDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await fetchBlogDetail(slug);

  return (
    <section className='w-full flex flex-row justify-center'>
      <article className='w-full max-w-2xl p-3'>
        <h1 className='prose-2xl font-bold dark:text-white'>{data.title}</h1>
        <MarkDownViewer content={data.content} />
        <CommentList />
      </article>
    </section>
  );
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await fetchBlogDetail(slug);
  return {
    title: data.title,
    description: data.description,
    keywords: data.tags.split(' '),
    openGraph: {
      title: data.title,
      description: data.description,
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
    },
  };
}

const fetchBlogDetail = async (slug: string) => {
  const data = await fetch(`${API_BASE_URL}/api/blog?blogid=${slug}`, {
    method: 'GET',
  });
  return data.json();
};
