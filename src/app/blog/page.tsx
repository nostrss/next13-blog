import PostList from '@/components/PostList';
import TagBox from '@/components/TagBox';

export default async function Blog() {
  return (
    <main className='w-full flex flex-row justify-center'>
      <section className='w-full flex flex-col gap-4 items-center px-4 pt-4'>
        <PostList />
      </section>
      <TagBox />
    </main>
  );
}
