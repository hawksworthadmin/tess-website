import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

// import { createClient,  } from '@prismicio/client'
import { Client } from '@prismicio/client'

export default function index({ blogposts }) {
	console.log(blogposts)
	return (
		<Layout>
			<Blog heading={'Blog'} blogposts={blogposts} />
		</Layout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const page = Number(query.page) || 1

	const client = new Client(process.env.PRISMIC_API_URL)

	const allblogpost = await client.getAllByType('blopgpost')

	const totalBlogPost = allblogpost.length

	// This will fetch  the paginated  data from prismic
	const blog = await client.getAllByType('blopgpost', {
		pageSize: 4,
		page: page,
	})

	return {
		props: {
			blogposts: blog,
		},
	}
}
