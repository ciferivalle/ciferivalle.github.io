
import React, { Component } from 'react';

import '../Style.css'

class Footer extends Component {
    render() {
        return (
            <section className="text-center bg-grey py-5">
                {/* <h1 className="roboto white">
                    Reach Me On
                </h1> */}
                <h2 className="lato white">
                    <a className="link link2" href="twitter.com/nataprawiraf">GitHub</a>, <a className="link" href="gitlab.com/ciferivalle">GitLab</a>, <a className="link" href="linkedin.com/in/ciferivalle">LinkedIn</a>
                </h2>
            </section>
               
          );
    }
}

export default Footer;