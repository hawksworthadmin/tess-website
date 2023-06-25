/**
 * @typedef {import("@prismicio/client").Content.WhatWeDSlice} WhatWeDSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatWeDSlice>} WhatWeDProps
 * @param {WhatWeDProps}
 */
const WhatWeD = ({ slice }) => {
	return (
		<section
			className="events-area pt-100 pb-70"
			style={{ backgroundColor: '#F9FAFB' }}
		>
			<div className="container">
				<div className="pb-5 text-start">
					<h2
						style={{
							fontFamily: 'Syne !important',

							color: '#F6FEF9',
							WebkitTextStroke: '1.5px #12B76A',
							WebkitTextFillColor: 'transparent',
						}}
						className=" font-60 fw-700 section-title"
						data-aos="fade-up"
					>
						What we do
					</h2>
				</div>
			</div>
			{/* <br /> */}
			{/* <br /> */}
			<div className="container">
				<div
					className="row align-items-center"
					style={{ marginBottom: '12px', gap: '3rem' }}
				>
					{slice.items.map((pillar, index) => (
						<WhatWeDoContent
							key={`pillar_${index}`}
							image={pillar.pillar_image.url}
							number={index + 1}
							title={pillar.pillar_title}
							paragraph={pillar.pillar_content}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
const WhatWeDoContent = ({ number, title, paragraph, image, reverse }) => {
	return (
		<div
			className={`d-flex align-items-center justify-content-center `}
			style={{
				gap: '2rem',
				flexWrap: 'wrap',
				flexDirection: reverse && 'row-reverse',
			}}
		>
			<div
				className="col-lg-5 "
				style={{ borderRadius: '10px', overflow: 'hidden' }}
			>
				<img
					src={image}
					alt="Image"
					// className="rounded"
					data-aos="fade-up-right"
					style={{ margin: 'auto', objectFit: 'scale-down' }}
				/>
				{/* </div> */}
			</div>

			<div className="col-lg-6">
				<div className="counselor-content pl-15">
					<div className="single-counselor">
						<div className="flex " style={{ marginBottom: '20px' }}>
							<div
								className="rounded-full d-flex justify-content-center align-items-center text-theme fw-500"
								style={{
									backgroundColor: '#EAECF0',
									width: '72px',
									height: '72px',
									fontSize: '32px',
									boxShadow: '0px 0px 0px 24px #F1F4F8',
									marginBottom: '32px',
								}}
								data-aos="fade-up"
							>
								<span>{number}</span>
							</div>
						</div>
						<h4
							className="font-30 text-theme fw-500"
							style={{ marginBottom: '20px', textTransform: 'initial' }}
							data-aos-delay="50"
							data-aos="fade-up"
						>
							{title}
						</h4>
						<p
							className="font-20 text-gray fw-300"
							data-aos-delay="150"
							data-aos="fade-up"
						>
							{paragraph}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default WhatWeD
