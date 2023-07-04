import React from 'react'
import { useRouter } from 'next/router'
import BlogRight from './BlogRight'
import EachBlog from './EachBlog'
import Link from 'next/link'
import EventCard from './EventCard'
import EachResource from './EachResource'

export default function Blog({
	heading,
	posts,
	totalPages,
	categories,
	link,
	checkEvent,
	isResource,
}) {
	const router = useRouter()
	const currentPage = Number(router.query.page) || 1
	const pathname = router.asPath.split('/page')[0] // doing this to get the accurate pathname
	// so that the component is reuseable for  both the blog page and the category pages

	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	)

	return (
		<div>
			<div
				className="bg-1 bg-theme-"
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h1 className="fw-400 text-white">{heading}</h1>
				</div>
			</div>
			<section className="blog-post-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="row">
								{posts?.map((post) =>
									checkEvent ? (
										<EventCard
											key={post.uid}
											date={post?.data?.date}
											title={post?.data?.title}
											category={post?.data?.category?.slug?.replace(/-/gi, ' ')}
											alt={post?.data?.featured_image?.alt}
											image={post?.data?.featured_image?.url}
											location={post?.data?.location}
											link={`${link}${post?.data?.category?.slug}/${post.uid}`}
										/>
									) : isResource ? (
										<EachResource
											title={post?.data?.title}
											alt={post?.data?.featured_image?.alt}
											image={'/assets/figma/filePlaceholder.jpeg'}
											content={post?.data?.description}
											downloadLink={post?.data?.document?.url}
											documentName={post?.data?.document?.name}
											password={post?.data?.password}
										/>
									) : (
										<EachBlog
											category={post?.data?.category?.slug?.replace(/-/gi, ' ')}
											title={post?.data?.title}
											img={post?.data?.image?.url}
											created_at={post?.first_publication_date}
											alt={post?.data?.image?.alt}
											description={post?.data?.description}
											categoryLink={`${link}${post?.data?.category?.slug}`}
											link={`${link}${post?.data?.category?.slug}/${post.uid}`}
										/>
									)
								)}
							</div>
							<br />
							<br />
							<div className="col-12" bis_skin_checked="1">
								<div className="pagination-area" bis_skin_checked="1">
									{pageNumbers?.map((pageNumber) => (
										<Link
											key={`page_num_${pageNumber}`}
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
											href={`${pathname}/page/${currentPage + 1}`}
											className="next page-numbers"
										>
											<i className="ri-arrow-right-line"></i>
										</Link>
									)}
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<BlogRight categories={categories} link={link} />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
