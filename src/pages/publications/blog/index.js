import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

// import { createClient,  } from '@prismicio/client'
import * as prismic from '@prismicio/client'

export default function index({ blogposts }) {
	console.log(blogposts)
	return (
		<Layout>
			<Blog heading={'Blog'} blogposts={blogposts} />
		</Layout>
	)
}

export const getStaticProps = async ({ previewData }) => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	// This will fetch all the data from prismic
	const blog = await client.getAllByType('blopgpost', {
		fetchLinks: ['author.name', 'category.title'],
	})

	return {
		props: {
			blogposts: blog,
		},
	}
}
