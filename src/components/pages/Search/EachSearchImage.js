import Modal from '@/components/layout/Modal'
import Image from 'next/image'
import React, { useState } from 'react'

export default function EachSearchPhoto({ img, alt, content }) {
	const [show, setShow] = useState(false)
	return (
		<>
			{show && (
				<Modal>
					<Preview img={img} alt={alt} onClick={() => setShow(false)} />
				</Modal>
			)}
			<div
				onClick={() => setShow(true)}
				className="col-lg-5 col-md-6 mix business"
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
						overflow: 'hidden',
						borderRadius: '8px',
						background:
							'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(.jpg)',
					}}
					className="gallery-item"
					bis_skin_checked="1"
				>
					<Image src={img} alt={alt} fill />

					<div className="gallery-item-content" bis_skin_checked="1">
						{/* <a href="assets/images/gallery/gallery-1.jpg">Office building</a> */}
						<span>{content}</span>
					</div>
				</div>
			</div>
		</>
	)
}

const Preview = ({ onClick, img, alt }) => {
	return (
		<div
			onClick={onClick}
			style={{
				position: 'fixed',
				left: 0,
				top: 0,
				backgroundColor: '#001a049c',
				bottom: 0,
				zIndex: 70,
				cursor: 'pointer',
				width: '100%',
			}}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<div style={{ flex: 1 }} className="d-flex align-items-center">
				<Image
					style={{ backgroundColor: 'white' }} // am giving a white background
					// in case the picture does not have a background
					className="shadow rounded"
					src={img}
					alt={alt}
					width={550}
					height={450}
				/>
			</div>
		</div>
	)
}
