import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'

export default function Reports({ reports, categories, totalPages }) {
	console.log(reports)
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
export const getServerSideProps = async ({ previewData, query }) => {
	const page = Number(query.page) || 1

	const client = createClient(previewData)

	const categories = await client.getByType('report_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const reports = await client.getByType('report', {
		pageSize: 4,
		page: page,

		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			reports: reports.results,
			totalPages: reports.total_pages,
			categories: categories.results,
		},
	}
}
