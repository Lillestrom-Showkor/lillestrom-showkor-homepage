import type Author from 'src/interfaces/author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  image: string;
  embeddedYouTube?: string;
  excerpt: string;
  content: string;
};

export default PostType;
