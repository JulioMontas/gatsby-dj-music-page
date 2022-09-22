import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default function MixesPage() {
  return (
    <Layout>
      <Helmet>
        <title>Mixes • DJ & Producer - Minimal Electronic Music</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/mixes" />
      </Helmet>
      <ul className="flex gap-[2.75rem]">
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-72 rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px]" to="/mixes"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-72 rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px]" to="/mixes"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-72 rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px]" to="/mixes"></Link>
        </li>
      </ul>
    </Layout>
  )
}
