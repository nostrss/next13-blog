import { UTIL } from '@/util';
import { readFile, readdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('blogid');
  const filePath = path.join(process.cwd(), 'posts');
  const fileData = await readFile(`${filePath}/${postId}.md`, 'utf-8');

  const markdowmMetaData = UTIL.getMarkDownMetaData(fileData, {});
  const markDownContent = UTIL.removeMetaData(fileData);

  return NextResponse.json({
    data: {
      ...markdowmMetaData,
      content: markDownContent,
    },
  });
}

// nextPostId: fileList[index - 1]?.replace('.md', ''),
//         prevPostId: fileList[index + 1]?.replace('.md', ''),
