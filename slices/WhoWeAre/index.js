import RichTextComponent from '@/components/pages/Blog/RichTextComponent'

/**
 * @typedef {import("@prismicio/client").Content.WhatWeDoSlice} WhatWeDoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatWeDoSlice>} WhatWeDoProps
 * @param {WhatWeDoProps}
 */
const WhatWeDo = ({ slice }) => {
	return (
		<section className="py-5 bg-theme-light">
			<div className="container">
				<h5
					style={{ marginBottom: '25px', fontWeight: 500 }}
					className="text-theme font-30"
					data-aos="fade-up"
				>
					Who we are
				</h5>
				<div className="text-justify">
					<RichTextComponent
						field={slice.primary.content}
						className="text-justify"
					/>
				</div>
			</div>
		</section>
	)
}

export default WhatWeDo
