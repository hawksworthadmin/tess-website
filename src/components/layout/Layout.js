import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="animate__fadeIn animate__animated ">{children}</main>
			<Footer />
		</>
	)
}
