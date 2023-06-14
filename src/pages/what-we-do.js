import METADATA from '@/METADATA'
import Layout from '@/components/layout/Layout'
import WhatWeDo from '@/components/pages/WhatWeDo/WhatWeDo'
import Head from 'next/head'
import React from 'react'

export default function _WhatWeDo() {
	return (
		<Layout>
			<Head>
				<title>What We Do | {METADATA.title}</title>
			</Head>
			<WhatWeDo />
		</Layout>
	)
}
