import React from 'react'

export default function StackHolders() {
	return (
		<section class="project-area pt-100 pb-70">
			<div class="container">
				<div class="section-title">
					<h2 data-aos="fade-up" data-aos-duration="1000">
						Key Stakeholders
					</h2>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						eveniet quod mollitia asperiores ullam dolor corporis. vero nemo
						consectetur
					</p> */}
				</div>

				<div class="row">
					<div class="col-lg-4 col-md-6 mb-4">
						<div class="single-project- text-center" data-aos="zoom-in-up">
							<img src="assets/figma/fpfmd.png" alt="Image" className="mb-4" />

							<p
								style={{ fontSize: '16px' }}
							>{`National Project Steering Committee (NPSC)`}</p>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 mb-4">
						<div class="single-project- text-center" data-aos="zoom-in-up">
							<img src="assets/figma/fpfmd.png" alt="Image" className="mb-4" />

							<p
								style={{ fontSize: '16px' }}
							>{`Federal Ministry of Finance, Budget, and National Planning (FMoFBNP)`}</p>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 mb-4">
						<div class="single-project- text-center" data-aos="zoom-in-up">
							<img src="assets/figma/fpfmd.png" alt="Image" className="mb-4" />

							<p
								style={{ fontSize: '16px' }}
							>{`Federal Project Financial Management Division (FPFMD)`}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
