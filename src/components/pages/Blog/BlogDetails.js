import Layout from '@/components/layout/Layout'
import BlogRight from '@/components/pages/Blog/BlogRight'

import moment from 'moment'

import React from 'react'

import RichTextComponent from '@/components/pages/Blog/RichTextComponent'

export default function BlogDetails({
	post,
	categories,
	link,
	checkEvent,
	heading,
}) {
	console.log('from details', post)
	return (
		<Layout>
			<div>
				<div
					className="bg-1 bg-theme-"
					style={{ height: '112px', backgroundColor: '#12B76A' }}
				>
					<div className="container d-flex flex-column justify-content-center h-100">
						<h3 className="fw-400 text-white">{heading}</h3>
					</div>
				</div>
				<section className="blog-details-area ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<div className="blog-details-content">
									<div className="blog-details-img" bis_skin_checked="1">
										<img
											// fill
											// style={{ objectFit: 'contain' }}
											src={
												!checkEvent
													? post?.data?.image?.url
													: post?.data?.featured_image?.url
											}
											alt={
												!checkEvent
													? post?.data?.image?.alt
													: post?.data?.featured_image?.alt
											}
										/>
									</div>
									<div className="blog-top-content pb-100">
										<div className="news-content">
											<ul className="admin d-flex">
												<li>
													<p
														style={{ textTransform: 'capitalize' }}
														className="d-flex align-items-center"
													>
														{post?.data?.category?.slug?.replace(/-/gi, ' ')}
													</p>
												</li>

												<li>
													<i className="ri-calendar-line"></i>
													{moment(post?.first_publication_date).format(
														'DD MMMM'
													)}
												</li>
											</ul>

											<h3>{post?.data?.title}</h3>

											{<RichTextComponent field={post?.data?.description} />}

											{checkEvent && post.data?.video?.url && (
												<div>
													<video
														src={post.data?.video?.url}
														controls
														className="w-100 h-100 video_poster"
													></video>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<BlogRight categories={categories} link={link} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}
