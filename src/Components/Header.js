
import React, { Component } from 'react';

import '../Style.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
           logoSrc: process.env.PUBLIC_URL + '/img/my-logo.png',
        };
      }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="col-md-12">
                <img  src={this.state.logoSrc} className="img-responsive brand" alt=""/>
            </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                </ul>
                </div>
            </nav>
          );
    }
}

export default Header;