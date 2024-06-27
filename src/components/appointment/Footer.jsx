import React from 'react';
//= Data
import data from '@/data/app-data.json';
import { useTranslation } from 'react-i18next';

function Footer({ lightMode }) {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <footer className="sub-bg">
      <div className="sub-footer pt-40 pb-40 bord-thin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <a href="#0">
                  <img src={`/dark/assets/imgs/logo-${lightMode ? 'dark' : 'light'}.png`} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © 2023 {t('home page.footer.copyright')} <span className="underline"> <a href={data.author_link} target="_blank">{data.author}</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer