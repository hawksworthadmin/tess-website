import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'
import * as prismic from '@prismicio/client'
import { createClient } from '../../../prismicio'
import SearchResults from '@/components/pages/Search/SearchResults'
import METADATA from '@/METADATA'
import Head from 'next/head'

const index = ({
	query,
	blogPosts,
	press_release,
	video_gallery,
	image_gallery,
	totalPages,
	events,
	reports,
	total_result,
}) => {
	return (
		<Layout query={query}>
			<Head>
				<title>Search | {METADATA.title}</title>
			</Head>
			<SearchResults
				blogPosts={blogPosts}
				press_release={press_release}
				video_gallery={video_gallery}
				image_gallery={image_gallery}
				query={query}
				totalPages={totalPages}
				reports={reports}
				events={events}
				total_result={total_result}
			/>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, query }) => {
	const searchQuery = query.query || ''
	const page = Number(query.page) || 1

	const client = createClient(previewData)

	const searchResults = await client.get({
		filters: [
			prismic.filter.any('document.type', [
				'blopgpost',
				'video_gallery',
				'image_gallery',
				'press_release',
				'report',
				'event',
			]),
			prismic.filter.fulltext('document', searchQuery),
		],
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
		pageSize: 10,
		page: page,
	})

	const blogPosts =
		searchResults.results?.filter((post) => post?.type == 'blopgpost') || []
	const press_release =
		searchResults.results?.filter((post) => post?.type == 'press_release') || []
	const video_gallery =
		searchResults.results?.filter((post) => post?.type == 'video_gallery') || []
	const image_gallery =
		searchResults.results?.filter((post) => post?.type == 'image_gallery') || []
	const events =
		searchResults.results?.filter((post) => post?.type == 'event') || []
	const reports =
		searchResults.results?.filter((post) => post?.type == 'report') || []

	return {
		props: {
			query: searchQuery,
			blogPosts,
			press_release,
			video_gallery,
			image_gallery,
			reports,
			events,
			totalPages: searchResults.total_pages,
			total_result: searchResults.total_results_size,
		},
	}
}

export default index
