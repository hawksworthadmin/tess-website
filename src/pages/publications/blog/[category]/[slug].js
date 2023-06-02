import Layout from '@/components/layout/Layout'
import BlogRight from '@/components/pages/Blog/BlogRight'
import { createClient, Client } from '@prismicio/client'
import moment from 'moment'
import { RichText } from 'prismic-dom'
import React from 'react'

import RichTextComponent from '@/components/pages/Blog/RichTextComponent'

export default function BlogDetails({ blog }) {
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
							<div clasThe Blog TitlesName="col-lg-8">
								<div className="blog-details-content">
									{blog?.data?.user?.slug.replace('-', ' ')}
									<div className="blog-details-img" bis_skin_checked="1">
										<img src={blog?.data?.image?.url} alt="Image" />
									</div>
									<div className="blog-top-content">
										<div class="news-content" bis_skin_checked="1">
											<ul class="admin">
												<li>
													<a href="#">
														<i class="ri-user-fill"></i>
														{blog?.data?.user?.slug.replace('-', ' ')}
													</a>
												</li>

												<li>
													<i class="ri-calendar-line"></i>
													{moment(blog?.data?.created_at).format('DD MMMM')}
												</li>

												<li>
													<a href="#">
														<i class="ri-question-answer-fill"></i>
														(03) comments
													</a>
												</li>
											</ul>

											<h3>{blog?.data?.title}</h3>

											{<RichTextComponent field={blog?.data?.description} />}
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<BlogRight />
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

	// console.log(slug)

	const blog = await client.getByUID('blopgpost', slug)

	return {
		props: {
			blog,
		},
	}
}
