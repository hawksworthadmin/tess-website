import arrangement from '@/data/arrangement'
import React from 'react'

export default function Agreement() {
	return (
		<section className="discover-area discover-area-style-three bg-color pb-100">
			<div className="container">
				<div className=" pt-100">
					<div
						className="section-title- text-center"
						bis_skin_checked="1"
						style={{ margin: '-13px auto 50px' }}
					>
						<h2>Institutional Arrangement</h2>
						<p className="">
							TESS establishes a robust governance structure involving the State
							Project Steering Committee (SPSC) at the state level, State
							Project Coordination Units (SPCUs) for operational management, and
							Local Government Education Authorities (LGEA) at the local
							government level.
						</p>
					</div>
				</div>
			</div>
			<br />
			<br />
			{arrangement.map((data) => {
				return (
					<div key={Math.random()}>
						<div className="container">
							<h4 className="mb-5 fw-600">{data.section_name}</h4>
							<div className="row justify-content-center">
								{data.fields.map((field) => {
									return <EachLevel key={Math.random()} data={field} />
								})}
							</div>
						</div>
						<br />
						<br />
						<br />
						<br />
					</div>
				)
			})}
		</section>
	)
}

const EachLevel = ({ data }) => {
	return (
		<div className="col-lg-4 col-md-6 mb-4">
			<div
				class="single-services-box d-flex justify-content-between bg-white h-100 pb-0"
				bis_skin_checked="1"
			>
				{/* <span class="flaticon-government"></span> */}
				<div className="col-3">
					<img
						src={
							'https://admaa.b-cdn.net/wp-content/uploads/2020/06/nigeria-coats-of-arms-decal-3.jpg'
						}
					/>
				</div>

				<div className="col-8">
					<h3>
						<a href="services-details.html">{data?.name}</a>
					</h3>

					<p>
						{data?.des}
					</p>

					{/* <a href="services-details.html" class="read-more">
						Learn more
						<i class="ri-arrow-right-s-line"></i>
					</a> */}

					<div class="services-shape" bis_skin_checked="1">
						<img src="assets/images/services-shape.png" alt="Image" />
					</div>
				</div>
			</div>
		</div>
	)
}