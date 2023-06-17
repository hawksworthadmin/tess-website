import React, { useEffect, useState } from 'react'

export default function HomeHero() {
	const [show, setShow] = useState(false)
	const [fontSize, setFontSize] = useState('20px')
	useEffect(() => {
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
				<div className="col-lg-10 text-center" bis_skin_checked="1">
					<div
						className="banner-content  d-flex flex-column align-items-center justify-content-center"
						bis_skin_checked="1"
						style={{ margin: 0, maxWidth: '100vw' }}
					>
						<h1
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
							data-aos-duration="1000"
						>
							Welcome to Transforming Education Systems at States Level (TESS )
						</h1>
						<h2 style={{ color: 'white' }}>
							Revolutionizing the educational sector
						</h2>
					</div>
				</div>
			</div>

			<div className="shape banner-shape-1" bis_skin_checked="1">
				<img src="/assets/images/banner/banner-shape-1.png" alt="Image" />
			</div>
		</section>
	)
}
