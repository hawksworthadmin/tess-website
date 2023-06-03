import React from 'react'
import { PrismicRichText } from '@prismicio/react'

// This component is responsible for displaying the html from the
// prismic cms

const RichTextComponent = ({ field }) => (
	<PrismicRichText
		field={field}
		components={{
			// This does not mean all the element is wrapped in a paragraph
			// Rather it tells how each paragraph should be displayed
			// To confirm this, inspect the newsletter page with this post
			// "Unraveling the Mysteries of the Universe: A Journey through Astrophysics"
			paragraph: ({ children }) => <p>{children}</p>,
		}}
	/>
)

export default RichTextComponent
