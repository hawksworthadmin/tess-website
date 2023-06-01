/**
 * @typedef {import("@prismicio/client").Content.BlogPostSliceSlice} BlogPostSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostSliceSlice>} BlogPostSliceProps
 * @param {BlogPostSliceProps}
 */
const BlogPostSlice = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for blog_post_slice (variation: {slice.variation})
			Slices
		</section>
	)
}

export default BlogPostSlice
