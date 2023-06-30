import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../../prismicio'
import {
	getStaticPathsPublicationsPagination,
	getStaticPropsPublications,
} from '../../../../../lib/helperFunctions'
import * as prismic from '@prismicio/client'

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

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticPathsPublicationsPagination(client, 'event')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const page = params.page

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
