import React from 'react';
import cn from 'classnames';

import Header from 'src/components/Header';
import Footer from 'src/components/footer';
import ThemeMeta from 'src/components/ThemeMeta';

import style from 'src/styles/components/DefaultLayout.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <section className={cn(className, style.layout)}>
      <ThemeMeta />
      <Header className={style.header} />
      <main className={style.main}>{children}</main>
      <Footer className={style.footer} />
    </section>
  );
};

export default Layout;
