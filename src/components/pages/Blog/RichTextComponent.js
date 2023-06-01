import React from 'react'
import { PrismicRichText } from '@prismicio/react'

// This component is responsible for displaying the html from the
// prismic cms

const RichTextComponent = ({ field }) => (
	<PrismicRichText
		field={field}
		components={{
			paragraph: ({ children }) => <p>{children}</p>,
		}}
	/>
)

export default RichTextComponent
