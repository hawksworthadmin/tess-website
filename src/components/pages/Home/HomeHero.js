import React, { useEffect, useState } from 'react'

export default function HomeHero() {
	const [show, setShow] = useState(false)
	const [fontSize, setFontSize] = useState('40px')
	const [fontSize2, setFontSize2] = useState('70px')
	useEffect(() => {
		console.log(window.innerWidth)
		if (window.innerWidth > 500) {
			setFontSize('40px')
			setFontSize2('70px')
		} else {
			setFontSize('20px')
			setFontSize2('40px')
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
							style={{ fontSize: fontSize2 }}
						>
							{`Welcome to TESS (Transforming Education Systems at States Level)`}
						</h1>
						<p
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="300"
							data-aos-duration="1200"
							className="text-white mb-5"
							style={{ fontSize, minWidth: '100%' }}
						>
							{`Revolutionizing the educational sector.`}
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
