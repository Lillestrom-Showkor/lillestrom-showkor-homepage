import React from 'react';
import cn from 'classnames';

import style from 'src/styles/components/footer.module.scss';
import Image from 'next/image';

import instagramLogo from 'public/images/instagram_logo.png';
import facebookLogo from 'public/images/facebook_logo.png';
import ntLogo from 'public/images/norsk_tipping_logo.png';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      <section className={style.content}>
        <section className={style.basedata}>
          <span>{String.fromCodePoint(0x000a9)} 2024 - Lillestrøm Showkor</span>
          {/* orgnr og vippsnr? */}
        </section>
        <section className={style.socialMedia}>
          <span className={style.socialMediaLink}>
            <a href={'https://www.instagram.com/lillestromshowkor/'}>
              <Image src={instagramLogo} alt={'Instagram Logo'} />
              Instagram
            </a>
          </span>
          <span className={style.socialMediaLink}>
            <a href={'https://www.facebook.com/lillestromshowkor/'}>
              <Image src={facebookLogo} alt={'Facebook Logo'} />
              Facebook
            </a>
          </span>
        </section>
        <section className={style.grasrotandelen}>
          <span className={style.socialMediaLink}>
            <a href={'https://www.norsk-tipping.no/grasrotandelen/din-mottaker/922985022'}>
              <Image src={ntLogo} alt={'Norsk Tipping Logo'} />
              Grasrotandelen
            </a>
          </span>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
