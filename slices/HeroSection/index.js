import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param {HeroSectionProps}
 */
// const HeroSection = ({ slice }) => {
// 	console.log('hello', slice?.items[0].hero_heading)
// 	return (
// 		<section
// 			data-slice-type={slice.slice_type}
// 			data-slice-variation={slice.variation}
// 		>
// 			{/* Placeholder component for hero_section (variation: {slice.variation})
// 			Slices */}
// 			{/* {slice.items[1].hero_heading} */}
// 			<Image
// 				src={slice.primary.hero_image.url}
// 				alt="text"
// 				width={400}
// 				height={400}
// 			/>
// 			<p>{slice?.items[0].hero_heading}</p>
// 		</section>
// 	)
// }
export default function HomeHero({ slice }) {
	const [show, setShow] = useState(false)
	const [fontSize, setFontSize] = useState('20px')
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = slice.items.length
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
				// backgroundImage: `url(/assets/figma/hero.png)`,

				overflowX: 'hidden',

				position: 'relative',
			}}
		>
			<Image
				fill
				src={slice.primary.hero_image.url}
				alt={slice.primary.hero_image.alt}
			/>
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
					{slice.items?.map((item) => (
						<HeroSlideText
							heading={item.hero_heading}
							subheading={item.hero_sub_heading}
						/>
					))}
					{/* <HeroSlideText
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
					/> */}
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
				{slice?.items.map((_, page) => (
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
			{subheading && <h3 style={{ color: 'white' }}>{subheading}</h3>}
		</div>
	)
}

// export default HeroSection
