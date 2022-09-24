import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Me • DJ & Producer - Minimal Electronic Music</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/about" />
      </Helmet>
      <div className="">
        <p className="xm:text-xl lg:text-5xl lg:leading-[5rem] xm:leading-[2.2rem] text-[#facc15] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus libero, finibus et consectetur ut, auctor vel mauris. Vestibulum gravida pretium urna ut viverra. Curabitur pharetra ac turpis ac consectetur pellentesque lobortis upretit</p>
        <p className="xm:text-l lg:text-4xl lg:leading-[4rem] xm:leading-[1.8rem] text-[#fde047] font-medium">faucibus. Cras ornare arcu vitae neque lobortis varius. Vivamus varius ullamcorper leo, vel sollicitudin augue varius at. Proin lobortis vel orci bibendum facilisis. Duis nec est magna.</p>
        <p className="xm:text-s lg:text-2xl lg:leading-[3rem] xm:leading-[1.7rem] text-[#fef08a] font-light">EEtiam nec facilisis mauris. Suspendisse dictum ipsum magna, eget tincidunt arcu interdum in. Etiam tristique tincidunt congue. Proin ac sodales velit. Vivamus varius ullamcorper leo, vel sollicitudin augue Cras ornare arcu vitae neque lobortis varius curabitur neque</p>
      </div>
    </Layout>
  )
}
