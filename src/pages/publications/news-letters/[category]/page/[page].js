import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import * as prismic from '@prismicio/client'
import {
	getStaticCategoryPage,
	getStaticPropsCategoryPage,
} from '../../../../../../lib/helperFunctions'

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
	const paths = await getStaticCategoryPage(
		client,
		'newsletter_category',
		'newsletter'
	)

	return {
		paths,
		fallback: false,
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
