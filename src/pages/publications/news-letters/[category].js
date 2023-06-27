import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import * as prismic from '@prismicio/client'
import {
	getStaticCatogeryPaths,
	getStaticPropsCategoryPage,
} from '../../../../lib/helperFunctions'

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

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticCatogeryPaths(client, 'newsletter_category')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params, previewData }) => {
	const page = Number(params.page) || 1
	const { category } = params

	const client = createClient(previewData)

	const { publication, categories } = await getStaticPropsCategoryPage(
		client,
		page,
		category,
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
