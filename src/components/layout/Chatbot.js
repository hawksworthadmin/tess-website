import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Chatbot = () => {
	const [chatbotOpen, setChatbotOpen] = useState(false)

	return (
		<div
			className="col-lg-4 col-md-6 col-sm-12"
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
			setMessage('')
			const botAnswer = await res.json()
			setIsLoading(false)
			setMessages((prev) => [...prev, { message: botAnswer.data, type: 'bot' }])
		} catch (error) {}
	}

	return (
		<div
			style={{
				background: '#EAECF0',
				transition: 'all 0.5s ease',
				height: chatbotOpen ? '650px' : 0,
				maxHeight: chatbotOpen ? '650px' : 0,
				overflow: 'hidden',
				width: '100%',
				borderRadius: '10px',
				// right: '0px'
			}}
			className="col-lg-3 col-md-6 col-sm-12 shadow"
		>
			<div className="d-flex flex-column w-100 h-100 justify-content-evenly">
				{/* The Heading */}
				<div
					style={{
						// height: '15%',
						background: '#00aa55',
						zIndex: 10,
					}}
					className="d-flex justify-content-between px-3 py-2 shadow"
				>
					<div className="d-flex align-items-center gap-2">
						<div
							style={{
								width: '32px',
								height: '32px',
								fontSize: '18px',
								borderRadius: '50%',
								// fontSize: '1.2rem',
								color: '#00aa55',
								background: 'white',
								display: 'grid',
								placeItems: 'center',
							}}
						>
							<i className="ri-user-fill"></i>
						</div>
						<span
							style={{
								color: 'white',
								fontWeight: '700',
							}}
						>
							Ahmed Bot
						</span>
					</div>
					<div
						style={{ cursor: 'pointer' }}
						onClick={() => setChatbotOpen(false)}
					>
						<i
							style={{ fontSize: '2rem', color: 'white' }}
							className="ri-close-line "
						></i>
					</div>
				</div>
				{/* The Body */}
				<div style={{ flex: 1, maxHeight: '526px' }}>
					<div
						style={{
							position: 'relative',
							padding: '8px',
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
							overflow: 'auto',
							flex: 1,
							height: '100%',
							overflowY: 'auto',
						}}
					>
						{messages.map((message, index) =>
							message.type == 'user' ? (
								<div
									key={`user_${index}`}
									style={{
										background: '#00aa55',
										padding: '8px',
										width: 'auto',
										maxWidth: '80%',
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
										key={`bot_${index}`}
										style={{
											background: 'white',
											padding: '8px',
											width: 'auto',
											maxWidth: '80%',
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
									width: '80%',
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
				</div>
				{/* The Input */}
				<form
					onSubmit={handleSubmit}
					style={{
						padding: '8px ',
						display: 'flex',
						alignItems: 'stretch',
						gap: '8px',
					}}
					className="card d-flex flex-row rounded-full align-items-center"
				>
					<input
						placeholder="Say something..."
						type="text"
						value={message}
						required
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
							color: '#00aa55',
							background: 'white',
							height: '40px',
							width: '40px',
							fontSize: '22px',
						}}
						className="rounded-full btn d-flex flex-colum  justify-content-center"
					>
						<i class="ri-send-plane-fill"></i>
					</button>
				</form>
			</div>
		</div>
	)

	// return (
	// 	<div
	// 		style={{
	// 			background: '#EAECF0',
	// 			transition: 'all 0.5s ease',
	// 			height: chatbotOpen ? '650px' : 0,
	// 			overflow: 'hidden',
	// 			width: '100%',
	// 			borderRadius: '10px',
	// 		}}
	// 		className="col-lg-3 col-md-6"
	// 	>
	// 		{/* Heading section */}
	// 		<div
	// 			style={{
	// 				// height: '15%',
	// 				background: '#00aa55',
	// 				zIndex: 10,
	// 			}}
	// 			className="d-flex justify-content-between px-3 py-2 shadow"
	// 		>
	// 			<div className="d-flex align-items-center gap-2">
	// 				<div
	// 					style={{
	// 						width: '32px',
	// 						height: '32px',

	// 						borderRadius: '50%',
	// 						// fontSize: '1.2rem',
	// 						color: '#00aa55',
	// 						background: 'white',
	// 						display: 'grid',
	// 						placeItems: 'center',
	// 					}}
	// 				>
	// 					<i className="ri-message-fill"></i>
	// 				</div>
	// 				<span
	// 					style={{
	// 						color: 'white',
	// 						fontWeight: '700',
	// 					}}
	// 				>
	// 					Ahmed Bot
	// 				</span>
	// 			</div>
	// 			<div
	// 				style={{ cursor: 'pointer' }}
	// 				onClick={() => setChatbotOpen(false)}
	// 			>
	// 				<i
	// 					style={{ fontSize: '2rem', color: 'white' }}
	// 					className="ri-close-line "
	// 				></i>
	// 			</div>
	// 		</div>

	// 		{/* Main section */}
	// 		<div
	// 			style={{
	// 				position: 'relative',
	// 				height: '85%',
	// 			}}
	// 		>
	// 			<div
	// 				style={{
	// 					position: 'relative',
	// 					padding: '8px',
	// 					display: 'flex',
	// 					flexDirection: 'column',
	// 					gap: '1rem',
	// 					overflow: 'auto',
	// 					flex: 1,
	// 					height: '80%',
	// 				}}
	// 			>
	// 				{messages.map((message, index) =>
	// 					message.type == 'user' ? (
	// 						<div
	// 							key={`user_${index}`}
	// 							style={{
	// 								background: '#00aa55',
	// 								padding: '8px',
	// 								width: '80%',
	// 								fontWeight: '500',
	// 								color: 'white',
	// 								borderRadius: '8px',
	// 								alignSelf: 'flex-start',
	// 							}}
	// 						>
	// 							{message.message}
	// 						</div>
	// 					) : (
	// 						message.type == 'bot' && (
	// 							<div
	// 								key={`bot_${index}`}
	// 								style={{
	// 									background: 'white',
	// 									padding: '8px',
	// 									width: '80%',
	// 									fontWeight: '500',
	// 									color: '#00aa55',
	// 									borderRadius: '8px',
	// 									alignSelf: 'flex-end',
	// 								}}
	// 							>
	// 								{message.message}
	// 							</div>
	// 						)
	// 					)
	// 				)}
	// 				{isLoading && (
	// 					<div
	// 						style={{
	// 							background: 'white',
	// 							padding: '8px',
	// 							width: '80%',
	// 							fontWeight: '500',
	// 							color: '#00aa55',
	// 							borderRadius: '8px',
	// 							alignSelf: 'flex-end',
	// 						}}
	// 					>
	// 						Typing...{' '}
	// 					</div>
	// 				)}
	// 			</div>
	// 			<form
	// 				onSubmit={handleSubmit}
	// 				style={{
	// 					padding: '8px ',
	// 					display: 'flex',
	// 					alignItems: 'stretch',
	// 					gap: '8px',
	// 				}}
	// 			>
	// 				<input
	// 					placeholder="Say something"
	// 					type="text"
	// 					value={message}
	// 					onChange={(e) => setMessage(e.target.value)}
	// 					style={{
	// 						flexGrow: '1',
	// 						borderRadius: '8px',
	// 						border: 'none',
	// 						padding: '4px 8px',
	// 						height: '42px',
	// 					}}
	// 				/>
	// 				<button
	// 					style={{
	// 						background: '#00aa55',
	// 						padding: '0 4px',
	// 						borderRadius: '8px',
	// 						fontWeight: '600',
	// 						color: 'white',
	// 					}}
	// 				>
	// 					Submit
	// 				</button>
	// 			</form>
	// 		</div>
	// 	</div>
	// )
}

export default Chatbot
