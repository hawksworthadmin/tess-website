import Layout from '@/components/layout/Layout'
import Home from '@/components/pages/Home/Home'
import React from 'react'
import { createClient } from '../../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { locale } from 'moment'
import { NextSeo } from 'next-seo'
import METADATA from '@/METADATA'

export default function index({
	pressReleases,
	factsAndFigures,
	statistics,
	page,
}) {
	console.log(page)
	return (
		<Layout>
			<NextSeo
				title={METADATA.title}
				description={page.data.meta_description || METADATA.description}
			/>
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

	const home_page = await client.getAllByType('home_page')

	return {
		props: {
			page: home_page[0],
		},
		revalidate: 60,
	}
}
