import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import React from 'react'

const VideoResult = ({ posts, query }) => {
	console.log('oist', posts)
	return (
		<div
			className="row "
			style={{ marginTop: 20, alignItems: 'stretch', gap: '32px' }}
		>
			{posts?.map((post) => {
				return (
					<div className="col-lg-5 col-md-6">
						<div
							style={{
								position: 'relative',
								height: '400px',
								overflow: 'hidden',
								borderRadius: '8px',
							}}
						>
							<Image
								fill
								src={
									post?.type == 'image_gallery'
										? post?.data?.image?.url
										: post?.data?.thumbnail_image?.url
								}
								alt={''}
							/>
						</div>
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
							{post?.data?.title?.split(' ')?.map((word, i) => (
								<>
									<span
										style={{
											background:
												query.toLowerCase() == word?.toLowerCase() && '#FEC84B',
										}}
									>
										{word}
									</span>{' '}
								</>
							))}
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
