import PostList from '@/components/PostList';
import { BASE_URL } from '@/constant';
import { TagSlug } from '@/type/common';

export default function TagResult({
  params: { tag },
}: {
  params: { tag: string };
}) {
  return (
    <section className='w-full flex flex-col gap-4 items-center px-4 pt-4'>
      <h1 className='font-bold text-2xl'>Tag : {tag} </h1>
      <PostList tag={tag} />
    </section>
  );
}

export async function generateStaticParams() {
  const tags = await fetchTagsData();
  return tags.map((tag: TagSlug) => ({
    slug: tag.tagName,
  }));
}

const fetchTagsData = async () => {
  const data = await fetch(`${BASE_URL}/api/tags`, {
    method: 'GET',
  });

  return data.json();
};
