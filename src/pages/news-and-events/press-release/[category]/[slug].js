import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ pressRelease, categories, relatedPosts }) {
	return (
		<BlogDetails
			post={pressRelease}
			categories={categories}
			link={'/news-and-events/press-release/'}
			heading={'News and Press Release'}
			relatedPosts={relatedPosts}
			publicationType={'news'}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)

	const categories = await client.getByType('press_release_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const pressRelease = await client.getByUID('press_release', slug)
	const categoryId = pressRelease?.data?.category?.id
	const postId = pressRelease?.id
	const relatedPosts = await client.getByType('press_release', {
		filters: [
			prismic.filter.at('my.press_release.category', categoryId),
			prismic.filter.not('document.id', postId),
		],
		pageSize: 3,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			pressRelease,
			categories: categories.results,
			relatedPosts: relatedPosts.results,
		},
	}
}
