'use client';

import PostCard from '@/stories/PostCard';
import { Post } from '@/type/common';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const fetchPostList = async (page: number, limit: number, tag = '') => {
  const data = await fetch(`/api/post?page=${page}&limit=${limit}&tag=${tag}`, {
    method: 'GET',
  });
  return data.json();
};

export default function PostList({ slug }: { slug?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const limit = 10;
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['post'],
    queryFn: ({ pageParam = 1 }) => fetchPostList(pageParam, limit, slug),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const renderData = data?.pages.map(({ data }) => data).flat();

  useEffect(() => {
    if (!ref.current || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage]);

  return (
    <section className='w-full flex flex-col gap-4 items-center px-4 pt-4'>
      {renderData &&
        renderData.map((post: Post, index: number) => (
          <PostCard key={index} {...post} />
        ))}
      {isFetching && <div>loading...</div>}
      <div ref={ref}></div>
    </section>
  );
}
