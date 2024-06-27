import React from 'react';
//= Data
import data from '@/data/Startup/clients.json';
import appData from '@/data/app-data.json';
import Split from '../Common/Split';
import { useTranslation } from 'react-i18next';

function Clients({ lightMode }) {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <div className="clients section-padding pb-100 position-re">
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className="col-lg-6 text-center">
            <h6><span className="fz-14">03 . </span> {t('home page.clients.title')}</h6>
            <div className="text">
              <h3>{t('home page.clients.span1')} <span className="sub-font">{t('home page.clients.span2')}</span> {t('home page.clients.span3')}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {
                data.map((item) => (
                  <div className="col-md-4 col-6 brand box-bg" key={Math.floor(Math.random() * 10000)}>
                    <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <img src={`/${lightMode ? 'light' : 'dark'}${item}`} alt="" />
                      </div>
                      <Split tag="a" href={appData.author_link} className="link">
                        www.GeekFolio.com
                      </Split>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern patrn1 bg-img opacity-5" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/pattern.svg`}></div>
    </div>
  )
}

export default Clients