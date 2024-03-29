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
		],
	},
	{
		name: 'Publications',
		children: [
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
					gap: '1rem',
					width: 'fit-content',
					flexShrink: 0,
				}}
			>
				<img src="/logo.png" alt="logo" />

				<span style={{ fontWeight: 600, flexShrink: 0, color: 'black' }}>
					BESDA AF-TESS
				</span>
				<img
					src="/assets/images/gpe.png"
					width={50}
					height={50}
					alt="gpe logo"
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
						<div
							// style={{ background: 'blue' }}
							className=" d-flex align-items-center mobile-responsive-menu mean-container"
						>
							<TheLogo size={48} />
							<MobileMenu
								openSearchComponent={openSearchComponent}
								searchQuery={searchQuery}
								setSearchQuery={setSearchQuery}
							/>
						</div>
					</div>
				</div>

				<div className="desktop-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md navbar-light">
							<TheLogo />

							<div
								className="collapse navbar-collapse mean-menu"
								id="navbarSupportedContent"
								style={{ display: 'block' }}
							>
								<ul className="navbar-nav">
									{navLinks.map((eachLink, i) => {
										return (
											<>
												<li key={`navbar_${i}`} className="nav-item">
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
																		key={`${eachLink.name}_${index}`}
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
	const [show, setShow] = useState(false)
	return (
		<div
			className="mean-bar"
			bis_skin_checked="1"
			style={{ /*top: '20%',*/ position: 'relative', display: 'block' }}
		>
			<a
				onClick={() => setShow(!show)}
				className="meanmenu-reveal"
				style={{ right: 0, left: 'auto', background: 're' }}
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
								{navLinks?.map((eachNavLink, id) => {
									return (
										<SideNavLinks
											eachLink={eachNavLink}
											key={`each_link_${id + 1}`}
										/>
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
					<Link href={eachLink?.url} className="nav-link active-">
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
						{eachLink?.children?.map((val, id) => {
							return (
								<li className="nav-item" key={`${eachLink.name}_${id}`}>
									<Link href={val?.url} className="nav-link">
										{val?.name}
									</Link>
								</li>
							)
						})}
					</ul>
				) : null}
				{eachLink?.children ? (
					<a
						onClick={() => setShow(!show)}
						className="mean-expand"
						style={{ fontSize: '18px', cursor: 'pointer' }}
					>
						+
					</a>
				) : null}
			</li>
		</>
	)
}
