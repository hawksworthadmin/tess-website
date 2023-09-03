import METADATA from '@/METADATA'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* <title>{METADATA.title}</title> */}
				{/* <meta name="description" content={METADATA.description} /> */}

				{/* Open Graph Tags */}
				{/* <meta property="og:title" content={METADATA.title} />
				<meta property="og:description" content={METADATA.description} />
				<meta property="og:image" content={METADATA.og_image} />
				<meta property="og:url" content={METADATA.base_url} />
				<meta property="og:type" content="website" /> */}
				{/* Twitter Card Tags */}
				{/* <meta name="twitter:title" content={METADATA.title} />
				<meta name="twitter:description" content={METADATA.description} />
				<meta name="twitter:image" content={METADATA.og_image} /> */}

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Syne:wght@300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<script
					async
					defer
					src="https://static.cdn.prismic.io/prismic.js?new=true&repo=tess-website"
				></script>
				<link
					href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body style={{ overflowX: 'hidden' }}>
				<Main />
				<div id="myportal"></div>
				<NextScript />
			</body>
		</Html>
	)
}
