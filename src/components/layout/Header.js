import React from 'react'

export default function Header() {
	return (
		<header className="header-area">
			{/* <div className="top-header">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<ul className="header-left-content">
								<li>
									<a href="mailto:info@wikin.com">
										<i className="ri-mail-open-fill"></i>
										info@wikin.com
									</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-6 col-md-6">
							<div className="header-right-content">
								<ul className="my-account">
									<li>
										<a href="#" className="dropdown-control">
											<i className="ri-user-line"></i>
											My account
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="my-account-link">
											<li>
												<a
													href="#"
													data-bs-toggle="modal"
													data-bs-target="#staticBackdrop"
												>
													Log In
												</a>
											</li>
											<li>
												<a
													href="#"
													data-bs-toggle="modal"
													data-bs-target="#staticBackdrop-2"
												>
													Register
												</a>
											</li>
										</ul>
									</li>
								</ul>

								<div className="languages-switcher">
									<i className="ri-global-line"></i>
									<select>
										<option value="1">English</option>
										<option value="2">العربيّة</option>
										<option value="3">Deutsch</option>
										<option value="4">Português</option>
										<option value="5">简体中文</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className="navbar-area">
				<div className="mobile-responsive-nav">
					<div className="container">
						<div className="mobile-responsive-menu">
							<div className="logo">
								<a href="index.html">
									<img
										src="https://admaa.b-cdn.net/wp-content/uploads/2020/06/nigeria-coats-of-arms-decal-3.jpg"
										alt="logo"
										width={'60'}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="desktop-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md navbar-light">
							<a className="navbar-brand" href="index.html">
								<img
									src="https://admaa.b-cdn.net/wp-content/uploads/2020/06/nigeria-coats-of-arms-decal-3.jpg"
									alt="logo"
									width={'80'}
								/>
							</a>

							<div
								className="collapse navbar-collapse mean-menu"
								id="navbarSupportedContent"
								style={{ display: 'block' }}
							>
								<ul className="navbar-nav">
									<li className="nav-item">
										<a href="#" className="nav-link active fw-400">
											Home
										</a>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link fw-400">
											Who We Are
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="about.html" className="nav-link">
													What We Do
												</a>
											</li>
											<li className="nav-item">
												<a href="councilor.html" className="nav-link">
													Councilor
												</a>
											</li>
											<li className="nav-item">
												<a href="#" className="nav-link fw-400">
													Events
													<i className="ri-arrow-down-s-line"></i>
												</a>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<a href="events.html" className="nav-link">
															Events
														</a>
													</li>
													<li className="nav-item">
														<a href="event-details.html" className="nav-link">
															Event details
														</a>
													</li>
												</ul>
											</li>
											<li className="nav-item">
												<a href="galleries.html" className="nav-link">
													Galleries
												</a>
											</li>
											<li className="nav-item">
												<a href="faq.html" className="nav-link">
													FAQ
												</a>
											</li>
											<li className="nav-item">
												<a href="#" className="nav-link fw-400">
													User
													<i className="ri-arrow-down-s-line"></i>
												</a>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<a href="my-account.html" className="nav-link">
															My account
														</a>
													</li>
													<li className="nav-item">
														<a href="log-in.html" className="nav-link">
															Log in
														</a>
													</li>
													<li className="nav-item">
														<a href="register.html" className="nav-link">
															Register
														</a>
													</li>
													<li className="nav-item">
														<a href="book-now.html" className="nav-link">
															Book now
														</a>
													</li>
												</ul>
											</li>
											<li className="nav-item">
												<a href="accessibility.html" className="nav-link">
													Accessibility
												</a>
											</li>
											<li className="nav-item">
												<a href="privacy-policy.html" className="nav-link">
													Privacy policy
												</a>
											</li>
											<li className="nav-item">
												<a href="terms-conditions.html" className="nav-link">
													Terms &amp; conditions
												</a>
											</li>
											<li className="nav-item">
												<a href="coming-soon.html" className="nav-link">
													Coming soon
												</a>
											</li>
											<li className="nav-item">
												<a href="404.html" className="nav-link">
													404 Page
												</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link fw-400">
											What We Do
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="projects.html" className="nav-link">
													Projects
												</a>
											</li>
											<li className="nav-item">
												<a href="project-details.html" className="nav-link">
													Project details
												</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link fw-400">
											Media
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="services.html" className="nav-link">
													Services
												</a>
											</li>
											<li className="nav-item">
												<a href="individual-services.html" className="nav-link">
													Individual services
												</a>
											</li>
											<li className="nav-item">
												<a href="business-services.html" className="nav-link">
													Business services
												</a>
											</li>
											<li className="nav-item">
												<a href="government-services.html" className="nav-link">
													Government services
												</a>
											</li>
											<li className="nav-item">
												<a href="services-details.html" className="nav-link">
													Services details
												</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link fw-400">
											Publications
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="blog.html" className="nav-link">
													Blog
												</a>
											</li>

											<li className="nav-item">
												<a href="blog-details.html" className="nav-link">
													Blog details
												</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="contact.html" className="nav-link fw-400">
											Signup
										</a>
									</li>
								</ul>

								<div className="others-options">
									<ul>
										<li>
											<button
												className="default-btn register"
												style={{ borderRadius: '32px' }}
												type="submit"
											>
												Login
											</button>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>

				<div className="others-option-for-responsive">
					<div className="container">
						<div className="dot-menu">
							<div className="inner">
								<div className="circle circle-one"></div>
								<div className="circle circle-two"></div>
								<div className="circle circle-three"></div>
							</div>
						</div>

						<div className="container">
							<div className="option-inner">
								<div className="others-option justify-content-center d-flex align-items-center">
									<ul>
										<li>
											<div className="option-item">
												<i className="search-btn ri-search-line"></i>
												<i className="close-btn ri-close-line"></i>

												<div className="search-overlay search-popup">
													<div className="search-box">
														<form className="search-form">
															<input
																className="search-input"
																name="search"
																placeholder="Search"
																type="text"
															/>

															<button className="search-button" type="submit">
																<i className="ri-search-line"></i>
															</button>
														</form>
													</div>
												</div>
											</div>
										</li>
										<li>
											<a href="tel:+1-(514)-312-5678" className="call">
												<i className="ri-phone-fill"></i>
												+1 (514) 312-5678
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
