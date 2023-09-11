import Link from 'next/link';
import React from 'react';

export default function TagLabel({
  tagName,
  count = 0,
}: {
  tagName: string;
  count?: number;
}) {
  return (
    <Link
      href={`/tag/${tagName}`}
      className='px-3 py-1 text-xs text-gray-800 bg-gray-200 rounded-xl cursor-pointer hover:bg-black hover:text-white'
    >
      {`${tagName}`}
      {count > 0 && `(${count})`}
    </Link>
  );
}
