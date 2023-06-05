import React from 'react'
import Metrics from './Metrics'
import WhatWeDo from './WhatWeDo'
import RecentPublication from './RecentPublication'
import StackHolders from './StackHolders'
import HomeHero from './HomeHero'
import HomePartners from './HomePartners'

export default function Home({ latestNews }) {
	return (
		<>
			<HomeHero />

			<section
				className="blog-area bg-color- pt-100 pb-70 d-flex justify-content-center my-5"
				style={{
					backgroundColor: '#F2F4F7',
					backgroundImage: `url(/assets/figma/quote-bg.png)`,
				}}
			>
				<div className="col-lg-6 text-center">
					<h5
						className="fw-normal text-center font-30"
						data-aos="fade-up"
						data-aos-delay="150"
						style={{ marginBottom: '24px' }}
					>
						Education is the most powerful weapon you can use to change the
						world.
					</h5>
					<p
						data-aos-delay="200"
						data-aos="fade-up"
						style={{ color: '#475467', fontSize: '20px' }}
					>
						Nelson Mandela
					</p>
				</div>
			</section>
			<Metrics />
			<WhatWeDo />
			<HomePartners />
			<RecentPublication latestNews={latestNews} />
			<StackHolders />
		</>
	)
}
