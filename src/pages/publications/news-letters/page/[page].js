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

export default function NewsLetters({ newsletters, categories, totalPages }) {
	return (
		<Layout>
			<Head>
				<title>News Letters | {METADATA.title}</title>
			</Head>
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

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticPathsPublicationsPagination(client, 'newsletter')

	return {
		paths,
		fallback: true,
	}
}
export const getStaticProps = async ({ previewData, params }) => {
	const page = params.page

	const client = createClient(previewData)

	const { categories, publication } = await getStaticPropsPublications(
		client,
		page,
		'newsletter_category',
		'newsletter'
	)

	return {
		props: {
			newsletters: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
