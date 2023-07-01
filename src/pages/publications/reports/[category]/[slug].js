import { createClient } from '../../../../../prismicio'
import React from 'react'
import BlogDetails from '@/components/pages/Blog/BlogDetails'
import {
	getStaticPathsSlug,
	getStaticPropsSlug,
} from '../../../../../lib/helperFunctions'

export default function Details({ reports, categories, relatedPosts }) {
	return (
		<BlogDetails
			post={reports}
			categories={categories}
			link={'/publications/report/'}
			heading={'Reports'}
			relatedPosts={relatedPosts}
			publicationType={'reports'}
		/>
	)
}

export const getStaticProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient({ previewData })

	const { publication, relatedPosts, categories } = await getStaticPropsSlug(
		client,
		slug,
		'report',
		'report_category'
	)
	return {
		props: {
			reports: publication,
			categories: categories.results,
			relatedPosts: relatedPosts?.results,
		},

		revalidate: 60,
	}
}

export const getStaticPaths = async () => {
	const client = createClient()

	const paths = await getStaticPathsSlug(client, 'report')
	return {
		paths,
		fallback: true,
	}
}
