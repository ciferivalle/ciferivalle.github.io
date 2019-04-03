import React, { Component } from 'react';

import '../Style.css'
import '../js/About.js'

class About extends Component {

   
   constructor(props) {
      super(props);
      this.state = {
         imgSrc: '/img/me.png',
         aboutBg: '/img/me-bg.png'
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
 
    }

   handleMouseOver() {
      this.setState({
        imgSrc: '/img/me-moshed.gif'
      });
    }
  
    handleMouseOut() {
      this.setState({
        imgSrc: '/img/me.png'
      });
    }

   

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
        const aboutStyle = {
         color: 'blue',
         backgroundImage: 'url(' + this.state.aboutBg + ')' ,
         backgroundColor:'rgba(0,0,0,.6)',
         backgroundSize: 'cover'
         
       };
       
        return (
            <section id="about" className="" style={aboutStyle}>
               <div className="container">
                  <div className="row f-h">
                     <div className="col-md-12 my-auto">
                        {/* <div className="col-md-12">
                           <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt="mypic" className="profile-img img-responsive pas moshed"/>
                        </div> */}
                        <div className="col-lg-6 col-md-12 white text-left">
                           <h1 className="avenir">
                              Hi! I'm Nata!
                              Information Security Enthusiast and Software Engineer!
                           </h1>
                           <p className="futura gray">Click me to see more!</p>
                           {/* <p className="helvetica dark-white">{bio}</p> */}
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          );
    }
}

export default About;