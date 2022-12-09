import 'styles/globals.css'
import Layout from "components/layout"

//fontawsome setting//
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, conig } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function Myapp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Myapp