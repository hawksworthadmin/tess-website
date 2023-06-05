import Layout from '@/components/layout/Layout'
import VideoGallery from '@/components/pages/VideoGallery/VideoGallery'
import React from 'react'
import { createClient } from '../../../../prismicio'
import * as prismic from '@prismicio/client'
export default function _VideoGallery({ category, videos, totalPages }) {
	console.log('video', videos)
	return (
		<Layout>
			<VideoGallery
				tabs_category={category}
				videos={videos}
				totalPages={totalPages}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, query }) => {
	const page = Number(query.page) || 1
	const category = query.category || 'all'

	try {
		const client = createClient(previewData)

		const photo_category = await client.getAllByType('image_gallery_category')

		if (category == 'all') {
			const videos = await client.getByType('video_gallery', {
				pageSize: 6,
				page: page,
				orderings: {
					field: 'document.first_publication_date',
					direction: 'desc',
				},
			})

			return {
				props: {
					category: photo_category,
					videos: videos.results,
					totalPages: videos.total_pages,
				},
			}
		} else {
			const getCategoryIdUsingSlug = await client.getByUID(
				'image_gallery_category',
				category
			)
			const categoryId = getCategoryIdUsingSlug.id
			const videos = await client.getByType('video_gallery', {
				filters: [prismic.filter.at('my.video_gallery.category', categoryId)],
				pageSize: 6,
				page: page,
				orderings: {
					field: 'document.first_publication_date',
					direction: 'desc',
				},
			})
			return {
				props: {
					category: photo_category,
					videos: videos.results,
					totalPages: videos.total_pages,
				},
			}
		}
	} catch (error) {
		// res.status = exception.response.status
		return {
			props: {},
		}
	}
}
