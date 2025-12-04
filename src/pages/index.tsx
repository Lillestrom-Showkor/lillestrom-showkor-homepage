import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import Layout, { IndexLayoutSection } from 'src/components/IndexLayout';

import coverImg from 'public/images/cover.jpg';
import bookingImg from 'public/images/connect-white-winter-hymnal.jpg';
import joinImg from 'public/images/korsang-farger.jpg';

import style from 'src/styles/pages/index.module.scss';
import ContentMeta from 'src/components/ContentMeta';
import { getAllPosts } from 'src/lib/api';
import PostType from 'src/interfaces/post';
import Link from 'next/link';

type IndexProps = {
  latestPost?: PostType;
};

export default function Index({ latestPost }: IndexProps) {
  return (
    <Layout className={style.index}>
      <ContentMeta title={'Det mest gøyale koret på Romerike!'} path={'/'} />
      <section className={cn(style.title, style.collage)}>
        <div className={style.content}>
          <h1>Lillestrøm Showkor</h1>
        </div>
        <Image alt={'Lillestrøm Showkor på byfesten'} src={coverImg} className={style.coverImg} />
      </section>
      <IndexLayoutSection
        className={style.about}
        imageSrc={coverImg}
        imageAlt={'Lillestrøm Showkor'}
        title={'Hvem er vi?'}
      >
        <p>
          Lillestrøm Showkor er et dynamisk kor i Lillestrøm, etablert i januar 2019. Vi har sangere fra store deler av
          Nedre Romerike og elsker å utforske rytmisk musikk innen et bredt spekter av sjangre.
        </p>
        <p>
          Vårt mål er å underholde på ulike eventer og konserter, og med vår musikalske lekenhet og lidenskap blir hver
          fremføring en minneverdig opplevelse. Fra klassiske slagere til moderne hits, sørger Lillestrøm Showkor for at
          det alltid svinger. Ser du etter et kor i Lillestrøm eller ellers på Romerike, er vi et kor som garanterer
          musikkglede!
        </p>
      </IndexLayoutSection>
      {latestPost !== null && (
        <IndexLayoutSection
          className={style.latest}
          imageSrc={{ src: latestPost!.image, width: 256, height: 256 }}
          imageAlt={latestPost?.title}
          imageLeft={true}
          title={
            <Link
              as={`/posts/${latestPost!.slug}`}
              href="/posts/[slug]"
              aria-label={latestPost!.title}
            >{latestPost!.title}</Link>
          }
        >
          <p>{latestPost!.excerpt}</p>
          <Link as={`/posts/${latestPost!.slug}`} href="/posts/[slug]" aria-label={latestPost!.title}>
            {'Les mer...'}
          </Link>
        </IndexLayoutSection>
      )}
      <IndexLayoutSection
        className={style.booking}
        imageSrc={bookingImg}
        imageAlt={'Lillestrøm Showkor i konsert'}
        imageLeft={true}
        title={'Konserter og Opptredener'}
      >
        <p>
          Vi opptrer på både små og store arenaer. Vi har årlig vært på sykehjem og Lysvandring og langs Sagelva med
          rolige fremføringer for å glede unge og gamle. I tillegg har vi regelmessig større konserter. Blant annet har
          vi hatt flere konserter på Lillestrøm Kultursenter, samt på{' '}
          <a href={'https://www.byfesten.no/'} target="_blank">
            Byfesten i Lillestrøm
          </a>
          .
        </p>
        <p>
          Er du interessert i å leie oss inn til en tilstelning eller konsert? Vi kan stille enten som hele eller deler
          av koret, gitt at repertoaret vårt passer. Ta kontakt, så forsøker vi å finne noe som passer!
        </p>
        <Link as={`/contact`} href="/contact" aria-label={'Kontakt Lillestrøm Showkor'} className={style.bookLink}>
          {'BOOKING'}
        </Link>
      </IndexLayoutSection>
      <IndexLayoutSection
        className={style.join}
        imageSrc={joinImg}
        imageAlt={'Sangere i ulike farger'}
        title={'Bli med i koret?'}
      >
        <p>
          Bor du i Lillestrøm eller et annet sted på Nedre Romerike og lurer på å bli med i et kor? Vi er et energisk og
          talentfullt kor som holder til i Lillestrøm. Hos oss kombineres sangglede med show og underholdning, og passer
          for alle som ønsker å synge i et sosialt og kreativt miljø.
        </p>
        <p>Gå til opptakssiden vår og registrer deg, så kontakter vi deg for mulig prøvesang eller åpen øvelse!</p>
        <Link as={`/join`} href="/join" aria-label={'Bli med i Lillestrøm Showkor'} className={style.joinLink}>
          {'OPPTAK'}
        </Link>
      </IndexLayoutSection>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  if (allPosts.length === 0) {
    return { props: { latestPost: null } };
  }

  const latest = allPosts.reduce((prev, next) => {
    return next.date > prev.date ? next : prev;
  }, allPosts[0]);

  return {
    props: { latestPost: latest },
  };
};
