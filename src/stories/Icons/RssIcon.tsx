import { BASE_URL } from '@/constant';
import { IconProps } from '@/type/common';
import Link from 'next/link';
import { BsRss } from 'react-icons/bs';

export default function RssIcon({
  size = 20,
  color = 'text-black',
  url = `${BASE_URL}/rss.xml`,
}: IconProps) {
  return (
    <Link href={url}>
      <BsRss size={size} className={`${color} dark:text-white`} />
    </Link>
  );
}
