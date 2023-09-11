import Link from 'next/link';
import React from 'react';

function TagLabel({
  tagName,
  count = 0,
  isActive = false,
}: {
  tagName: string;
  count?: number;
  isActive?: boolean;
}) {
  const handleActiveClassName = () => {
    if (isActive) {
      return 'bg-black text-white';
    } else {
      return 'bg-gray-200 text-gray-800';
    }
  };
  return (
    <Link
      href={`/tag/${tagName}`}
      className={`px-3 py-1 text-xs ${handleActiveClassName()} rounded-xl cursor-pointer hover:bg-black hover:text-white`}
    >
      {`${tagName}`}
      {count > 0 && `(${count})`}
    </Link>
  );
}

export default React.memo(TagLabel);
