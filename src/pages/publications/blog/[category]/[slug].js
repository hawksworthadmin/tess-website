import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ blog, categories, relatedPosts }) {
	return (
		<BlogDetails
			post={blog}
			categories={categories}
			link={'/publications/blog/'}
			heading={'Blogs'}
			relatedPosts={relatedPosts}
			publicationType={'blog'}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)

	const categories = await client.getByType('category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const blog = await client.getByUID('blopgpost', slug)
	const categoryId = blog?.data?.category?.id
	const postId = blog?.id
	const relatedPosts = await client.getByType('blopgpost', {
		filters: [
			prismic.filter.at('my.blopgpost.category', categoryId),
			prismic.filter.not('document.id', postId),
		],
		pageSize: 3,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	// console.log('Related', relatedPosts)

	return {
		props: {
			blog,
			categories: categories.results,
			relatedPosts: relatedPosts?.results,
		},
	}
}
