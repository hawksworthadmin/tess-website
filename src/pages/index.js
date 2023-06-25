import Layout from '@/components/layout/Layout'
import Home from '@/components/pages/Home/Home'
import React from 'react'
import { createClient } from '../../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { locale } from 'moment'

export default function index({
	pressReleases,
	factsAndFigures,
	statistics,
	page,
}) {
	console.log(page)
	return (
		<Layout>
			{/* <Home
				factsAndFigures={factsAndFigures}
				latestNews={pressReleases}
				statistics={statistics}
			/> */}
			<SliceZone slices={page.data.slices} components={components} />
		</Layout>
	)
}

export const getStaticProps = async ({ params, previewData }) => {
	const client = createClient(previewData)

	const pressReleases = await client.getByType('press_release', {
		pageSize: 3,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	const home_page = await client.getAllByType('home_page')
	console.log(home_page)

	const factsAndFigures = await client.getByType('fact_figure', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})
	const statistics = await client.getByType('statistics', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		props: {
			pressReleases: pressReleases.results,
			factsAndFigures: factsAndFigures.results,
			statistics: statistics.results,
			page: home_page[0],
		},
		revalidate: 60,
	}
}
