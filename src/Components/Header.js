
import React, { Component } from 'react';

import '../Style.css'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="col-md-12">
                <img  src="/img/my-logo.png" className="img-responsive brand" alt=""/>
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