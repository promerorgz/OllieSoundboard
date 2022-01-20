import React from "react";
import Head from "next/head";
import "../index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ollie Soundboard</title>
        <link rel="icon" type="image/x-icon" href="../public/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
