import React from 'react'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import moment from 'moment'

export default function EachBlog({ blog }) {
	const convertRichTextToPlain = RichText.asText(blog?.data?.description)

	return (
		<div className="col-lg-6 col-md-6" bis_skin_checked="1" data-aos="fade-up">
			<div className="single-blog-box" bis_skin_checked="1">
				<a href="blog-details.html">
					<img src={blog?.data.image?.url} alt={blog?.data?.image?.alt} />
				</a>

				<div className="blog-content" bis_skin_checked="1">
					<ul>
						<li>
							<a href="#">
								<i className="ri-user-3-fill capitalize"></i>
								{blog?.data?.user.slug.replace('-', ' ')}
							</a>
						</li>
						<li>
							<i className="ri-calendar-line"></i>
							{moment(blog?.data?.created_at).format('DD MMMM, YYYY')}
						</li>
					</ul>
					<h3 className="fw-500">
						<Link href={`/publications/blog/${blog?.uid}`}>
							{blog?.data?.title}
						</Link>
					</h3>
					<p>{convertRichTextToPlain.split(' ').slice(0, 13).join(' ')}</p>
					<a
						href={`/publications/blog/${blog?.data?.category.slug} /${blog.uid}`}
						className="read-more"
					>
						Read Post
						<i className="ri-arrow-right-s-line"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
