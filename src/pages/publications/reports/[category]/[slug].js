import { createClient } from '../../../../../prismicio'
import * as prismic from '@prismicio/client'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

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

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)

	const categories = await client.getByType('report_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const reports = await client.getByUID('report', slug)
	const categoryId = reports?.data?.category?.id
	const postId = reports?.id
	const relatedPosts = await client.getByType('report', {
		filters: [
			prismic.filter.at('my.report.category', categoryId),
			prismic.filter.not('document.id', postId),
		],
		pageSize: 3,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			reports,
			categories: categories.results,
			relatedPosts: relatedPosts?.results,
		},
	}
}
