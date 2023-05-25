import React from 'react'

export default function EachBlog() {
	return (
		<div className="col-lg-6 col-md-6" bis_skin_checked="1" data-aos="fade-up">
			<div className="single-blog-box" bis_skin_checked="1">
				<a href="blog-details.html">
					<img src="/assets/images/blog/blog-1.jpg" alt="Images" />
				</a>

				<div className="blog-content" bis_skin_checked="1">
					<ul>
						<li>
							<a href="#">
								<i className="ri-user-3-fill"></i>
								Cameron
							</a>
						</li>
						<li>
							<i className="ri-calendar-line"></i>
							February 12, 2021
						</li>
					</ul>
					<h3 className="fw-500">
						<a href="blog-details.html">Responds to citizens advice</a>
					</h3>
					<p>
						Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
						Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo,
						lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor
						sit amet, consectetur.
					</p>
					<a href="blog-details.html" className="read-more">
						Read Post
						<i className="ri-arrow-right-s-line"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
