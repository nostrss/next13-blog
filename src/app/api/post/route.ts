import { UTIL } from '@/util';
import { readFile, readdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import parse from 'node-html-parser';
import { ImgesArrayItem } from '@/type/common';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 10;
  const filePath = path.join(process.cwd(), 'posts');
  const fileList = await readdir(filePath);

  const markdowmMetaData = await Promise.all(
    fileList.map(async (file) => {
      const fileData = await readFile(`${filePath}/${file}`, 'utf-8');
      const currentPostId = {
        currentPostId: file.replace('.md', ''),
      };
      const markDownContent = UTIL.removeMetaData(fileData);

      const imgArr = getImageSrc(markDownContent);

      return {
        ...UTIL.getMarkDownMetaData(fileData, currentPostId),
        images: imgArr,
      };
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

export const getImageSrc = (htmlElement: string | undefined) => {
  if (!htmlElement) return [];

  // console.log(htmlElement);
  const imgHtml = parse(htmlElement).getElementsByTagName('img');

  // console.log(imgHtml);

  const imgUrl: Array<ImgesArrayItem> = [];
  imgHtml.forEach((img) => {
    const imgParse = img.getAttribute('src');
    imgUrl.push({ url: imgParse });
  });

  return imgUrl;
};
