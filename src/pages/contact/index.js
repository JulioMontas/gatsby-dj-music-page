import * as React from "react"
import { navigate } from "gatsby-link";
import Layout from "../../components/layout"
import { motion } from "framer-motion"
import "./styles.css";

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

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger} className="flex gap-10 items-center items-baseline sm:flex-col lg:flex-row-reverse">



        <div>

        <motion.ul variants={fadeInUp} className="socialMediaLinks w-full mb-[3.2rem]">
        <li>
        <h2 variants={fadeInUp} className="justify-self-end mb-2 text-[#fde047] sm:text-sm tracking-wide">Social Media</h2>
        </li>
          <li>
            <a href="https://soundcloud.com/juliomontas" className="block text-[#facc15] text-lg hover:underline border p-3 rounded">SoundCloud</a>
          </li>
          <li>
            <a href="https://ra.co/dj/montas" className="block text-[#facc15] text-lg hover:underline border p-3 rounded mt-[1rem]">Resident Advisor</a>
          </li>
        </motion.ul>


          <motion.h2 variants={fadeInUp} className="justify-self-end mb-2 text-[#fde047] sm:text-sm tracking-wide">My latest mixes and appearances. 🎉</motion.h2>
          <motion.form variants={fadeInUp}
            name="contact"
            method="post"
            action="/contact/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <div className="flex">
              <div className="field">
                <div className="control">
                  <input
                    placeholder="Email"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <button type="submit" id="button">
                  Subscribe
                </button>
              </div>
            </div>
        </motion.form>

        <motion.a variants={fadeInUp}
          href=""
          className="block justify-self-end text-center font-bold rounded-[10px] sm:text-sm lg:text-base w-full mt-[4rem] bg-[#FFEA00] p-3 hover:bg-[#DBCA08]"
        >
          Contact me for booking or collaboration
        </motion.a>



        </div>







        </motion.div>
      </motion.div>
      </Layout>
    );
  }
}
