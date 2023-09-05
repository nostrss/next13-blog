import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href = '' }: Props) {
  return (
    <Link href={href} className='text-slate-500 hover:text-slate-900'>
      {children}
    </Link>
  );
}
