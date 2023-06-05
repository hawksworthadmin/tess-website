import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const EventCard = ({ category, date, location, image, title, link, alt }) => {
	return (
		<div class="col-lg-4 col-md-6">
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
							{category}
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
