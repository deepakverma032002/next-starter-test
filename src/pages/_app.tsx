import type { AppProps } from 'next/app'
import '../assets/css/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
