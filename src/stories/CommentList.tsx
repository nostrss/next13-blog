'use client';

import Giscus from '@giscus/react';

export default function CommentList() {
  return (
    <Giscus
      id='comments'
      repo='nostrss/next13-blog'
      repoId={process.env.NEXT_PUBLIC_REPO_ID || ''}
      category='General'
      categoryId={process.env.NEXT_PUBLIC_CATEGORY_ID || ''}
      mapping='title'
      term='댓글을 남겨주세요'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='light'
      lang='kr'
      loading='lazy'
    />
  );
}
