import Layout from '@/components/layout/Layout'
import BlogRight from '@/components/pages/Blog/BlogRight'
import React from 'react'

export default function BlogDetails() {
	return (
		<Layout>
			<div>
				<div
					className="bg-1 bg-theme-"
					style={{ height: '112px', backgroundColor: '#12B76A' }}
				>
					<div className="container d-flex flex-column justify-content-center h-100">
						<h3 className="fw-400 text-white">The Blog Title</h3>
					</div>
				</div>
				<section className="blog-details-area ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<div className="blog-details-content">
									<div className="blog-details-img" bis_skin_checked="1">
										<img
											src="/assets/images/blog-details/blog-details.jpg"
											alt="Image"
										/>
									</div>
									<div className="blog-top-content">
										<div class="news-content" bis_skin_checked="1">
											<ul class="admin">
												<li>
													<a href="#">
														<i class="ri-user-fill"></i>
														Andrew lawson
													</a>
												</li>

												<li>
													<i class="ri-calendar-line"></i>
													21 February
												</li>

												<li>
													<a href="#">
														<i class="ri-question-answer-fill"></i>
														(03) comments
													</a>
												</li>
											</ul>

											<h3>The Post Title</h3>

											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu
												fugiat nulla pariatur commodo. Lorem ipsum dolor sit
												amet consectetur adipisicing elit. Voluptatem ex
												necessitatibus dolor placeat fuga deleniti doloremque?
												Ratione officia quia aliquam possimus Lorem ipsum dolor
												sit amet, consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua.
											</p>

											<p>
												Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
												Sed ut perspiciatis unde omnis iste natus error sit
												voluptatem accusantium doloremque laudantium, totam rem
												aperiam, eaque ipsa quae ab illo inventore veritatis et
												quasi architecto beatae vitae dicta sunt explicabo. Nemo
												enim ipsam voluptatem quia voluptas sit aspernatur aut
												odit aut Duis aute irure dolor in reprehenderit in
												voluptate velit esse cillum dolore eu fugiat nulla
												pariatur.
											</p>

											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu
												fugiat nulla pariatur commodo. Lorem ipsum dolor sit
												amet consectetur adipisicing elit. Voluptatem ex
												necessitatibus dolor placeat fuga deleniti doloremque?
												Ratione officia quia aliquam possimus Lorem ipsum dolor
												sit amet, consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua.
											</p>
										</div>
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
		</Layout>
	)
}
