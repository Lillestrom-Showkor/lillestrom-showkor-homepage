import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeMinify from 'rehype-preset-minify';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { unified } from 'unified';
import { matter } from 'vfile-matter';
import {visit} from 'unist-util-visit'

import PostType from 'src/interfaces/post';

export default async function parseMarkdown(slug: string, markdown: string): Promise<PostType> {

  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkExcerpt)
    .use(remarkMatter)
    .use(remarkDirective)
    .use(directiveYoutube)
    .use(remarkRehype)
    .use(rehypeSanitize, {
      tagNames: [
        ...(defaultSchema.tagNames ?? []),
        'iframe'
      ],
      attributes: {
        ...defaultSchema.attributes,
        iframe: [
          'src',
          'width',
          'height',
          'frameBorder',
          'allow',
          'allowFullScreen'
        ],
      }
    })
    .use(rehypeMinify)
    .use(rehypeStringify)
    .process(markdown);

  const meta = file.data.matter as any;

  return {
    content: String(file.value),
    date: meta.date,
    title: meta.title,
    image: meta.image,
    excerpt: file.data.excerpt as string,
    slug: slug,
  };

}

function remarkExcerpt() {
  return function(tree, file) {
    const p = (tree.children as Array<any>).find((value) => value.type === 'paragraph');
    if (p != null) {
      const text = p.children.find((value) => value.type === 'text');
      if (text !== null) {
        file.data.excerpt = text.value;
      }
    }
  }
}

function remarkMatter() {
  return function(tree, file) {
    matter(file);
  }
}


function directiveYoutube() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @param {import('vfile').VFile} file
   *   File.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree, file) => {
    visit(tree, function (node) {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {

        if (node.name !== 'youtube') return;

        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};
        const id = attributes.id;

        if (node.type === 'textDirective') {
          file.fail(
            'Unexpected `:youtube` text directive, use two colons for a leaf directive',
            node
          );
        }

        if (!id) {
          file.fail('Unexpected missing `id` on `youtube` directive', node);
        }

        data.hName = 'iframe';
        data.hProperties = {
          src: 'https://www.youtube.com/embed/' + id,
          width: 560,
          height: 315,
          frameBorder: 0,
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
          allowFullScreen: true
        };
      }
    })
  }
}
