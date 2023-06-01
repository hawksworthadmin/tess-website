import React from 'react'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import moment from 'moment'

export default function EachBlog({ blog }) {
	console.log(blog)
	const convertRichTextToPlain = RichText.asText(blog.description)
	return (
		<div className="col-lg-6 col-md-6" bis_skin_checked="1" data-aos="fade-up">
			<div className="single-blog-box" bis_skin_checked="1">
				<a href="blog-details.html">
					<img
						src="https://www.thesouthafrican.com/wp-content/uploads/2022/09/Choose-an-in-demand-career.jpg"
						alt="Images"
					/>
				</a>

				<div className="blog-content" bis_skin_checked="1">
					<ul>
						<li>
							<a href="#">
								<i className="ri-user-3-fill capitalize"></i>
								{blog?.user.slug.replace('-', ' ')}
							</a>
						</li>
						<li>
							<i className="ri-calendar-line"></i>
							{moment(blog?.created_at).format('DD MMMM, YYYY')}
						</li>
					</ul>
					<h3 className="fw-500">
						<Link href={`/publication/blog/${blog?.slug}`}>{blog?.title}</Link>
					</h3>
					<p>{convertRichTextToPlain.split(' ').slice(0, 13).join(' ')}</p>
					<a href={`/publication/blog/${blog.slug}`} className="read-more">
						Read Post
						<i className="ri-arrow-right-s-line"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
