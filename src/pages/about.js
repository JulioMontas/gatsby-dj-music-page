import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./mixes/styles.css";

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

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <Layout>
      <Helmet>
        <title>About Me • DJ & Producer – The Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/about" />
      </Helmet>
      <svg width="50" height="50" viewBox="0 0 50 50" className="transform-[rotate(-90deg)] fixed">
        <circle cx="25" cy="25" r="15" pathLength="1" className="stroke-[yellow]" />
        <motion.circle
          cx="25"
          cy="25"
          r="15"
          pathLength="1"
          className="stroke-[#888]"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger} ref={ref} className="h-[100vh] flex flex-col gap-[20px] pt-20 pb-40 overflow-y-scroll ...">

          <motion.p variants={fadeInUp} className="sm:text-xl lg:text-5xl lg:leading-[5rem] sm:leading-[2.2rem] text-[#facc15] font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus libero, finibus et consectetur. Curabitur pharetra ac turpis ac consectetur pellentesque lobortis upretit Pellentesque lectus libero, finibus et consectetur. Curabitur pharetra ac turpis ac consectetur pellentesque lobortis upretit
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus libero, finibus et consectetur. Curabitur pharetra ac turpis ac consectetur pellentesque lobortis upretit Pellentesque lectus libero, finibus et consectetur. Curabitur pharetra ac turpis ac consectetur pellentesque lobortis upretit
          </motion.p>

          <motion.p variants={fadeInUp} className="sm:text-l lg:text-4xl lg:leading-[4rem] sm:leading-[1.8rem] text-[#fde047] font-medium">
            faucibus. Cras ornare arcu vitae neque lobortis varius. Vivamus varius ullamcorper leo, vel sollicitudin augue varius at. Proin lobortis vel orci bibendum facilisis.
            faucibus. Cras ornare arcu vitae neque lobortis varius. Vivamus varius ullamcorper leo, vel sollicitudin augue varius at. Proin lobortis vel orci bibendum facilisis.
          </motion.p>

          <motion.p variants={fadeInUp} className="sm:text-s lg:text-2xl lg:leading-[3rem] sm:leading-[1.7rem] text-[#fef08a] font-light">
            EEtiam nec facilisis mauris. Suspendisse dictum ipsum magna, eget tincidunt arcu interdum in. Etiam tristique tincidunt congue. Proin ac sodales velit. Vivamus varius ullamcorper leo, vel sollicitudin augue Cras ornare arcu vitae neque lobortis varius curabitur neque
            EEtiam nec facilisis mauris. Suspendisse dictum ipsum magna, eget tincidunt arcu interdum in. Etiam tristique tincidunt congue. Proin ac sodales velit. Vivamus varius ullamcorper leo, vel sollicitudin augue Cras ornare arcu vitae neque lobortis varius curabitur neque
          </motion.p>

        </motion.div>
      </motion.div>
    </Layout>
  )
}
