/**
 * @typedef {import("@prismicio/client").Content.ResultAreaSlice} ResultAreaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResultAreaSlice>} ResultAreaProps
 * @param {ResultAreaProps}
 */
const ResultArea = ({ slice }) => {
	return (
		<section
			className="blog-area blog-area-two- pt-100 pb-100"
			style={{
				backgroundColor: '#F9FAFB',
				postion: 'relative',
				background: "url('/assets/figma/statistic_bg.png') no-repeat",
				backgroundSize: 'contain',
			}}
		>
			<div className="container" style={{ position: 'relative' }}>
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-6 " style={{ marginBottom: '32px' }}>
						<img src={`/assets/images/result-area-map.png`} alt="map" />
					</div>
					<div className="col-lg-5 local-councils-content">
						<h6 className="fw-600 font-24 mb-4">Statistics</h6>
						<ul
							style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
						>
							{slice.items?.map((stat, i) => (
								<Statistics statistics={stat} key={`stats_${i}`} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

const Statistics = ({ statistics }) => {
	return (
		<li className="font-20 font-secondary" style={{ color: '#667085' }}>
			<strong className="font-secondary" style={{ color: '#344054' }}>
				{statistics?.number}
			</strong>{' '}
			{statistics?.description}
		</li>
	)
}

export default ResultArea
