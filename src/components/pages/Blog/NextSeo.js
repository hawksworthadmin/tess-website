import React from 'react'
import { ArticleJsonLd, NextSeo, NewsArticleJsonLd } from 'next-seo'

const NextSeoBlog = ({
	title,
	metaDescription,
	postLink,
	image,
	publicationType,
	publishedDate,
	description,
	category,
}) => {
	return (
		<>
			<NextSeo
				title={`${title} | TESS Program`}
				description={metaDescription}
				twitter={{
					cardType: 'summary_large_image',
				}}
				openGraph={{
					type: 'website',
					url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
					locale: 'en_IE',
					siteName: 'TESS Program',
					images: [
						{
							url: image,
						},
					],
					title: `${title} | TESS Program`,
				}}
				canonical={`${process.env.NEXT_PUBLIC_BASE_URL}${postLink}`}
			/>
			{publicationType !== 'news' ? (
				<ArticleJsonLd
					type={publicationType == 'blog' ? 'BlogPosting' : 'Article'}
					url={postLink}
					title={title}
					images={[image]}
					datePublished={new Date(publishedDate)?.toDateString}
					description={metaDescription}
					authorName={'TESS'}
				/>
			) : (
				<NewsArticleJsonLd
					url={postLink}
					section={category}
					title={title}
					images={[image]}
					datePublished={new Date(publishedDate)?.toDateString}
					description={metaDescription}
					authorName={'TESS'}
					publisherName="TESS"
					body={description}
					isAccessibleForFree={true}
				/>
			)}
		</>
	)
}

export default NextSeoBlog
