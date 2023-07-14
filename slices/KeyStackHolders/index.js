import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.KeyStackHoldersSlice} KeyStackHoldersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<KeyStackHoldersSlice>} KeyStackHoldersProps
 * @param {KeyStackHoldersProps}
 */
const KeyStackHolders = ({ slice }) => {
	return (
		<section className="project-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2 data-aos="fade-up" data-aos-duration="1000">
						Key Stakeholders
					</h2>
				</div>

				<div className="row justify-content-center align-items-center">
					{slice.items.map((stackholder, id) => (
						<StackHolder
							key={`StackHolders_${id}`}
							image={stackholder.stack_holder_image.url}
							// worldbank={true}
							title={stackholder.stack_holder_name}
							alt={stackholder.stack_holder_image.alt}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

const StackHolder = ({ image, title, worldbank, alt }) => {
	return (
		<div className="col-lg-2 col-md-6 mb-4">
			<div className="single-project- text-center" data-aos="zoom-in-up">
				<Image
					width={worldbank ? 144.49 : 96}
					height={worldbank ? 96 : 64}
					src={image}
					alt={alt || 'Image'}
					className="mb-4"
					style={{ objectFit: 'contain' }}
				/>

				<p
					className=""
					style={{
						fontSize: '16px',
						fontWeight: 600,
					}}
				>
					{title}
				</p>
			</div>
		</div>
	)
}

export default KeyStackHolders
