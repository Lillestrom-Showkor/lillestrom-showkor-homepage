import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeMinify from 'rehype-preset-minify';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
import { unified } from 'unified';
import { matter } from 'vfile-matter';

import PostType from 'src/interfaces/post';

export default async function parseMarkdown(slug: string, markdown: string): Promise<PostType> {

  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(function() {
      return function(tree, file) {
        const p = (tree.children as Array<any>).find((value) => value.type === 'paragraph');
        if (p != null) {
          const text = p.children.find((value) => value.type === 'text');
          if (text !== null) {
            file.data.excerpt = text.value;
          }
        }
        matter(file);
      }
    })
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeMinify)
    .use(rehypeStringify)
    .process(markdown);

  const meta = file.data.matter as any;

  return {
    content: String(file.value),
    date: meta.date, // html.data.matter.date,
    title: meta.title, // html.data.matter.title,
    image: meta.image, // matter.coverImage,
    excerpt: file.data.excerpt as string, // matter.excerpt,
    slug: slug,
  };

}
