import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import * as prismic from '@prismicio/client'

export default function Reports({ reports, categories, totalPages }) {
	return (
		<Layout>
			<Blog
				heading={'Reports'}
				posts={reports}
				link={'/publications/reports/'}
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

	try {
		const categories = await client.getByType('report_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		console.log(categories.results)

		const getCategoryIdUsingSlug = await client.getByUID(
			'report_category',
			category
		)

		const categoryId = getCategoryIdUsingSlug.id

		const report = await client.getByType('report', {
			filters: [prismic.filter.at('my.report.category', categoryId)],
			pageSize: 8,
			page: page,
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		return {
			props: {
				reports: report.results,
				totalPages: report.total_pages,
				categories: categories.results,
				params,
				getCategoryIdUsingSlug,
			},
		}
	} catch (error) {
		return {
			props: {},
		}
	}
}
