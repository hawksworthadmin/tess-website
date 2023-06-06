import Layout from '@/components/layout/Layout'
import Home from '@/components/pages/Home/Home'
import React from 'react'
import { createClient } from '../../prismicio'

export default function index({ pressReleases }) {
	return (
		<Layout>
			<Home latestNews={pressReleases} />
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData }) => {
	const client = createClient(previewData)

	try {
		const pressReleases = await client.getByType('press_release', {
			pageSize: 3,
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		return {
			props: {
				pressReleases: pressReleases.results,
			},
		}
	} catch (error) {
		return {
			props: {
				pressReleases: [],
			},
		}
	}
}
