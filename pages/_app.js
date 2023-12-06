// These styles apply to every route in the application
import '../styles/globals.css'
import { CookiesProvider } from 'react-cookie'
 
export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return(
    <CookiesProvider>
    <Component {...pageProps} />
    </CookiesProvider>
  )
}