/**
 * @typedef {import("@prismicio/client").Content.QuoteSlice} QuoteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuoteSlice>} QuoteProps
 * @param {QuoteProps}
 */
const Quote = ({ slice }) => {
	return (
		<section
			className="blog-area bg-color- pt-100 pb-70 d-flex justify-content-center my-5"
			style={{
				backgroundColor: '#F2F4F7',
				backgroundImage: `url(${slice.primary.background_image.url})`,
			}}
		>
			<div className="col-lg-6 text-center">
				<h5
					className="fw-normal text-center font-30"
					data-aos="fade-up"
					data-aos-delay="150"
					style={{ marginBottom: '24px' }}
				>
					{slice.primary.quote}
				</h5>
				<p
					data-aos-delay="200"
					data-aos="fade-up"
					style={{ color: '#475467', fontSize: '20px' }}
				>
					{slice.primary.author}
				</p>
			</div>
		</section>
	)
}

export default Quote
