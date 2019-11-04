
import React, { Component } from 'react';

import '../Style.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
           logoSrc: process.env.PUBLIC_URL + '/img/logo.png',
        };
      }
    render() {
        return (
            // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //     <div className="container">

            //     <div className="col-auto">
            //         <div className="text-left">
            //             <img  src={this.state.logoSrc} className="img-responsive brand" alt=""/>
            //             <span className="ml-3 hel-bold">Fachry Nataprawira</span>
            //         </div>
            //     </div>

            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav mr-auto">
            //             </ul>
            //         </div>

            //     </div>
            // </nav>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <img  src={this.state.logoSrc} className="img-responsive brand" alt=""/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                        <span class="ml-3 hel" href="#">Fachry Nataprawira</span>
                      </li>
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <a class="ml-3 hel link-g" href="/">Me</a>
                        <a class="ml-3 hel link-g" href="http://byteofscript.wordpress.com/">Blog</a>
                    </form>
                  </div>
                </div>
              </nav>
          );
    }
}

export default Header;
