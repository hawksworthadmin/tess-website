import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'
import { getStaticPropsPublications } from '../../../../lib/helperFunctions'

export default function NewsLetters({ newsletters, categories, totalPages }) {
	return (
		<Layout>
			<Head>
				<title>News Letters | {METADATA.title}</title>
			</Head>
			<Blog
				heading={'Reports'}
				posts={newsletters}
				link={'/publications/news-letters/'}
				totalPages={totalPages}
				categories={categories}
			/>
		</Layout>
	)
}

export const getStaticProps = async ({ previewData }) => {
	const page = 1

	const client = createClient(previewData)

	const { categories, publication } = await getStaticPropsPublications(
		client,
		page,
		'newsletter_category',
		'newsletter'
	)

	return {
		props: {
			newsletters: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
