import React from 'react'

export default function RecentPublication() {
	return (
		<section
			class="blog-area blog-area-two- pt-100 pb-70"
			style={{ backgroundColor: '#F9FAFB' }}
		>
			<div class="container">
				<div class="section-title">
					<h2>Latest news &amp; updates</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						eveniet quod mollitia asperiores ullam dolor corporis. vero nemo
						consectetur
					</p>
				</div>

				<div class="row justify-content-center">
					<EachRelease />
					<EachRelease />
					<EachRelease />
				</div>
			</div>

			<div class="shape blog-shape-1">
				<img src="/assets/images/blog/blog-shape-1.png" alt="Image" />
			</div>

			<div class="shape blog-shape-2">
				<img src="/assets/images/blog/blog-shape-2.png" alt="Image" />
			</div>
		</section>
	)
}

const EachRelease = () => {
	return (
		<div class="col-lg-4 col-md-6">
			<div class="single-blog-box">
				<a href="blog-details.html">
					<img
						src="https://static.foxnews.com/foxnews.com/content/uploads/2019/01/classroom-iStock.jpg"
						alt="Images"
					/>
				</a>

				<div class="blog-content">
					<ul>
						<li>
							<a href="#">
								<i class="ri-user-3-fill"></i>
								Cameron
							</a>
						</li>
						<li>
							<i class="ri-calendar-line"></i>
							February 12, 2021
						</li>
					</ul>
					<h3>
						<a href="blog-details.html">Strengthening School Infrastructure</a>
					</h3>
					<p>
						The importance of proper infrastructure in facilitating effective
						education delivery cannot be over-emphasized.
					</p>
					<a href="blog-details.html" class="read-more">
						Read more
						<i class="ri-arrow-right-s-line"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
