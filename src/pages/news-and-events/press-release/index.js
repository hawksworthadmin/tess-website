import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'
import Head from 'next/head'
import METADATA from '@/METADATA'
import { getStaticPropsPublications } from '../../../../lib/helperFunctions'

export default function PressRelease({
	pressReleases,
	totalPages,
	categories,
}) {
	return (
		<Layout>
			<Head>
				<title>Press Releases | {METADATA.title}</title>
			</Head>
			<Blog
				heading={'News and Press Release'}
				posts={pressReleases}
				totalPages={totalPages}
				categories={categories}
				link={'/news-and-events/press-release/'}
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
		'press_release_category',
		'press_release'
	)

	return {
		props: {
			pressReleases: publication.results,
			totalPages: publication.total_pages,
			categories: categories.results,
		},
		revalidate: 60,
	}
}
