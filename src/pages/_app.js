import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/owl.theme.default.min.css'
// import '../../public/assets/css/owl.carousel.min.css'

import '../../public/assets/css/remixicon.css'
import '../../public/assets/css/flaticon.css'
import '../../public/assets/css/meanmenu.min.css'
import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/magnific-popup.min.css'
import '../../public/assets/css/odometer.min.css'
import '../../public/assets/css/date-picker.min.css'
import '../../public/assets/css/style.css'
import '../../public/assets/css/responsive.css'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import Link from 'next/link'
import { DefaultSeo } from 'next-seo'
import defaultSeo from '@/data/defaultSeo'
import Head from 'next/head'
import { createClient } from '../../prismicio'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<>
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
				<PrismicPreview repositoryName={process.env.PRISMIC_REPO_NAME}>
					<DefaultSeo {...defaultSeo} />
					<Component {...pageProps} />
				</PrismicPreview>
			</PrismicProvider>
		</>
	)
}
