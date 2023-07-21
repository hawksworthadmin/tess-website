import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { RichText } from 'prismic-dom'
import Image from 'next/image'

export default function RecentPublication({ latestNews }) {
	return (
		<section
			className="blog-area blog-area-two- pt-100 pb-70"
			style={{ backgroundColor: '#F9FAFB' }}
		>
			<div className="container">
				<div className="section-title">
					<h2 data-aos="fade-up">Latest News</h2>
				</div>
				{/*  */}
				<div className="row justify-content-center">
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
				</div>
			</div>

			<div className="shape blog-shape-1">
				<img src="/assets/images/blog/blog-shape-1.png" alt="Image" />
			</div>

			<div className="shape blog-shape-2">
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

	return (
		<div
			className="col-lg-4 col-md-6"
			data-aos-delay="50"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div className="single-blog-box">
				<Link
					style={{ display: 'block', height: '350px', position: 'relative' }}
					href={link}
				>
					<Image
						fill
						src={img}
						alt={alt || 'image'}
						style={{ objectFit: 'contain' }}
					/>
				</Link>

				<div className="blog-content">
					<ul>
						<li>
							<Link href={categoryLink}>{category}</Link>
						</li>
						<li>
							<i className="ri-calendar-line"></i>
							{moment(created_at).format('MMMM DD, YYYY')}
						</li>
					</ul>
					<h3>
						<Link href={link}>{title.split(' ').slice(0, 3).join(' ')}...</Link>
					</h3>
					<p>
						{convertRichTextToPlain?.split(' ')?.slice(0, 13)?.join(' ')}...
					</p>
					<Link href={link} className="read-more">
						Read more
						<i className="ri-arrow-right-s-line"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}
