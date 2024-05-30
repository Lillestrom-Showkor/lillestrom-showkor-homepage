import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import { getAllPosts } from 'src/lib/api';
import Post from 'src/interfaces/post';
import PostPreview from 'src/components/PostPreview';

import info from 'data/info.json';
import style from 'src/styles/pages/index.module.scss';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const title = `${info.name}`;
  return (
    <Layout className={style.index}>
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta property="og:image" content={'/images/logo.jpg'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={info.ogDescription} />
        <meta property="og:type" content={'website'} />
      </Head>
      {allPosts.map((post) => (
        <PostPreview
          className={style.postPrev}
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
