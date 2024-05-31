import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/about.module.scss';
import ContactForm from 'src/components/ContactForm';

export default function BookingPage() {
  return (
    <Layout>
      <Head>
        <title>{`Lillestrøm Showkor | Booking`}</title>
      </Head>
      <article className={style.booking}>
        <h2>Booking</h2>
        <ContactForm subject="Booking" />
      </article>
    </Layout>
  );
}
