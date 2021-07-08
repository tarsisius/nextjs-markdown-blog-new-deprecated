import '@/styles/globals.css'
import '@/styles/highlight.css'
import Layout from '@/layouts/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
