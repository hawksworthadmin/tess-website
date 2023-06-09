import moment from 'moment'
import { RichText } from 'prismic-dom'
import React from 'react'
import Link from 'next/link'

const EachSearchBlog = ({ posts, queryWord, link }) => {
	console.log(posts)
	return (
		<>
			{posts?.map((post) => {
				const regex = new RegExp(queryWord, 'gi')
				const parts = post?.data?.title?.split(regex)
				console.log('pard', parts)
				return (
					<div style={{ marginTop: '24px' }}>
						<div className="d-flex justify-content-between align-items-center">
							<Link
								href={`${link}/${post?.data?.category?.slug}/${post?.uid}`}
								style={{
									fontWeight: 600,
									fontSize: '20px',
									color: '#101828',
									textTransform: 'capitalize',
								}}
							>
								{parts[0]}{' '}
								<span
									style={{
										textTransform: 'capitalize',
										background: '#FEC84B',
									}}
								>
									{regex.test(post?.data?.title) && queryWord}
								</span>{' '}
								{parts[1]}
							</Link>
							<span>
								Posted {moment(post?.first_publication_date).fromNow()}
							</span>
						</div>
						<p style={{ fontSize: '16px' }}>
							{post.data?.content ||
								(post.data?.description &&
									RichText?.asText(post.data?.content || post.data?.description)
										.split(' ')
										.slice(0, 30)
										.join(' '))}
							...
						</p>
					</div>
				)
			})}
		</>
	)
}

export default EachSearchBlog
