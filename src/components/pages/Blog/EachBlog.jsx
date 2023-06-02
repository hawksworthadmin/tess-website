import React from 'react'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import moment from 'moment'

export default function EachBlog({
	link,
	title,
	user,
	created_at,
	img,
	alt,
	description,
}) {
	const convertRichTextToPlain = RichText.asText(description)

	return (
		<div className="col-lg-6 col-md-6" bis_skin_checked="1" data-aos="fade-up">
			<div className="single-blog-box" bis_skin_checked="1">
				<Link href={link}>
					<img src={img} alt={alt} />
				</Link>

				<div className="blog-content" bis_skin_checked="1">
					<ul>
						<li>
							<a href="#">
								<i className="ri-user-3-fill capitalize"></i>
								{user}
							</a>
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
					<a href={link} className="read-more">
						Read Post
						<i className="ri-arrow-right-s-line"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
