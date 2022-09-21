import * as React from "react"
import {Helmet} from "react-helmet";

export default function IndexPage() {
  return (
    <div className="md:container md:mx-auto">
      <Helmet>
        <title>Music Artist Website</title>
        <meta name="description" content="Music Artist Website" />
        <link rel="canonical" href="https://montas.nyc/" />
      </Helmet>
      <h1 className="text-2xl font-bold">
        Title
      </h1>
    </div>
  )
}
