'use client';

import PostCard from '@/stories/PostCard';
import { useQuery } from '@tanstack/react-query';

const fetchPostList = async () => {
  const data = await fetch('/api/posts', {
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
  const { data, isLoading } = useQuery(['posts'], fetchPostList);

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data &&
        data.map((post: Post, index: number) => (
          <PostCard key={index} post={post} />
        ))}
    </>
  );
}
