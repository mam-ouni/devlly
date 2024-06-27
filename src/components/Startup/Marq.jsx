import React from 'react';
import { useTranslation } from 'react-i18next';

function Marq() {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <section className="serv-marq skew ontop" style={{marginTop:'10vh'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="main-marq lrg opacity-4">
              <div className="slide-har st1 strok">
                <div className="box">
                  <div className="item">
                    <h4>{t('home page.marq.first')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.second')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.third')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.fourth')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.fifth')}</h4>
                  </div>
                </div>
                <div className="box">
                  <div className="item">
                    <h4>{t('home page.marq.first')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.second')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.third')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.fourth')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('home page.marq.fifth')}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marq