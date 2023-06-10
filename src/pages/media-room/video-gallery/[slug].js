import Layout from '@/components/layout/Layout'
import RichTextComponent from '@/components/pages/Blog/RichTextComponent'
import moment from 'moment'
import { createClient } from '../../../../prismicio'

export default function VideoDetails({ video: videoData }) {
	return (
		<Layout>
			<div>
				<div
					className="bg-1 bg-theme-"
					style={{ height: '112px', backgroundColor: '#12B76A' }}
				>
					<div className="container d-flex flex-column justify-content-center h-100">
						<h3 className="fw-400 text-white">The Blog Title</h3>
					</div>
				</div>
				<section className="blog-details-area ptb-100">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6">
								<div className="blog-details-content">
									<div
										className="blog-details-img"
										style={{ height: '450px' }}
										bis_skin_checked="1"
									>
										<video
											preload="none"
											className="w-100 h-100 video_poster"
											controls
											src={videoData?.data?.video?.url}
											poster={videoData?.data?.thumbnail_image?.url}
										/>
									</div>
									<div className="blog-top-content">
										<div className="news-content">
											<ul className="admin d-flex">
												<li>
													<i className="ri-calendar-line"></i>
													{moment(videoData?.first_publication_date).format(
														'DD MMMM'
													)}
												</li>
											</ul>

											<h3>{videoData?.data?.title}</h3>

											{<RichTextComponent field={videoData?.data?.content} />}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export const getServerSideProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient(previewData)
	// try {
	const video = await client.getByUID('video_gallery', slug)

	return {
		props: {
			video,
		},
	}
}
