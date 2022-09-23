import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>M O N T Á S • DJ & Producer - Minimal Electronic Music</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/" />
      </Helmet>

      <svg height="240" width="400">
        <polygon points="220,10 300,210 123,234" fill="#FFEA00"/>
      </svg>
    </Layout>
  )
}
