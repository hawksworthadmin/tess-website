import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'
import {
	getStaticPathsSlug,
	getStaticPropsSlug,
} from '../../../../../lib/helperFunctions'

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

export const getStaticProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)

	const { publication, relatedPosts, categories } = await getStaticPropsSlug(
		client,
		slug,
		'press_release',
		'press_release_category'
	)
	return {
		props: {
			pressRelease: publication,
			categories: categories.results,
			relatedPosts: relatedPosts?.results,
		},
		revalidate: 60,
	}
}

export const getStaticPaths = async () => {
	const client = createClient()

	const paths = await getStaticPathsSlug(client, 'press_release')
	return {
		paths,
		fallback: true,
	}
}
