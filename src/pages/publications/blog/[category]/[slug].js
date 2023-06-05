import { createClient } from '../../../../../prismicio'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ blog, categories }) {
	return (
		<BlogDetails
			post={blog}
			categories={categories}
			link={'/publications/blog/'}
		/>
	)
}

export const getStaticPaths = async ({ previewData }) => {
	const client = createClient({ previewData })

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

export const getStaticProps = async ({ previewData, params }) => {
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
		console.log('errors', error)

		return {
			props: {
				// error,
			},
		}
	}
}
