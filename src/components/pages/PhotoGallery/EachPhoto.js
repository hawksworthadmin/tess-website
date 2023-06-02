import Image from 'next/image'
import React, { useState } from 'react'

export default function EachPhoto({ img, alt, content }) {
	const [show, setShow] = useState(false)
	return (
		<>
			{show && <Preview img={img} alt={alt} onClick={() => setShow(false)} />}
			<div
				onClick={() => setShow(true)}
				className="col-lg-4 col-md-6 mix business"
				style={{ display: 'inline-block', cursor: 'pointer' }}
				data-bound=""
				bis_skin_checked="1"
			>
				<div className="gallery-item" bis_skin_checked="1">
					<img src={img} alt={alt} />

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
			}}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			{/* <div className="bg-danger w-100" style={{ height: '10px' }}></div> */}
			<div style={{ flex: 1 }} className="d-flex align-items-center">
				<Image
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
