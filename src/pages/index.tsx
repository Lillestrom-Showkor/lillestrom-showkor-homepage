import React from 'react';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';

import coverImg from 'public/images/byfesten_alle.jpg';
import coverImg2 from 'public/images/byfesten_sopran.jpg';
import coverImg3 from 'public/images/byfesten_alt_herre.jpg';

import info from 'data/info.json';
import style from 'src/styles/pages/index.module.scss';

export default function Index() {
  return (
    <Layout className={style.index} description={info.ogDescription}>
      <h1>Lillestrøm Showkor</h1>
      <article className={style.description}>
        <div className={style.collage}>
          <Image alt={'Lillestrøm på byfesten'} src={coverImg} className={style.coverImg} />
          <Image alt={'Lillestrøm på byfesten'} src={coverImg2} className={style.coverImg2} />
          <Image alt={'Lillestrøm på byfesten'} src={coverImg3} className={style.coverImg3} />
        </div>
        <p>
          Lillestrøm Showkor er en dynamisk a cappella korgruppe som ble etablert i januar 2019. Vi er en musikalsk
          gjeng som elsker å utforske rytmisk musikk innen sjangrene pop, soul, funk og jazz.
        </p>
        <p>
          Basert i hjertet av Lillestrøm, har vi som mål å underholde på ulike eventer og konsertarrangementer. Vår
          musikalske lekenhet og lidenskap sikrer at hver fremføring blir en uforglemmelig opplevelse. Fra gamle slagere
          til moderne hits, sørger Lillestrøm Showkor for at det alltid svinger og at publikum har noe å glede seg til.
        </p>
      </article>
    </Layout>
  );
}
