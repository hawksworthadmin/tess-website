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
			<div class="widget-sidebar pl-15" bis_skin_checked="1">
				<div class="sidebar-widget search" bis_skin_checked="1">
					<form class="search-form">
						<input
							class="form-control"
							name="search"
							placeholder="Search..."
							type="text"
							fdprocessedid="f3b8qk"
						/>
						<button class="search-button" type="submit" fdprocessedid="5xtkv">
							<i class="ri-search-line"></i>
						</button>
					</form>
				</div>

				<div class="sidebar-widget categories" bis_skin_checked="1">
					<h3>Categories</h3>

					<ul>
						{sortInAphabeticOrder?.map((category) => (
							<li>
								<Link href={`${link}${category.uid}`}>
									{category?.data?.title}
									<i class="ri-arrow-right-s-line"></i>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* <div class="sidebar-widget tags" bis_skin_checked="1">
					<h3>Tags</h3>

					<ul>
						<li>
							<a href="#">Councillor</a>
						</li>
						<li>
							<a href="#">Culture</a>
						</li>
						<li>
							<a href="#">Job</a>
						</li>
						<li>
							<a href="#">Information</a>
						</li>
						<li>
							<a href="#">Business</a>
						</li>
						<li>
							<a href="#">Citizen</a>
						</li>
						<li>
							<a href="#">Advice</a>
						</li>
						<li>
							<a href="#">Program</a>
						</li>
						<li>
							<a href="#">Naational report</a>
						</li>
					</ul>
				</div> */}

				{/* <div class="sidebar-widget advertizing" bis_skin_checked="1">
					<h3>Advertizing spot</h3>

					<div class="advertizing-img" bis_skin_checked="1">
						<a href="#">
							<img
								src="/assets/images/blog-details/advertizing.jpg"
								alt="Image"
							/>
						</a>
					</div>
				</div> */}
			</div>
		</div>
	)
}
