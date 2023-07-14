import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

import {
	getStaticCategoryPage,
	getStaticPropsPublications,
} from '../../../../../lib/helperFunctions'
import { createClient } from '../../../../../prismicio'

const index = ({ resources, categories, totalPages }) => {
	return (
		<Layout>
			<Blog
				heading={'Resources'}
				isResource={true}
				posts={resources}
				link={'/publications/resources/'}
				totalPages={totalPages}
				categories={categories}
			/>
		</Layout>
	)
}
export default index
export const getStaticPaths = async () => {
	const client = createClient()
	const paths = await getStaticCategoryPage(
		client,
		'resource_category',
		'resource'
	)
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
		'resource_category',
		'resource'
	)

	return {
		props: {
			resources: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
