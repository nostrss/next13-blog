import { Feed } from 'feed';
import { writeFileSync } from 'fs';

// import PostJson from '../.contentlayer/generated/Post/_index.json';
import {
  BASE_URL,
  DEFAULT_META_AUTHOR_EMAIL,
  DEFAULT_META_AUTHOR_NAME,
  DEFAULT_META_AUTHOR_URL,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_TITLE,
} from './constant';

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
  feedLinks: {
    json: `${BASE_URL}/json`,
    atom: `${BASE_URL}/atom`,
  },
  author: master,
});

const getAllPostData = async () => {
  const data = await fetch(`${BASE_URL}/api/post/all`, {
    method: 'GET',
  });
  data.json().then((jsonArray) => {
    feed.addItem({
      title: jsonArray.title,
      id: jsonArray.currentPostId,
      link: `${BASE_URL}/${jsonArray.currentPostId}`,
      description: jsonArray.description,
      content: jsonArray.content,
      author: [master],
      contributor: [master],
      date: new Date(jsonArray.date),
      // image: post.image,
      category: jsonArray.tags.map((tag: string) => ({ name: tag })),
    });
  });
};

// PostJson.forEach((post) => {
//   feed.addItem({
//     title: post.title,
//     id: post.slug,
//     link: `${siteConfig.url}${post.slug}`,
//     description: post.description,
//     content: post.body.raw,
//     author: [master],
//     contributor: [master],
//     date: new Date(post.date),
//     image: post.image,
//     category: post.tags.map((tag) => ({ name: tag })),
//   });
// });

feed.addCategory('Technologies');

// Output: RSS 2.0
writeFileSync('out/rss.xml', feed.rss2(), 'utf-8');
// Output: Atom 1.0
writeFileSync('out/rss-atom.xml', feed.atom1(), 'utf-8');
// Output: JSON Feed 1.0
writeFileSync('out/feed.json', feed.json1(), 'utf-8');
