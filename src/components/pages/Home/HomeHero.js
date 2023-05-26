import React, { useEffect, useState } from 'react'

export default function HomeHero() {
	const [show, setShow] = useState(false)
	const [fontSize, setFontSize] = useState('20px')
	useEffect(() => {
		console.log(window.innerWidth)
		if (window.innerWidth > 500) {
			setFontSize('20px')
		} else {
			setFontSize('16px')
		}
		setShow(true)
	}, [])

	if (!show) {
		return null
	}

	return (
		<section
			className="banner-area-"
			style={{
				height: '92vh',
				backgroundImage: `url(/assets/figma/hero.png)`,
			}}
		>
			<div className="d-table" bis_skin_checked="1">
				<div className="d-table-cell" bis_skin_checked="1">
					<div className="container" bis_skin_checked="1">
						<div
							className="row align-items-center justify-content-center"
							bis_skin_checked="1"
						>
							<div className="col-lg-10 text-center" bis_skin_checked="1">
								<div
									className="banner-content pr-15 d-flex flex-column align-items-center"
									bis_skin_checked="1"
								>
									<h1>Revolutionizing educational sector</h1>
									<p
										className="text-white mb-5"
										style={{ fontSize, minWidth: '100%' }}
									>
										Welcome to TESS (Transforming Education Systems at State
										Level), where we are committed to revolutionizing education
										systems for a brighter future. Our program is designed to
										implement a comprehensive framework and structure that will
										bring about positive changes in education at various levels.
									</p>

									<div className="slider-btn" bis_skin_checked="1">
										<a href="#fact" className="default-btn">
											Learn more
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape banner-shape-1" bis_skin_checked="1">
				<img src="/assets/images/banner/banner-shape-1.png" alt="Image" />
			</div>
		</section>
	)
}
