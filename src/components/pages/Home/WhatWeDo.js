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
							// fontSize: '120px',
							fontWeight: 700,
							textAlign: 'center',
							color: '#F6FEF9',
							WebkitTextStroke: '1.5px #12B76A',
							WebkitTextFillColor: 'transparent',
							// border: '1.5px solid #12B76A',
						}}
						className=" font-60 fw-700"
						data-aos="fade-up"
					>
						What we do
					</h2>
					{/* <p
						style={{ textAlign: 'center' }}
						className="font-20 text-gray fw-300"
						data-aos="fade-up"
					>
						Lorem ipsum dolor sit amet consectetur. Vitae suspendisse dolor in
						est rutrum. Lacinia in enim pellentesque venenatis interdum eu.
					</p> */}
				</div>
			</div>
			<br />
			<br />
			<div className="container">
				<div
					className="row align-items-center"
					style={{ marginBottom: '112px' }}
				>
					<WhatWeDoContent
						number={1}
						title={`Reduction In The Number of Out-of-School Children, Focused On Equity`}
						paragraph={`Our focus on equity drives this results area, aiming to ensure more
							 equitable allocation of state education resources. Specifically, we 
							 work towards improving learning conditions in the most disadvantaged 
							 schools and providing opportunities for students.`}
					/>
					<WhatWeDoContent
						number={2}
						title={`Enhancing Teaching Practices and Measuring Learning Outcomes, 
							Focused On Learning Outcomes. `}
						paragraph={`At TESS, we are committed to improving the quality of
						 education by enhancing teaching practices and measuring learning
						 outcomes. Our focus is to strengthen teachers' capacity in OAK
						  states through a structured pedagogy program based on digital
						   technology.`}
					/>
					<WhatWeDoContent
						number={3}
						title={`Improving Teacher Development and Making Education Expenditures
						 Transparent and accessible For Policy Formulation, Focused on 
						 efficiency and system management.`}
						paragraph={`The importance of proper infrastructure in facilitating
						 effective education delivery cannot be over-emphasized. The program
						 aims to improve school facilities, including classrooms, libraries,
						 laboratories, and technology resources, creating an environment conducive
						 to teaching and learning.`}
					/>
					{/* <div className="col-lg-6">
						<div className="counselor-img pr-15">
							<img
								data-aos="fade-up-right"
								src="https://globaladvocacyafrica.org/wp-content/uploads/2018/12/AFRICAN-CHILD-2.jpg"
								alt="Image"
								className="rounded"
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
											backgroundColor: '#D1FADF',
											width: '72px',
											height: '72px',
											fontSize: '32px',
										}}
										data-aos="fade-up"
									>
										<span>1</span>
									</div>
								</div>
								<h4
									className="font-30 text-theme fw-500"
									style={{ marginBottom: '20px' }}
									data-aos-delay="50"
									data-aos="fade-up"
								>
									Reduction in Number of Out-of-School Children
								</h4>
								<p
									className="font-20 text-gray fw-300"
									data-aos-delay="150"
									data-aos="fade-up"
								>
									Our focus on equity drives this results area, aiming to ensure
									more equitable allocation of state education resources.
									Specifically, we work towards improving learning conditions in
									the most disadvantaged schools and providing opportunities for
									students.
								</p>
							</div>
						</div>
					</div> */}
				</div>
				{/* <div
					className="row align-items-center"
					style={{ marginBottom: '112px' }}
				>
					<div className="col-lg-6">
						<div className="counselor-content pl-15">
							<div className="single-counselor">
								<div className="flex " style={{ marginBottom: '20px' }}>
									<div
										className="rounded-full d-flex justify-content-center align-items-center text-theme fw-500"
										style={{
											backgroundColor: '#D1FADF',
											width: '72px',
											height: '72px',
											fontSize: '32px',
										}}
										data-aos="fade-up"
									>
										<span>2</span>
									</div>
								</div>
								<h4
									className="font-30 text-theme fw-500"
									style={{ marginBottom: '20px' }}
									data-aos-delay="50"
									data-aos="fade-up-right"
								>
									Enhancing Teaching Practices and Measuring Learning Outcomes
								</h4>
								<p
									className="font-20 text-gray fw-300"
									data-aos-delay="159"
									data-aos="fade-up-right"
								>
									At TESS, we are committed to improving the quality of
									education by enhancing teaching practices and measuring
									learning outcomes. Our focus is to strengthen teachers'
									capacity in OAK states through a structured pedagogy program
									based on digital technology.
								</p>
								<div className="counselor-content pl-15">
									<div className="single-counselor">
										<div className="flex " style={{ marginBottom: '20px' }}>
											<div
												className="rounded-full d-flex justify-content-center align-items-center text-theme fw-500"
												style={{
													backgroundColor: '#D1FADF',
													width: '72px',
													height: '72px',
													fontSize: '32px',
												}}
												data-aos="fade-up"
											>
												<span>1</span>
											</div>
										</div>
										<h4
											className="font-30 text-theme fw-500"
											style={{ marginBottom: '20px' }}
											data-aos-delay="50"
											data-aos="fade-up"
										>
											Reduction in Number of Out-of-School Children
										</h4>
										<p
											className="font-20 text-gray fw-300"
											data-aos-delay="150"
											data-aos="fade-up"
										>
											Our focus on equity drives this results area, aiming to
											ensure more equitable allocation of state education
											resources. Specifically, we work towards improving
											learning conditions in the most disadvantaged schools and
											providing opportunities for students.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="counselor-img pr-15">
							<img
								src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892564.jpg"
								alt="Image"
								className="rounded"
								data-aos="fade-up"
							/>
						</div>
					</div>
				</div> */}
				{/* <div
					className="row align-items-center"
					style={{ marginBottom: '112px' }}
				>
					<div className="col-lg-6">
						<div className="counselor-img pr-15">
							<img
								src="https://sacshigh.org.za/wp-content/uploads/2022/01/SACS-High-School-AS-2021_-114.jpg"
								alt="Image"
								className="rounded"
								data-aos="fade-up-right"
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
											backgroundColor: '#D1FADF',
											width: '72px',
											height: '72px',
											fontSize: '32px',
										}}
										data-aos="fade-up"
									>
										<span>3</span>
									</div>
								</div>
								<h4
									className="font-30 text-theme fw-500"
									style={{ marginBottom: '20px' }}
									data-aos-delay="50"
									data-aos="fade-up"
								>
									Strengthening School Infrastructure
								</h4>
								<p
									className="font-20 text-gray fw-300"
									data-aos-delay="150"
									data-aos="fade-up"
								>
									The importance of proper infrastructure in facilitating
									effective education delivery cannot be over-emphasized. The
									program aims to improve school facilities, including
									classrooms, libraries, laboratories, and technology resources,
									creating an environment conducive to teaching and learning.
								</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	)
}

const WhatWeDoContent = ({ number, title, paragraph }) => {
	return (
		<div
			className="row align-items-center justify-content-center"
			style={{ marginBottom: '112px' }}
		>
			<div className="col-lg-4">
				<div className="column justify-content-center counselor-img pr-15 ">
					<Image
						src="/assets/images/pillars.png"
						alt="Image"
						height={394}
						width={147}
						// className="rounded"
						data-aos="fade-up-right"
					/>
				</div>
			</div>

			<div className="col-lg-4">
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
							style={{ marginBottom: '20px' }}
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
