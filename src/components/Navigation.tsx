import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import info from 'data/info.json';
import logo from 'public/images/logoimg.png';
import style from 'src/styles/components/Navigation.module.scss';
import CloseIcon from 'src/components/icons/CloseIcon';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  path: string;
  title: string;
  currentPath: string;
  onClose?: () => void;
};

const NavItem = ({ path, title, currentPath, onClose }: NavItemProps) => {
  if (path === currentPath) {
    return (
      <li className={style.item}>
        <a
          onClick={() => {
            onClose && onClose();
            return false;
          }}
        >
          {title}
        </a>
      </li>
    );
  }
  return (
    <li className={style.item}>
      <Link href={path}>{title}</Link>
    </li>
  );
};

type NavigationProps = {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
};

export const Navigation = ({ className, isOpen, onClose }: NavigationProps) => {
  const currentPath = usePathname();
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const listener = (event) => {
      if (isOpen && root != event.target && !root.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  });
  return (
    <nav ref={root} className={cn(className, style.navigation, isOpen && style.open)}>
      <Image className={style.navtitle} src={logo} alt={`${info.name} Logo`} width={64} />
      <ul className={style.menu}>
        <NavItem path="/" currentPath={currentPath} title={'Hjem'} onClose={onClose} />
        <NavItem path="/blog" currentPath={currentPath} title={'Aktuelt'} onClose={onClose} />
        <NavItem path="/contact" currentPath={currentPath} title={'Kontakt'} onClose={onClose} />
        <NavItem path="/join" currentPath={currentPath} title={'Opptak'} onClose={onClose} />
      </ul>
      <CloseIcon className={style.close} onClick={() => onClose && onClose()} />
    </nav>
  );
};

export default Navigation;
