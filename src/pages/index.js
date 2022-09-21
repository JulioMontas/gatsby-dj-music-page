import * as React from "react"
import {Helmet} from "react-helmet";
import Footer from "../components/footer"

export default function IndexPage() {
  return (
    <>
    <div className="grid grid-cols-1 place-items-center bg-[#393939] h-[95vh]">
      <Helmet>
        <title>M O N T Á S • Artist DJ - Minimal House & Dub Techno</title>
        <meta name="description" content="Originally from the Dominican Republic now based in NYC." />
        <link rel="canonical" href="https://montas.nyc/" />
      </Helmet>
      <div>
      <svg height="240" width="500">
        <polygon points="220,10 300,210 123,234" fill="#FFEA00"/>
      </svg>
      </div>
    </div>
    <Footer />
    </>
  )
}
