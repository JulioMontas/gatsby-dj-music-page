import * as React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (

  <div className="bg-[#393939] fixed bottom-0 left-0 right-0 sm:py[10px 0px 0px] h-[7vh]">
    <div className="flex items-center justify-around text-[#FFEA00] font-bold uppercase tracking-widest">

      <h1 className="sm:text-sm lg:text-2xl">
        <Link to="/" className="hover:text-[#DBCA08]">
          M O N T Á S
        </Link>
      </h1>

      <ul className="flex justify-around">
        <li className="sm:text-[16px] lg:text-[21px]">
          <Link className="hover:scale-[2] block transition duration-700  ease-out hover:ease-in-out" to="/mixes">🎹</Link>
        </li>
        <li className="sm:text-[16px] lg:text-[21px] sm:px-[1.25rem] ... lg:px-8 ...">
          <Link className="hover:scale-[2] block transition duration-700  ease-out hover:ease-in-out" to="/about/">🙍</Link>
        </li>
        <li className="sm:text-[16px] lg:text-[21px]">
          <Link className="hover:scale-[2] block transition duration-700  ease-out hover:ease-in-out" to="/contact">✉️</Link>
        </li>
      </ul>

    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
