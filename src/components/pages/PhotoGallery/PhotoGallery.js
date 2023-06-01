import React from 'react'
import EachPhoto from './EachPhoto'

export default function PhotoGallery() {
	return (
		<div>
			<div
				className="bg-1 bg-theme-"
				style={{ height: '112px', backgroundColor: '#12B76A' }}
			>
				<div className="container d-flex flex-column justify-content-center h-100">
					<h3 className="fw-400 text-white">Image Gallery</h3>
				</div>
			</div>
			<section className="gallery-area gallery-popup pt-100 pb-70">
				<div className="container">
					<Tabs />
					<div className="shorting">
						<div className="row">
							<EachPhoto />
							<EachPhoto />
							<EachPhoto />
							<EachPhoto />
							<EachPhoto />
							<EachPhoto />
						</div>
					</div>
                    <br />
                    <br />
					<div className="col-12" bis_skin_checked="1">
						<div className="pagination-area" bis_skin_checked="1">
							<span className="page-numbers current" aria-current="page">
								1
							</span>
							<a href="#" className="page-numbers">
								2
							</a>
							<a href="#" className="page-numbers">
								3
							</a>

							<a href="#" className="next page-numbers">
								<i className="ri-arrow-right-line"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

const Tabs = () => {
	return (
		<div className="row" bis_skin_checked="1">
			<div className="col-lg-12" bis_skin_checked="1">
				<div className="shorting-menu" bis_skin_checked="1">
					<button className="filter active" data-filter="all" fdprocessedid="03j22">
						All
					</button>

					<button className="filter" data-filter=".business" fdprocessedid="r0rmbc">
						Business
					</button>

					<button className="filter" data-filter=".event" fdprocessedid="p0nx9s">
						Event
					</button>

					<button className="filter" data-filter=".culture" fdprocessedid="e7lek">
						Culture
					</button>

					<button
						className="filter"
						data-filter=".government"
						fdprocessedid="xxaa7b"
					>
						Government
					</button>
				</div>
			</div>
		</div>
	)
}
