import Layout from '@/components/layout/Layout'
import BlogRight from '@/components/pages/Blog/BlogRight'
import { createClient } from '@prismicio/client'
import Image from 'next/image'
import moment from 'moment'
import { RichText } from 'prismic-dom'
import React from 'react'

import RichTextComponent from '@/components/pages/Blog/RichTextComponent'

export default function BlogDetails({ blog, categories }) {
	return (
		<Layout>
			<div>
				<div
					className="bg-1 bg-theme-"
					style={{ height: '112px', backgroundColor: '#12B76A' }}
				>
					<div className="container d-flex flex-column justify-content-center h-100">
						<h3 className="fw-400 text-white">The Blog Title</h3>
					</div>
				</div>
				<section className="blog-details-area ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<div className="blog-details-content">
									{blog?.data?.user?.slug?.replace('-', ' ')}
									<div className="blog-details-img" bis_skin_checked="1">
										<img
											// fill
											// style={{ objectFit: 'contain' }}
											src={blog?.data?.image?.url}
											alt={blog?.data?.image?.alt}
										/>
									</div>
									<div className="blog-top-content">
										<div className="news-content">
											<ul className="admin d-flex">
												<li>
													<p className='d-flex align-items-center'>
														<i className="ri-user-fill"></i>
														{blog?.data?.user?.slug?.replace('-', ' ')}
													</p>
												</li>

												<li>
													<i className="ri-calendar-line"></i>
													{moment(blog?.data?.created_at).format('DD MMMM')}
												</li>
											</ul>

											<h3>{blog?.data?.title}</h3>

											{<RichTextComponent field={blog?.data?.description} />}
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<BlogRight
									categories={categories}
									link={'/publications/blog/'}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const client = createClient(process.env.PRISMIC_API_URL)

	const blogposts = await client.getByType('blopgpost')

	const paths = blogposts.results.map((post) => ({
		params: {
			category: post.data.category.slug,
			slug: post.uid,
		},
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params }) => {
	const { slug } = params

	const client = createClient(process.env.PRISMIC_API_URL)
	try {
		const categories = await client.getByType('category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const blog = await client.getByUID('blopgpost', slug)

		return {
			props: {
				blog,
				categories: categories.results,
			},
		}
	} catch (error) {
		console.log('errors', error)

		return {
			props: {
				// error,
			},
		}
	}
}
