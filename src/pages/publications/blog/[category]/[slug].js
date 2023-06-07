import { createClient } from '../../../../../prismicio'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ blog, categories }) {
	return (
		<BlogDetails
			post={blog}
			categories={categories}
			link={'/publications/blog/'}
			heading={'Blogs'}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)
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
		return {
			props: {
				// error,
			},
		}
	}
}
