import arrangement from '@/data/arrangement'
import React from 'react'

export default function Agreement() {
	return (
		<section className="discover-area discover-area-style-three bg-color pb-100">
			<div className="container">
				<div className=" pt-100">
					<div
						data-aos="fade-up"
						data-aos-delay="100"
						className="section-title- text-center"
						bis_skin_checked="1"
						style={{ margin: '-13px auto 50px' }}
					>
						<h2>Institutional Arrangement</h2>
						<p className="">
							TESS establishes a robust governance structure involving four
							levels of coordination and implementation. The National Project
							Steering Committee(NPSC) and the Federal Project Coordination Unit
							(FPCU) at the the federal level; State Project Steering Committee
							(SPSC) at the the state level, State Project Coordination
							Units(SPSUs) for operational management, and Local Government
							Education Authorities (LGEA) at the local government level and
							School Based Management Committee (SBMC) at the school level.
						</p>
					</div>
				</div>
			</div>
			<br />
			<br />
			{arrangement.map((data, i) => {
				return (
					<div key={`arrangement_${i}`}>
						<div className="container">
							<h4
								className="mb-5 fw-600"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								{data.section_name}
							</h4>
							<div className="row justify-content-center">
								{data.fields.map((field, i) => {
									return (
										<EachLevel
											key={`level_${i}`}
											data={field}
											index={i + 100}
										/>
									)
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

const EachLevel = ({ data, index }) => {
	return (
		<div
			className="col-lg-4 col-md-6 mb-4"
			data-aos="fade-up"
			data-aos-delay={`${index}`}
		>
			<div
				className="single-services-box d-flex justify-content-between bg-white h-100 pb-0"
				bis_skin_checked="1"
			>
				<div className="col-3">
					<img src={data?.img} />
				</div>

				<div className="col-8">
					<h3>
						<a>{data?.name}</a>
					</h3>

					<p>{data?.des}</p>

					<div className="services-shape" bis_skin_checked="1">
						<img src="assets/images/services-shape.png" alt="Image" />
					</div>
				</div>
			</div>
		</div>
	)
}
