import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param {HeroSectionProps}
 */

export default function HomeHero({ slice }) {
	const [show, setShow] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = slice.items.length
	useEffect(() => {
		setShow(true)
	}, [])

	useEffect(() => {
		const timer = setInterval(() => {
			if (!(currentSlide >= slice.items.length - 1)) {
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
				backgroundImage: `url(${slice.primary.hero_image.url})`,

				overflowX: 'hidden',

				position: 'relative',
			}}
		>
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
					}}
					bis_skin_checked="1"
				>
					{slice.items?.map((item, index) => (
						<HeroSlideText
							key={`hero_slide_text_${index}`}
							heading={item.hero_heading}
							subheading={item.hero_sub_heading}
						/>
					))}
				</div>
			</div>

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
				{slice?.items.map((_, page) => (
					<span
						key={`_page_${page}`}
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
			{subheading && <h3 style={{ color: 'white' }}>{subheading}</h3>}
		</div>
	)
}

// export default HeroSection
