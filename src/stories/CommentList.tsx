'use client';

import Script from 'next/script';

export default function CommentList() {
  return (
    <div className='w-full'>
      <Script
        className='max-w-2xl p-3'
        src='https://giscus.app/client.js'
        data-repo='nostrss/next13-blog'
        data-repo-id={process.env.NEXT_PUBLIC_REPO_ID}
        data-category='General'
        data-category-id={process.env.NEXT_PUBLIC_CATEGORY_ID}
        data-mapping='title'
        data-strict='0'
        data-reactions-enabled='1'
        data-emit-metadata='1'
        data-input-position='top'
        data-theme='dark'
        data-lang='ko'
        crossOrigin='anonymous'
        async
      />
    </div>
  );
}
