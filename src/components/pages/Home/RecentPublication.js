import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { RichText } from 'prismic-dom'

export default function RecentPublication({ latestNews }) {
	return (
		<section
			class="blog-area blog-area-two- pt-100 pb-70"
			style={{ backgroundColor: '#F9FAFB' }}
		>
			<div class="container">
				<div class="section-title">
					<h2 data-aos="fade-up">Latest News</h2>
					{/* <p data-aos="fade-up" className="font-20">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						eveniet quod mollitia asperiores ullam dolor corporis. vero nemo
						consectetur
					</p> */}
				</div>
				{/*  */}
				<div class="row justify-content-center">
					{latestNews?.length > 0 ? (
						latestNews?.map((news, id) => (
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
						<p>NOT FOUND</p>
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
	console.log('mage', img)
	return (
		<div
			class="col-lg-4 col-md-6"
			data-aos-delay="50"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div class="single-blog-box">
				<Link href={link}>
					<img src={img} alt={alt} />
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
						<a href={link}>{title}</a>
					</h3>
					<p>{convertRichTextToPlain?.split(' ')?.slice(0, 13)?.join(' ')}</p>
					<Link href={link} class="read-more">
						Read more
						<i class="ri-arrow-right-s-line"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}
