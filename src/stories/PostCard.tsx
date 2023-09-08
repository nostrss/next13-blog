'use client';

import { ImgesArrayItem, Post } from '@/type/common';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

export default function PostCard({
  title,
  description,
  date,
  currentPostId,
  tags,
  images,
}: Post) {
  const tagList = tags.split(' ');

  useEffect(() => {
    const giscusIframe = document.querySelector('.giscus');
    giscusIframe?.remove();
  }, []);

  const imageUrlValidate = (images: ImgesArrayItem[]) => {
    const validateImages = images.filter((image) => {
      if (image.url?.includes('http')) {
        return image.url;
      }
    });
    return [...validateImages];
  };

  const validateImages = imageUrlValidate([...images]);

  return (
    <div className='w-full min-w-[360px] max-w-2xl border rounded-xl border-gray-500'>
      <Link href={`/blog/${currentPostId}`}>
        <div className='flex flex-row justify-start items-center px-4'>
          {validateImages[0]?.url && (
            <div className='w-[180px] h-[180px] relative'>
              <Image
                src={validateImages[0].url}
                alt=''
                width={180}
                height={180}
                // objectFit='cover'
              />
            </div>
          )}

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
        </div>
      </Link>
    </div>
  );
}
