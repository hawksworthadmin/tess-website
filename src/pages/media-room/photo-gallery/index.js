import Layout from '@/components/layout/Layout'
import PhotoGallery from '@/components/pages/PhotoGallery/PhotoGallery'
import React from 'react'
import * as prismic from '@prismicio/client'
import Head from 'next/head'
import METADATA from '@/METADATA'

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

export const getServerSideProps = async ({ query, res }) => {
	const page = Number(query.page) || 1
	const category = query.category || 'all'

	try {
		const client = prismic.createClient(process.env.PRISMIC_API_URL)

		const photo_category = await client.getAllByType('image_gallery_category')

		if (category == 'all') {
			const photos = await client.getByType('image_gallery', {
				pageSize: 9,
				page: page,
				orderings: {
					field: 'document.first_publication_date',
					direction: 'desc',
				},
			})
			return {
				props: {
					category: photo_category,
					photos: photos.results,
					totalPages: photos.total_pages,
				},
			}
		} else {
			const getCategoryIdUsingSlug = await client.getByUID(
				'image_gallery_category',
				category
			)
			const categoryId = getCategoryIdUsingSlug.id
			const photos = await client.getByType('image_gallery', {
				filters: [prismic.filter.at('my.image_gallery.category', categoryId)],
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
					photos: photos.results,
					totalPages: photos.total_pages,
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
