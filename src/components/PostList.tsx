'use client';

import PostCard from '@/stories/PostCard';
import { Post } from '@/type/common';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const fetchPostList = async (page: number, limit: number) => {
  const data = await fetch(`/api/post?page=${page}&limit=${limit}`, {
    method: 'GET',
  });
  return data.json();
};

export default function PostList() {
  const ref = useRef<HTMLDivElement | null>(null);
  const limit = 10;
  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ['post'],
    queryFn: ({ pageParam = 1 }) => fetchPostList(pageParam, limit),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const renderData = data?.pages.map(({ data }) => data).flat();
  console.log(renderData);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    if (!ref.current) return;
    observer.observe(ref.current);
  }, []);

  return (
    <>
      {/* {isLoading && <div>loading...</div>} */}
      {renderData &&
        renderData.map((post: Post, index: number) => (
          <PostCard key={index} {...post} />
        ))}
      {isFetching && <div>loading...</div>}
      <div ref={ref}></div>
      <button onClick={() => fetchNextPage()}>다음페이지</button>
    </>
  );
}
