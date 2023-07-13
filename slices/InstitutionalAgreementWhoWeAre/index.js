/**
 * @typedef {import("@prismicio/client").Content.InstitutionalAgreementWhoWeAreSlice} InstitutionalAgreementWhoWeAreSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InstitutionalAgreementWhoWeAreSlice>} InstitutionalAgreementWhoWeAreProps
 * @param {InstitutionalAgreementWhoWeAreProps}
 */
const InstitutionalAgreementWhoWeAre = ({ slice }) => {
	const arrangement = [
		{
			section_name: 'Federal Level',
			fields: slice.items.filter(
				(item) => item.section_type == 'Federal Level'
			),
		},
		{
			section_name: 'State Level',
			fields: slice.items.filter((item) => item.section_type == 'State Level'),
		},
	]

	return (
		<section className="discover-area discover-area-style-three bg-color pb-100">
			<div className="container">
				<div className=" pt-100">
					<div
						data-aos="fade-up"
						data-aos-delay="100"
						className="section-title- text-center"
						bis_skin_checked="1"
						style={{ margin: '-13px auto 50px' }}
					>
						<h2>Institutional Arrangement</h2>
						<p className="">{slice.primary.agreement_text}</p>
					</div>
				</div>
			</div>
			<br />
			<br />
			{arrangement.map((data, index) => {
				return (
					<div key={`arrangement_${index}`}>
						<div className="container">
							<h4
								className="mb-5 fw-600"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								{data.section_name}
							</h4>
							<div className="row justify-content-start">
								{data.fields.map((field, i) => {
									return (
										<EachLevel
											key={`each_leve_${i}`}
											data={field}
											index={i + 100}
										/>
									)
								})}
							</div>
						</div>
						<br />
						<br />
						<br />
						<br />
					</div>
				)
			})}
		</section>
	)
}

const EachLevel = ({ data, index }) => {
	return (
		<div
			className="col-lg-4 col-md-6 mb-4"
			data-aos="fade-up"
			data-aos-delay={`${index}`}
		>
			<div
				class="single-services-box d-flex justify-content-between bg-white h-100 pb-0"
				bis_skin_checked="1"
			>
				<div className="col-3">
					<img src={data?.image.url} alt={data?.image.alt} />
				</div>

				<div className="col-8">
					<h3>
						<a>{data?.name}</a>
					</h3>

					<p>{data?.description}</p>

					<div class="services-shape" bis_skin_checked="1">
						<img src="assets/images/services-shape.png" alt="Image" />
					</div>
				</div>
			</div>
		</div>
	)
}
export default InstitutionalAgreementWhoWeAre
