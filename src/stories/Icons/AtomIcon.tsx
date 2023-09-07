import { BASE_URL } from '@/constant';
import { IconProps } from '@/type/common';
import Link from 'next/link';
import { BiAtom } from 'react-icons/bi';

export default function AtomicIcon({
  size = 20,
  color = 'text-black',
  url = `${BASE_URL}/rss-atom.xml`,
}: IconProps) {
  return (
    <Link href={url}>
      <BiAtom size={size} className={`${color} dark:text-white`} />
    </Link>
  );
}
