import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from './slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName

/**
 * A list of Route Resolver objects that define how a document's `url` field
 * is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
	{
		type: 'home_page',
		path: '/',
	},
	{
		type: 'who_we_are',
		path: '/who-we-are',
	},
	// {
	// 	type: 'page',
	// 	path: '/:uid',
	// },
	{
		type: 'resource',
		path: '/publications/resources',
	},
	{
		type: 'blopgpost',
		resolvers: {
			category: 'category',
		},
		path: '/publications/blog/:category/:uid',
	},
	{
		type: 'category',
		path: '/publications/blog/:uid',
	},

	{
		type: 'newsletter',
		resolvers: {
			category: 'category',
		},
		path: '/publications/news-letters/:category/:uid',
	},
	{
		type: 'newsletter_category',
		path: '/publications/news-letters/:uid',
	},

	{
		type: 'report',
		resolvers: {
			category: 'category',
		},
		path: '/publications/reports/:category/:uid',
	},
	{
		type: 'report_category',
		path: '/publications/reports/:uid',
	},

	{
		type: 'event',
		resolvers: {
			category: 'category',
		},
		path: '/news-and-events/events/:category/:uid',
	},
	{
		type: 'event_category',
		path: '/news-and-events/events/:uid',
	},

	{
		type: 'press_release',
		resolvers: {
			category: 'category',
		},
		path: '/news-and-events/press-release/:category/:uid',
	},
	{
		type: 'press_release_category',
		path: '/news-and-events/press-release/:uid',
	},

	{
		type: 'video_gallery',
		resolvers: {
			category: 'category',
		},
		path: '/media-room/video-gallery/:category/:uid',
	},
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		...config,
	})

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	})

	return client
}
