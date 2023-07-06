/**
 * @typedef {import("@prismicio/client").Content.LatestNewsSectionSlice} LatestNewsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LatestNewsSectionSlice>} LatestNewsSectionProps
 * @param {LatestNewsSectionProps}
 */
const LatestNewsSection = ({ slice }) => {
	console.log(slice)
	return (
		<section class="container">
			<div class="section-title">
				<h2 data-aos="fade-up">Latest News</h2>
			</div>

			{/* <div class="row justify-content-center">
				{!error ? (
					news?.map((news, id) => (
						<EachRelease
							key={news?.uid}
							category={news?.data?.category?.slug?.replace(/-/gi, ' ')}
							title={news?.data?.title}
							img={news?.data?.image?.url}
							created_at={news?.first_publication_date}
							alt={news?.data?.image?.alt}
							description={news?.data?.description}
							categoryLink={`${'/news-and-events/press-release'}${
								news?.data?.category?.slug
							}`}
							link={`/news-and-events/press-release/${news?.data?.category?.slug}/${news?.uid}`}
						/>
					))
				) : (
					<p>An error occurred while attempting to fetch the latest news.</p>
				)}

			</div> */}
		</section>
	)
}

const EachRelease = ({
	link,
	title,
	category,
	created_at,
	img,
	alt,
	description,
	categoryLink,
}) => {
	const convertRichTextToPlain = RichText?.asText(description)

	return (
		<div
			class="col-lg-4 col-md-6"
			data-aos-delay="50"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div class="single-blog-box">
				<Link
					style={{ display: 'block', height: '350px', position: 'relative' }}
					href={link}
				>
					<Image fill src={img} alt={alt} style={{ objectFit: 'contain' }} />
				</Link>

				<div class="blog-content">
					<ul>
						<li>
							<Link href={categoryLink}>
								{/* <i class="ri-user-3-fill"></i> */}
								{category}
							</Link>
						</li>
						<li>
							<i class="ri-calendar-line"></i>
							{moment(created_at).format('MMMM DD, YYYY')}
						</li>
					</ul>
					<h3>
						<Link href={link}>{title.split(' ').slice(0, 3).join(' ')}...</Link>
					</h3>
					<p>
						{convertRichTextToPlain?.split(' ')?.slice(0, 13)?.join(' ')}...
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

export default LatestNewsSection
