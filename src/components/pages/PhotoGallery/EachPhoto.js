import Modal from '@/components/layout/Modal'
import Image from 'next/image'
import React, { useState } from 'react'

export default function EachPhoto({ img, alt, content }) {
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
				className="col-lg-4 col-md-6 mix business"
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
					<Image fill src={img} alt={alt} style={{ objectFit: 'contain' }} />

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
				width: '100%',
				backgroundColor: '#001a049c',
				bottom: 0,
				zIndex: 70,
				cursor: 'pointer',
			}}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<div
				style={{ flex: 1, padding: '1rem' }}
				className="d-flex align-items-center"
			>
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
