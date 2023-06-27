import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import * as prismic from '@prismicio/client'

// import { createClient,  } from '@prismicio/client'
import { Client, PrismicDocument } from '@prismicio/client'
import { createClient } from '../../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'
import {
	getStaticPathsPublicationsPagination,
	getStaticPropsPublications,
} from '../../../../../lib/helperFunctions'

export default function Index({ blogposts, totalPages, categories }) {
	return (
		<Layout>
			<Head>
				<title>Blog | {METADATA.title}</title>
			</Head>
			<Blog
				heading={'Blogs'}
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

	const paths = await getStaticPathsPublicationsPagination(client, 'blopgpost')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ previewData }) => {
	const page = 1

	const client = createClient(previewData)

	const { categories, publication } = await getStaticPropsPublications(
		client,
		page,
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
