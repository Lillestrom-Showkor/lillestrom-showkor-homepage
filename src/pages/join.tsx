import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/join.module.scss';
import ContactForm from 'src/components/ContactForm';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`Lillestrøm Showkor | Begynne i koret?`}</title>
      </Head>
      <article className={style.join}>
        <h2>Bli med i Lillestrøm Showkor!</h2>
        <ContactForm subject={'Innmelding Lillestrøm Showkor'} />
      </article>
    </Layout>
  );
}
