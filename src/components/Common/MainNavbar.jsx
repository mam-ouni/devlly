import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
function MainNavbar({ lightMode, mainBg, subBg, noStatic, curve }) {

  const {t} = useTranslation('en' , {useSuspense : false});

  function handleLangueChange(event){
    i18next.changeLanguage(event.target.value);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.add('show');
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains('open')) closeBtn.style.display = 'block';
    else closeBtn.style.display = 'none';
  }

  return (
    <nav className={`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`}>
      <div className="container">
        <Link className="logo icon-img-100" href={'./'}>
          {
            lightMode ?
              <img src="/dark/assets/imgs/logo-dark.png" alt="logo" />
              :
              <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          }
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" href={`/`}><span className="rolling-text">{t('home page.navbar.home')}</span></Link>
            </li>

            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span className="rolling-text">{t('home page.navbar.pages.pages')}</span></a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={`/page-about`}>{t('home page.navbar.pages.about')}</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/page-services`}>{t('home page.navbar.pages.services')}</Link>
                <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/page-team`}>{t('home page.navbar.pages.our team')}</Link>
                <Link className="dropdown-item" href={`/page-contact`}>{t('home page.navbar.pages.contact us')}</Link>
                <Link className="dropdown-item" href={`/appointment`}>{t('home page.navbar.appointment')}</Link>
              </div>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" href={`/portfolio`}><span className="rolling-text">{t('home page.navbar.portfolio')}</span></Link>
            </li>
            {
              /* 
                <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="rolling-text">{t('home page.navbar.blogs.blogs')}</span>
                  </a>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-classic`}>{t('home page.navbar.blogs.blog standerd')}</Link>
                    <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-list`}>{t('home page.navbar.blogs.blog list')}</Link>
                    <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-half-img`}>{t('home page.navbar.blogs.image out frame')}</Link>
                    <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-details`}>{t('home page.navbar.blogs.blog details')}</Link>
                  </div>
                </li>
              */
            }

            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">{t('home page.navbar.shop.shop')}</span>
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={`all-products`}>{t('home page.navbar.shop.shop list')}</Link>
                <Link className="dropdown-item" href={`/product`}>{t('home page.navbar.shop.single product')}</Link>
                {
                  /* 
                  <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/shop-cart`}>{t('home page.navbar.shop.cart')}</Link>
                  <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/shop-checkout`}>{t('home page.navbar.shop.checkout')}</Link>
                  */
                }
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={`/page-contact`}><span className="rolling-text">{t('home page.navbar.contact')}</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/page-about`}><span className="rolling-text">{t('home page.navbar.about')}</span></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center justify-content-center" href={`/appointment`}><span style={{borderRadius : '10px'}} className="rolling-text bg-light text-dark px-2">{t('home page.navbar.appointment')}</span></Link>
            </li>

            <li className="nav-item d-flex align-items-center justify-content-center">
              <select className='px-2 py-2 bg-dark text-light' style={{borderRadius :'10px'}} href={`/${lightMode ? 'light' : 'dark'}/page-contact`}
                onChange={handleLangueChange}
                defaultValue={"en"}
                >
                <option className="rolling-text" value={"en"}>EN</option>
                <option className="rolling-text" value={"fr"} >FR</option>
              </select>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar