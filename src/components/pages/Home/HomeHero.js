import React, { useEffect, useState } from 'react'

export default function HomeHero() {
	const [show, setShow] = useState(false)
	const [fontSize, setFontSize] = useState('20px')
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [...Array(3).keys()]
	useEffect(() => {
		if (window.innerWidth > 500) {
			setFontSize('20px')
		} else {
			setFontSize('16px')
		}
		setShow(true)
	}, [])

	useEffect(() => {
		const timer = setInterval(() => {
			if (!(currentSlide >= slides.length - 1)) {
				setCurrentSlide((prev) => prev + 1)
			} else {
				setCurrentSlide(0)
			}
		}, 5000)

		return () => {
			clearInterval(timer)
		}
	}, [currentSlide])

	if (!show) {
		return null
	}

	return (
		<section
			className="banner-area- bg-img p-3 hero-slider-area  "
			style={{
				height: '92vh',
				backgroundImage: `url(/assets/figma/hero.png)`,
				// gap: '1rem',
				overflowX: 'hidden',
				// transform: `translateX()`,
				position: 'relative',
			}}
		>
			<div
				style={{
					flexShrink: 0,
					overflowX: 'hidden',
				}}
				className="h-100 w-100 d-flex justify-content-center align-items-center hero-slider"
			>
				<div
					className="col-lg-10 text-center d-flex"
					style={{
						width: '100%',
						transform: `translateX(-${currentSlide * 100}%)`,
						transition: 'all 2s',
						// gap: '1rem',
						flexWrap: 'nowrap',
					}}
					bis_skin_checked="1"
				>
					<div
						className="banner-content  d-flex flex-column align-items-center justify-content-center"
						bis_skin_checked="1"
						style={{
							margin: 0,
							width: '100%',
							flexShrink: 0,
						}}
					>
						<h1
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
							data-aos-duration="1000"
						>
							Welcome to Transforming Education Systems at States Level (TESS)
						</h1>
						<h2 style={{ color: 'white' }}>
							Revolutionizing the educational sector
						</h2>
					</div>
					<div
						className="banner-content  d-flex flex-column align-items-center justify-content-center"
						bis_skin_checked="1"
						style={{ margin: 0, width: '100%', flexShrink: 0 }}
					>
						<h1
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
							data-aos-duration="1000"
						>
							Reduction in the number of out-of-school children, focused on
							equity
						</h1>
						{/* <h2 style={{ color: 'white' }}>
							Revolutionizing the educational sector
						</h2> */}
					</div>
					<div
						className="banner-content  d-flex flex-column align-items-center justify-content-center"
						bis_skin_checked="1"
						style={{ margin: 0, width: '100%', flexShrink: 0 }}
					>
						<h1
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
							data-aos-duration="1000"
						>
							Enhancing teaching practices and measuring learning outcomes,
							Focused On Learning Outcomes.
						</h1>
						{/* <h2 style={{ color: 'white' }}>
							Revolutionizing the educational sector
						</h2> */}
					</div>
				</div>
			</div>

			{/* <div className="shape banner-shape-1" bis_skin_checked="1">
				<img src="/assets/images/banner/banner-shape-1.png" alt="Image" />
			</div> */}

			{/* SLIDE  PAGINATION */}
			<div
				style={{
					position: 'absolute',
					bottom: '2rem',
					display: 'flex',
					gap: '1rem',
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			>
				{slides.map((page) => (
					<span
						onClick={() => setCurrentSlide(page)}
						style={{
							width: '20px',
							height: '20px',
							borderRadius: '50%',
							background: currentSlide == page ? 'green' : 'white',
							cursor: 'pointer',
							transition: 'all 2s',
						}}
					/>
				))}
			</div>
		</section>
	)
}
