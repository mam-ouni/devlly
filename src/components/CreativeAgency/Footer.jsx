import React, { useEffect } from 'react';
//= Data
import data from '@/data/app-data.json';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'react-i18next';


function Footer({ lightMode }) {
  const {t} = useTranslation('en' , {useSuspense : false});
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      setTimeout(()=> {
        ScrollTrigger.create({
          trigger: 'main',
          start: 'bottom bottom',
          end: '+=50%',
          animation: uncover,
          scrub: true,
        })}
        ,200);
      
    }
  }, []);

  return (
    <footer style={{marginTop : "4vh"}}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>{t('home page.footer.titres.one')}</h6>
                </div>
                <div className="text">
                  <p>{t('home page.footer.address')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>{t('home page.footer.titres.two')}</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">hello@design.com</a>
                  </p>
                  <h5>
                    <a href="#">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>{t('home page.footer.titres.three')}</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>{t('home page.footer.titres.four')}</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder={t('home page.footer.input')} />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
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
                    <p className="fz-13">© 2023 {t('home page.footer.copyright')} <span className="underline"><a
                      href={data.author_link}
                      target="_blank">{data.author}</a></span></p>
                  </div>
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