import { createClient } from '../../../../../prismicio'
import React from 'react'
import BlogDetails from '@/components/pages/Blog/BlogDetails'
import {
	getStaticPathsSlug,
	getStaticPropsSlug,
} from '../../../../../lib/helperFunctions'

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

export const getStaticProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)

	const { publication, relatedPosts, categories } = await getStaticPropsSlug(
		client,
		slug,
		'event',
		'event_category'
	)
	return {
		props: {
			event: publication,
			categories: categories.results,
			relatedPosts: relatedPosts?.results,
		},
		revalidate: 60,
	}
}

export const getStaticPaths = async () => {
	const client = createClient()

	const paths = await getStaticPathsSlug(client, 'event')
	return {
		paths,
		fallback: false,
	}
}
