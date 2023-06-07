import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
	const [openSearchComponent, setOpenSearchComponent] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()
		router.push(`/search?query=${searchQuery}`)
	}
	return (
		<>
			<Header setOpenSearchComponent={setOpenSearchComponent} />
			<form
				onSubmit={handleSubmit}
				style={{
					width: '100%',
					padding: '38px ',
					display: openSearchComponent ? 'flex' : 'none',
					justifyContent: 'space-between',
					alignItems: 'center',
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
						style={{
							border: 'none',
							flex: 1,
							padding: '4px',
							marginRight: '8px',
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
			</form>
			<main className="animate__fadeIn animate__animated ">{children}</main>
			<Footer />
		</>
	)
}
