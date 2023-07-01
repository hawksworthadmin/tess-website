import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { getStaticPropsPublications } from '../../../../lib/helperFunctions'
import { createClient } from '../../../../prismicio'

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

export const getStaticProps = async ({ previewData, query }) => {
	const client = createClient({ previewData })
	const page = 1
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
export default index
