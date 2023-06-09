import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ newsletter, categories, relatedPosts }) {
	return (
		<BlogDetails
			post={newsletter}
			categories={categories}
			link={'/publications/news-letters/'}
			heading={'News Letters'}
			relatedPosts={relatedPosts}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)
	try {
		const categories = await client.getByType('newsletter_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const newsletter = await client.getByUID('newsletter', slug)

		const categoryId = newsletter?.data?.category?.id
		const postId = newsletter?.id
		const relatedPosts = await client.getByType('newsletter', {
			filters: [
				prismic.filter.at('my.newsletter.category', categoryId),
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
				newsletter,
				categories: categories.results,
				relatedPosts: relatedPosts?.results,
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
