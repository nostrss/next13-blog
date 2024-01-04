import { BASE_URL } from '@/constant';
import Link from 'next/link';

export default function NavItem({
  itemName,
  url,
}: {
  itemName: string;
  url: string;
}) {
  return (
    <Link href={url}>
      <span className='font-bold'>{itemName}</span>
    </Link>
  );
}
