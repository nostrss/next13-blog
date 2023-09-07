import { Feed } from 'feed';
import { writeFileSync, existsSync, mkdirSync, writeFile } from 'fs';
import {
  BASE_URL,
  DEFAULT_META_AUTHOR_EMAIL,
  DEFAULT_META_AUTHOR_NAME,
  DEFAULT_META_AUTHOR_URL,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_TITLE,
} from './constant';

import fetch from 'node-fetch';

const master = {
  name: DEFAULT_META_AUTHOR_NAME,
  email: DEFAULT_META_AUTHOR_EMAIL,
  link: DEFAULT_META_AUTHOR_URL,
};

const feed = new Feed({
  title: DEFAULT_META_TITLE,
  description: DEFAULT_META_DESCRIPTION,
  id: DEFAULT_META_AUTHOR_URL,
  link: DEFAULT_META_AUTHOR_URL,
  language: 'ko',
  image: '',
  favicon: '',
  copyright: '',
  generator: 'generate-rss',
  // feedLinks: {
  //   json: `${BASE_URL}/json`,
  //   atom: `${BASE_URL}/atom`,
  // },
  author: master,
});

const getAllPostData = async () => {
  const data = await fetch(`${BASE_URL}/api/post/all`, {
    method: 'GET',
  });

  const jsonData: any = await data.json();
  // console.log(jsonData.data);

  jsonData.data.forEach((json: JsonPost) => {
    feed.addItem({
      title: json.title,
      id: json.currentPostId,
      link: `${BASE_URL}/${json.currentPostId}`,
      description: json.description,
      content: json.content,
      author: [master],
      contributor: [master],
      date: new Date(json.date),
      // image: post.image,
      category: json.tags.split(' ').map((tag: string) => ({ name: tag })),
    });
  });

  // Output: RSS 2.0
  const isDir = existsSync('./out');
  if (!isDir) {
    mkdirSync('./out');
    writeFile('./out/feed.json', '', (err) => {
      console.error(err);
    });
    writeFile('./out/rss-atom.xml', '', (err) => {
      console.error(err);
    });
    writeFile('./out/rss.xml', '', (err) => {
      console.error(err);
    });
  }
  writeFileSync('out/rss.xml', feed.rss2(), 'utf-8');
  // Output: Atom 1.0
  writeFileSync('out/rss-atom.xml', feed.atom1(), 'utf-8');
  // Output: JSON Feed 1.0
  writeFileSync('out/feed.json', feed.json1(), 'utf-8');
};

getAllPostData();
feed.addCategory('Technologies');

type JsonPost = {
  currentPostId: string;
  title: string;
  description: string;
  date: string;
  tags: string;
  content: string;
};

type JsonPostList = JsonPost[];
