import React from 'react'
import Agreement from './Agreement'

export default function WhoWeAre() {
	return (
		<div>
			<div
				className="bg-1 bg-theme-"
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h3 className="fw-400 text-white">What We Do</h3>
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
								<img src="assets/images/who-we-are-img-3.jpg" alt="Image" />
							</div>
						</div>

						<div className="col-lg-6" bis_skin_checked="1">
							<div
								className="who-we-are-content who-we-are-content-two pl-15"
								bis_skin_checked="1"
							>
								<span className="top-title">Who we are</span>
								<h2>
									The Transforming Education Systems at State Level (TESS)
									program was initiated in response to the need for educational
									reform and improvement in Nigeria.
								</h2>

								<p>
									TESS aims to enhance the quality of education and learning
									outcomes in Nigerian states by addressing key challenges in
									the education sector. TESS seeks to transform the education
									sector in Nigeria and contribute to the country's
									socioeconomic growth and development.
								</p>

								<h3>Our Focus:</h3>
								<ul>
									<li>Improving teacher quality</li>
									<li>
										Curabitur arcu erat, accumsan id imperdiet et, porttitor at
										sem
									</li>
									<li>Enhancing curriculum and assessment systems</li>
									<li>Strengthening school infrastructure</li>
									<li>Promoting community engagement</li>
								</ul>

								{/* <a href="about.html" className="default-btn">
									Learn more
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</section>
            <Agreement />
		</div>
	)
}
