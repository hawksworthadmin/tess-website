import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import * as prismic from '@prismicio/client'

export default function EventCategory({ events, totalPages, categories }) {
	return (
		<Layout>
			<Blog
				heading={'Events'}
				posts={events}
				totalPages={totalPages}
				categories={categories}
				link={'/news-and-events/events/'}
				checkEvent={true}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ query, params }) => {
	const page = Number(query.page) || 1
	const { category } = params

	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	try {
		const categories = await client.getByType('event_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const getCategoryIdUsingSlug = await client.getByUID(
			'event_category',
			category
		)

		const categoryId = getCategoryIdUsingSlug.id

		const events = await client.getByType('event', {
			filters: [prismic.filter.at('my.event.category', categoryId)],
			pageSize: 8,
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
	} catch (error) {
		return {
			props: {},
		}
	}
}
