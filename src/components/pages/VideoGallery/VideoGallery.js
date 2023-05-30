import React from 'react'
import EachVideo from './EachVideo'

export default function VideoGallery() {
  return (
		<div>
			<div
				className="bg-1 bg-theme-"
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h3 className="fw-400 text-white">Video Gallery</h3>
				</div>
			</div>
			<section className="project-area pt-100 pb-70">
				<div className="container">
					<div className="row">
            <EachVideo />
            <EachVideo />
            <EachVideo />
            <EachVideo />
          </div>
				</div>
			</section>
		</div>
	)
}
