import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  console.log(url.searchParams);
  const postId = url.searchParams.get('postid');

  return NextResponse.json({
    data: {
      postId,
    },
  });
}
