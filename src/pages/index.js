import Layout from '@/components/layout/Layout'
import Home from '@/components/pages/Home/Home'
import React from 'react'
import { createClient } from '../../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { locale } from 'moment'
import { NextSeo } from 'next-seo'
import METADATA from '@/METADATA'
import Head from 'next/head'

export default function index({ page }) {
	return (
		<Layout>
			<Head>
				<title>{METADATA.title}</title>
				<meta
					name="description"
					content={`${page.data.meta_description || METADATA.description}`}
				/>
			</Head>

			<SliceZone slices={page.data.slices} components={components} />
		</Layout>
	)
}

export const getStaticProps = async ({ params, previewData }) => {
	const client = createClient({ previewData })

	const home_page = await client.getAllByType('home_page', {
		fetchLinks: ['newsletter.link'],
	})

	return {
		props: {
			page: home_page[0],
		},
		revalidate: 60,
	}
}
