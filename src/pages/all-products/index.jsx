import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/CreativeAgency/Footer';
import Header from '@/components/Portfolio/Header';
import MasonryTwoCols from '@/components/Portfolio/Masonry/2Col';
import { useTranslation } from 'react-i18next';

function PortfolioMasonry2() {
    const {t} = useTranslation('en' , {useSuspense : false});
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: t('all products page.header.sub title'),
    title: t('all products page.header.sub title')
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Portfolio Masonry 2 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <MasonryTwoCols />
      </main>
      <Footer subBg />
    </>
  )
}

PortfolioMasonry2.getLayout = page => <Layout>{page}</Layout>

export default PortfolioMasonry2;