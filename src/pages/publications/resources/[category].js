import React from 'react'
import Blog from '@/components/pages/Blog/Blog'
import Layout from '@/components/layout/Layout'

import * as prismic from '@prismicio/client'
import { createClient } from '../../../../prismicio'
import {
	getStaticCatogeryPaths,
	getStaticPropsCategoryPage,
} from '../../../../lib/helperFunctions'

export default function index({ resources, totalPages, categories }) {
	return (
		<Layout>
			<Blog
				heading={'Resources'}
				posts={resources}
				totalPages={totalPages}
				categories={categories}
				link={'/publications/resources/'}
				isResource={true}
			/>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const client = createClient()
	const paths = await getStaticCatogeryPaths(client, 'resource_category')

	return {
		paths,
		fallback: false,
	}
}
export const getStaticProps = async ({ previewData, query, params }) => {
	const page = Number(params.page) || 1
	const { category } = params

	const client = createClient({ previewData })

	const { publication, categories } = await getStaticPropsCategoryPage(
		client,
		page,
		category,
		'resource_category',
		'resource'
	)

	console.log('publication', publication)

	return {
		props: {
			resources: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
