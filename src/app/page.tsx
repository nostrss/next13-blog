import { readdir, readFile } from 'fs/promises';
import path from 'path';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'posts');
  const fileList = await readdir(filePath);

  const postData = await Promise.all(
    fileList.map(async (file) => {
      const data = await readFile(`${filePath}/${file}`, 'utf-8');
      return data;
    })
  );

  return (
    <main>
      {postData.map((post, index) => (
        <li key={index}>{post}</li>
      ))}
    </main>
  );
}
