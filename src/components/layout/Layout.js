import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import Chatbot from './Chatbot'
import Search from './Search'

export default function Layout({ children, query }) {
	const router = useRouter()

	const pathname = router.pathname
	const [openSearchComponent, setOpenSearchComponent] = useState(
		pathname == '/search' ? true : false
	)
	const [searchQuery, setSearchQuery] = useState(query || '')

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	router.push(`/search?query=${searchQuery}`)
	// }
	return (
		<>
			<Header
				setOpenSearchComponent={
					pathname !== '/search' && setOpenSearchComponent
				}
				openSearchComponent={openSearchComponent}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<Search
				openSearchComponent={openSearchComponent}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			<main className="animate__fadeIn animate__animated ">{children}</main>

			<Chatbot />
			<Footer />
		</>
	)
}
