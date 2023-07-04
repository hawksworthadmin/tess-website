import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'
import {
	getStaticPathsSlug,
	getStaticPropsSlug,
} from '../../../../../lib/helperFunctions'

export default function Details({ blog, categories, relatedPosts }) {
	return (
		<BlogDetails
			post={blog}
			categories={categories}
			link={'/publications/blog/'}
			heading={'Blogs'}
			relatedPosts={relatedPosts}
			publicationType={'blog'}
		/>
	)
}

export const getStaticPaths = async () => {
	const client = createClient()

	const paths = await getStaticPathsSlug(client, 'blopgpost')
	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient({ previewData })

	const { publication, relatedPosts, categories } = await getStaticPropsSlug(
		client,
		slug,
		'blopgpost',
		'category'
	)
	return {
		props: {
			blog: publication,
			categories: categories.results,
			relatedPosts: relatedPosts?.results,
		},
		revalidate: 60,
	}
}
