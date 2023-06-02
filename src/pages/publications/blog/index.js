import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

// import { createClient,  } from '@prismicio/client'
import { Client, PrismicDocument } from '@prismicio/client'

export default function index({ blogposts, totalPages, categories }) {
	console.log(blogposts)
	return (
		<Layout>
			<Blog
				heading={'Blog'}
				blogposts={blogposts}
				totalPages={totalPages}
				categories={categories}
				link={'/publications/blog/'}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const page = Number(query.page) || 1

	const client = new Client(process.env.PRISMIC_API_URL)

	const categories = await client.getByType('category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const blog = await client.getByType('blopgpost', {
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
		},
	}
}
