import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../../../components/layout"
import { Link } from 'gatsby'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
// import "./styles.css";

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
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <Layout>
      <Helmet>
        <title>Mixes • DJ & Producer – Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/mixes" />
      </Helmet>
      {/*
      <svg width="50" height="50" viewBox="0 0 50 50" className="transform-[rotate(-90deg)] fixed z-50">
        <circle cx="17" cy="17" r="15" pathLength="1" className="stroke-[yellow]" />
        <motion.circle
          cx="17"
          cy="17"
          r="15"
          pathLength="1"
          className="stroke-[#888]"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      */}
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.ul variants={stagger} ref={ref} className="container w-full flex gap-[1rem] overflow-x-scroll ...">

          <motion.li variants={fadeInUp}>
            <Link
              className="block bg-fixed bg-[rgba(150,150,150,0.10)] border-2 border-[#ECD905] sm:h-[75vh] lg:h-[85vh] sm:w-[280px] lg:w-[320px] rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px] hover:border-[#333] transition-all duration-700"
              to="/music/mixes/half-and-half-raw-studio-mix"
            >
              <h2 className="mt-[20vh] px-[10px] text-center text-[yellow] tracking-wider text-[18px]">
                Half and Half (Raw Studio Mix)
              </h2>
            </Link>
          </motion.li>
          {/*
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(150,150,150,0.10)] border-2 border-[#ECD905] h-[85vh] sm:w-[280px] lg:w-[320px] rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(150,150,150,0.10)] border-2 border-[#ECD905] h-[85vh] sm:w-[280px] lg:w-[320px] rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(150,150,150,0.10)] border-2 border-[#ECD905] h-[85vh] sm:w-[280px] lg:w-[320px] rounded-tl-[195.5px] rounded-tr-[10px] rounded-br-[195.5px] rounded-bl-[30px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(150,150,150,0.10)] border-2 border-[#ECD905] h-[85vh] sm:w-[280px] lg:w-[320px] rounded-tl-[195.5px] rounded-tr-[195.5px] rounded-br-[10px] rounded-bl-[108px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <Link className="block bg-[rgba(150,150,150,0.10)] border-2 border-[#ECD905] h-[85vh] sm:w-[280px] lg:w-[320px] rounded-tl-[0] rounded-tr-[195.5px] rounded-br-[29px] rounded-bl-[195.5px] hover:border-[#333] transition-all duration-700" to="/mixes/01"></Link>
          </motion.li>
          */}
        </motion.ul>
      </motion.div>
    </Layout>
  )
}
