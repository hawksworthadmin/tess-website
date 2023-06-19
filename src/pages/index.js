import Layout from '@/components/layout/Layout'
import Home from '@/components/pages/Home/Home'
import React from 'react'
import { createClient } from '../../prismicio'

export default function index({ pressReleases, factsAndFigures }) {
	return (
		<Layout>
			<Home factsAndFigures={factsAndFigures} latestNews={pressReleases} />
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

		const factsAndFigures = await client.getByType('fact_figure', {
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		return {
			props: {
				pressReleases: pressReleases.results,
				factsAndFigures: factsAndFigures.results,
			},
		}
	} catch (error) {
		return {
			props: {
				pressReleases: [],
				factsAndFigures: [],
			},
		}
	}
}
