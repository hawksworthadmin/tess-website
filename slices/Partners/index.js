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
			<div className="d-flex justify-content-evenly">
				{slice.items?.map((partner) => (
					<Image
						src={partner.partner_logo.url}
						alt={partner.partner_logo.alt}
						width={204.45}
						height={48}
						style={{ objectFit: 'contain' }}
					/>
				))}
				{/* <Image
				src="/assets/figma/world_bank_2.png"
				alt="world bank"
				width={204.45}
				height={48}
			/>
			<Image
				src="https://i.onthe.io/smngoz5g75kpkm53u.313edc0e.jpg"
				alt="world bank"
				width={64}
				height={64}
			/>
			<Image
				src="https://www.globalpartnership.org/themes/custom/gpe/img/default-thumb-small.png"
				alt="world bank"
				width={64}
				height={64}
			/> */}
			</div>
		</section>
	)
}

export default Sponsors
