import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../../components/layout"
import { motion } from "framer-motion"

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

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Me • DJ & Producer – The Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/contact" />
      </Helmet>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger}>
          <motion.a variants={fadeInUp} href='mailto:montas@duck.com' className="text-2xl font-bold justify-self-end text-[#FFEA00] hover:underline">M O N T A S@Duck.com</motion.a>
          <motion.p variants={fadeInUp} className="font-bold justify-self-end text-[#facc15]">Contact me for booking or collaborations.</motion.p>


          <div className="absolute w-full md:w-2/3">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          </div>


        </motion.div>
      </motion.div>
    </Layout>
  )
}
