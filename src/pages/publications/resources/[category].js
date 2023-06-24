import React from 'react'
import Blog from '@/components/pages/Blog/Blog'
import Layout from '@/components/layout/Layout'

import * as prismic from '@prismicio/client'
import { createClient } from '../../../../prismicio'

export default function index({ resources, totalPages, categories }) {
	return (
		<Layout>
			<Blog
				heading={'Blog'}
				posts={resources}
				totalPages={totalPages}
				categories={categories}
				link={'/publications/resources/'}
				isResource={true}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, query, params }) => {
	const page = Number(query.page) || 1
	const { category } = params

	const client = createClient(previewData)

	try {
		const categories = await client.getByType('resource_category', {
			orderings: {
				field: 'document.uid',
				direction: 'desc',
			},
		})

		const getCategoryIdUsingSlug = await client.getByUID(
			'resource_category',
			category
		)

		const categoryId = getCategoryIdUsingSlug.id

		const resource = await client.getByType('resource', {
			filters: [prismic.filter.at('my.resource.category', categoryId)],
			pageSize: 8,
			page: page,
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		return {
			props: {
				resources: resource.results,
				totalPages: resource.total_pages,
				categories: categories.results,
			},
		}
	} catch (error) {
		return {
			props: {},
		}
	}
}
