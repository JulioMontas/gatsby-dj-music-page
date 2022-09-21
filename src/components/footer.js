import * as React from "react"
import { Link } from 'gatsby'

const Footer = () => (
  <div className="bg-[#393939] h-[5vh]">
    <div className="flex items-center justify-around text-[#FFEA00]">

      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:underline">
          M O N T A S
        </Link>
      </h1>

      <ul className="flex uppercase tracking-wide">
        <li className="px-6 ...">
          <Link className="hover:underline" to="/mixes">Mixes</Link>
        </li>
        <li className="px-6 ...">
          <Link className="hover:underline" to="/about/">About</Link>
        </li>
        <li className="px-6 ...">
          <Link className="hover:underline" to="/contact">Contact</Link>
        </li>
      </ul>

    </div>
  </div>
)

export default Footer
