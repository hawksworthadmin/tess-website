import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'

export default function NewsLetters({ newsletters, categories, totalPages }) {
	return (
		<Layout>
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
		pageSize: 4,
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
