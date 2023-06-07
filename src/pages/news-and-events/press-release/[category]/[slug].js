import { createClient } from '../../../../../prismicio'
import React from 'react'

import BlogDetails from '@/components/pages/Blog/BlogDetails'

export default function Details({ pressRelease, categories }) {
	return (
		<BlogDetails
			post={pressRelease}
			categories={categories}
			link={'/news-and-events/press-release/'}
			heading={'News and Press Release'}
		/>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)
	try {
		const categories = await client.getByType('press_release_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const pressRelease = await client.getByUID('press_release', slug)

		return {
			props: {
				pressRelease,
				categories: categories.results,
			},
		}
	} catch (error) {
		return {
			props: {
				// error,
			},
		}
	}
}
