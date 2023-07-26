// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v2beta1 as DialogFlow } from 'dialogflow'

import * as path from 'path'
import { v4 as uuid } from 'uuid'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { message } = req.body

		const sessionClient = new DialogFlow.SessionsClient({
			keyFilename: path.join(process.cwd(), 'key.json'),
		})

		const sessionPath = sessionClient.sessionPath(
			process.env.GOOGLE_PROJECT_ID,
			uuid()
		)

		const request = {
			session: sessionPath,
			queryInput: {
				text: message,
			},
		}

		try {
			const response = await sessionClient.detectIntent({
				session: sessionPath,
				queryInput: {
					text: {
						text: message,
						languageCode: 'en-us',
					},
				},
				queryParams: {
					knowledgeBaseNames: [
						'projects/brew-crew-be91e/knowledgeBases/NzA0Mjk0OTc2OTI2NTY3NjI4OA',
					],
				},
			})
			console.log(response[0])
			res.status(200).send({ data: response[0].queryResult.fulfillmentText })
		} catch (error) {
			console.log(error)
			res.status(422).send({ error })
		}
	}
}
