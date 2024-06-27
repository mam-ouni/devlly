import React from 'react';
import { useTranslation } from 'react-i18next';

function Intro() {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <div className="panel o-hidden intro-pan sub-bg">
      <div className="container o-hidden rest mt-60">
        <div className="row mb-80 rest">
          <div className="col-lg-7 rest valign">
            <div className="main-marq lrg">
              <div className="slide-har st1">
                <div className="box pb-20">
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre')} &</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre2')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre')} &</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre2')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre')} &</h4>
                  </div>
                </div>
                <div className="box pb-20">
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre')} &</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre2')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre')} &</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre2')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.hzscroll.intro.titre')} &</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 rest">
            <div className="text valign">
              <p className="fz-14">{t('home page.hzscroll.intro.paragraph')}</p>
            </div>
          </div>
        </div>
        <div className="container numbers">
          <div className="row md-marg">
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <h2 className="fw-800 stroke">28</h2>
                <h6>{t('home page.hzscroll.intro.stat.sous titre1')}</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <h2 className="fw-800">4k</h2>
                <h6>{t('home page.hzscroll.intro.stat.sous titre2')}</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item sm-mb50">
                <h2 className="fw-800 stroke">12k</h2>
                <h6>{t('home page.hzscroll.intro.stat.sous titre3')}</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <h2 className="fw-800">17</h2>
                <h6>{t('home page.hzscroll.intro.stat.sous titre4')}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro