import { BASE_URL } from '@/constant';
import { IconProps } from '@/type/common';
import { AiOutlineMenu } from 'react-icons/ai';

export default function HamburgerIcon({
  size = 20,
  color = 'text-black',
}: IconProps) {
  return (
    <button>
      <AiOutlineMenu size={size} className={`${color} dark:text-white`} />
    </button>
  );
}
