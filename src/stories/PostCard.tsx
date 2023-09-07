'use client';

import { Post } from '@/type/common';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PostCard({
  title,
  description,
  date,
  currentPostId,
  tags,
}: Post) {
  const tagList = tags.split(' ');

  useEffect(() => {
    const giscusIframe = document.querySelector('.giscus');
    giscusIframe?.remove();
  }, []);

  return (
    <div className='w-full max-w-2xl border rounded-xl border-gray-500'>
      <Link href={`/blog/${currentPostId}`}>
        <article className='w-full h-full p-4 md:p-8'>
          <div className='flex items-center justify-between gap-2'>
            <div className='w-full text-s'>{date}</div>
          </div>
          <h2 className='mt-4 text-3xl font-bold'>{title}</h2>
          <p className='mt-4 '>{description}</p>
          <div className='flex flex-row gap-2 mt-4 overflow-hidden flex-wrap'>
            {tagList.map((tag, index) => (
              <span
                key={index}
                className='px-2 py-1 text-xs text-gray-800 bg-gray-200 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Link>
    </div>
  );
}
