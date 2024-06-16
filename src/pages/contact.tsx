import React from 'react';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/contact.module.scss';
import ContactForm from 'src/components/ContactForm';

import oppdragImg from 'public/images/gruppebilde.jpg';

export default function BookingPage() {
  return (
    <Layout title={'Kontakt'}>
      <article className={style.contact}>
        <h2>Kontakt Lillestrøm Showkor</h2>
        <Image alt={'Korsangere'} src={oppdragImg} className={style.image} width={320} />
        <p>
          Om du har en forespørsel relatert til booking, sponsing, medier eller noe helt annet kan du kontakte oss her.
        </p>
        <p>
          Vi er åpne for å holde konserter, stille opp på eventer og lignende med enten hele eller en gruppe fra koret.
          Ta kontakt for mer informasjon og å drøfte mulighetene.
        </p>
        <ContactForm subject="Henvendelse Lillestrøm Showkor" className={style.form} id={'form'} />
      </article>
    </Layout>
  );
}
