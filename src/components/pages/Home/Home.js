import React from 'react'
import Metrics from './Metrics'
import WhatWeDo from './WhatWeDo'
import RecentPublication from './RecentPublication'
import StackHolders from './StackHolders'
import HomeHero from './HomeHero'
import HomePartners from './HomePartners'
import ResultAreaMap from './ResultAreaMap'
import Image from 'next/image'

export default function Home({ latestNews, factsAndFigures, statistics }) {
	return (
		<>
			<HomeHero />
			<Partners />
			{/* <HomePartners /> */}

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
			<Metrics factsAndFigures={factsAndFigures} />
			<WhatWeDo />
			<RecentPublication latestNews={latestNews} />
			<ResultAreaMap statistics={statistics} />
			<StackHolders />
		</>
	)
}

const Partners = () => (
	<section
		className="container services-area-style-two "
		style={{ background: 'white', padding: '34px' }}
	>
		<div className="d-flex justify-content-evenly">
			<Image
				src="/assets/figma/world_bank_2.png"
				alt="world bank"
				width={204.45}
				height={48}
			/>
			<Image
				src="https://i.onthe.io/smngoz5g75kpkm53u.313edc0e.jpg"
				alt="world bank"
				width={64}
				height={64}
			/>
			<Image
				src="https://www.globalpartnership.org/themes/custom/gpe/img/default-thumb-small.png"
				alt="world bank"
				width={64}
				height={64}
			/>
		</div>
	</section>
)
