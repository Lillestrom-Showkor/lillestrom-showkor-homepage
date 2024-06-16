import React from 'react';
import Head from 'next/head';

type MetaProps = {
  title?: string;
  description?: string;
};

const Meta = ({ description, title }: MetaProps) => {
  const compositeTitle = title ? `Lillestrøm Showkor | ${title}` : 'Lillestrøm Showkor';
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Hjemmesiden til Lillestrøm Showkor`} />
      <meta property="og:image" content={'/images/logo.jpg'} />
      <meta property="og:title" content={compositeTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <title>{compositeTitle}</title>
    </Head>
  );
};

export default Meta;
