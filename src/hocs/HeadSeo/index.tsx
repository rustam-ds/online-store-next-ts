import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Props } from './interfaces';

export const HeadSeo: NextPage<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <meta name={'description'} content={description} />
      </Head>
      {children}
    </>
  );
};
