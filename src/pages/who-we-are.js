import METADATA from '@/METADATA'
import Layout from '@/components/layout/Layout'
import WhoWeAre from '@/components/pages/WhoWeAre/WhoWeAre'
import Head from 'next/head'
import React from 'react'
import { createClient } from '../../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

export default function _WhoWeAre({ page }) {
	console.log(page)
	return (
		<Layout>
			<Head>
				<title>Who We Are | {METADATA.title}</title>
			</Head>
			{/* <WhoWeAre /> */}
			<SliceZone slices={page.data.slices} components={components} />
		</Layout>
	)
}

export const getStaticProps = async ({ previewData }) => {
	const client = createClient(previewData)
	const page = await client.getAllByType('who_we_are')
	return {
		props: {
			page: page[0],
		},
		revalidate: 60,
	}
}
