import { readFile, readdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('blogid');
  const filePath = path.join(process.cwd(), 'posts');
  const fileData = await readFile(`${filePath}/${postId}.md`, 'utf-8');

  const markdowmMetaData = fileData
    .split('---')[1]
    .split('\n')
    .filter(Boolean)
    .map((item) => {
      const [key, value] = item.split(':');
      return { [key.trim()]: value.trim() };
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

  const markDownContent = removeMetaData(fileData);

  return NextResponse.json({
    data: {
      ...markdowmMetaData,
      content: markDownContent,
    },
  });
}

const removeMetaData = (markdown: string) => {
  const regex = /^---[\s\S]*?---/m;
  return markdown.replace(regex, '');
};
