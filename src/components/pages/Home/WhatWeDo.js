import Image from 'next/image'
import React from 'react'

export default function WhatWeDo() {
	return (
		<section
			className="events-area pt-100 pb-70"
			style={{ backgroundColor: '#F9FAFB' }}
		>
			<div className="container">
				<div className="pb-5 text-start">
					<h2
						style={{
							fontFamily: 'Syne !important',

							textAlign: 'center',
							color: '#F6FEF9',
							WebkitTextStroke: '1.5px #12B76A',
							WebkitTextFillColor: 'transparent',
						}}
						className=" font-60 fw-700 section-title"
						data-aos="fade-up"
					>
						What we do
					</h2>
				</div>
			</div>
			{/* <br /> */}
			{/* <br /> */}
			<div className="container">
				<div
					className="row align-items-center"
					style={{ marginBottom: '12px' }}
				>
					<WhatWeDoContent
						image={'/assets/images/what-we-do/tess_5.jpeg'}
						number={1}
						title={`Reduction in the number of out-of-school children, focused on equity`}
						paragraph={`Our focus on equity drives this results area, aiming to ensure more
							 equitable allocation of state education resources. Specifically, we 
							 work towards improving learning conditions in the most disadvantaged 
							 schools and providing opportunities for students.`}
					/>
					<WhatWeDoContent
						image={'/assets/images/what-we-do/tess_6.jpeg'}
						number={2}
						reverse={true}
						title={`Enhancing teaching practices and measuring learning outcomes, 
							Focused On Learning Outcomes. `}
						paragraph={`At TESS, we are committed to improving the quality of
						 education by enhancing teaching practices and measuring learning
						 outcomes. Our focus is to strengthen teachers' capacity in OAK
						  states through a structured pedagogy program based on digital
						   technology.`}
					/>
					<WhatWeDoContent
						image={'/assets/images/what-we-do/tess_7.jpeg'}
						number={3}
						title={`Improving teacher deployment and making education expenditures
						 Transparent and accessible For Policy Formulation, Focused on 
						 efficiency and system management.`}
						paragraph={`The importance of proper infrastructure in facilitating
						 effective education delivery cannot be over-emphasized. The program
						 aims to improve school facilities, including classrooms, libraries,
						 laboratories, and technology resources, creating an environment conducive
						 to teaching and learning.`}
					/>
				</div>
			</div>
		</section>
	)
}

const WhatWeDoContent = ({ number, title, paragraph, image, reverse }) => {
	return (
		<div
			className={`align-items-center justify-content-center`}
			style={{
				marginBottom: '12px',
				display: 'flex',
				flexDirection: reverse ? 'row-reverse' : 'row',
				alignItems: 'center',
			}}
		>
			<div
				style={{ display: 'grid', placeItems: 'center' }}
				className="col-lg-4 jus pb-100"
			>
				<div
					className="justify-content-center counselor-img pr-15 "
					style={{
						position: 'relative',
						borderRadius: '10px',
						overflow: 'hidden',

						height: '350px',
						width: '100%',
					}}
				>
					<Image
						src={image}
						alt="Image"
						fill
						// className="rounded"
						data-aos="fade-up-right"
						style={{ margin: 'auto', objectFit: 'scale-down' }}
					/>
				</div>
			</div>

			<div className="col-lg-6">
				<div className="counselor-content pl-15">
					<div className="single-counselor">
						<div className="flex " style={{ marginBottom: '20px' }}>
							<div
								className="rounded-full d-flex justify-content-center align-items-center text-theme fw-500"
								style={{
									backgroundColor: '#EAECF0',
									width: '72px',
									height: '72px',
									fontSize: '32px',
									boxShadow: '0px 0px 0px 24px #F1F4F8',
									marginBottom: '32px',
								}}
								data-aos="fade-up"
							>
								<span>{number}</span>
							</div>
						</div>
						<h4
							className="font-30 text-theme fw-500"
							style={{ marginBottom: '20px', textTransform: 'initial' }}
							data-aos-delay="50"
							data-aos="fade-up"
						>
							{title}
						</h4>
						<p
							className="font-20 text-gray fw-300"
							data-aos-delay="150"
							data-aos="fade-up"
						>
							{paragraph}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
