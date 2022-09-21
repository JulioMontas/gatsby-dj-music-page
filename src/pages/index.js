import * as React from "react"
import {Helmet} from "react-helmet";
import Footer from "../components/footer"

export default function IndexPage() {
  return (
    <>
    <div className="grid grid-cols-1 place-items-center bg-[#393939] h-[95vh]">
      <Helmet>
        <title>Music Artist Website</title>
        <meta name="description" content="Music Artist Website" />
        <link rel="canonical" href="https://montas.nyc/" />
      </Helmet>
      <div>
      <svg height="250" width="500">
        <polygon points="220,10 300,210 170,250 123,234" fill="#FFEA00"/>
      </svg>
      </div>
    </div>
    <Footer />
    </>
  )
}
