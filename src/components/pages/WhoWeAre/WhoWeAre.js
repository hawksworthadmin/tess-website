import React from 'react'
import Agreement from './Agreement'

export default function WhoWeAre() {
	return (
		<div>
			<div
				className="bg-1 bg-theme- "
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h1 className="fw-400 text-white">Who We Are</h1>
				</div>
			</div>
			<section className="who-we-are-area pt-100 pb-70">
				<div className="container" bis_skin_checked="1">
					<div className="row align-items-center" bis_skin_checked="1">
						<div className="col-lg-6" bis_skin_checked="1">
							<div
								className="who-we-are-img who-we-are-img-3 pr-15"
								bis_skin_checked="1"
							>
								<img
									src="/assets/figma/image-19.png"
									alt="Image"
									className="animate__slideInLeft "
									data-aos="fade-right"
								/>
							</div>
						</div>

						<div className="col-lg-6" bis_skin_checked="1">
							<div
								data-aos="fade-left"
								className="who-we-are-content who-we-are-content-two pl-15 "
								bis_skin_checked="1"
							>
								<span className="top-title">Who we are</span>
								<h2 data-aos-delay="50">
									The Transforming Education Systems at State Level (TESS)
									program was initiated in response to the need for educational
									reform and improvement in Nigeria.
								</h2>

								<p data-aos-delay="250">
									TESS aims to enhance the quality of education and learning
									outcomes in Nigerian states by addressing key challenges in
									the education sector. TESS seeks to transform the education
									sector in Nigeria and contribute to the country's
									socioeconomic growth and development.
								</p>

								<h3 data-aos-delay="250">Our Focus:</h3>
								<ul>
									<li data-aos-delay="300">Improving teacher quality</li>

									<li data-aos-delay="300">
										Enhancing curriculum and learning assessment systems
									</li>
									<li data-aos-delay="300">
										Strengthening school infrastructure
									</li>
									<li data-aos-delay="300">Promoting community engagement</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Agreement />
		</div>
	)
}
