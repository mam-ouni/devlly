import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { useTranslation } from 'react-i18next';

function Story() {
  const {t} = useTranslation('en' , {useSuspense : false});
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/sq1.jpg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/about/sq2.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">{t('about page.story.title')}</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>{t('about page.story.text')} </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story