import React from 'react'
import EachVideo from './EachVideo'
import { Tabs } from '../PhotoGallery/PhotoGallery'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function VideoGallery({ tabs_category, videos, totalPages }) {
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	)
	const router = useRouter()
	const currentPage = Number(router.query.page) || 1
	const pathname = router.asPath.split('/page')[0]

	return (
		<div>
			<div
				className="bg-1 bg-theme-"
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h1 className="fw-400 text-white">Video Gallery</h1>
				</div>
			</div>
			<section className="project-area pt-100 pb-70">
				<div className="container">
					<Tabs
						tabs_category={tabs_category}
						link={'/media-room/video-gallery'}
					/>
					<div className="row">
						{videos?.map((video, index) => (
							<EachVideo
								key={`video_${index}`}
								thumbnail={video?.data?.thumbnail_image?.url}
								link={`/media-room/video-gallery/${video.data?.category?.slug}/${video?.uid}`}
								title={video?.data?.title}
								alt={video?.data?.thumbnail_image?.alt || 'image'}
							/>
						))}
					</div>
				</div>
				<br />
				<br />
				<div className="col-12" bis_skin_checked="1">
					<div className="pagination-area" bis_skin_checked="1">
						{pageNumbers?.map((pageNumber, index) => (
							<Link
								key={`video_link_${index}`}
								className={`page-numbers ${
									currentPage == pageNumber && 'current'
								}`}
								href={`${pathname}/page/${pageNumber}`}
							>
								{pageNumber}
							</Link>
						))}

						{currentPage < totalPages && (
							<Link
								href={`${pathname}page/${currentPage + 1}`}
								className="next page-numbers"
							>
								<i className="ri-arrow-right-line"></i>
							</Link>
						)}
					</div>
				</div>
			</section>
		</div>
	)
}
