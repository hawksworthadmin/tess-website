import { createClient } from '../../../../../prismicio'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ newsletter, categories }) {
	return (
		<BlogDetails
			post={newsletter}
			categories={categories}
			link={'/publications/news-letters/'}
			heading={'News Letters'}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)
	try {
		const categories = await client.getByType('newsletter_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const newsletter = await client.getByUID('newsletter', slug)

		return {
			props: {
				newsletter,
				categories: categories.results,
			},
		}
	} catch (error) {
		console.log('errors', error)

		return {
			props: {
				// error,
			},
		}
	}
}
