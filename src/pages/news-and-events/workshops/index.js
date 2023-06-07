import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'
import { createClient } from '../../../../prismicio'

export default function Event({ pressReleases, totalPages, categories }) {
	return (
		<Layout>
			<Blog
				heading={'Workshops'}
				// posts={pressReleases}
				// totalPages={totalPages}
				// categories={categories}
				link={'/news-and-events/workshops/'}
			/>
		</Layout>
	)
}
