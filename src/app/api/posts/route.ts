import { readFile, readdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 10;

  const filePath = path.join(process.cwd(), 'posts');
  const fileList = (await readdir(filePath)).sort(function (a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  });

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

  const sortData = data
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice((page - 1) * limit, page * limit);

  return NextResponse.json(sortData);
}
