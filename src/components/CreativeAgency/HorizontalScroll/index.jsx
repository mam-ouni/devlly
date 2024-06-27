import React, { useEffect , useState } from 'react';
//= Components
import Intro from './Intro';
import Awards from './Awards';
import CallToAction from './CallToAction';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function HzScroll({ lightMode }) {
  useEffect(() => {
    setTimeout(()=> {
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
        }
      });
    }
    },200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    setTimeout(()=> {
    if (window.innerWidth < 991 && document.querySelector('.thecontainer').style.maxHeight) {
      location.reload();
    } else if (window.innerWidth > 991 && !document.querySelector('.thecontainer').style.maxHeight) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
        }
      });
    }
  },200);
  }

  return (
    <section className="thecontainer ontop">
      <Intro />
      <Awards lightMode={lightMode} />
      <CallToAction lightMode={lightMode} />
    </section>
  )
}

export default HzScroll