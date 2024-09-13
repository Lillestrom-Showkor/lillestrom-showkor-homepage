import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from 'src/components/DefaultLayout';
import ContactForm from 'src/components/ContactForm';
import Post from 'src/interfaces/post';
import { getAllPosts } from 'src/lib/api';

import korsangImg from 'public/images/korsang-farger.jpg';
import style from 'src/styles/pages/join.module.scss';
import ContentMeta from 'src/components/ContentMeta';
import { formatDate } from 'src/lib/date';
import Alert, { AlertType } from 'src/components/Alert';

type Props = {
  introPost: Post;
};

export default function AboutPage({ introPost }: Props) {
  return (
    <Layout>
      <ContentMeta title={`Begynne i koret?`} path={'/join'} />
      <Alert
        type={AlertType.WARNING}
        text={
          'Grunnet pågang og en overvekt av kvinner i koret i dag, er vi nødt til å være noe mer restriktive i opptak av nye kvinnestemmer (sopran/alt). Ta gjerne likevel kontakt, det kan godt hende at akkurat din stemme passer godt inn i gruppen!'
        }
      />
      <article className={style.join}>
        <h2>Bli med i Lillestrøm Showkor!</h2>
        <p>
          Så gøy at du tenker på å bli med i koret vårt! Dersom du vil melde interesse med en gang, kan du gå rett ned
          til <a href={'#form'}>registreringsskjemaet</a> på bunnen av denne siden. Ellers kan du lese litt mer om både
          hvordan man blir med samt hva vi gjør i koret her:{' '}
          <Link as={`/posts/${introPost.slug}`} href={`/posts/[slug]`}>
            {introPost.title}
          </Link>
          .
        </p>
        <Image alt={'Korsangere'} src={korsangImg} className={style.imageKorsang} />

        <h3>Opptak</h3>
        <p>
          Lillestrøm Showkor har fast korøvelse hver tirsdag klokken 18:30 på Sagdalen Skole. Etter at du har meldt
          interesse blir du kontaktet for å avtale prøvesang i forkant av en av disse. Der skal vår dirigent skal få bli
          bedre kjent med deg og din stemme og se hvordan du passer inn i koret. Samtidig får du muligheten til å få
          svar på de spørsmål du måtte ha om koret vårt.
        </p>
        <p>
          Etter vellykket prøvesang, kan du delta på korøvelse allerede samme kveld. Da får du oppleve hvor utrolig gøy
          vi har det i koret! Da er det på en måte vi som har prøvesang for deg, siden vi veldig gjerne vil at du skal
          trives og fortsette sammen med oss!
        </p>
        <h3>Prøvesang</h3>
        <p>
          Prøvesang kan virke litt nervepirrende. Alle vi i koret har nok kjent litt på sommerfuglene i magen før vi
          skulle gjennom det. Vi kan likevel skrive under på at det er en mye triveligere opplevelse enn mange trodde på
          forhånd. Vi i Lillestrøm Showkor er opptatt av at alle skal ha en fin opplevelse på prøvesang, uavhengig av
          hva utfallet måtte bli.
        </p>
        <p>
          Prøvesangen blir gjennomført med kun deg og dirigenten vår, som er utrolig snill og hyggelig. Du blir geleidet
          gjennom noen stemme- og sangøvelser, slik at vi kan plassere stemmen din riktig. Deretter får du muligheten
          til å synge litt.
        </p>
        <p>
          La gleden din over å synge lede deg gjennom prøvesangen, så kommer dette til å gå veldig bra! Husk at vi heier
          på deg!
        </p>

        <h3>Meld interesse her:</h3>
        <ContactForm subject={'Innmelding Lillestrøm Showkor'} showPhoneEntry={true} id={'form'} />
      </article>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { introPost: allPosts.find((post) => formatDate(post.date) === '21.06.2024') },
  };
};
