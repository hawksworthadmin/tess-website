import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Chatbot = () => {
	const [chatbotOpen, setChatbotOpen] = useState(false)

	return (
		<div
			style={{
				position: 'fixed',
				right: '2rem',
				bottom: '2rem',
			}}
		>
			<div
				style={{
					width: '58px',
					aspectRatio: '1/1',
					borderRadius: '50%',
					position: 'relative',
					background: 'green',
					overflow: 'hidden',
				}}
			>
				<img src="/assets/images/chatbot/happy-chatbot.gif" alt="chatbot" />
			</div>
		</div>
	)
}

export default Chatbot
