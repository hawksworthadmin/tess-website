import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

// import { createClient,  } from '@prismicio/client'
import { Client, PrismicDocument } from '@prismicio/client'
import * as prismic from '@prismicio/client'

export default function index({ blogposts, totalPages, categories }) {
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

// export const getStaticPaths = async () => {
// 	const client = prismic.createClient(process.env.PRISMIC_API_URL)
// 	const categories = await client.getByType('category', {
// 		orderings: {
// 			field: 'document.uid',
// 			direction: 'desc',
// 		},
// 	})
// 	const categoriesPaths = categories.results.map((cat) => ({
// 		params: { category: cat.uid },
// 	}))

// 	return {
// 		paths: categoriesPaths,
// 		fallback: true,
// 	}
// }

export const getServerSideProps = async ({ query, params }) => {
	const page = Number(params.page) || 1
	const { category } = params

	console.log(params)

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
			pageSize: 8,
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
