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
            <section id="about" className="bg-grey py-5">
               <div className="container">
                  <div className="row h-100">
                  <div className="col-md-12">
                  <h1 className="f-white">About Me</h1>
                  </div>
                     <div className="col-md-4">
                        <img src="/img/me.jpg" className="img-responsive pas" alt=""/>
                     </div>
                     <div className="col-md-8 f-light-grey text-left">
                        <p>{bio}</p>
                     </div>
                  </div>
               </div>
            </section>
          );
    }
}

export default About;