import { BASE_URL } from '@/constant';
import { MetadataRoute } from 'next';

const fetchTagsData = async () => {
  const data = await fetch(`${BASE_URL}/api/tags`, {
    method: 'GET',
  });

  return data.json();
};

const fetchPostlist = async () => {
  const data = await fetch(`${BASE_URL}/api/post/postlist`, {
    method: 'GET',
  });

  return data.json();
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchPostlist();
  const tags = await fetchTagsData();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rss.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    ...data.data.map((post: any) => ({
      url: `${BASE_URL}/post/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })),
    ...tags.map((tag: any) => ({
      url: `${BASE_URL}/tag/${tag.tagName}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    })),
  ];
}
