import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'

const index = ({ resources, categories, totalPages }) => {
	console.log(resources)
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

export const getServerSideProps = async ({ previewData, query }) => {
	const page = Number(query.page) || 1

	const client = createClient(previewData)

	const categories = await client.getByType('resource_category', {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const resource = await client.getByType('resource', {
		pageSize: 4,
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
}
export default index
