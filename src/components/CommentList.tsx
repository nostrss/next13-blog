'use client';

import Script from 'next/script';

export default function CommentList() {
  const getCookie = (cookieName: string): string => {
    let result = '';
    document.cookie.split(';').map((item) => {
      const cookieItem = item.trim();
      if (item.includes(cookieName)) {
        result = cookieItem.split('=')[1];
      }
    });
    return result;
  };

  const theme = getCookie('mode');

  return (
    <div className='giscus'>
      <Script
        className='text-center'
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
        data-theme={theme}
        data-lang='ko'
        crossOrigin='anonymous'
        data-loading='lazy'
        async
      />
    </div>
  );
}
