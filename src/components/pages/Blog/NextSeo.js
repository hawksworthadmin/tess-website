import React from 'react'
import { ArticleJsonLd, NextSeo, NewsArticleJsonLd } from 'next-seo'
import METADATA from '@/METADATA'

const NextSeoBlog = ({
	title,
	metaDescription,
	postLink,
	image,
	publicationType,
	publishedDate,
	description,
	category,
	width,
	height,
	alt,
}) => {
	return (
		<>
			<NextSeo
				title={`${title} | ${METADATA.title}`}
				description={metaDescription}
				twitter={{
					cardType: 'summary_large_image',
				}}
				openGraph={{
					type: 'website',
					url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
					locale: 'en_IE',
					siteName: `${METADATA.title}`,
					images: [
						{
							url: image,
							width,
							height,
							alt,
						},
					],
					title: `${title} | ${METADATA.title}`,
				}}
				canonical={`${process.env.NEXT_PUBLIC_BASE_URL}${postLink}`}
			/>
			{publicationType !== 'news' ? (
				<ArticleJsonLd
					type={publicationType == 'blog' ? 'BlogPosting' : 'Article'}
					url={postLink}
					title={`${title} | ${METADATA.title}`}
					images={[image]}
					datePublished={new Date(publishedDate)?.toDateString}
					description={metaDescription}
					authorName={METADATA.title}
				/>
			) : (
				<NewsArticleJsonLd
					url={postLink}
					section={category}
					title={`${title} | ${METADATA.title}`}
					images={[image]}
					datePublished={new Date(publishedDate)?.toDateString}
					description={metaDescription}
					authorName={METADATA.title}
					publisherName={METADATA.title}
					body={description}
					isAccessibleForFree={true}
				/>
			)}
		</>
	)
}

export default NextSeoBlog
