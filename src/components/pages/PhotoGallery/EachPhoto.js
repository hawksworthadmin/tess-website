import React, { useState } from 'react'

export default function EachPhoto() {
	const [show, setShow] = useState(false)
	return (
		<>
			{show && <Preview onClick={() => setShow(false)} />}
			<div
				onClick={() => setShow(true)}
				className="col-lg-4 col-md-6 mix business"
				style={{ display: 'inline-block', cursor: 'pointer' }}
				data-bound=""
				bis_skin_checked="1"
			>
				<div className="gallery-item" bis_skin_checked="1">
					<img
						src="https://schoolings.org/wp-content/uploads/2022/03/Minister-of-Education-in-Nigeria.jpg"
						alt="Image"
					/>

					<div className="gallery-item-content" bis_skin_checked="1">
						{/* <a href="assets/images/gallery/gallery-1.jpg">Office building</a> */}
						<span>
							Salisu Dahiru National Coordinator NEWMAP and Federal Project
							Management Team (FPMU) at the Workshop
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

const Preview = ({ onClick }) => {
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
				<img
					className="shadow rounded"
					src="https://schoolings.org/wp-content/uploads/2022/03/Minister-of-Education-in-Nigeria.jpg"
					alt="Image"
				/>
			</div>
		</div>
	)
}
