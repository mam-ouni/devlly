import React from 'react';
import { useTranslation } from 'react-i18next';

function Intro() {
  const {t} = useTranslation('en' , {useSuspense : false});
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/about/sq1.jpg" alt="" className="radius-10" />
              </div>
              <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/about/sq2.jpg" alt="" className="radius-10" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text"> {t('about page.intro.title.one')} </span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">{t('about page.intro.title.two')}</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">{t('about page.intro.title.three')}</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">{t('about page.intro.data.one.title')}</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">{t('about page.intro.data.one.text')}</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">{t('about page.intro.data.two.title')}</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">{t('about page.intro.data.two.text')}</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">{t('about page.intro.data.three.title')}</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">{t('about page.intro.data.three.text')}</p>
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

export default Intro