import '@/styles/globals.css'
import StateWraper from '@/components/stateWraper'

export default function App({ Component, pageProps }) {
  return <StateWraper>
       <Component {...pageProps} />
  </StateWraper>
}
