import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
	const TheLogo = ({ size }) => {
		return (
			<div className="d-flex align-items-center" style={{ gap: 10 }}>
				<img
					src="https://admaa.b-cdn.net/wp-content/uploads/2020/06/nigeria-coats-of-arms-decal-3.jpg"
					alt="logo"
					width={size || 70}
				/>
				<div
					className="d-flex text-theme flex-column"
					style={{ maxWidth: '200px' }}
				>
					<span style={{ fontWeight: 600 }}>BESDA AF-TESS</span>
					<span style={{ fontSize: '10px' }}>
						Better Education Service Delivery For All Financing
						<br /> Transforming Education Systems at State Level
					</span>
				</div>
			</div>
		)
	}
	return (
		<header className="header-area" style={{ zIndex: 40 }}>
			<div className="navbar-area">
				<div className="mobile-responsive-nav">
					<div className="container">
						<div className="mobile-responsive-menu mean-container">
							<MobileMenu />
							<div className="logo-">
								<a href="index.html">
									<TheLogo />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="desktop-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md navbar-light">
							<a className="navbar-brand" href="index.html">
								<TheLogo />
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
												<Link href="/publications/reports" className="nav-link">
													Reports
												</Link>
											</li>
											<li className="nav-item">
												<Link href="/publications/blog" className="nav-link">
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

const MobileMenu = () => {
	const [show, setShow] = useState(false)
	return (
		<div className="mean-bar" bis_skin_checked="1">
			<a
				onClick={() => setShow(!show)}
				href="#nav"
				className="meanmenu-reveal"
				style={{ right: 0, left: 'auto;' }}
			>
				<span>
					<span>
						<span></span>
					</span>
				</span>
			</a>
			<nav className="mean-nav">
				<ul className="navbar-nav" style={show ? { display: 'none' } : null}>
					<li className="nav-item">
						<a href="#" className="nav-link active">
							Home
							<i className="ri-arrow-down-s-line"></i>
						</a>

						<ul className="dropdown-menu" style={{ display: 'none' }}>
							<li className="nav-item">
								<a href="index.html" className="nav-link">
									Home one
								</a>
							</li>
							<li className="nav-item">
								<a href="index-2.html" className="nav-link active">
									Home two
								</a>
							</li>
							<li className="nav-item">
								<a href="index-3.html" className="nav-link">
									Home three
								</a>
							</li>
						</ul>
						<a className="mean-expand" href="#" style={{ fontSize: '18px' }}>
							+
						</a>
					</li>

					<li className="nav-item">
						<a href="#" className="nav-link">
							Pages
							<i className="ri-arrow-down-s-line"></i>
						</a>

						<ul className="dropdown-menu" style={{ display: 'none' }}>
							<li className="nav-item">
								<a href="about.html" className="nav-link">
									About
								</a>
							</li>
							<li className="nav-item">
								<a href="councilor.html" className="nav-link">
									Councilor
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Events
									<i className="ri-arrow-down-s-line"></i>
								</a>

								<ul className="dropdown-menu" style={{ display: 'none' }}>
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
								<a
									className="mean-expand"
									href="#"
									style={{ fontSize: '18px' }}
								>
									+
								</a>
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
								<a href="#" className="nav-link">
									User
									<i className="ri-arrow-down-s-line"></i>
								</a>

								<ul className="dropdown-menu" style={{ display: 'none' }}>
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
								<a
									className="mean-expand"
									href="#"
									style={{ fontSize: '18px' }}
								>
									+
								</a>
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
						<a className="mean-expand" href="#" style={{ fontSize: '18px' }}>
							+
						</a>
					</li>

					<li className="nav-item">
						<a href="#" className="nav-link">
							Projects
							<i className="ri-arrow-down-s-line"></i>
						</a>

						<ul className="dropdown-menu" style={{ display: 'block' }}>
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
						<a className="mean-expand" href="#" style={{ fontSize: '18px' }}>
							+
						</a>
					</li>

					<li className="nav-item">
						<a href="#" className="nav-link">
							Services
							<i className="ri-arrow-down-s-line"></i>
						</a>

						<ul className="dropdown-menu" style={{ display: 'none' }}>
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
						<a className="mean-expand" href="#" style={{ fontSize: '18px' }}>
							+
						</a>
					</li>

					<li className="nav-item">
						<a href="#" className="nav-link">
							Blog
							<i className="ri-arrow-down-s-line"></i>
						</a>

						<ul className="dropdown-menu" style={{ display: 'none' }}>
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
						<a className="mean-expand" href="#" style={{ fontSize: '18px' }}>
							+
						</a>
					</li>

					<li className="nav-item">
						<a href="contact.html" className="nav-link">
							Contact
						</a>
					</li>
				</ul>

				<div className="others-options" bis_skin_checked="1">
					<ul style={{ display: 'none' }}>
						<li>
							<div className="option-item" bis_skin_checked="1">
								<i className="search-btn ri-search-line"></i>
								<i className="close-btn ri-close-line"></i>

								<div
									className="search-overlay search-popup"
									bis_skin_checked="1"
								>
									<div className="search-box" bis_skin_checked="1">
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
						<li className="mean-last">
							<a href="tel:+1-(514)-312-5678" className="call">
								<i className="ri-phone-fill"></i>
								+1 (514) 312-5678
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
