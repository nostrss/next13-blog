'use client';

import { Post } from '@/type/common';
import Link from 'next/link';

export default function PostCard({ title, subTitle, date }: Post) {
  // const { title, subTitle, date } = post;
  return (
    <div className='w-full border rounded-xl border-gray-500'>
      <Link href={''}>
        <article className='w-full h-full p-4 md:p-8'>
          <div className='flex items-center justify-between gap-2'>
            <div className='w-full text-xs text-gray-800'>{date}</div>
          </div>
          <h2 className='mt-4 text-3xl font-bold text-gray-800 group-hover:text-white sm:text-4xl font-display'>
            {title}
          </h2>
          <p className='mt-4 leading-8 duration-150 text-gray-800 group-hover:text-zinc-300'>
            {subTitle}
          </p>
        </article>
      </Link>
    </div>
  );
}
