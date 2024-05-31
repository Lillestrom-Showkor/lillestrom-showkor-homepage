import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';

import type Author from 'src/interfaces/author';
import { formatDate } from 'src/lib/date';

import style from 'src/styles/components/Post.module.scss';
import markdownStyles from 'src/styles/components/markdown-styles.module.scss';

type PostProps = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  content: string;
  embeddedYouTube?: string;
  ogImageUrl: string;
};

const Post = ({ title, coverImage, date, content, ogImageUrl, embeddedYouTube }: PostProps) => {
  return (
    <article className={style.post}>
      <Head>
        <title>{`Lillestrøm Showkor | ${title}`}</title>
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <h2 className={style.title}>{title}</h2>
      <div className={style.meta}>{formatDate(date)}</div>
      <Image
        className={style.image}
        title={title}
        src={coverImage}
        width={560}
        height={315}
        alt={title}
        sizes="(max-width: 40rem) 40rem, 64rem"
      />
      <div className={cn(style.content, markdownStyles.markdown)} dangerouslySetInnerHTML={{ __html: content }} />
      {embeddedYouTube && (
        <iframe
          className={style.embedded}
          width="560"
          height="315"
          src={embeddedYouTube}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </article>
  );
};

export default Post;
