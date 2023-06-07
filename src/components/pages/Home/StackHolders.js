import Image from 'next/image'
import React from 'react'

export default function StackHolders() {
	return (
		<section class="project-area pt-100 pb-70">
			<div class="container">
				<div class="section-title">
					<h2 data-aos="fade-up" data-aos-duration="1000">
						Key Stakeholders
					</h2>
					{/* <p
						className='font-20'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						eveniet quod mollitia asperiores ullam dolor corporis. vero nemo
						consectetur
					</p> */}
				</div>

				<div class="row justify-content-center align-items-center">
					{/* <div class="col-lg-4 col-md-6 mb-4">
						<div class="single-project- text-center" data-aos="zoom-in-up">
							<img src="assets/figma/fpfmd.png" alt="Image" className="mb-4" />

							<p
								className="font-20"
								style={{ fontSize: '16px' }}
							>{`Federal Ministry of Finance, Budget, and National Planning (FMoFBNP)`}</p>
						</div>
					</div> */}
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

					{/* <div class="col-lg-4 col-md-6 mb-4">
						<div class="single-project- text-center" data-aos="zoom-in-up">
							<img src="assets/figma/fpfmd.png" alt="Image" className="mb-4" />

							<p
								className="font-20"
								style={{ fontSize: '16px' }}
							>{`Federal Project Financial Management Division (FPFMD)`}</p>
						</div>
				</div>*/}
				</div>
			</div>
		</section>
	)
}

const StackHolder = ({ image, title, worldbank }) => {
	return (
		<div class="col-lg-2 col-md-6 mb-4">
			<div class="single-project- text-center" data-aos="zoom-in-up">
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
