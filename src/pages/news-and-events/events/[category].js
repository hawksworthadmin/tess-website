import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import * as prismic from '@prismicio/client'
import {
	getStaticCatogeryPaths,
	getStaticPropsCategoryPage,
} from '../../../../lib/helperFunctions'
import { createClient } from '../../../../prismicio'

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

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticCatogeryPaths(client, 'event_category')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params, previewData }) => {
	const page = Number(params.page) || 1
	const { category } = params

	const client = createClient(previewData)

	const { publication, categories } = await getStaticPropsCategoryPage(
		client,
		page,
		category,
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
