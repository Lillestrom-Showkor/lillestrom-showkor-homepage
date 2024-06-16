import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/contact.module.scss';
import ContactForm from 'src/components/ContactForm';

export default function BookingPage() {
  return (
    <Layout title={'Kontakt'}>
      <article className={style.contact}>
        <h2>Kontakt Lillestrøm Showkor</h2>
        <ContactForm subject="Henvendelse Lillestrøm Showkor" />
      </article>
    </Layout>
  );
}
