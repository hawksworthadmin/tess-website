import React from 'react'
import BlogSearch from './BlogSearch'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SearchResults = ({
	blogPosts,
	press_release,
	video_gallery,
	image_gallery,
	query,
	totalPages,
	events,
	reports,
	total_result,
}) => {
	const router = useRouter()
	const currentPage = Number(router.query.page) || 1
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	)

	const pathname = router.asPath.includes(query)
		? `${router.asPath.split('&')[0]}&`
		: `${router.asPath.split('?')[0]}?`
	return (
		<main className="container pb-100">
			<h3 style={{ fontSize: '24px' }}>Search results</h3>
			{total_result > 0 ? (
				<>
					{blogPosts?.length > 0 && (
						<BlogSearch
							posts={blogPosts}
							title={'Blog'}
							queryWord={query}
							link={'/publications/blog'}
						/>
					)}
					{press_release.length > 0 && (
						<BlogSearch
							posts={press_release}
							title={'Press Release'}
							queryWord={query}
							link={'/news-and-events/press-release'}
						/>
					)}
					{events.length > 0 && (
						<BlogSearch
							posts={events}
							title={'Events'}
							queryWord={query}
							link={'/news-and-events/events'}
						/>
					)}
					{reports.length > 0 && (
						<BlogSearch posts={reports} title={'Reports'} queryWord={query} />
					)}
					{video_gallery.length > 0 && (
						<BlogSearch
							posts={video_gallery}
							title={'Videos'}
							queryWord={query}
						/>
					)}
					{image_gallery.length > 0 && (
						<BlogSearch
							posts={image_gallery}
							title={'Photos'}
							queryWord={query}
						/>
					)}

					<div
						style={{ marginTop: 20 }}
						className="col-12"
						bis_skin_checked="1"
					>
						<div className="pagination-area" bis_skin_checked="1">
							{pageNumbers?.map((pageNumber) => (
								<Link
									className={`page-numbers ${
										currentPage == pageNumber && 'current'
									}`}
									href={`${pathname}page=${pageNumber}`}
								>
									{pageNumber}
								</Link>
							))}

							{currentPage < totalPages && (
								<Link
									href={`${pathname}page=${currentPage + 1}`}
									className="next page-numbers"
								>
									<i className="ri-arrow-right-line"></i>
								</Link>
							)}
						</div>
					</div>
				</>
			) : (
				<div
					style={{
						height: '30vh',
						display: 'grid',
						placeItems: 'center',
						fontWeight: '600',
					}}
				>
					<p>No result found for "{query}"</p>
				</div>
			)}
		</main>
	)
}

export default SearchResults
