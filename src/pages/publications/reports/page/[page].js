import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'
import {
	getStaticPathsPublicationsPagination,
	getStaticPropsPublications,
} from '../../../../../lib/helperFunctions'
import * as prismic from '@prismicio/client'

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

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticPathsPublicationsPagination(client, 'report')

	return {
		paths,
		fallback: true,
	}
}

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
