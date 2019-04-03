import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return (
            <div key={education.school}>
               <h3 className="avenir">{education.school}</h3>
               <p className="futura">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
               <p>{education.description}</p>
            </div>
        )
      })
      var work = this.props.data.work.map(function(work){
        return (
            <div key={work.company}>
               <h3 className="avenir">{work.company}</h3>
               <p className="futura">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
               <p>{work.description}</p>
            </div>
         )
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume" className="my-5">
      <div class="container text-left">
         <div className="row">
            <div className="col-md-3">
               <h2><span className="futura u">EDUCATION</span></h2>
            </div>
            <div className="col-md-9">
               <div className="row">
                  <div className="col-md-12">
                  {education}
                  </div>
               </div>
            </div>
         </div>

         <div className="row work my-5">

            <div className="col-md-3">
               <h2><span className="futura u my-5">WORK</span></h2>
            </div>

            <div className="col-md-9">
               {work}
            </div>
         </div>

         <div className="row skill my-5">

            <div className="col-md-3">
               <h2 className="futura u"><span>SKILLS</span></h2>
            </div>

            <div className="col-md-9">

               <p>{skillmessage}
               </p>

               <div className="bars">
                  <ul className="skills">
                  {skills}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Resume;