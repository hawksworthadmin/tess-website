import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EachVideo({ title, thumbnail, link, alt }) {
	return (
		<div className="col-lg-4 col-md-6" bis_skin_checked="1">
			<div className="single-project" bis_skin_checked="1">
				<Link
					href={link}
					className="ri-play-fill text-theme shadow"
					style={{
						position: 'absolute',
						bottom: '40%',
						right: '45%',
						fontSize: '90px',
						zIndex: 10,
					}}
				></Link>
				<div style={{ position: 'relative', height: '400px' }}>
					<Image fill src={thumbnail} alt={alt || 'thumbnail image'} />
				</div>

				<div className="project-content" bis_skin_checked="1">
					<Link href={link}>{title}</Link>
				</div>
			</div>
		</div>
	)
}
