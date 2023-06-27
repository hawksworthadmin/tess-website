import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import * as prismic from '@prismicio/client'
import { createClient } from '../../../../prismicio'
import {
	getStaticCatogeryPaths,
	getStaticPropsCategoryPage,
} from '../../../../lib/helperFunctions'

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

// export const getServerSideProps = async ({ previewData, query, params }) => {
// 	const page = Number(query.page) || 1
// 	const { category } = params

// 	const client = createClient(process.env.PRISMIC_API_URL)

// 	try {
// 		const categories = await client.getByType('press_release_category', {
// 			orderings: {
// 				field: 'document.uid',
// 				direction: 'desc',
// 			},
// 		})

// 		const getCategoryIdUsingSlug = await client.getByUID(
// 			'press_release_category',
// 			category
// 		)

// 		const categoryId = getCategoryIdUsingSlug.id

// 		const press_release = await client.getByType('press_release', {
// 			filters: [prismic.filter.at('my.press_release.category', categoryId)],
// 			pageSize: 8,
// 			page: page,
// 			orderings: {
// 				field: 'document.first_publication_date',
// 				direction: 'desc',
// 			},
// 		})

// 		return {
// 			props: {
// 				press_release: press_release.results,
// 				totalPages: press_release.total_pages,
// 				categories: categories.results,
// 			},
// 		}
// 	} catch (error) {
// 		return {
// 			props: {},
// 		}
// 	}
// }

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const paths = await getStaticCatogeryPaths(client, 'press_release_category')

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
