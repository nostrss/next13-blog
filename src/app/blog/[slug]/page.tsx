import { API_BASE_URL } from '@/constant';
import MarkDownViewer from '@/stories/MarkDownViewer';

const fetchBlogDetail = async (slug: string) => {
  const data = await fetch(`${API_BASE_URL}/api/blog?blogid=${slug}`, {
    method: 'GET',
  });
  return data.json();
};

export default async function BlogDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await fetchBlogDetail(slug);

  return (
    <article className='w-full p-3'>
      <h1 className='mb-2 text-xl font-bold'>{data.title}</h1>
      <MarkDownViewer content={data.content} />
    </article>
  );
}
