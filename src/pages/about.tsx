import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/about.module.scss';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`Lillestrøm Showkor | Om Oss`}</title>
      </Head>
      <article className={style.about}>
        <h2>Om Lillestrøm Showkor</h2>
        
      </article>
    </Layout>
  );
}
