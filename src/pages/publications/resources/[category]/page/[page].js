import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../../../prismicio'
import {
	getStaticCategoryPage,
	getStaticPropsCategoryPage,
} from '../../../../../../lib/helperFunctions'

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
		fallback: false,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const client = createClient({ previewData })

	const { category, page } = params

	const { publication, categories } = await getStaticPropsCategoryPage(
		client,
		page,
		category,
		'resource_category',
		'resource'
	)
	return {
		props: {
			categories: categories.results,
			resources: publication.results,
			totalPages: publication.total_pages,
		},
		revalidate: 60,
	}
}
