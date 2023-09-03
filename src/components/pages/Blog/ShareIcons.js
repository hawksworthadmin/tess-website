import React, { useEffect, useState } from 'react'

import {
	TwitterIcon,
	TwitterShareButton,
	FacebookIcon,
	FacebookShareButton,
} from 'next-share'

const ShareIcons = ({ title, url }) => {
	const [loc, setLocation] = useState()

	useEffect(() => {
		const loc = window.location.host
		setLocation(loc)
	}, [])
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'end',
				alignItems: 'center',
				gap: '2rem',
			}}
		>
			<p style={{ fontWeight: '700' }}>Share</p>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '.5rem',
				}}
				className="flex justify-end items-center"
			>
				<FacebookShareButton url={`${loc}${url}`} quote={title}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<TwitterShareButton url={`${loc}${url}`} title={title}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
			</div>
		</div>
	)
}

export default ShareIcons
