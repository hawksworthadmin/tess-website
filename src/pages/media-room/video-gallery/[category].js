import Layout from '@/components/layout/Layout'
import VideoGallery from '@/components/pages/VideoGallery/VideoGallery'
import React from 'react'

import * as prismic from '@prismicio/client'
import Head from 'next/head'
import METADATA from '@/METADATA'
import {
	getStaticCatogeryPaths,
	getStaticPropsMediaCategoryPage,
	getStaticPropsMediaHomePage,
} from '../../../../lib/helperFunctions'
import { createClient } from '../../../../prismicio'
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
	const paths = await getStaticCatogeryPaths(client, 'video_gallery_category')

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ previewData, params }) => {
	const client = createClient(previewData)
	const { category } = params

	const { categories, media } = await getStaticPropsMediaCategoryPage(
		client,
		'video_gallery_category',
		'video_gallery',
		category
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
