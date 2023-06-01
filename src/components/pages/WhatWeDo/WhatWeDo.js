import React from 'react'
import PillarOne from './PillarOne'
import PillarTwo from './PillarTwo'
import PillarThree from './PillarThree'

export default function WhatWeDo() {
  return (
		<div>
			<div
				className="bg-1 bg-theme- "
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h3 className="fw-400 text-white">What We Do</h3>
				</div>
			</div>
			<PillarOne />
			<PillarTwo />
			<PillarThree />
		</div>
	)
}
 