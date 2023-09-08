import { BASE_URL } from '@/constant';
import CommentList from '@/components/CommentList';
import MarkDownViewer from '@/stories/MarkDownViewer';

export default async function BlogDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await fetchBlogDetail(slug);

  return (
    <section className='w-full flex flex-row justify-center'>
      <article className='w-full max-w-2xl p-3'>
        <h1 className='prose-2xl font-bold dark:text-white'>{data.title}</h1>
        <MarkDownViewer content={data.content} />
        <CommentList />
      </article>
    </section>
  );
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await fetchBlogDetail(slug);
  console.log(data.images);
  return {
    title: data.title,
    description: data.description || data.title,
    keywords: data.tags.split(' '),
    // metadataBase: new URL(`${BASE_URL}/${slug}`),
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
    },
    openGraph: {
      title: `${data.title} | og_page`,
      description: `${data.description || data.title} | og_page`,
      url: `${BASE_URL}/${slug}`,
      alternates: {
        canonical: `${BASE_URL}/${slug}`,
      },
      images: [
        {
          url: data.images[0].url,
          width: 800,
          height: 600,
        },
        {
          url: data.images[0].url,
          width: 1800,
          height: 1600,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | twitter_page`,
      description: `${data.description || data.title} | twitter_page`,
    },
  };
}

const fetchBlogDetail = async (slug: string) => {
  const data = await fetch(`${BASE_URL}/api/blog?blogid=${slug}`, {
    method: 'GET',
  });
  return data.json();
};
