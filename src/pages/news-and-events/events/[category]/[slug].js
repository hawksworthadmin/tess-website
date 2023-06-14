import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'
import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ event, categories }) {
	return (
		<BlogDetails
			post={event}
			categories={categories}
			link={'/news-and-events/events/'}
			checkEvent={true}
			heading={'Events'}
			publicationType={'event'}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)
	try {
		const categories = await client.getByType('event_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const event = await client.getByUID('event', slug)
		const categoryId = event?.data?.category?.id
		const postId = event?.id
		const relatedPosts = await client.getByType('event', {
			filters: [
				prismic.filter.at('my.event.category', categoryId),
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
				event,
				categories: categories.results,
				relatedPosts: relatedPosts.results,
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
