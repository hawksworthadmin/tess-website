import Link from 'next/link'
import React from 'react'

export default function Header() {
	return (
		<header className="header-area" style={{ zIndex: 40}}>
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
										width={'45'}
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
										<Link href="/" className="nav-link fw-400">
											Home
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/who-we-are" className="nav-link fw-400">
											Who We Are
											{/* <i className="ri-arrow-down-s-line"></i> */}
										</Link>

										{/* <ul className="dropdown-menu">
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
												<a href="accessibility.html" className="nav-link">
													Accessibility
												</a>
											</li>
										</ul> */}
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
											Media Room
											<i className="ri-arrow-down-s-line"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/media-room/press-release"
													className="nav-link"
												>
													News/Press Release
												</Link>
											</li>
											<li className="nav-item">
												<Link
													href="/media-room/video-gallery"
													className="nav-link"
												>
													Video Gallery
												</Link>
											</li>
											<li className="nav-item">
												<Link
													href="/media-room/photo-gallery"
													className="nav-link"
												>
													Photo Gallery
												</Link>
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
												<Link
													href="/publications/fact-sheets"
													className="nav-link"
												>
													Fact Sheets
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/publications/news-letters"
													className="nav-link"
												>
													News Letters
												</Link>
											</li>
											<li className="nav-item">
												<Link
													href="/publications/reports"
													className="nav-link"
												>
													Reports
												</Link>
											</li>
											<li className="nav-item">
												<Link
													href="/publications/blog"
													className="nav-link"
												>
													Blog
												</Link>
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
