import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../../../prismicio'
import * as prismic from '@prismicio/client'
import {
	getStaticCategoryPage,
	getStaticPropsCategoryPage,
} from '../../../../../../lib/helperFunctions'

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
	const paths = await getStaticCategoryPage(client, 'report_category', 'report')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ query, params }) => {
	const page = Number(params.page) || 1
	const { category } = params

	const client = prismic.createClient(process.env.PRISMIC_API_URL)
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
