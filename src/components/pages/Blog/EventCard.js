import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const EventCard = ({ category, date, location, image, title, link, alt }) => {
	return (
		<div class="col-lg-6 col-md-6">
			<div class="single-event-box ">
				<Link
					style={{ height: '400px', position: 'relative', display: 'block' }}
					href={link}
				>
					<Image fill src={image} alt={alt} style={{ objectFit: 'contain' }} />
				</Link>

				<div class="event-content">
					<ul>
						<li>
							<a
								style={{
									background: '#00aa55',
									color: 'white',
									padding: '2px 6px',
									borderRadius: '8px',
								}}
							>
								{category.slice(0, 1).toUpperCase() + category.slice(1)}{' '}
							</a>
							<span>{moment(date).format('MMMM DD, YYYY')} </span>
						</li>
					</ul>
					<h3>
						<Link href={link}>{title}</Link>
					</h3>
					<p>
						<i class="ri-map-pin-2-line"></i> {location}
					</p>
					<Link href={link} class="read-more">
						Read more
						<i class="ri-arrow-right-s-line"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default EventCard
