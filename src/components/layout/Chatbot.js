import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Chatbot = () => {
	const [chatbotOpen, setChatbotOpen] = useState(false)

	return (
		<div
			className="col-lg-4 col-md-6"
			style={{
				position: 'fixed',
				right: '2rem',
				bottom: '2rem',
				zIndex: '1000',
				margin: 'auto',
			}}
		>
			<ChatBox chatbotOpen={chatbotOpen} setChatbotOpen={setChatbotOpen} />

			{!chatbotOpen && (
				<div
					onClick={() => setChatbotOpen(true)}
					style={{
						width: '58px',
						aspectRatio: '1/1',
						borderRadius: '50%',
						position: 'relative',
						background: '#EAECF0',
						overflow: 'hidden',
						fontSize: '2rem',
						display: 'grid',
						placeItems: 'center',
						color: 'green',
						cursor: 'pointer',
						margin: 'auto',
						position: 'absolute',
						right: '0',
						bottom: '0',
					}}
				>
					<i className="ri-message-2-fill"></i>
				</div>
			)}
		</div>
	)
}

const ChatBox = ({ setChatbotOpen, chatbotOpen }) => {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([
		{ message: 'Hello Friend! How can I help you today?', type: 'bot' },
	])
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			setMessages((prev) => [...prev, { message, type: 'user' }])
			setIsLoading(true)

			const res = await fetch('/api/chatbot', {
				method: 'POST',
				body: JSON.stringify({
					message,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			const botAnswer = await res.json()
			setIsLoading(false)
			setMessages((prev) => [...prev, { message: botAnswer.data, type: 'bot' }])
		} catch (error) {}
	}
	return (
		<div
			style={{
				background: '#EAECF0',
				transition: 'all 2s ease',
				height: chatbotOpen ? '400px' : 0,
				overflow: 'hidden',
				width: '100%',
				borderRadius: '10px',
			}}
			className="col-lg-3 col-md-6"
		>
			{/* Heading section */}
			<div
				style={{
					// height: '15%',
					background: '#00aa55',
					padding: '8px 4px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						gap: '4px',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							width: '32px',
							height: '32px',

							borderRadius: '50%',
							// fontSize: '1.2rem',
							color: '#00aa55',
							background: 'white',
							display: 'grid',
							placeItems: 'center',
						}}
					>
						<i className="ri-message-fill"></i>
					</div>
					<span
						style={{
							color: 'white',
							fontWeight: '700',
						}}
					>
						Tess Bot
					</span>
				</div>
				<div
					style={{ cursor: 'pointer' }}
					onClick={() => setChatbotOpen(false)}
				>
					<i
						style={{ fontSize: '2rem', color: 'white' }}
						className="ri-close-circle-line "
					></i>
				</div>
			</div>

			{/* Main section */}
			<div
				style={{
					position: 'relative',
					height: '85%',
				}}
			>
				<div
					style={{
						position: 'relative',
						padding: '8px',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						overflow: 'auto',
						flex: 1,
						height: '80%',
					}}
				>
					{messages.map((message) =>
						message.type == 'user' ? (
							<div
								style={{
									background: '#00aa55',
									padding: '8px',
									width: '60%',
									fontWeight: '500',
									color: 'white',
									borderRadius: '8px',
									alignSelf: 'flex-start',
								}}
							>
								{message.message}
							</div>
						) : (
							message.type == 'bot' && (
								<div
									style={{
										background: 'white',
										padding: '8px',
										width: '60%',
										fontWeight: '500',
										color: '#00aa55',
										borderRadius: '8px',
										alignSelf: 'flex-end',
									}}
								>
									{message.message}
								</div>
							)
						)
					)}
					{isLoading && (
						<div
							style={{
								background: 'white',
								padding: '8px',
								width: '60%',
								fontWeight: '500',
								color: '#00aa55',
								borderRadius: '8px',
								alignSelf: 'flex-end',
							}}
						>
							Typing...{' '}
						</div>
					)}
				</div>
				<form
					onSubmit={handleSubmit}
					style={{
						padding: '8px ',
						display: 'flex',
						alignItems: 'stretch',
						gap: '8px',
					}}
				>
					<input
						placeholder="Say something"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						style={{
							flexGrow: '1',
							borderRadius: '8px',
							border: 'none',
							padding: '4px 8px',
							height: '42px',
						}}
					/>
					<button
						style={{
							background: '#00aa55',
							padding: '0 4px',
							borderRadius: '8px',
							fontWeight: '600',
							color: 'white',
						}}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Chatbot
