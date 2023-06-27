import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'
import { getStaticPropsPublications } from '../../../../lib/helperFunctions'

export default function Reports({ reports, categories, totalPages }) {
	return (
		<Layout>
			<Head>
				<title>Reports | {METADATA.title}</title>
			</Head>
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
// export const getServerSideProps = async ({ previewData, query }) => {
// 	const page = Number(query.page) || 1

// 	const client = createClient(previewData)

// 	const categories = await client.getByType('report_category', {
// 		orderings: {
// 			field: 'document.uid',
// 			direction: 'desc',
// 		},
// 	})

// 	const reports = await client.getByType('report', {
// 		pageSize: 8,
// 		page: page,

// 		orderings: {
// 			field: 'document.first_publication_date',
// 			direction: 'desc',
// 		},
// 	})

// 	return {
// 		props: {
// 			reports: reports.results,
// 			totalPages: reports.total_pages,
// 			categories: categories.results,
// 		},
// 	}
// }

export const getStaticProps = async ({ previewData }) => {
	const page = 1

	const client = createClient(previewData)

	const { categories, publication } = await getStaticPropsPublications(
		client,
		page,
		'report_category',
		'report'
	)

	return {
		props: {
			reports: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
