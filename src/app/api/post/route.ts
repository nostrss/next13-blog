import { readFile, readdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import next from 'next/types';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 10;

  /**
   * posts 폴더의 경로 만들기.
   */
  const filePath = path.join(process.cwd(), 'posts');

  /**
   * posts 폴더의 파일 목록 가져오기.
   */
  const fileList = (await readdir(filePath)).sort(function (a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  });

  const data = await Promise.all(
    fileList.map(async (file, index) => {
      const content = await readFile(`${filePath}/${file}`, 'utf-8');
      /**
       * post
       */
      const postIdList = {
        currentPostId: file.replace('.md', ''),
        nextPostId: fileList[index - 1]?.replace('.md', ''),
        prevPostId: fileList[index + 1]?.replace('.md', ''),
      };

      const contentInfo = content
        .split('---')[1]
        .split('\n')
        .filter(Boolean)
        .map((item) => {
          const [key, value] = item.split(':');
          return { [key.trim()]: value.trim() };
        });

      return {
        ...contentInfo.reduce((acc, cur) => ({ ...acc, ...cur }), postIdList),
      };
    })
  );

  const sortData = data
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    data: sortData,
    total: data.length,
    nextPage: page + 1,
  });
}
