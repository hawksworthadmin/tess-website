import METADATA from '@/METADATA'
import Layout from '@/components/layout/Layout'
import WhoWeAre from '@/components/pages/WhoWeAre/WhoWeAre'
import Head from 'next/head'
import React from 'react'

export default function _WhoWeAre() {
  return (
		<Layout>
			<Head>
				<title>Who We Are | {METADATA.title}</title>
			</Head>
			<WhoWeAre />
		</Layout>
	)
}
