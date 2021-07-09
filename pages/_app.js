import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>qt coder</title>
      </Head>
      <Cursor />
      <Navbar />
      <div className="page-container">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
}

export default MyApp