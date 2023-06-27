import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import * as prismic from '@prismicio/client'
import { createClient } from '../../../../../../prismicio'
import {
	getStaticCategoryPage,
	getStaticPropsCategoryPage,
} from '../../../../../../lib/helperFunctions'

export default function PressReleaseCategory({
	press_release,
	totalPages,
	categories,
}) {
	return (
		<Layout>
			<Blog
				heading={'News and Press Release'}
				posts={press_release}
				totalPages={totalPages}
				categories={categories}
				link={'/news-and-events/press-release/'}
			/>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)
	const paths = await getStaticCategoryPage(
		client,
		'press_release_category',
		'press_release'
	)

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
		'press_release_category',
		'press_release'
	)

	return {
		props: {
			press_release: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
