import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/about.module.scss';
import ContentMeta from 'src/components/ContentMeta';

export default function AboutPage() {
  return (
    <Layout>
      <ContentMeta title={'Om oss'} />
      <article className={style.about}>
        <h2>Om Lillestrøm Showkor</h2>
      </article>
    </Layout>
  );
}
