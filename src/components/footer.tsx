import React from 'react';
import cn from 'classnames';

import style from 'src/styles/components/footer.module.scss';
import Image from 'next/image';

import instagramLogo from 'public/images/instagram_logo.png';
import facebookLogo from 'public/images/facebook_logo.png';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      <section className={style.basedata}>
        <span>{String.fromCodePoint(0x000a9)} 2024 - Lillestrøm Showkor</span>
        <span className={style.socialMediaLink}>
          <a href={'https://www.instagram.com/lillestromshowkor/'}>
            <Image src={instagramLogo} alt={'Instagram Logo'} />
            Instagram
          </a>
        </span>
        <span className={style.socialMediaLink}>
          <a href={'https://www.facebook.com/lillestromshowkor/'}>
            <Image src={facebookLogo} alt={'Facebook logo'} />
            Facebook
          </a>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
