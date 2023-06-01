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
			className="banner-area- bg-img p-3"
			style={{
				height: '92vh',
				backgroundImage: `url(/assets/figma/hero.png)`,
			}}
		>
			<div className="h-100 w-100 d-flex justify-content-center align-items-center">
				<div className="col-lg-7 text-center" bis_skin_checked="1">
					<div
						className="banner-content  d-flex flex-column align-items-center"
						bis_skin_checked="1"
						style={{ margin: 0, maxWidth: '100vw' }}
					>
						<h1
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
							data-aos-duration="1000"
						>
							Revolutionizing the educational sector
						</h1>
						<p
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="300"
							data-aos-duration="1200"
							className="text-white mb-5"
							style={{ fontSize, minWidth: '100%' }}
						>
							{`Welcome to TESS (Transforming Education Systems at State Level),
							where we are committed to revolutionizing education systems for a
							brighter future. Our program is designed to implement a
							comprehensive framework and structure that will bring about
							positive changes in education at various levels.`}
						</p>

						<div
							className="slider-btn"
							bis_skin_checked="1"
							data-aos="flip-left"
							data-aos-delay="400"
							data-aos-duration="1200"
						>
							<a href="#fact" className="default-btn">
								Learn more
							</a>
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
