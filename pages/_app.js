import '../styles/globals.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/meanmenu.css'
import '../styles/form.css'
import '../styles/creditcard.css'
import Context from '../src/context/context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  )
}

export default MyApp
