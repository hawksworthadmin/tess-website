import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'
import Head from 'next/script'

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
							<img src="/assets/images/404.jpg" alt="Image" />
							<h3>Oops! Page Not Found</h3>
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
