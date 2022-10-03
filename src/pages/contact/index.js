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
        <motion.div variants={stagger} className="flex gap-20 items-center items-baseline sm:flex-col lg:flex-row">

        <p className="justify-self-end text-center mt-12 rounded-[10px] text-sm" id="button">For Booking or Collaboration</p>

        <div>
          <form
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
            <motion.h2 variants={fadeInUp} className="font-bold justify-self-end mt-2 text-[#facc15]">Sign up for my latest mixes and appearance. 🎉</motion.h2>
        </form>
        </div>


        {/*
        <div className="socialMediaLinks">
        </div>
        */}

        </motion.div>
      </motion.div>
      </Layout>
    );
  }
}
