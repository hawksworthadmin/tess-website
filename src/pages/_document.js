import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>TESS - BESDA AF</title>
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
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
