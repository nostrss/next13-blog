import PostList from '@/components/PostList';

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
