import React, { Component } from 'react';

import '../Style.css'

class About extends Component {
    render() {

      if(this.props.data){
         var skillmessage = this.props.data.skillmessage;

         var education = this.props.data.education.map(function(education){
           return <div key={education.school}><h3>{education.school}</h3>
           <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
           <p>{education.description}</p></div>
         })

         var work = this.props.data.work.map(function(work){
           return <div key={work.company}><h3>{work.company}</h3>
               <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
               <p>{work.description}</p>
           </div>
         })

         var skills = this.props.data.skills.map(function(skills){
           var className = 'bar-expand '+skills.name.toLowerCase();
           return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
         })
       }
       
        return (
            <section id="resume" className="py-5">
               <div className="container">
                  <div className="row h-100">
                     <div className="col-md-12">
                        <h1 className="f-white">About Me</h1>
                     </div>
                     <div className="col-md-4">
                        <img src="/img/me.jpg" className="img-responsive pas" alt=""/>
                     </div>
                     <div className="col-md-8 f-light-grey text-left">
                        <p>
                        </p>
                     </div>
                  </div>
               </div>
            </section>
          );
    }
}

export default About;