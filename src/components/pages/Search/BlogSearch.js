import React from 'react'
import EachSearchBlog from './EachSearchBlog'
import VideoResult from './VideoResult'
import EachPhoto from '../PhotoGallery/EachPhoto'

const BlogSearch = ({ posts, title, queryWord, link }) => {
	if (title == 'Videos') {
		return (
			<section style={{ marginTop: '36px' }}>
				<h2>{title}</h2>

				<VideoResult posts={posts} query={queryWord} />
			</section>
		)
	}
	if (title == 'Photos') {
		return (
			<section style={{ marginTop: '36px' }}>
				<h2>{title}</h2>
				<div
					className="row "
					style={{ marginTop: 20, alignItems: 'stretch', gap: '32px' }}
				>
					{posts?.map((photo) => (
						<EachPhoto
							key={photo?.id}
							img={photo?.data?.image?.url}
							alt={photo?.data?.image?.alt}
						/>
					))}
				</div>
			</section>
		)
	}
	return (
		<section style={{ marginTop: '36px' }}>
			<h2>{title}</h2>

			<EachSearchBlog posts={posts} queryWord={queryWord} link={link} />
		</section>
	)
}

export default BlogSearch
