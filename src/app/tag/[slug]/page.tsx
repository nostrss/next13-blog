import PostList from '@/components/PostList';

export default function TagResult({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <PostList slug={slug} />;
}
