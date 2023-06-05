import { createClient } from '../../../../../prismicio'
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

		return {
			props: {
				event,
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
