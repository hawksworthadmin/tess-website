import React from 'react'
import Metrics from './Metrics'
import WhatWeDo from './WhatWeDo'

export default function Home() {
	return (
		<>
			<section
				className="jumbotron hero-slider-area bg-img"
				style={{
					height: '80vh',
					backgroundImage: `url(https://www.un.org/sites/un2.un.org/files/field/image/739288.jpg)`,
				}}
			>
				<div
					style={{ background: '#05140085', height: 'inherit' }}
					className="p-5"
				/>
			</section>
			<section
				className="blog-area bg-color- pt-100 pb-70 d-flex justify-content-center my-5"
				style={{ backgroundColor: '#F2F4F7' }}
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
			<div>index</div>
		</>
	)
}
