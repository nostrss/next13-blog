import PostList from '@/components/PostList';

export default async function Home() {
  return (
    <main className='w-full flex flex-row justify-center'>
      {/* <aside className='w-[240px] h-[100vh] bg-slate-300 sticky top-0'></aside> */}
      <PostList />
    </main>
  );
}
