import fs from 'fs';
import { join } from 'path';
import parseMarkdown from './markdown';

const postsDirectory = join(process.cwd(), 'data/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map((slug) => slug.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return await parseMarkdown(realSlug, fileContents);
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
