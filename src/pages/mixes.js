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
          <Link className="" to="/mixes">Mixes 01</Link>
        </li>
        <li className="">
          <Link className="" to="/mixes">Mixes 02</Link>
        </li>
        <li className="">
          <Link className="" to="/mixes">Mixes 03</Link>
        </li>
      </ul>
    </Layout>
  )
}
