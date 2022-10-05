import * as React from "react"
import { navigate } from "gatsby-link";
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
        <motion.div variants={stagger} className="flex gap-10 items-center items-baseline sm:flex-col tracking-widest">
        <div className="sm:w-[90vw] lg:w-[45vw] grid gap-20">

          <motion.ul variants={fadeInUp} className="socialMediaLinks">
            <li className="mb-2">
              <h2 variants={fadeInUp} className="justify-self-end text-[#fde047] sm:text-sm lg:text-[18px]">Follow Me</h2>
            </li>
            <li>
              <a href="https://soundcloud.com/juliomontas" className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700">SoundCloud</a>
            </li>
            <li className="mt-[1rem]">
              <a href="https://ra.co/dj/montas" className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700">Resident Advisor</a>
            </li>
          </motion.ul>

          <motion.div variants={fadeInUp}>
            <h2 variants={fadeInUp} className="justify-self-end mb-3 text-[#fde047] sm:text-sm lg:text-[18px]">Contact Me</h2>
            <a variants={fadeInUp}
              href=""
              className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
            >
              Booking
            </a>
            <a variants={fadeInUp}
              href=""
              className="mt-[1rem] block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
            >
              Collaboration
            </a>
          </motion.div>

          <motion.form variants={fadeInUp}
            name="contact"
            method="post"
            action="/contact/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <h2 variants={fadeInUp} className="justify-self-end mb-3 text-[#fde047] sm:text-sm lg:text-[18px]">Stay Updated 🎉</h2>
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
                <div className="control w-full">
                  <input
                    placeholder="Email"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    required={true}
                    className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-[200px]"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="bg-[rgba(150,150,150,0.10)] bg-[#ECD905] text-[#333] text-lg rounded-br-[10px] rounded-tr-[10px] w-full pt-4 pb-3 w-[120px]">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.form>

        </div>
        </motion.div>
      </motion.div>
      </Layout>
    );
  }
}
