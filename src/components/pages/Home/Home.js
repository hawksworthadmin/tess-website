import React from 'react'
import Metrics from './Metrics'
import WhatWeDo from './WhatWeDo'
import RecentPublication from './RecentPublication'
import StackHolders from './StackHolders'
import HomeHero from './HomeHero'

export default function Home() {
	return (
		<>
			<HomeHero />
			{/* <section
				className="jumbotron hero-slider-area bg-img p-5 justify-content-center d-flex align-items-center"
				style={{
					height: '900px',
					backgroundImage: `url(/assets/figma/hero.png)`,
				}}
			>
				<div className="col-lg-8 col-sm-12 text-center banner-content">
					<h1
						className="text-white"
						style={{ fontSize: '72px' }}
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="1000"
					>
						Revolutionizing educational sector
					</h1>
					<p
						className="text-white"
						style={{ fontSize: '20px' }}
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-duration="1000"
					>
						{`Welcome to TESS (Transforming Education Systems at State Level), where
					we are committed to revolutionizing education systems for a brighter
					future. Our program is designed to implement a comprehensive framework
					and structure that will bring about positive changes in education at
					various levels.`}
					</p>
				</div>
			</section> */}
			<section
				className="blog-area bg-color- pt-100 pb-70 d-flex justify-content-center my-5"
				style={{
					backgroundColor: '#F2F4F7',
					backgroundImage: `url(/assets/figma/quote-bg.png)`,
				}}
			>
				<div className="col-lg-6">
					<h5 className="fw-normal text-center" style={{ fontSize: '30px' }}>
						Education is the most powerful weapon you can use to change the
						world.
					</h5>
				</div>
			</section>
			<Metrics />
			<WhatWeDo />
			<StackHolders />
			<RecentPublication />
		</>
	)
}
