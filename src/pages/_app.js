import React from "react";
//= Packages
import Script from "next/script";
import Head from "next/head";
//= Common Styles
import '@/styles/modal-video.css';
import "swiper/css/bundle";
import '@/styles/globals.css';
import "@/styles/appointment.css"
import "@/styles/dashboard.css"
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { SessionProvider } from "next-auth/react";

  i18next.use(initReactI18next)
  .use(Backend)
  .init({
    backend : {
      loadPath :'/traduction/{{ lng }}/traduction.json'
    },
    lng :'en' ,
    fallbacking :'en'
  })

function App({ Component, pageProps ,session}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Geekfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/parallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/ScrollTrigger.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/ScrollSmoother.min.js"></Script>
      <Script strategy="beforeInteractive" src="/showcase/assets/js/anime.min.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/imgReveal/demo.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/scripts.js"></Script>
    </>
  );
}

export default App;