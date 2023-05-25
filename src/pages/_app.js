import '@/styles/globals.css';
import localFont from 'next/font/local';
import { Syne } from 'next/font/google';

// Fonts
const syne = Syne({
	subsets: ['latin'],
	variable: '--font-syne',
})
const satoshi = localFont({
	src: [
		{
			path: './fonts/Satoshi-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Medium.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-MediumItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Black.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-BlackItalic.woff2',
			weight: '900',
			style: 'italic',
		},
	],
  variable: '--font-satoshi'
})

export default function App({ Component, pageProps }) {
  return (
		<main className={`${syne.variable} ${satoshi.variable}`}>
			<Component {...pageProps} />
		</main>
	)
}
