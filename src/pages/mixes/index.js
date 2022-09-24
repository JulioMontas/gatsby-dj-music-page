import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../../components/layout"
import { Link } from 'gatsby'

export default function MixesPage() {
  return (
    <Layout>
      <Helmet>
        <title>Mixes • DJ & Producer - Minimal Electronic Music</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/mixes" />
      </Helmet>
      <ul className="w-full flex gap-[1.5rem] overflow-x-scroll ...">
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
        </li>
        <li className="">
          <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
        </li>
      </ul>
    </Layout>
  )
}
