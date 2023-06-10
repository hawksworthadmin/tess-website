// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DialogFlow from '@google-cloud/dialogflow'
import * as path from 'path'
import { v4 as uuid } from 'uuid'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { message } = req.body
		console.log('message', message)

		console.log(message)
		console.log(path.join('./', 'key.json'))

		const sessionClient = new DialogFlow.SessionsClient({
			keyFilename: path.join('./', 'key.json'),
		})

		const sessionPath = sessionClient.projectAgentSessionPath(
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
			})

			console.log(response[0].queryResult.fulfillmentText)

			res.status(200).send({ data: response[0].queryResult.fulfillmentText })
		} catch (error) {
			console.log(error)
			res.status(422).send({ error })
		}
	}
}
