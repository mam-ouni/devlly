import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';
import { useTranslation } from 'react-i18next';

function About() {
	const {t} = useTranslation('en' , {useSuspense : false});
	useEffect(() => {
		parallaxie('.back-image.parallaxie', 0.4);
	}, []);

	return (
		<section className="section-padding">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="cont">
							<h3 className="mb-15"> {t('product page.about.title')} </h3>
							<p>{t('product page.about.text')}</p>
							<div className="info d-flex mt-50">
								<div className="item mr-50">
									<h6 className="fz-16"> {t('product page.about.row.title1')} </h6>
									<span className="sub-title ls1">{t('product page.about.row.text1')}</span>
								</div>
								<div className="item mr-50">
									<h6 className="fz-16"> {t('product page.about.row.title2')} </h6>
									<span className="sub-title ls1">{t('product page.about.row.text2')}</span>
								</div>
								<div className="item">
									<h6 className="fz-16"> {t('product page.about.row.title3')} </h6>
									<span className="sub-title ls1">{t('product page.about.row.text3')}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="back-image bg-img parallaxie mt-100" data-background="/dark/assets/imgs/works/projects/2/2.jpg"></div>
		</section>
	)
}

export default About