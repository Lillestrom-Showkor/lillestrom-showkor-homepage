import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import logo from 'public/images/logo.jpg';
import style from 'src/styles/components/Header.module.scss';
import MenuIcon from 'src/components/icons/MenuIcon';

import info from 'data/info.json';
import Navigation from './Navigation';

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={cn(className, style.headerWrapper)}>
      <div className={style.header}>
        <Link className={style.homelink} href="/">
          <div className={style.logowrapper}>
            <Image
              className={style.logo}
              src={logo}
              alt={`${info.name} Logo`}
              fill={true}
              sizes={'(min-width: 40rem) 128px, 80px'}
            />
          </div>
        </Link>
        <Navigation isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
        <MenuIcon
          className={style.menuIcon}
          onClick={(event) => {
            setMenuOpen(!isMenuOpen);
            event.stopPropagation();
          }}
        />
      </div>
    </header>
  );
};

export default Header;
