/*
	This page handles preview request from the prismic CMS
	so that content creator can preview their contents
	before publishing
*/
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import { createClient } from '../../../prismicio'

export default async (req, res) => {
	const client = createClient({ req })

	await setPreviewData({ req, res })

	await redirectToPreviewURL({ req, res, client })
}
