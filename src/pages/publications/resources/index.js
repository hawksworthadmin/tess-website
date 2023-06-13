import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

const index = () => {
	return (
		<Layout>
			<Blog
				heading={'Resources'}
				// posts={reports}
				// link={'/publications/reports/'}
				// totalPages={totalPages}
				// categories={categories}
			/>
		</Layout>
	)
}

export default index
