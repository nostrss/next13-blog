import React from 'react';

export default function TagLabel({ tag }: { tag: string }) {
  return (
    <span className='px-2 text-xs text-gray-800 bg-gray-200 rounded-full'>
      {tag}
    </span>
  );
}
