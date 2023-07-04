import Layout from '@/components/layout/Layout'
import PhotoGallery from '@/components/pages/PhotoGallery/PhotoGallery'
import React from 'react'
import * as prismic from '@prismicio/client'
import Head from 'next/head'
import METADATA from '@/METADATA'
import {
	getStaticCategoryPage,
	getStaticPropsMediaCategoryPage,
} from '../../../../../../lib/helperFunctions'
import { createClient } from '../../../../../../prismicio'

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
	const paths = await getStaticCategoryPage(
		client,
		'image_gallary_category',
		'image_gallery'
	)

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const client = createClient({ previewData })

	const { category, page } = params

	const { categories, media } = await getStaticPropsMediaCategoryPage(
		client,
		'image_gallary_category',
		'image_gallery',
		category,
		page
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
