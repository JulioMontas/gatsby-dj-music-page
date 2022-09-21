import * as React from "react"
import { Link } from 'gatsby'

const Footer = () => (
  <div className="bg-[#393939] h-[5vh]">
    <div class="flex items-center justify-around text-[#FFEA00]">

      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:underline">
          M O N T A S
        </Link>
      </h1>

      <ul class="flex">
        <li class="mr-6">
          <Link class="hover:text-blue-800" to="/mixes">Mixes</Link>
        </li>
        <li class="mr-6">
          <Link class="hover:text-blue-800" to="/about/">About</Link>
        </li>
        <li class="mr-6">
          <Link class="hover:text-blue-800" to="/contact">Contact</Link>
        </li>
      </ul>

    </div>
  </div>
)

export default Footer
