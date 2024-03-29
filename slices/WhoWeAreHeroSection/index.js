/**
 * @typedef {import("@prismicio/client").Content.WhoWeAreHeroSectionSlice} WhoWeAreHeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhoWeAreHeroSectionSlice>} WhoWeAreHeroSectionProps
 * @param {WhoWeAreHeroSectionProps}
 */
const WhoWeAreHeroSection = ({ slice }) => {
	return (
		<>
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
									src={slice.primary.hero_image.url}
									alt={slice.primary.hero_image.alt}
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
								<h2 data-aos-delay="50">{slice.primary.hero_heading}</h2>

								<p data-aos-delay="250">{slice.primary.hero_paragraph}</p>

								<h3 data-aos-delay="250">Our Focus:</h3>
								<ul>
									{slice.items.map((focus, index) => (
										<li key={`focus_${index}`} data-aos-delay="300">
											{focus.our_focus}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default WhoWeAreHeroSection
