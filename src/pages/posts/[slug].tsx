import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Post from 'src/components/Post';
import Layout from 'src/components/DefaultLayout';
import { getPostBySlug, getPostSlugs } from 'src/lib/api';
import type PostType from 'src/interfaces/post';

import details from 'data/info.json';
import ContentMeta from 'src/components/ContentMeta';

type Props = {
  post: PostType;
};

export default function PostPage({ post }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <ContentMeta title={post.title} description={post.excerpt} />
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <Post
          title={post.title}
          image={post.image}
          date={post.date}
          content={post.content}
          embeddedYouTube={post.embeddedYouTube}
        />
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getPostSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
