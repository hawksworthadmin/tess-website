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
									<img src="assets/images/white-logo.png" alt="Image" />
								</a>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna.
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
										2976 Sunrise road las vegas, <br /> NV 89108
									</li>
									<li>
										<i className="ri-mail-open-fill"></i>
										<a href="mailto:info@wikin.com">info@wikin.com</a>
									</li>
									<li className="location">
										<i className="ri-phone-fill"></i>
										<a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<h3>Quick link</h3>

								<ul className="import-link">
									<li>
										<a href="government-services.html">Government service</a>
									</li>
									<li>
										<a href="terms-conditions.html">Terms &amp; conditions</a>
									</li>
									<li>
										<a href="privacy-policy.html">Privacy policy</a>
									</li>
									<li>
										<a href="accessibility.html">Accessibility</a>
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
					<img src="assets/images/footer-shape-1.png" alt="Image" />
				</div>

				<div className="shape footer-shape-2">
					<img src="assets/images/footer-shape-2.png" alt="Image" />
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
