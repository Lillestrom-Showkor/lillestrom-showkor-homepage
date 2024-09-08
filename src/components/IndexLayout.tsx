import React from 'react';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';

import Header from 'src/components/Header';
import Footer from 'src/components/footer';
import ThemeMeta from 'src/components/ThemeMeta';

import style from 'src/styles/components/IndexLayout.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const IndexLayout = ({ children, className }: Props) => {
  return (
    <section className={cn(className, style.layout)}>
      <ThemeMeta />
      <Header className={style.header} />
      <main className={style.main}>{children}</main>
      <Footer className={style.footer} />
    </section>
  );
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  imageLeft?: boolean;
  imageSrc?: StaticImageData;
  imageAlt?: string;
};

export const IndexLayoutSection = ({
  children,
  className,
  title,
  imageSrc,
  imageAlt = '',
  imageLeft = false,
}: SectionProps) => {
  return (
    <section className={cn(className, style.layoutSection)}>
      <article className={cn(style.innerSection, imageLeft && style.imgLeft)}>
        <h2>{title}</h2>
        <div className={style.content}>{children}</div>
        {imageSrc !== undefined ? <Image alt={imageAlt} src={imageSrc} className={style.img} /> : null}
      </article>
    </section>
  );
};

export default IndexLayout;
