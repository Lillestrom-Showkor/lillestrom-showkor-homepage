import React from 'react';

import Layout from 'src/components/DefaultLayout';
import { getAllPosts } from 'src/lib/api';
import Post from 'src/interfaces/post';
import PostPreview from 'src/components/PostPreview';

import style from 'src/styles/pages/blog.module.scss';
import ContentMeta from 'src/components/ContentMeta';

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout className={style.blog}>
      <ContentMeta title={`Aktuelt`} path={'/blog'} />
      {allPosts.map((post) => (
        <PostPreview
          className={style.postPrev}
          key={post.slug}
          title={post.title}
          coverImage={post.image}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
  };
};
