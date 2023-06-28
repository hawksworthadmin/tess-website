import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

// import { createClient,  } from '@prismicio/client'
import { Client, PrismicDocument } from '@prismicio/client'
import * as prismic from '@prismicio/client'
import {
	getStaticCategoryPage,
	getStaticPropsCategoryPage,
} from '../../../../../../lib/helperFunctions'

export default function index({ blogposts, totalPages, categories }) {
	return (
		<Layout>
			<Blog
				heading={'Blog'}
				posts={blogposts}
				totalPages={totalPages}
				categories={categories}
				link={'/publications/blog/'}
			/>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)
	const paths = await getStaticCategoryPage(client, 'category', 'blopgpost')

	return {
		paths,
		fallback: true,
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
		'category',
		'blopgpost'
	)
	return {
		props: {
			blogposts: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
