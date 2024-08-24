// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
