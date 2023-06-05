import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

// import { createClient,  } from '@prismicio/client'
import { Client, PrismicDocument } from '@prismicio/client'
import * as prismic from '@prismicio/client'

export default function index({ blogposts, totalPages, categories }) {
	console.log(blogposts)
	return (
		<Layout>
			<Blog
				heading={'Blog'}
				posts={blogposts}
				totalPages={totalPages}
				categories={categories}
				link={'/publications/blog/'}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ query, params }) => {
	const page = Number(query.page) || 1
	const { category } = params

	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	try {
		const categories = await client.getByType('category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const getCategoryIdUsingSlug = await client.getByUID('category', category)

		const categoryId = getCategoryIdUsingSlug.id

		const blog = await client.getByType('blopgpost', {
			filters: [prismic.filter.at('my.blopgpost.category', categoryId)],
			pageSize: 4,
			page: page,
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		return {
			props: {
				blogposts: blog.results,
				totalPages: blog.total_pages,
				categories: categories.results,
				params,
				getCategoryIdUsingSlug,
			},
		}
	} catch (error) {
		return {
			props: {},
		}
	}
}
