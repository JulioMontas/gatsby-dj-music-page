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
        <div style={{
          background:`#1d3851`,
          padding:`3rem 1rem 5rem`
        }}>

        <div className="container">
          <div style={{width:`100%`}}>

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
                <div className="field">

                  <label className="label" htmlFor={"name"}>
                    Your Name
                  </label>

                  <div className="control">
                    <input
                      placeholder="First and Last name"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">

                  <label className="label" htmlFor={"email"}>
                    E-mail
                  </label>

                  <div className="control">
                    <input
                      placeholder="hello@domain.com"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <div style={{marginBottom:`1.2em`}}>
                    <label htmlFor={"message"}>
                      Message
                    </label>
                  </div>
                  <div className="control">
                    <textarea
                      placeholder="Brief description of your legal issue"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <button type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        </div>
      </Layout>
    );
  }
}
