import React from 'react'
import { useRouter } from 'next/router'
import BlogRight from './BlogRight'
import EachBlog from './EachBlog'
import Link from 'next/link'

export default function Blog({ heading, blogposts, totalPages }) {
	const router = useRouter()
	const currentPage = router.query.page || 1
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
					<h3 className="fw-400 text-white">{heading}</h3>
				</div>
			</div>
			<section className="blog-post-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="row">
								{blogposts &&
									blogposts.map((blogpost) => <EachBlog blog={blogpost} />)}
							</div>
							<br />
							<br />
							<div className="col-12" bis_skin_checked="1">
								<div className="pagination-area" bis_skin_checked="1">
									{pageNumbers.map((pageNumber) => (
										<Link
											className="page-numbers"
											href={`/publications/blog?page=${pageNumber}`}
										>
											{pageNumber}
										</Link>
									))}

									{currentPage < totalPages && (
										<Link
											href={`/publications/blog?page=${currentPage + 1}`}
											className="next page-numbers"
										>
											<i className="ri-arrow-right-line"></i>
										</Link>
									)}
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<BlogRight />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
