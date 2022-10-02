import * as React from "react"
import { navigate } from "gatsby-link";
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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

            <div className="w-5/6 md:w-1/3">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >

                <div className="field mb-6">
                  <label className="label block text-gray-700 text-sm font-bold mb-2" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      placeholder="Email"
                      type={"email"}
                      name={"email"}
                      id={"email"}
                    />
                  </div>
                </div>


                <div className="field">
                  <button className="button is-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>


        </motion.div>
      </motion.div>
    </Layout>
  )
}
