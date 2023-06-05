import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import { useRouter } from 'next/router'
import React from 'react'
import { createClient } from '../../../../prismicio'

export default function Event({ events, totalPages, categories }) {
	console.log(events)
	return (
		<Layout>
			<Blog
				heading={'Events'}
				posts={events}
				checkEvent={true}
				totalPages={totalPages}
				categories={categories}
				link={'/news-and-events/blog/'}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, query }) => {
	const page = Number(query.page) || 1

	const client = createClient(previewData)

	const categories = await client.getByType('event_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const events = await client.getByType('event', {
		pageSize: 4,
		page: page,

		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			events: events.results,
			totalPages: events.total_pages,
			categories: categories.results,
		},
	}
}
