import Layout from '@/components/layout/Layout'
import PhotoGallery from '@/components/pages/PhotoGallery/PhotoGallery'
import React from 'react'
import * as prismic from '@prismicio/client'
import Head from 'next/head'
import METADATA from '@/METADATA'
import { createClient } from '../../../../../prismicio'
import {
	getStaticCategoryPage,
	getStaticPropsMediaHomePage,
} from '../../../../../lib/helperFunctions'

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
	const client = prismic.createClient(process.env.PRISMIC_API_URL)
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
	const page = params.page

	const { categories, media } = await getStaticPropsMediaHomePage(
		client,
		'image_gallary_category',
		'image_gallery',
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
