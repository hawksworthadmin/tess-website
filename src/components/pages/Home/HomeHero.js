import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function HomeHero() {
	const [show, setShow] = useState(false)
	const [fontSize, setFontSize] = useState('20px')
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [...Array(3).keys()]
	useEffect(() => {
		if (window.innerWidth > 500) {
			setFontSize('65px')
		} else {
			setFontSize('30px')
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
				// backgroundImage: `url(/assets/figma/hero.png)`,

				overflowX: 'hidden',

				position: 'relative',
			}}
		>
			<Image fill src={'/assets/figma/hero.png'} alt="tess" />
			<div
				style={{
					overflowX: 'hidden',
					width: '100%',
				}}
				className="h-100   d-flex justify-content-center align-items-center "
			>
				<div
					className=" text-center d-flex"
					style={{
						width: '100%',
						transform: `translateX(-${currentSlide * 100}%)`,
						transition: 'all 2s',
						// gap: '1rem',
					}}
					bis_skin_checked="1"
				>
					<HeroSlideText
						heading={
							'Welcome to Transforming Education Systems at States Level (TESS)'
						}
						subheading={'Revolutionizing systems in the educational sector'}
					/>

					<HeroSlideText
						heading={
							'Reduction in the number of out-of-school children, focused onequity'
						}
					/>
					<HeroSlideText
						heading={
							'Enhancing teaching practices and measuring learning outcomes,focused on learning outcomes.'
						}
					/>
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

const HeroSlideText = ({ heading, subheading }) => {
	return (
		<div
			className=" d-flex flex-column align-items-center justify-content-center"
			bis_skin_checked="1"
			style={{
				margin: 0,
				width: '100%',
				flexShrink: 0,
			}}
		>
			<h1
				style={{
					color: 'white',
				}}
				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
			>
				{heading}
			</h1>
			{subheading && <h2 style={{ color: 'white' }}>{subheading}</h2>}
		</div>
	)
}
