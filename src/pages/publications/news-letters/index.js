import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'

export default function NewsLetters({ newsletters, categories, totalPages }) {
	return (
		<Layout>
			<Head>
				<title>News Letters | {METADATA.title}</title>
			</Head>
			<Blog
				heading={'Reports'}
				posts={newsletters}
				link={'/publications/news-letters/'}
				totalPages={totalPages}
				categories={categories}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, query }) => {
	const page = Number(query.page) || 1

	const client = createClient(previewData)

	const categories = await client.getByType('newsletter_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const newsletters = await client.getByType('newsletter', {
		pageSize: 8,
		page: page,

		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			newsletters: newsletters.results,
			totalPages: newsletters.total_pages,
			categories: categories.results,
		},
	}
}
