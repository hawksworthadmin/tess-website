import React from 'react'

import {
	TwitterIcon,
	TwitterShareButton,
	FacebookIcon,
	FacebookShareButton,
} from 'next-share'

const ShareIcons = ({ title, url }) => {
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
				<FacebookShareButton
					url={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`}
					quote={title}
				>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<TwitterShareButton
					url={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`}
					title={title}
				>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
			</div>
		</div>
	)
}

export default ShareIcons
