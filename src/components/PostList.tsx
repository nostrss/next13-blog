'use client';

import PostCard from '@/stories/PostCard';
import { Post } from '@/type/common';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPostList = async (page: number, limit: number) => {
  const data = await fetch(`/api/post?page=${page}&limit=${limit}`, {
    method: 'GET',
  });
  return data.json();
};

export default function PostList() {
  const limit = 5;
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['post'],
    queryFn: ({ pageParam = 1 }) => fetchPostList(pageParam, limit),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data &&
        data?.pages
          .map(({ data }) => data)
          .flat()
          .map((post: Post, index: number) => (
            <PostCard key={index} {...post} />
          ))}
      <button onClick={() => fetchNextPage()}>다음페이지</button>
    </>
  );
}
