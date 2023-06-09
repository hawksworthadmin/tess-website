import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

export default function Layout({ children, query }) {
	const router = useRouter()

	const pathname = router.pathname
	const [openSearchComponent, setOpenSearchComponent] = useState(
		pathname == '/search' ? true : false
	)
	const [searchQuery, setSearchQuery] = useState(query || '')

	const handleSubmit = (e) => {
		e.preventDefault()
		router.push(`/search?query=${searchQuery}`)
	}
	return (
		<>
			<Header
				setOpenSearchComponent={
					pathname !== '/search' && setOpenSearchComponent
				}
			/>
			<form
				onSubmit={handleSubmit}
				style={{
					width: '100%',
					padding: '38px 0 ',
					display: openSearchComponent ? 'block' : 'none',
				}}
				className="container"
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						background: '#F2F4F7',
						borderRadius: '40px',
						padding: '8px 16px ',
					}}
				>
					<div
						style={{
							display: 'flex',
							flex: '1',
							gap: '19px',
							alignItems: 'center',
						}}
					>
						<i class="ri-search-line"></i>
						<input
							onChange={(e) => setSearchQuery(e.target.value)}
							value={searchQuery}
							style={{
								border: 'none',
								flex: 1,
								padding: '4px',
								marginRight: '8px',
								background: 'transparent',
							}}
							className=" "
							placeholder="Search for anything"
							type="text"
						/>
					</div>
					<button
						style={{
							backgroundColor: 'transparent',
							border: '1px solid #12B76A',
							padding: '10px 16px',
							borderRadius: '32px',
							color: '#12B76A',
						}}
					>
						Search
					</button>
				</div>
			</form>
			<main className="animate__fadeIn animate__animated ">{children}</main>
			<Footer />
		</>
	)
}
