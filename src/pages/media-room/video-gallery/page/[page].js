import Layout from '@/components/layout/Layout'
import VideoGallery from '@/components/pages/VideoGallery/VideoGallery'
import React from 'react'

import Head from 'next/head'
import METADATA from '@/METADATA'
import { createClient } from '../../../../../prismicio'
import {
	getStaticCategoryPage,
	getStaticPropsMediaHomePage,
} from '../../../../../lib/helperFunctions'

export default function _VideoGallery({ category, videos, totalPages }) {
	return (
		<Layout>
			<Head>
				<title>Video Gallery | {METADATA.title}</title>
			</Head>
			<VideoGallery
				tabs_category={category}
				videos={videos}
				totalPages={totalPages}
			/>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const client = createClient()
	const paths = await getStaticCategoryPage(
		client,
		'video_gallery_category',
		'video_gallery'
	)

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const client = createClient({ previewData })
	const page = params.page

	const { categories, media } = await getStaticPropsMediaHomePage(
		client,
		'video_gallery_category',
		'video_gallery',
		page
	)
	return {
		props: {
			category: categories,
			videos: media.results,
			totalPages: media.total_pages,
		},
		revalidate: 60,
	}
}
