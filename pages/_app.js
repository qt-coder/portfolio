import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '@primer/components'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider colorMode='day'>
      <Head>
        <title>qt coder</title>
      </Head>
      <Cursor />
      <Navbar />
      <div className="page-container">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp