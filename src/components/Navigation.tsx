import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import info from 'data/info.json';
import logo from 'public/images/logoimg.png';
import style from 'src/styles/components/Navigation.module.scss';
import CloseIcon from 'src/components/icons/CloseIcon';

type NavigationProps = {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
};

export const Navigation = ({ className, isOpen, onClose }: NavigationProps) => {
  return (
    <nav className={cn(className, style.navigation, isOpen && style.open)}>
      <Image className={style.navtitle} src={logo} alt={`${info.name} Logo`} width={64} />
      <ul className={style.menu}>
        <li className={style.item}>
          <Link href="/">{'Hjem'}</Link>
        </li>
        <li className={style.item}>
          <Link href="/blog">{'Aktuelt'}</Link>
        </li>
        <li className={style.item}>
          <Link href="/contact">{'Kontakt'}</Link>
        </li>
        <li className={style.item}>
          <Link href="/join">{'Opptak'}</Link>
        </li>
      </ul>
      <CloseIcon className={style.close} onClick={() => onClose && onClose()} />
    </nav>
  );
};

export default Navigation;
