import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Me • DJ & Producer - Minimal Electronic Music</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/contact" />
      </Helmet>
      <a href='mailto:montas@duck.com' className="text-2xl font-bold">montas@duck.com</a>
    </Layout>
  )
}
