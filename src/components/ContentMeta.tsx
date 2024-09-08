import React from 'react';
import Head from 'next/head';

import info from 'data/info.json';

type ContentMetaProps = {
  title?: string;
  description?: string;
  path?: string;
};

const ContentMeta = ({ description, title, path }: ContentMetaProps) => {
  const compositeTitle = title ? `Lillestrøm Showkor | ${title}` : 'Lillestrøm Showkor';
  const desc = description ?? info.description;
  return (
    <Head>
      {path !== undefined && <link rel={'canonical'} href={`https://lillestromshowkor.no${path}`} />}
      <meta name="description" content={desc} />
      <meta property="og:image" content={'/images/logo.jpg'} />
      <meta property="og:title" content={compositeTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={'website'} />
      <title>{compositeTitle}</title>
    </Head>
  );
};

export default ContentMeta;
