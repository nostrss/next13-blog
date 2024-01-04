import { HeaderMenus } from '@/type/common';

export default function SubNav({ menus }: { menus: HeaderMenus }) {
  return (
    <div className='w-full min-w-360 h-16 px-4 border-b border-gray-300 flex justify-center'>
      <div className='w-full max-w-[1192px] flex flex-row justify-start'>
        <div>Blog</div>
        <div>Data</div>
      </div>
    </div>
  );
}
