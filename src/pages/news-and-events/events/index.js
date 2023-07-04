import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import { getStaticPropsPublications } from '../../../../lib/helperFunctions'

export default function Event({ events, totalPages, categories }) {
	return (
		<Layout>
			<Blog
				heading={'Events'}
				posts={events}
				checkEvent={true}
				totalPages={totalPages}
				categories={categories}
				link={'/news-and-events/events/'}
			/>
		</Layout>
	)
}

export const getStaticProps = async ({ previewData }) => {
	const page = 1

	const client = createClient(previewData)

	const { categories, publication } = await getStaticPropsPublications(
		client,
		page,
		'event_category',
		'event'
	)

	return {
		props: {
			events: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
