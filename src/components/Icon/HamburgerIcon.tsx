'use client';
import { IconProps } from '@/type/common';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function HamburgerIcon({
  size = 20,
  color = 'text-black',
}: IconProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <AiOutlineMenu size={size} className={`${color} dark:text-white`} />
    </button>
  );
}
