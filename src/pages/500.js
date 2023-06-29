import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
	return (
		<Layout>
			<Head>
				<script
					async
					defer
					src="https://static.cdn.prismic.io/prismic.js?new=true&repo=tess-website"
				></script>
			</Head>
			<div className="error-area ptb-100">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="error-content">
							<h1 className="font-big">500</h1>
							<h3>Oops! Server Error</h3>
							<p>The page you were looking for could not be found.</p>

							<Link href="/" className="default-btn two">
								Return To Home Page
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
