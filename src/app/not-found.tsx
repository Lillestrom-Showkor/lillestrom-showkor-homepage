import Link from 'next/link';
import Image from 'next/image';

import cn from 'classnames';

import logo from 'public/images/logo.jpg';
import Footer from 'src/components/footer';

import 'src/styles/main.scss';
import style from 'src/styles/pages/notfound.module.scss';

import { Roboto_Condensed as GoogleFont } from 'next/font/google';

const font = GoogleFont({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <section className={cn(style.notfound, font.className)}>
      <main>
        <Image alt={'Lillestrøm Showkor'} src={logo} className={style.logo} width={320} />
        <h1>Oisann!</h1>
        <p>Denne siden eksisterer ikke. Det kan være at den er flyttet eller at det er en skrivefeil i adressen.</p>
        <Link href="/">Til hovedsiden</Link>
      </main>
      <Footer className={style.footer} />
    </section>
  );
}
