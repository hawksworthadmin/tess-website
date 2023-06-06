import Link from 'next/link'
import React from 'react'

export default function Metrics() {
	return (
		<section
			className="discover-area discover-area-style-three pt-100 "
			id="fact"
		>
			<div className="container">
				<div className="section-title" bis_skin_checked="1">
					<h2 style={{ color: '#027A48' }} data-aos="fade-up">
						Facts & Figures
					</h2>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						eveniet quod mollitia asperiores ullam dolor corporis. vero nemo
						consectetur
					</p> */}
				</div>
				<div className="row pb-100">
					<EachNumber
						color="#12B76A"
						number={`33%`}
						text="Increase in Enrolment Rates."
						url={`/`}
					/>
					<EachNumber
						color="#F79009"
						number={`42,566`}
						text="New primary schools established."
						url={`/`}
					/>
					<EachNumber
						color="#7A5AF8"
						number={`23%`}
						text="reduction of out-of-school children."
						url={`/`}
					/>
					<EachNumber
						color="#2E90FA"
						number={`20k+`}
						text=" Teachers recruited"
						url={`/`}
					/>
				</div>
			</div>
			<div className="py-5 bg-theme-light">
				<div className="container">
					<h5
						style={{ marginBottom: '25px', fontWeight: 500 }}
						className="text-theme font-30"
						data-aos="fade-up"
					>
						Who we are
					</h5>
					<p data-aos="fade-up" style={{ fontWeight: 400 }} className="font-20">
						<strong>BESDA AF-TESS</strong> (Better Education Service Delivery
						For All Additional Finance Transforming Education Systems at States
						Level) program was initiated in response to the need for educational
						reform and improvement in Nigeria. The program focuses on improving
						teacher quality, enhancing curriculum and assessment systems,
						strengthening school infrastructure, and promoting community
						engagement.
					</p>
				</div>
			</div>
		</section>
	)
}

const EachNumber = ({ number, text, url, color }) => {
	return (
		<div className="mb-5- col-lg-6 p-5 text-center" data-aos="flip-left">
			<h3
				style={{
					fontSize: '60px',
					color,
					fontWeight: 500,
					marginBottom: '24px',
				}}
			>
				{number}
			</h3>
			<p style={{ fontSize: '20px', color, fontWeight: 500 }}>{text}</p>
			<Link
				href={url || `/`}
				className="text-white rounded-full fw-500 px-5 py-3 btn"
				style={{ background: color }}
			>
				Learn More
			</Link>
		</div>
	)
}
