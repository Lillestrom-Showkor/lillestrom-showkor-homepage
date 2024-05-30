import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

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
      <ul className={style.menu}>
        <li className={style.item}>
          <Link href="/">{'Hjem'}</Link>
        </li>
        <li className={style.item}>
          <Link href="/about">{'Om oss'}</Link>
        </li>
        <li className={style.item}>
          <Link href="/booking">{'Booking'}</Link>
        </li>
        <li className={style.item}>
          <Link href="/join">{'Bli med i koret'}</Link>
        </li>
      </ul>
      <CloseIcon className={style.close} onClick={() => onClose && onClose()} />
    </nav>
  );
};

export default Navigation;
