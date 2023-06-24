import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'

export default function Event({ pressReleases, totalPages, categories }) {
	return (
		<Layout>
			<Head>
				<title>Press Releases | {METADATA.title}</title>
			</Head>
			<Blog
				heading={'News and Press Release'}
				posts={pressReleases}
				totalPages={totalPages}
				categories={categories}
				link={'/news-and-events/press-release/'}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, query }) => {
	const page = Number(query.page) || 1

	const client = createClient(previewData)

	const categories = await client.getByType('press_release_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const pressReleases = await client.getByType('press_release', {
		pageSize: 8,
		page: page,

		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			pressReleases: pressReleases.results,
			totalPages: pressReleases.total_pages,
			categories: categories.results,
		},
	}
}
