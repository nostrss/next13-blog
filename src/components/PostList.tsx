'use client';

import { useQuery } from '@tanstack/react-query';

const fetchPostList = async () => {
  const data = await fetch('/api/posts', {
    method: 'GET',
  });

  return data.json();
};

export default function PostList() {
  const { data } = useQuery(['posts'], fetchPostList);

  return (
    <>
      {data &&
        data.map((post: Record<string, string>, index: number) => (
          <ol key={index}>
            <li>{post.title}</li>
            <li>{post.description} </li>
            <li>{post.date}</li>
          </ol>
        ))}
    </>
  );
}
