import { UTIL } from '@/util';
import { readFile, readdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 10;
  const filePath = path.join(process.cwd(), 'posts');
  const fileList = await readdir(filePath);

  const markdowmMetaData = await Promise.all(
    fileList.map(async (file, index) => {
      const fileData = await readFile(`${filePath}/${file}`, 'utf-8');
      const postIdList = {
        currentPostId: file.replace('.md', ''),
        nextPostId: fileList[index - 1]?.replace('.md', ''),
        prevPostId: fileList[index + 1]?.replace('.md', ''),
      };

      return UTIL.getMarkDownMetaData(fileData, postIdList);
    })
  );

  const sortDataByTitle = UTIL.sortByTitle(markdowmMetaData);
  const sortDataByDate = UTIL.sortByDate(sortDataByTitle);
  const sliceData = UTIL.slicePerPage(sortDataByDate, page, limit);

  return NextResponse.json({
    data: sliceData,
    total: markdowmMetaData.length,
    nextPage: UTIL.getNextpage(page, limit, markdowmMetaData.length),
  });
}
