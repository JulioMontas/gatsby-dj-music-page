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
        <li className="sm:text-sm">
          <Link className="hover:text-[#DBCA08]" to="/mixes">🎹 Mixes</Link>
        </li>
        <li className="sm:text-sm sm:px-4 ... lg:px-8 ...">
          <Link className="hover:text-[#DBCA08]" to="/about/">🙍 Me</Link>
        </li>
        <li className="sm:text-sm">
          <Link className="hover:text-[#DBCA08]" to="/contact">✉️ Contact</Link>
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
