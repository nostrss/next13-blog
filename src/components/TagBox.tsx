import { BASE_URL } from '@/constant';
import TagLabel from '@/stories/TagLabel';
import { TagCounts } from '@/type/common';
import { useRouter } from 'next/navigation';
import React from 'react';
import TaglistItem from './TagListItem';
import { headers } from 'next/headers';

export default async function TagBox() {
  const tags: TagCounts[] = await fetchTagsData();
  tags.sort((a, b) => b.count - a.count);

  return (
    <aside className=' xl:flex flex-col items-center w-[320px] h-[100vh] sticky top-0 my-4'>
      <h2 className='mb-4 font-bold'>TAG</h2>
      <div className='w-full flex flex-row gap-4 flex-wrap items-center justify-center content-start '>
        {tags.map(({ tagName, count }, index) => (
          <TaglistItem key={index} tagName={tagName} count={count} />
        ))}
      </div>
    </aside>
  );
}

const fetchTagsData = async () => {
  const data = await fetch(`${BASE_URL}/api/tags`, {
    method: 'GET',
  });

  return data.json();
};
