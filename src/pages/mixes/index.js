import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../../components/layout"
import { Link } from 'gatsby'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    x: 30,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MixesPage() {
  return (
    <Layout>
      <Helmet>
        <title>Mixes • DJ & Producer – The Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/mixes" />
      </Helmet>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.ul variants={stagger} className="container w-full flex gap-[1.5rem] overflow-x-scroll ...">
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(216,216,216,0.10)] border-2 border-[#ECD905] h-[75vh] w-80 rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </Layout>
  )
}
