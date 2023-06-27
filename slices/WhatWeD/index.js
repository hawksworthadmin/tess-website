/**
 * @typedef {import("@prismicio/client").Content.WhatWeDSlice} WhatWeDSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatWeDSlice>} WhatWeDProps
 * @param {WhatWeDProps}
 */

import { createClient } from '@prismicio/client'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import { useLayoutEffect, useState } from 'react'

// import usepris
const WhatWeD = ({ slice }) => {
	const [news, setNews] = useState([])
	const [error, setError] = useState(false)

	const fetctLatestNews = async () => {
		const client = createClient(process.env.NEXT_PUBLIC_PRISMIC_API_URL)
		const pressReleases = await client.getByType('press_release', {
			pageSize: 3,
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		setNews(pressReleases.results)
	}

	console.log(news)
	useLayoutEffect(() => {
		fetctLatestNews()
	}, [])

	console.log(news)
	return (
		<>
			<section
				className="events-area pt-100 pb-70"
				style={{ backgroundColor: '#F9FAFB' }}
			>
				<div className="container">
					<div className="pb-5 text-start">
						<h2
							style={{
								fontFamily: 'Syne !important',

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
						style={{ marginBottom: '12px', gap: '3rem' }}
					>
						{slice.items.map((pillar, index) => (
							<WhatWeDoContent
								key={`pillar_${index}`}
								image={pillar.pillar_image.url}
								number={index + 1}
								title={pillar.pillar_title}
								paragraph={pillar.pillar_content}
							/>
						))}
					</div>
				</div>
			</section>
			<section
				class="blog-area blog-area-two- pt-100 pb-70"
				style={{ backgroundColor: '#F9FAFB' }}
			>
				<div class="container">
					<div class="section-title">
						<h2 data-aos="fade-up">Latest News</h2>
					</div>
					{/*  */}
					<div class="row justify-content-center">
						{!error ? (
							news?.map((news, id) => (
								<EachRelease
									key={news?.uid}
									category={news?.data?.category?.slug?.replace(/-/gi, ' ')}
									title={news?.data?.title}
									img={news?.data?.image?.url}
									created_at={news?.first_publication_date}
									alt={news?.data?.image?.alt}
									description={news?.data?.description}
									categoryLink={`${'/news-and-events/press-release'}${
										news?.data?.category?.slug
									}`}
									link={`/news-and-events/press-release/${news?.data?.category?.slug}/${news?.uid}`}
								/>
							))
						) : (
							<p>
								An error occurred while attempting to fetch the latest news.
							</p>
						)}
						{/* <EachRelease link={}/>
					<EachRelease /> */}
					</div>
				</div>

				<div class="shape blog-shape-1">
					<img src="/assets/images/blog/blog-shape-1.png" alt="Image" />
				</div>

				<div class="shape blog-shape-2">
					<img src="/assets/images/blog/blog-shape-2.png" alt="Image" />
				</div>
			</section>
		</>
	)
}
const WhatWeDoContent = ({ number, title, paragraph, image, reverse }) => {
	return (
		<div
			className={`d-flex align-items-center justify-content-center `}
			style={{
				gap: '2rem',
				flexWrap: 'wrap',
				flexDirection: reverse && 'row-reverse',
			}}
		>
			<div
				className="col-lg-5 "
				style={{ borderRadius: '10px', overflow: 'hidden' }}
			>
				<img
					src={image}
					alt="Image"
					// className="rounded"
					data-aos="fade-up-right"
					style={{ margin: 'auto', objectFit: 'scale-down' }}
				/>
				{/* </div> */}
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

const EachRelease = ({
	link,
	title,
	category,
	created_at,
	img,
	alt,
	description,
	categoryLink,
}) => {
	const convertRichTextToPlain = RichText?.asText(description)

	return (
		<div
			class="col-lg-4 col-md-6"
			data-aos-delay="50"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div class="single-blog-box">
				<Link
					style={{ display: 'block', height: '350px', position: 'relative' }}
					href={link}
				>
					<Image fill src={img} alt={alt} style={{ objectFit: 'contain' }} />
				</Link>

				<div class="blog-content">
					<ul>
						<li>
							<Link href={categoryLink}>
								{/* <i class="ri-user-3-fill"></i> */}
								{category}
							</Link>
						</li>
						<li>
							<i class="ri-calendar-line"></i>
							{moment(created_at).format('MMMM DD, YYYY')}
						</li>
					</ul>
					<h3>
						<Link href={link}>{title.split(' ').slice(0, 3).join(' ')}...</Link>
					</h3>
					<p>
						{convertRichTextToPlain?.split(' ')?.slice(0, 13)?.join(' ')}...
					</p>
					<Link href={link} class="read-more">
						Read more
						<i class="ri-arrow-right-s-line"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default WhatWeD
