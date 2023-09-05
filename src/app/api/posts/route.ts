import { readFile, readdir } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'posts');
  const fileList = await readdir(filePath);

  const data = await Promise.all(
    fileList.map(async (file) => {
      const content = await readFile(`${filePath}/${file}`, 'utf-8');

      const contentInfo = content
        .split('---')[1]
        .split('\n')
        .filter(Boolean)
        .map((item) => {
          const [key, value] = item.split(':');
          return { [key.trim()]: value.trim() };
        });
      return {
        ...contentInfo.reduce((acc, cur) => ({ ...acc, ...cur }), {}),
      };
    })
  );

  return NextResponse.json(data);
}
