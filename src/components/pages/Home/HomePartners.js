import React from 'react'

export default function HomePartners() {
	return (
		<section className="services-area services-area-style-two pt-100 pb-70">
			<div className="container">
				<div className="section-title" bis_skin_checked="1">
					<h2 data-aos="fade-up">Municipality services</h2>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						eveniet quod mollitia asperiores ullam dolor corporis. vero nemo
						consectetur
					</p> */}
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-3">
						<img
							data-aos="fade-up"
							width={200}
							src="https://fmic.gov.ng/wp-content/uploads/2019/02/worldbank.png"
							alt="partner"
						/>
					</div>
					<div className="col-lg-3">
						<img
							data-aos="fade-up"
							data-aos-delay="50"
							width={200}
							src="https://i.onthe.io/smngoz5g75kpkm53u.313edc0e.jpg"
							alt="partner"
						/>
					</div>
					<div className="col-lg-3">
						<img
							data-aos="fade-up"
							data-aos-delay="150"
							width={200}
							src="https://www.globalpartnership.org/themes/custom/gpe/img/default-thumb-small.png"
							alt="partner"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
