import React from 'react'

export default function EachVideo() {
	return (
		<div className="col-lg-4 col-md-6" bis_skin_checked="1">
			<div className="single-project" bis_skin_checked="1">
				<i
					className="ri-play-fill text-theme shadow"
					style={{
						position: 'absolute',
						bottom: '40%',
						right: '45%',
						fontSize: '90px',
					}}
				></i>
				<img
					src="https://www.gemsakinternationalschool.com/en/-/media/project/gems/akn_al_khaleej_national_school/_generic-content-images/new-facilities-02-08-22/15.jpg"
					alt="Image"
				/>

				<div className="project-content" bis_skin_checked="1">
					<a href="project-details.html">Improved learning environments</a>
				</div>
			</div>
		</div>
	)
}
