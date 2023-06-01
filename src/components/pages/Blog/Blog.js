import React from 'react'
import BlogRight from './BlogRight'
import EachBlog from './EachBlog'

export default function Blog({ heading, blogposts }) {
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
								{/* <EachBlog />
								<EachBlog />
								<EachBlog />
								<EachBlog />
								<EachBlog />
								<EachBlog /> */}

								{blogposts.map((blogpost) => (
									<EachBlog blog={blogpost.data} />
								))}
							</div>
							<br />
							<br />
							<div className="col-12" bis_skin_checked="1">
								<div className="pagination-area" bis_skin_checked="1">
									<span className="page-numbers current" aria-current="page">
										1
									</span>
									<a href="#" className="page-numbers">
										2
									</a>
									<a href="#" className="page-numbers">
										3
									</a>

									<a href="#" className="next page-numbers">
										<i className="ri-arrow-right-line"></i>
									</a>
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
