import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Press Package • DJ & Producer – Official Websitec</title>
        <meta name="description" content="Press Package" />
        <link rel="canonical" href="https://montas.nyc/about" />
      </Helmet>
      <h2>Press Package</h2>
    </Layout>
  )
}
