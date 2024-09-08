import React from 'react';
import cn from 'classnames';

import style from 'src/styles/components/footer.module.scss';
import Image from 'next/image';

import instagramLogo from 'public/images/instagram_logo.png';
import facebookLogo from 'public/images/facebook_logo.png';
import youtubeLogo from 'public/images/youtube_logo.png';
import ntLogo from 'public/images/norsk_tipping_logo.png';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      <section className={style.content}>
        <section className={style.basedata}>
          <span>{`${String.fromCodePoint(0x000a9)} 2024 - Lillestrøm Showkor`}</span>
          <span>{'Org. nr.: 922 985 022'}</span>
          <span>{'Vipps: 766 577'}</span>
        </section>
        <section className={style.socialMedia}>
          <span className={style.footerLink}>
            <a href={'https://www.instagram.com/lillestromshowkor/'} target={'_blank'}>
              <Image src={instagramLogo} alt={'Instagram Logo'} />
              {'Instagram'}
            </a>
          </span>
          <span className={style.footerLink}>
            <a href={'https://www.facebook.com/lillestromshowkor/'} target={'_blank'}>
              <Image src={facebookLogo} alt={'Facebook Logo'} />
              {'Facebook'}
            </a>
          </span>
          <span className={style.footerLink}>
            <a href={'https://www.youtube.com/@lillestrmshowkor4322'} target={'_blank'}>
              <Image src={youtubeLogo} alt={'Youtube Logo'} />
              {'Youtube'}
            </a>
          </span>
        </section>
        <section className={style.grasrotandelen}>
          <span className={style.footerLink}>
            <a href={'https://www.norsk-tipping.no/grasrotandelen/din-mottaker/922985022'} target={'_blank'}>
              <Image src={ntLogo} alt={'Norsk Tipping Logo'} />
              {'Grasrotandelen'}
            </a>
          </span>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
