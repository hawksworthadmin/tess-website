import moment from 'moment'
import Image from 'next/image'
import React, { useState } from 'react'
import RichTextComponent from './RichTextComponent'
import Modal from '@/components/layout/Modal'

const EachResource = ({
	image,
	alt,
	content,
	title,
	created_at,
	downloadLink,
	documentName,
	password,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{isOpen && (
				<Modal>
					<DownloadForm
						documentLink={downloadLink}
						documentName={documentName}
						onClick={() => setIsOpen(false)}
						documentPassword={password}
					/>
				</Modal>
			)}
			<div
				className="col-lg-6 col-md-6 mix business"
				style={{
					display: 'inline-block',
					cursor: 'pointer',
				}}
				data-bound=""
				bis_skin_checked="1"
			>
				<div
					style={{
						position: 'relative',
						height: '400px',
						background:
							'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
						borderRadius: '8px',
					}}
					className="gallery-item"
					bis_skin_checked="1"
				>
					<Image fill src={image} alt={alt} style={{ objectFit: 'contain' }} />

					<div
						style={{ background: '#e7f4eb' }}
						className="gallery-item-content"
						bis_skin_checked="1"
					>
						{/* <a href="assets/images/gallery/gallery-1.jpg">Office building</a> */}
						{/* <span>{content}</span> */}
						<RichTextComponent field={content} />
					</div>
				</div>
				<div bis_skin_checked="1">
					<div
						style={{
							textTransform: 'capitalize',
							background: '#eaecf0',
							// color: 'white',
							padding: '2px 6px',
							marginBottom: '4px',
							textAlign: 'center',
							borderRadius: '8px',
							fontWeight: '600',
						}}
					>
						{title}
					</div>
					<div
						className="d-flex justify-content-between"
						style={{ marginTop: '10px' }}
					>
						<span className="d-flex " style={{ gap: '10px' }}>
							<i className="ri-calendar-line"></i>
							{moment(created_at).format('MMMM DD, YYYY')}
						</span>
						<span
							onClick={() => setIsOpen(true)}
							className="d-flex "
							style={{ gap: '10px' }}
						>
							<i class="ri-download-line"></i>
							Download
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

const DownloadForm = ({
	onClick,
	documentLink,
	documentName,
	documentPassword,
}) => {
	const [error, setError] = useState(false)
	const [password, setPassword] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const handleDownload = () => {
		const downloadLink = document.createElement('a')
		downloadLink.href = documentLink
		downloadLink.download = documentName
		downloadLink.click()
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(false)
		if (password.toLowerCase() === documentPassword.toLowerCase()) {
			setIsSubmitted(true)
		} else {
			setError(true)
		}
	}
	return (
		<div
			onClick={onClick}
			style={{
				position: 'fixed',
				left: 0,
				top: 0,
				backgroundColor: '#001a049c',
				bottom: 0,
				zIndex: 500,
				width: '100%',
			}}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<div
				className="d-flex flex-column justify-content-center align-items-center"
				style={{
					maxWidth: '450px',
					width: '90%',
					height: '450px',
					borderRadius: '34px',
					background: 'white',
					position: 'relative',
				}}
				onClick={(e) => e.stopPropagation()}
			>
				{!isSubmitted ? (
					<form
						className="d-flex flex-column  align-items-center"
						onSubmit={handleSubmit}
						style={{ width: '80%', maxWidth: '450px' }}
					>
						<p style={{ fontWeight: '600', textAlign: 'center' }}>
							Enter the password to get access to this document
						</p>
						<div
							className="d-flex flex-column  align-items-center"
							style={{ width: '80%', gap: '1rem' }}
						>
							{/* <input
								required
								placeholder="Enter your email address"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								style={{
									borderRadius: '8px',
									height: '46px',
									padding: '0 8px',
									border: '2px solid gray',
									width: '100%',
								}}
							/> */}
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
							>
								<div
									style={{
										border: `2px ${error ? 'red' : 'gray'} solid`,
										// border: '2px solid gray',
										width: '100%',
										height: '46px',
										borderRadius: '8px',
										position: 'relative',
										display: 'flex',
										alignItems: 'center',
										padding: '0 8px',
										gap: '2px',
									}}
								>
									<input
										required
										placeholder="Enter your password"
										type={showPassword ? 'text' : 'password'}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										onFocus={() => error && setError(false)}
										style={{
											background: 'transparent',
											height: '100%',
											border: 'none',
											outline: 'none',
											width: '100%',
										}}
									/>
									<div
										style={{
											background: 'inherit',
											height: 'full',
											cursor: 'pointer',
											fontSize: '1.3rem',
										}}
										onClick={() => setShowPassword((prev) => !prev)}
									>
										{showPassword ? (
											<i className="ri-eye-fill"></i>
										) : (
											<i className="ri-eye-off-fill"></i>
										)}
									</div>
								</div>
								{error && <p style={{ color: 'red' }}>Password is incorrect</p>}
							</div>

							<button
								style={{
									backgroundColor: 'transparent',
									border: '1px solid #12B76A',
									padding: '10px 16px',
									borderRadius: '8px',
									background: '#12B76A',
									color: 'white',
									marginTop: '1rem',
									width: '100%',
								}}
							>
								Submit
							</button>
						</div>
					</form>
				) : (
					<div style={{ width: '80%', maxWidth: '450px' }}>
						<p>
							Click on the button below to download{' '}
							<span style={{ color: '#12B76A', fontWeight: '600' }}>
								{documentName}
							</span>
						</p>
						<button
							onClick={handleDownload}
							style={{
								backgroundColor: 'transparent',
								border: '1px solid #12B76A',
								padding: '10px 16px',
								borderRadius: '8px',
								background: '#12B76A',
								color: 'white',
								fontWeight: '600',
							}}
						>
							Download File
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default EachResource
