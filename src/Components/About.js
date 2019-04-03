import React, { Component } from 'react';

import '../Style.css'

class About extends Component {
    render() {

        if(this.props.data) {
            var name = this.props.data.name;
            var profilepic= "images/"+this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }
       
        return (
            <section id="about" className="bg-grey">
               <div className="container">
                  <div className="row f-h">
                     <div className="col-md-12 my-auto">
                        <div className="col-md-12">
                           <img src="/img/me-round.png" className="img-responsive pas" alt=""/>
                        </div>
                        <div className="col-md-12 f-light-grey">
                           <h1 className="fjalla my-3 white">ABOUT ME</h1>
                           <p className="helvetica dark-white">{bio}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          );
    }
}

export default About;