import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import * as prismic from '@prismicio/client'
import {
	getStaticCatogeryPaths,
	getStaticPropsCategoryPage,
} from '../../../../lib/helperFunctions'

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

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticCatogeryPaths(client, 'report_category')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ query, params, previewData }) => {
	const page = Number(params.page) || 1
	const { category } = params

	const client = createClient(previewData)

	const { publication, categories } = await getStaticPropsCategoryPage(
		client,
		page,
		category,
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
