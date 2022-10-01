import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Me • DJ & Producer – The Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/contact" />
      </Helmet>
      <a href='mailto:montas@duck.com' className="text-2xl font-bold justify-self-end text-[#FFEA00] hover:underline">
        M O N T A S@Duck.com
      </a>
      <p className="font-bold justify-self-end text-[#facc15]">Contact me for booking or collaborations.</p>
    </Layout>
  )
}
