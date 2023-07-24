import Link from 'next/link'
import React from 'react'

export default function BlogRight({ categories, link }) {
	// Prismic does not support alphabetic order sorting yet
	// This will sort the categories manually in alphabetic order
	const sortInAphabeticOrder = categories?.sort((a, b) => {
		const titleA = a?.data?.title.toLowerCase()
		const titleB = b?.data?.title.toLowerCase()

		if (titleA < titleB) {
			return -1
		} else if (titleA > titleB) {
			return 1
		}

		return 0
	})

	return (
		<div bis_skin_checked="1">
			<div className="widget-sidebar pl-15" bis_skin_checked="1">
				<div className="sidebar-widget categories" bis_skin_checked="1">
					<h3>Categories</h3>

					<ul>
						{sortInAphabeticOrder?.map((category) => (
							<li key={category.uid}>
								<Link href={`${link}${category.uid}`}>
									{category?.data?.title}
									<i className="ri-arrow-right-s-line"></i>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
