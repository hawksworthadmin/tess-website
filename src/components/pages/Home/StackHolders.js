import Image from 'next/image'
import React from 'react'

export default function StackHolders() {
	return (
		<section className="project-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2 data-aos="fade-up" data-aos-duration="1000">
						Key Stakeholders
					</h2>
				</div>

				<div className="row justify-content-center align-items-center">
					<StackHolder
						image={'/assets/figma/world_bank.png'}
						worldbank={true}
					/>
					<StackHolder
						image={'/assets/figma/ministry_of_edu_logo.png'}
						title={'Federal Ministry of Education'}
					/>
					<StackHolder
						image={'/assets/figma/global_partners.png'}
						title={'Global Partnership for Education'}
					/>
					<StackHolder
						image={'/assets/figma/fpfmd.png'}
						title={'National Project Steering Committee (NPSC)'}
					/>
					<StackHolder
						image={'/assets/figma/fpfmd.png'}
						title={'State Project Steering Committee (NPSC)'}
					/>
				</div>
			</div>
		</section>
	)
}

const StackHolder = ({ image, title, worldbank }) => {
	return (
		<div className="col-lg-2 col-md-6 mb-4">
			<div className="single-project- text-center" data-aos="zoom-in-up">
				<Image
					width={worldbank ? 144.49 : 96}
					height={worldbank ? 96 : 64}
					src={image}
					alt="Image"
					className="mb-4"
				/>

				<p
					className=""
					style={{
						fontSize: '16px',
						fontWeight: 600,
					}}
				>
					{title}
				</p>
			</div>
		</div>
	)
}
