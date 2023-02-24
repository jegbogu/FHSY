import Layout from '../component/layout/layout'
import '@/styles/globals.css'
import { Fragment } from 'react'
 

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
     <Layout>
    <Component {...pageProps} />
    </Layout>
    </Fragment>
  )

}
