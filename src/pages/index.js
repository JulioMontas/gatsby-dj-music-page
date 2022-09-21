import * as React from "react"
import {Helmet} from "react-helmet";
import Footer from "../components/footer"

export default function IndexPage() {
  return (
    <>
    <div className="bg-[#393939] h-[95vh] grid grid-cols-1 place-items-center h-56 ...">
      <Helmet>
        <title>Music Artist Website</title>
        <meta name="description" content="Music Artist Website" />
        <link rel="canonical" href="https://montas.nyc/" />
      </Helmet>
      <div>
        <h2 className="text-2xl font-bold text-[#FFEA00]">
          Center
        </h2>
      </div>
    </div>
    <Footer />
    </>
  )
}
