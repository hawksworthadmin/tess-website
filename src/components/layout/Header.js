import Link from 'next/link'
import React, { useState } from 'react'

export const navLinks = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Who We Are',
		url: '/who-we-are',
	},
	{
		name: 'What We Do',
		url: '/what-we-do',
	},
	{
		name: 'Media Room',
		children: [
			{
				name: 'New/Press Releases',
				url: '/media-room/press-release',
			},
			{
				name: 'Video Gallery',
				url: '/media-room/video-gallery',
			},
			{
				name: 'Photo Gallery',
				url: '/media-room/photo-gallery',
			},
		],
	},
	{
		name: 'Publications',
		children: [
			{
				name: 'Fact sheets',
				url: '/publications/fact-sheets',
			},
			{
				name: 'News Letters',
				url: '/publications/news-letters',
			},
			{
				name: 'Reports',
				url: '/publications/reports',
			},
			{
				name: 'Blog',
				url: '/publications/blog',
			},
		],
	},
]

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
								<Link href="/">
									<TheLogo />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="desktop-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md navbar-light">
							<Link className="navbar-brand" href="/">
								<TheLogo />
							</Link>

							<div
								className="collapse navbar-collapse mean-menu"
								id="navbarSupportedContent"
								style={{ display: 'block' }}
							>
								<ul className="navbar-nav">
									{/* <li className="nav-item">
										<Link href="/" className="nav-link fw-400">
											Home
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/who-we-are" className="nav-link fw-400">
											Who We Are
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/what-we-do" className="nav-link fw-400">
											What We Do
										</Link>
									</li> */}

									{navLinks.map((eachLink, i) => {
										return (
											<>
												<li className="nav-item">
													<Link
														href={eachLink?.url || '#'}
														className="nav-link fw-400"
													>
														{eachLink?.name}
														{eachLink?.children ? (
															<i className="ri-arrow-down-s-line"></i>
														) : null}
													</Link>

													{eachLink?.children ? (
														<ul className="dropdown-menu">
															{eachLink?.children?.map((val) => {
																return (
																	<li className="nav-item">
																		<Link href={val?.url} className="nav-link">
																			{val?.name}
																		</Link>
																	</li>
																)
															})}
														</ul>
													) : null}
												</li>
											</>
										)
									})}

									
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

			</div>
		</header>
	)
}

const MobileMenu = () => {
	'use client'
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
			{show && (
				<>
					<div
						className="shadow card animate__fadeInRight animate__animated animate__faster"
						style={{
							right: 0,
							minHeight: '100vh',
							position: 'fixed',
							minWidth: '70vw',
							maxWidth: '70vw',
							top: 0,
							bottom: 0,
							zIndex: 90,
						}}
					>
						<nav className="mean-nav" style={{ minHeight: '90vh' }}>
							<ul
								className="navbar-nav shadow-none"
								style={{ minHeight: '90vh' }}
							>
								{navLinks?.map((eachNavLink) => {
									return (
										<SideNavLinks eachLink={eachNavLink} key={Math.random()} />
									)
								})}
								<li className="nav-item">
									<a href="contact.html" className="nav-link">
										Login
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div
						style={{
							position: 'fixed',
							height: '100%',
							backgroundColor: '#0000007a',
							zIndex: 70,
							left: 0,
							top: 0,
							right: 0,
						}}
						onClick={() => setShow(false)}
						className="p-3 animate__fadeIn animate__animated"
					></div>
				</>
			)}
		</div>
	)
}

const SideNavLinks = ({ eachLink }) => {
	'use client'
	const [show, setShow] = useState(false)
	return (
		<>
			<li className="nav-item">
				
				<Link href={eachLink?.url || '#'} className="nav-link active-">
					{eachLink?.name}
				</Link>

				{eachLink?.children ? (
					<ul
						className="dropdown-menu"
						style={{ display: !show ? 'none' : 'block' }}
					>
						{eachLink?.children?.map((val) => {
							return (
								<li className="nav-item" key={Math.random()}>
									<a href="index.html" className="nav-link">
										{val?.name}
									</a>
								</li>
							)
						})}
					</ul>
				) : null}
				{eachLink?.children ? (
					<a
						onClick={() => setShow(!show)}
						className="mean-expand"
						href="#"
						style={{ fontSize: '18px' }}
					>
						+
					</a>
				) : null}
			</li>
		</>
	)
}
