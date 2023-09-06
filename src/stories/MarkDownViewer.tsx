'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
// import { API_BASE_URL } from '@/constant';
// import { useEffect, useState } from 'react';

export default function MarkDownViewer({ content }: { content: string }) {
  // const [result, setResult] = useState([]);

  // useEffect(() => {
  //   const loadList = async () => {
  //     const data = await fetch(`${API_BASE_URL}/api/post/filelist`, {
  //       method: 'GET',
  //     });

  //     setResult(await data.json());
  //   };
  //   loadList();
  // }, []);

  // console.log(result);

  return (
    <ReactMarkdown
      className='prose max-w-none'
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={materialDark}
              language={match[1]}
              PreTag='div'
              wrapLines={true}
              showLineNumbers={true}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='w-auto h-auto object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={500}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
