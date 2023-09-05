'use client';

import PostCard from '@/stories/PostCard';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPostList = async (page: number, limit: number) => {
  const data = await fetch(`/api/posts?page=${page}&limit=${limit}`, {
    method: 'GET',
  });
  return data.json();
};

type Post = {
  title: string;
  subTitle: string;
  date: string;
};

export default function PostList() {
  const limit = 5;
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPostList(pageParam, limit),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  // const flatData = data?.pages.map(({ data }) => data).flat();

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data &&
        data?.pages
          .map(({ data }) => data)
          .flat()
          .map((post: Post, index: number) => (
            <PostCard key={index} post={post} />
          ))}
      <button onClick={() => fetchNextPage()}>다음페이지</button>
    </>
  );
}
