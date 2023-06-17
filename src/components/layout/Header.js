import Link from 'next/link'
import React, { useState } from 'react'
import Search from './Search'

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
		name: 'News & Events',
		children: [
			{
				name: 'New/Press Releases',
				url: '/news-and-events/press-release',
			},
			{
				name: 'Events',
				url: '/news-and-events/events',
			},
			// {
			// 	name: 'Workshops',
			// 	url: '/news-and-events/workshops',
			// },
		],
	},
	{
		name: 'Publications',
		children: [
			// {
			// 	name: 'Fact sheets',
			// 	url: '/publications/fact-sheets',
			// },
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
			{
				name: 'Resources',
				url: '/publications/resources',
			},
		],
	},
]

export default function Header({
	setOpenSearchComponent,
	openSearchComponent,
	searchQuery,
	setSearchQuery,
}) {
	const TheLogo = ({ size }) => {
		return (
			<Link
				href={'/'}
				className="d-flex align-items-center justify-space-between"
				style={{
					gap: 6,

					width: 'fit-content',
					flexShrink: 0,
					display: 'block',
				}}
			>
				<img
					src="/assets/figma/ministry_of_edu_logo.png"
					alt="logo"
					width={size || 70}
				/>

				<span style={{ fontWeight: 600, flexShrink: 0, color: 'black' }}>
					BESDA AF-TESS
				</span>
				<img
					src="/assets/figma/global_partners.png"
					alt="logo"
					width={size || 70}
				/>
			</Link>
		)
	}
	return (
		<header
			className="header-area"
			style={{ zIndex: 40, position: 'sticky', top: '0' }}
		>
			<div className="navbar-area">
				<div className="mobile-responsive-nav">
					<div className="container">
						<div className="mobile-responsive-menu mean-container">
							<MobileMenu
								openSearchComponent={openSearchComponent}
								searchQuery={searchQuery}
								setSearchQuery={setSearchQuery}
							/>

							<TheLogo size={48} />
						</div>
					</div>
				</div>

				<div className="desktop-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md navbar-light">
							{/* <Link href="/"> */}
							<TheLogo />
							{/* </Link> */}

							<div
								className="collapse navbar-collapse mean-menu"
								id="navbarSupportedContent"
								style={{ display: 'block' }}
							>
								<ul className="navbar-nav">
									{navLinks.map((eachLink, i) => {
										return (
											<>
												<li className="nav-item">
													{eachLink.url ? (
														<Link
															key={`nav_${i}`}
															href={eachLink?.url}
															className="nav-link fw-400 font-15"
														>
															{eachLink?.name}
															{eachLink?.children ? (
																<i className="ri-arrow-down-s-line"></i>
															) : null}
														</Link>
													) : (
														<a
															key={`nav${i}`}
															style={{ cursor: 'pointer' }}
															className="nav-link fw-400 font-15"
														>
															{eachLink?.name}
															{eachLink?.children ? (
																<i className="ri-arrow-down-s-line"></i>
															) : null}
														</a>
													)}

													{eachLink?.children ? (
														<ul className="dropdown-menu">
															{eachLink?.children?.map((val, index) => {
																return (
																	<li
																		key={`link_${index}`}
																		className="nav-item"
																	>
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
									<ul className="d-flex align-items-center gap-2">
										<li>
											<div
												onClick={() =>
													setOpenSearchComponent &&
													setOpenSearchComponent((prev) => !prev)
												}
												className="option-item"
												bis_skin_checked="1"
											>
												<i className="search-btn ri-search-line"></i>
												{/* <i className="close-btn ri-close-line"></i>

												<div
													className="search-overlay search-popup"
													bis_skin_checked="1"
												>
													<div
														className="search-box"
														bis_skin_checked="1"
														style={{ display: 'block' }}
													>
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
												</div> */}
											</div>
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

const MobileMenu = ({ openSearchComponent, searchQuery, setSearchQuery }) => {
	'use client'
	const [show, setShow] = useState(false)
	return (
		<div className="mean-bar" bis_skin_checked="1" style={{ top: '20%' }}>
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
								<li>
									<Search
										openSearchComponent={openSearchComponent}
										searchQuery={searchQuery}
										setSearchQuery={setSearchQuery}
										mobile={true}
									/>
								</li>
								{navLinks?.map((eachNavLink) => {
									return (
										<SideNavLinks eachLink={eachNavLink} key={Math.random()} />
									)
								})}
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
				{eachLink?.url ? (
					<Link
						prefetch={false}
						href={eachLink?.url}
						className="nav-link active-"
					>
						{eachLink?.name}
					</Link>
				) : (
					<a className="nav-link active-">{eachLink?.name}</a>
				)}

				{eachLink?.children ? (
					<ul
						className="dropdown-menu"
						style={{ display: !show ? 'none' : 'block' }}
					>
						{eachLink?.children?.map((val) => {
							return (
								<li className="nav-item" key={Math.random()}>
									<Link prefetch={false} href={val?.url} className="nav-link">
										{val?.name}
									</Link>
								</li>
							)
						})}
					</ul>
				) : null}
				{eachLink?.children ? (
					<a
						key={Math.random()}
						onClick={() => setShow(!show)}
						className="mean-expand"
						// href="#"
						style={{ fontSize: '18px', cursor: 'pointer' }}
					>
						+
					</a>
				) : null}
			</li>
		</>
	)
}
