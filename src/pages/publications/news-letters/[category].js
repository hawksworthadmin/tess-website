import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import * as prismic from '@prismicio/client'

export default function NewsLetters({ newsletters, categories, totalPages }) {
	return (
		<Layout>
			<Blog
				heading={'Newsletters'}
				posts={newsletters}
				link={'/publications/news-letters/'}
				totalPages={totalPages}
				categories={categories}
			/>
		</Layout>
	)
}
export const getServerSideProps = async ({ previewData, query, params }) => {
	const page = Number(query.page) || 1
	const { category } = params

	const client = createClient(previewData)

	const categories = await client.getByType('newsletter_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const getCategoryIdUsingSlug = await client.getByUID(
		'newsletter_category',
		category
	)

	const categoryId = getCategoryIdUsingSlug.id

	const newsletters = await client.getByType('newsletter', {
		filters: [prismic.filter.at('my.newsletter.category', categoryId)],
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
