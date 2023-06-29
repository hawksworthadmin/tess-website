import React from 'react'
import EachPhoto from './EachPhoto'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PhotoGallery({ tabs_category, photos, totalPages }) {
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	)
	const router = useRouter()
	const currentPage = Number(router.query.page) || 1
	const pathname = router.asPath.includes('category')
		? `${router.asPath.split('&')[0]}&`
		: `${router.asPath.split('?')[0]}?`

	return (
		<div>
			<div
				className="bg-1 bg-theme-"
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h3 className="fw-400 text-white">Image Gallery</h3>
				</div>
			</div>
			<section className="gallery-area gallery-popup pt-100 pb-70">
				<div className="container">
					<Tabs
						tabs_category={tabs_category}
						link={'/media-room/photo-gallery'}
					/>
					<div className="shorting">
						<div className="row">
							{photos?.map((photo) => (
								<EachPhoto
									img={photo?.data?.image?.url}
									content={photo?.data?.content}
									alt={photo?.data?.image?.alt}
								/>
							))}
						</div>
					</div>
					<br />
					<br />
					<div className="col-12" bis_skin_checked="1">
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
									href={`${pathname}page==${currentPage + 1}`}
									className="next page-numbers"
								>
									<i className="ri-arrow-right-line"></i>
								</Link>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

// Am sharing this component with the VideoGallery
export const Tabs = ({ tabs_category, link }) => {
	const router = useRouter()
	const categoryPath = router.query.category || 'all'

	return (
		<div className="row" bis_skin_checked="1">
			<div className="col-lg-12" bis_skin_checked="1">
				<div
					className="shorting-menu d-flex image_scroll_bar"
					style={{
						overflowX: 'auto',
					}}
					bis_skin_checked="1"
				>
					<Link
						href={`${link}`}
						className={`filter ${categoryPath == 'all' && 'active'}`}
						data-filter="all"
						fdprocessedid="03j22"
					>
						All
					</Link>
					{tabs_category?.map((category) => (
						<Link
							href={`${link}/${category?.uid}`}
							className={`filter  ${categoryPath == category?.uid && 'active'}`}
							data-filter=".business"
							fdprocessedid="r0rmbc"
						>
							{category?.data?.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
