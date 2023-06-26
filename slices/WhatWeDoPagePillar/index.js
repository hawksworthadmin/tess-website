/**
 * @typedef {import("@prismicio/client").Content.WhatWeDoPagePillarSlice} WhatWeDoPagePillarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatWeDoPagePillarSlice>} WhatWeDoPagePillarProps
 * @param {WhatWeDoPagePillarProps}
 */
const WhatWeDoPagePillar = ({ slice }) => {
	return (
		<section className="local-councils-services-area pb-70 pt-70">
			<div className="container">
				<div
					style={{
						flexDirection: `${
							slice.primary.picture_position == 'left' ? 'row-reverse' : 'row'
						}`,
					}}
					className="row align-items-center"
				>
					<div className="col-lg-6">
						<div className="local-councils-content pr-15">
							<h2 style={{ fontSize: '30px' }}>{slice.primary.pillar_title}</h2>
							<p style={{ fontSize: '20px' }}>{slice.primary.pillar_content}</p>
						</div>
					</div>
					<div className="col-lg-6" bis_skin_checked="1">
						<div className="local-councils-img pl-15" bis_skin_checked="1">
							<img
								src={slice.primary.pillar_image.url}
								alt={slice.primary.pillar_image.alt}
								className="rounded"
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
				{/* <div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Indicator:
					</p>
					<p style={{ fontSize: '20px' }}>
						State infrastructure budget allocated to underserved communities to
						improve learning conditions in primary schools and improve access to
						junior secondary schools. <br /> This DLI consists of two key
						results:
					</p>

					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Result 1: Development of school network
					</p>
					<p style={{ fontSize: '20px' }}>
						States to develop a school network encompassing all primary and
						junior secondary schools, utilizing geo-coded school infrastructure
						audit data and population estimates for school-age children.
					</p>
					<br />
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Result 2: Underserved communities receiving
						grants for infrastructure development
					</p>
					<ul>
						<li>
							We aim to improve access to education for underserved communities
							by providing grants to School-Based Management Committees (SBMCs)
							through the State Universal Basic Education Board (SUBEB). The
							grants will be used to extend existing primary schools into junior
							secondary schools, add new classroom blocks, renovate primary
							school buildings, and provide separate WASH facilities for girls.
							We will measure success by the number of male and female students
							gaining access to schools with improved learning conditions. This
							initiative includes conducting infrastructure audits, prioritizing
							schools with the highest deficits, and allocating resources
							accordingly. By addressing infrastructure needs, we promote
							equitable access to basic education and create better learning
							environments for students.
						</li>
					</ul>
					<p style={{ fontSize: '20px' }}></p>
				</div> */}
			</div>
		</section>
	)
}

export default WhatWeDoPagePillar
