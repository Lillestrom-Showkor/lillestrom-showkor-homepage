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
      <div className={style.collage}>
        <Image alt={'Lillestrøm på byfesten'} src={coverImg} className={style.coverImg} />
        <Image alt={'Lillestrøm på byfesten'} src={coverImg2} className={style.coverImg2} />
        <Image alt={'Lillestrøm på byfesten'} src={coverImg3} className={style.coverImg3} />
      </div>
    </Layout>
  );
}
