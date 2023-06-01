import React from 'react'

export default function Footer() {
	return (
		<>
			<footer
				className="footer-area pt-100 pb-70"
				style={{ backgroundColor: '#101828' }}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget single-bg">
								<a href="index.html" className="logo">
									<img
										src="https://admaa.b-cdn.net/wp-content/uploads/2020/06/nigeria-coats-of-arms-decal-3.jpg"
										alt="Image"
										width={50}
										className="rounded-full"
									/>
								</a>

								<p>
									{`The TESS program aims to improve education by enhancing teacher quality, curriculum and assessment systems, school infrastructure, and community engagement.`}
								</p>

								<ul className="social-icon">
									<li>
										<a href="https://www.facebook.com/" target="_blank">
											<i className="ri-facebook-fill"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/" target="_blank">
											<i className="ri-instagram-line"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="ri-twitter-fill"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="ri-linkedin-box-fill"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<h3>Get in touch</h3>

								<ul className="address">
									<li>
										<i className="ri-map-pin-fill"></i>
										Federal Coordinating Secretariat, Federal Ministry of
										Education Annex 245 Samuel Ademulegun Avenue, CBD 900103,
										Abuja, <br /> NV 89108
									</li>
									<li>
										<i className="ri-mail-open-fill"></i>
										<a href="mailto:info@wikin.com">info@tess.com</a>
									</li>
									<li className="location">
										<i className="ri-phone-fill"></i>
										<a href="tel:+1-(514)-312-5678">+234 12345567</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<h3>Quick link</h3>

								<ul className="import-link">
									<li>
										<a href="government-services.html">Photo Gallery</a>
									</li>
									<li>
										<a href="terms-conditions.html">Success Stories</a>
									</li>
									<li>
										<a href="privacy-policy.html">Reports</a>
									</li>
									<li>
										<a href="accessibility.html">Fact Sheets</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget newsletter">
								<h3>Newsletter</h3>
								<p>Sign up for our weekly councils newsletter</p>

								<form
									className="newsletter-form"
									data-toggle="validator"
									novalidate="true"
								>
									<input
										type="email"
										className="form-control"
										placeholder="hello@wikin.com"
										name="EMAIL"
										required=""
										autocomplete="off"
									/>

									<button
										className="subscribe disabled"
										type="submit"
										style={{ pointerEvents: `all; cursor: pointer` }}
									>
										Subscribe
										<i className="ri-arrow-right-line"></i>
									</button>

									<div id="validator-newsletter" className="form-result"></div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="shape footer-shape-1">
					<img src="/assets/images/footer-shape-1.png" alt="Image" />
				</div>

				<div className="shape footer-shape-2">
					<img src="/assets/images/footer-shape-2.png" alt="Image" />
				</div>
			</footer>
			<div class="copy-right-area" style={{ backgroundColor: '#101828' }}>
				<div class="container">
					<p>
						Copyright <i class="ri-copyright-line"></i>
						{new Date().getFullYear()}. Tess. All rights reserved{' '}
					</p>
				</div>
			</div>
		</>
	)
}
