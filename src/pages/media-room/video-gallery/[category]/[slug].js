import Layout from '@/components/layout/Layout'
import RichTextComponent from '@/components/pages/Blog/RichTextComponent'
import moment from 'moment'
import { createClient } from '../../../../../prismicio'
import { getStaticPathsSlug } from '../../../../../lib/helperFunctions'
import { NextSeo } from 'next-seo'
import METADATA from '@/METADATA'
import { useRouter } from 'next/router'

export default function VideoDetails({ video: videoData }) {
	const router = useRouter()

	if (router.isFallback) {
	}
	return (
		<Layout>
			{router.isFallback ? (
				<></>
			) : (
				<>
					{' '}
					<NextSeo
						title={`${videoData?.data?.title} | ${METADATA.title}`}
						description={videoData?.data?.meta_description}
						openGraph={{
							images: [
								{
									url: videoData?.data?.meta_image?.url,
									width: videoData?.data?.meta_image?.dimensions?.width,
									height: videoData?.data?.meta_image?.dimensions?.height,
									alt: videoData?.data?.meta_image?.alt,
								},
							],
							title: videoData?.data?.title,
							description: videoData?.data?.meta_description,
							url: `${process.env.NEXT_PUBLIC_BASE_URL}/media-room/video-gallery/${videoData?.data?.category?.slug}/${videoData.uid}`,
						}}
					/>
					<div>
						<div
							className="bg-1 bg-theme-"
							style={{ height: '112px', backgroundColor: '#12B76A' }}
						>
							<div className="container d-flex flex-column justify-content-center h-100">
								<h1 className="fw-400 text-white">Video Gallery</h1>
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

													<h2>{videoData?.data?.title}</h2>

													{
														<RichTextComponent
															field={videoData?.data?.content}
														/>
													}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</>
			)}
		</Layout>
	)
}

export const getStaticProps = async ({ previewData, params }) => {
	const { slug } = params

	const client = createClient({ previewData })
	// try {
	const video = await client.getByUID('video_gallery', slug)

	return {
		props: {
			video,
		},
	}
}

export const getStaticPaths = async () => {
	const client = createClient()

	const paths = await getStaticPathsSlug(client, 'video_gallery')
	return {
		paths,
		fallback: true,
	}
}
