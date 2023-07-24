import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import React from 'react'

const VideoResult = ({ posts, query }) => {
	return (
		<div
			className="row "
			style={{ marginTop: 20, alignItems: 'stretch', gap: '32px' }}
		>
			{posts?.map((post) => {
				/*
				Perform a regex to check the query text is in the post title.
				If its there, split the post title by the query text
			*/
				const regex = new RegExp(query, 'gi')
				const parts = post?.data?.title?.split(regex)
				return (
					<div className="col-lg-5 col-md-6">
						<Link
							href={`/media-room/video-gallery/${post?.uid}`}
							style={{
								display: 'block',
								position: 'relative',
								height: '400px',
								overflow: 'hidden',
								borderRadius: '8px',
								background:
									'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(.jpg)',
							}}
						>
							<Image
								fill
								src={
									post?.type == 'image_gallery'
										? post?.data?.image?.url
										: post?.data?.thumbnail_image?.url
								}
								alt={post?.data?.thumbnail_image?.alt || 'image gallery'}
							/>
						</Link>

						<Link
							href={`/media-room/video-gallery/${post?.uid}`}
							style={{
								fontSize: '20px',
								display: 'block',
								fontWeight: '600',
								color: '#101828',
								marginTop: '24px',
							}}
						>
							{parts?.length > 0 ? parts[0] : ''}{' '}
							<span
								style={{
									textTransform: 'capitalize',
									background: '#FEC84B',
								}}
							>
								{regex.test(post?.data?.title) && query}
							</span>{' '}
							{parts?.length > 0 ? parts[1] : ''}
						</Link>
						<p style={{ fontSize: '16px' }}>
							{RichText?.asText(post.data?.content || post.data?.description)
								.split(' ')
								.slice(0, 19)
								.join(' ')}
							...
						</p>
					</div>
				)
			})}
		</div>
	)
}

export default VideoResult
