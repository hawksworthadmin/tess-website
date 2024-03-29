import React from 'react'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import moment from 'moment'
import Image from 'next/image'

export default function EachBlog({
	link,
	title,
	category,
	created_at,
	img,
	alt,
	description,
	categoryLink,
}) {
	const convertRichTextToPlain = RichText.asText(description)

	return (
		<article
			className="col-lg-6 col-md-6"
			bis_skin_checked="1"
			data-aos="fade-up"
		>
			<div className="single-blog-box" bis_skin_checked="1">
				<Link
					className="w-100 relative "
					style={{
						minHeight: '200px',
						position: 'relative',
						width: '500px',
						display: 'block',
					}}
					href={link}
				>
					<Image
						fill
						src={img}
						alt={alt || 'blog post image'}
						// style={{ objectFit: 'contain' }}
					/>
				</Link>

				<div className="blog-content" bis_skin_checked="1">
					<ul>
						<li
							style={{
								textTransform: 'capitalize',
								background: '#e7f4eb',
								color: 'white',
								padding: '2px 6px',
								borderRadius: '8px',
							}}
						>
							<Link href={categoryLink || '#'}>{category}</Link>
						</li>
						<li>
							<i className="ri-calendar-line"></i>
							{moment(created_at).format('DD MMMM, YYYY')}
						</li>
					</ul>
					<h3 className="fw-500">
						<Link href={link}>{title}</Link>
					</h3>
					<p>{convertRichTextToPlain.split(' ').slice(0, 13).join(' ')}</p>
					<Link href={link} className="read-more">
						Read Post
						<i className="ri-arrow-right-s-line"></i>
					</Link>
				</div>
			</div>
		</article>
	)
}
