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
			</div>
		</section>
	)
}

export default WhatWeDoPagePillar
