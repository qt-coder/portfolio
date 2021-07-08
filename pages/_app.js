import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cursor/>
      <Navbar/>
      <div className="page-container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
