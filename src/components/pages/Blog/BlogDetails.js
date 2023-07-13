import Layout from '@/components/layout/Layout'
import BlogRight from '@/components/pages/Blog/BlogRight'

import moment from 'moment'

import React from 'react'

import RichTextComponent from '@/components/pages/Blog/RichTextComponent'
import Link from 'next/link'
import Image from 'next/image'
import ShareIcons from './ShareIcons'
import NextSeo from './NextSeo'
// import { RichText } from 'prismic-dom'
import METADATA from '@/METADATA'

export default function BlogDetails({
	post,
	categories,
	link,
	checkEvent,
	heading,
	relatedPosts,
	publicationType,
}) {
	// const convertRichTextToPlain = RichText.asText(post?.data?.description)
	return (
		<Layout>
			<NextSeo
				title={post?.data?.meta_title || post?.data?.title}
				metaDescription={post?.data?.meta_description}
				image={
					post?.data?.meta_image?.url ||
					post?.data?.image?.url ||
					post?.data?.featured_image?.url
				}
				alt={
					post?.data?.meta_image?.alt ||
					post?.data?.image?.alt ||
					post?.data?.featured_image?.alt
				}
				width={
					post?.data?.meta_image?.dimensions?.width ||
					post?.data?.image?.dimensions?.width ||
					post?.data?.featured_image?.dimensions?.width
				}
				height={
					post?.data?.meta_image?.dimensions?.width ||
					post?.data?.image?.dimensions?.width ||
					post?.data?.featured_image?.dimensions?.width
				}
				postLink={`${link}${post?.data?.category?.slug}${post?.uid}`}
				publishedDate={post?.first_publication_date}
				publicationType={publicationType}
			/>
			<div>
				<div
					className="bg-1 bg-theme-"
					style={{ height: '112px', backgroundColor: '#12B76A' }}
				>
					<div className="container d-flex flex-column justify-content-center h-100">
						<h1 className="fw-400 text-white">{heading}</h1>
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
											style={{
												width: '100%',
											}}
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
													<Link
														href={`${link}/${post?.data?.category?.slug}`}
														style={{
															textTransform: 'capitalize',
														}}
														className="d-flex align-items-center"
													>
														{post?.data?.category?.slug?.replace(/-/gi, ' ')}
													</Link>
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

											<ShareIcons
												title={post?.data?.title}
												url={`${link}${post?.data?.category?.slug}/${post?.uid}`}
											/>
										</div>
									</div>
								</div>
							</div>
							<br />
							<br />
							<div className="col-lg-4">
								<BlogRight categories={categories} link={link} />
								<RelatedPosts
									heading={heading}
									posts={relatedPosts}
									link={link}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

const RelatedPosts = ({ posts, heading, link }) => {
	return (
		<div style={{ width: '100%', marginTop: '42px' }} bis_skin_checked="1">
			<div class="widget-sidebar pl-15" bis_skin_checked="1">
				<div class="sidebar-widget categories" bis_skin_checked="1">
					<h3>Related {heading} </h3>

					<>
						{posts?.map((post) => (
							<div key={post.uid} bis_skin_checked="1">
								<div
									style={{
										marginTop: '12px',
										position: 'relative',
										height: '200px',
										borderRadius: '8px',
										overflow: 'hidden',
										background:
											'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
									}}
								>
									<Image
										fill
										src={post?.data?.image?.url}
										alt={post?.data?.image?.alt || 'blog image'}
									/>

									<div
										style={{
											position: 'absolute',
											bottom: '16px',
											left: '16px',
											color: 'white',
											fontSize: '16px',
											fontWeight: '500',
										}}
										className="project-content"
										bis_skin_checked="1"
									>
										<Link
											style={{
												color: 'white',
												fontSize: '16px',
												fontWeight: '500',
											}}
											href={`${link}/${post?.data?.category?.slug}/${post?.uid}`}
										>
											{post?.data?.title}
										</Link>
									</div>
								</div>
							</div>
						))}
					</>
				</div>
			</div>
		</div>
	)
}
