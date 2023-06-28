import Image from 'next/image'
import { useState } from 'react'

/**
 * @typedef {import("@prismicio/client").Content.FactsAndFiguresSlice} FactsAndFiguresSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FactsAndFiguresSlice>} FactsAndFiguresProps
 * @param {FactsAndFiguresProps}
 */
const colors = {
	green: '#12B76A',
	orange: '#F79009',
	purple: '#7A5AF8',
	blue: '#2E90FA',
}
const FactsAndFigures = ({ slice }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [currentIndex, setCurrentIndex] = useState(0)
	const PER_SLIDE = 4
	const slides = Math.ceil(slice.items.length / PER_SLIDE)

	const handleNextSlide = () => {
		currentSlide === slides - 1
			? setCurrentSlide(0)
			: setCurrentSlide((prev) => prev + 1)

		const nextIndex = currentIndex + PER_SLIDE
		currentIndex >= 0 &&
			setCurrentIndex(nextIndex >= slice.items?.length ? 0 : nextIndex)
	}
	const handlePrevSlide = () => {
		currentIndex !== 0 && setCurrentIndex((prev) => prev - PER_SLIDE)

		currentSlide === 0
			? setCurrentSlide(slides - 1)
			: setCurrentSlide(currentSlide - 1)
	}
	return (
		<section
			className="discover-area discover-area-style-three pt-100 "
			id="fact"
			style={{ position: 'relative', overflow: 'hidden' }}
		>
			<div className="container">
				<div className="section-title" bis_skin_checked="1">
					<h2 style={{ color: '#027A48' }} data-aos="fade-up">
						Facts & Figures
					</h2>
				</div>
				<div
					style={{
						// transform: `translateX(-${currentSlide * 100}%)`,
						transition: 'all 2s',
						display: 'flex',
						flexWrap: 'nowrap',
					}}
				>
					<div
						style={{
							flexShrink: 0,
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'Center',
							width: '100%',
						}}
						className=""
					>
						{slice.items
							?.slice(currentIndex, currentIndex + PER_SLIDE)
							?.map((factFigure, index) => (
								<Fact
									key={`fact_and_figure_${index}`}
									color={factFigure.color}
									figure={factFigure?.figure}
									fact={factFigure?.fact}
								/>
							))}
					</div>
				</div>
			</div>
			{/* SLIDE BUTTON CONTROL */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-40%)',
					display: 'flex',
					justifyContent: !(currentSlide > 0) ? 'end' : 'space-between',
					width: '100%',
					alignItems: 'center',
					padding: '1rem',
				}}
			>
				<Image
					style={{
						rotate: '180deg',
						cursor: 'pointer',
						display: currentSlide > 0 ? 'block' : 'none',
					}}
					onClick={handlePrevSlide}
					src={'/assets/figma/left_slide_arrow.png'}
					width={48}
					height={48}
				/>
				<Image
					style={{
						display: currentSlide == slides - 1 ? 'none' : 'block',
						cursor: 'pointer',
					}}
					onClick={handleNextSlide}
					src={'/assets/figma/left_slide_arrow.png'}
					width={48}
					height={48}
				/>
			</div>
		</section>
	)
}

const Fact = ({ figure, fact, color }) => {
	return (
		<div className="mb-5- col-lg-6 p-5 text-center" data-aos="flip-left">
			<h3
				style={{
					fontSize: '60px',
					color: colors[color],
					fontWeight: 500,
					marginBottom: '24px',
				}}
			>
				{figure}
			</h3>
			<p style={{ fontSize: '20px', color: colors[color], fontWeight: 500 }}>
				{fact}
			</p>
		</div>
	)
}

export default FactsAndFigures
