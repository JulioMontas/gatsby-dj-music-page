import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <div className="grid grid-cols-1 place-items-center bg-[#393939] h-[95%] w-full absolute">
        <div className="container grid grid-cols-1 place-items-center">
          <motion.main
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3
            }}
          >
            {children}
          </motion.main>
        </div>
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
