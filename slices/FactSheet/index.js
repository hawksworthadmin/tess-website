/**
 * @typedef {import("@prismicio/client").Content.FactSheetSlice} FactSheetSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FactSheetSlice>} FactSheetProps
 * @param {FactSheetProps}
 */
const FactSheet = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for fact_sheet (variation: {slice.variation}) Slices
		</section>
	)
}

export default FactSheet
