import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import React from 'react'

export default function Reports() {
	return (
		<Layout>
			<Blog heading={'Reports'} blogposts={[]} />
		</Layout>
	)
}
