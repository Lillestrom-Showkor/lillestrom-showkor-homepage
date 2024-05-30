import React from 'react';
import cn from 'classnames';

import style from 'src/styles/components/footer.module.scss';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      <section className={style.basedata}>
        <span>{String.fromCodePoint(0x000a9)} 2024 - Lillestrøm Showkor</span>
      </section>
    </footer>
  );
};

export default Footer;
