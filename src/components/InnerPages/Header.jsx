import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ data, subBg }) {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h6 className="sub-title">{data.subTitle}</h6>
              <h1 className="fz-55">{data.title}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-4">
            <div className="text mt-30">
              <p> {t('about page.header.paragraph')} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header