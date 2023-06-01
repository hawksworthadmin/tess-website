import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/owl.theme.default.min.css'
// import "../../public/assets/css/owl.carousel.min.css";
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


export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init()
	},[])
	return <PrismicPreview>
		<Component {...pageProps} />
	</PrismicPreview>
}
