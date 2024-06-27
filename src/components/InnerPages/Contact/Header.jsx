import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <header className="page-header section-padding sub-bg">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="sub-title">{t('contact page.header.titles.one')}</h6>
              <h1 className="fz-55">{t('contact page.header.titles.two')} <br /> {t('contact page.header.titles.three')}</h1>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="text">
              <p>{t('contact page.header.paragraph')}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header