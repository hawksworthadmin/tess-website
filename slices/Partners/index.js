import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.SponsorsSlice} SponsorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SponsorsSlice>} SponsorsProps
 * @param {SponsorsProps}
 */
const Sponsors = ({ slice }) => {
	return (
		<section
			className="container services-area-style-two "
			style={{ background: 'white', padding: '34px' }}
		>
			<div
				style={{
					flexWrap: 'wrap',
					gap: '1.5rem',
				}}
				className="d-flex justify-content-evenly"
			>
				{slice.items?.map((partner, i) => (
					<Image
						key={`partner_${i}`}
						src={partner.partner_logo.url}
						alt={partner.partner_logo.alt}
						width={204.45}
						height={48}
						style={{ objectFit: 'contain' }}
					/>
				))}
			</div>
		</section>
	)
}

export default Sponsors
