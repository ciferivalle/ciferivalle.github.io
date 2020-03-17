import React, { Component } from "react";

import "../Style.css";

class Footer extends Component {
  render() {
    return (
      <section className="text-center bg-grey py-5">
        <p class="love white">
          {" "}
          &lt;&gt; with ♥ by{" "}
          <a className="" href="http://github.com/purrfectblack">
            nata
          </a>
        </p>

        <p className="futura white lead">reach me on:</p>
        <h2 className="futura white">
          <a className="link link2" href="http://github.com/nataprawiraf">
            GitHub
          </a>
          ,{" "}
          <a className="link" href="http://gitlab.com/natprawiraf">
            GitLab
          </a>
          ,{" "}
          <a className="link" href="http://linkedin.com/in/nataprawiraf">
            LinkedIn
          </a>
          ,{" "}
          <a className="link link2" href="https://prfctblack.netlify.com/">
            Blog
          </a>
        </h2>
        <h2 className="futura white"></h2>
      </section>
    );
  }
}

export default Footer;
