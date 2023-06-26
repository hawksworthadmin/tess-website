import { createClient } from '@prismicio/client'
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'
import * as prismic from '@prismicio/client'

export const getServerSideProps = async (ctx) => {
	const client = prismic.createClient(process.env.PRISMIC_API_URL)

	const allData = await client.get({
		filters: [
			prismic.filter.any('document.type', [
				'blopgpost',
				'press_release',
				'report',
				'event',
				'newsletter',
			]),
		],
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	console.log(allData)
	const fields = allData.results.map((post) => ({
		loc:
			post.type == 'blopgpost'
				? `${process.env.NEXT_PUBLIC_BASE_URL}/publications/blog/${post?.data?.category?.slug}/${post.uid}`
				: post.type == 'report'
				? `${process.env.NEXT_PUBLIC_BASE_URL}/publications/reports/${post?.data?.category?.slug}/${post.uid}`
				: post.type == 'press_release'
				? `${process.env.NEXT_PUBLIC_BASE_URL}/news_and_event/press-release/${post?.data?.category?.slug}/${post.uid}`
				: post.type == 'event'
				? `${process.env.NEXT_PUBLIC_BASE_URL}/news_and_event/events/${post?.data?.category?.slug}/${post.uid}`
				: post.type == 'newsletter' &&
				  `${process.env.NEXT_PUBLIC_BASE_URL}/publications/news-letters/${post?.data?.category?.slug}/${post.uid}`,
		lastmod: new Date().toISOString(),
	}))
	console.log('fields', fields)

	return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}
