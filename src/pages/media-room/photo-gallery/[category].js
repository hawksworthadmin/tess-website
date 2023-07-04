import Layout from '@/components/layout/Layout'
import PhotoGallery from '@/components/pages/PhotoGallery/PhotoGallery'
import React from 'react'
import Head from 'next/head'
import METADATA from '@/METADATA'
import { createClient } from '../../../../prismicio'
import {
	getStaticCatogeryPaths,
	getStaticPropsMediaCategoryPage,
} from '../../../../lib/helperFunctions'

export default function _PhotoGallery({ category, photos, totalPages }) {
	return (
		<Layout>
			<Head>
				<title>Photo Gallery | {METADATA.title}</title>
			</Head>
			<PhotoGallery
				tabs_category={category}
				photos={photos}
				totalPages={totalPages}
			/>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const client = createClient()
	const paths = await getStaticCatogeryPaths(client, 'image_gallary_category')

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const client = createClient(previewData)
	const { category } = params

	const { categories, media } = await getStaticPropsMediaCategoryPage(
		client,
		'image_gallary_category',
		'image_gallery',
		category
	)
	return {
		props: {
			category: categories,
			photos: media.results,
			totalPages: media.total_pages,
		},
		revalidate: 60,
	}
}
