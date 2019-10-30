import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return (
            <div key={education.school}>
               <h3 className="avenir">{education.school}</h3>
               <p className="futura lime">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
               <p className="dark-white">{education.description}</p>
            </div>
        )
      })
      var work = this.props.data.work.map(function(work){
         var stackLogo = work.stackLogo.map(function(logo) {
            return (<img className="brand px-2" src={process.env.PUBLIC_URL + "/img/logo/" + logo +".svg"} alt={logo}></img>)
          })
        return (
            <div key={work.company} className="my-4">
               <h3 className="avenir">{work.company}</h3>
               <p className="futura lime">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
               <p className="dark-white">{work.description}</p>
               {stackLogo}
            </div>
         )
      })

      var award = this.props.data.awards.map(function(award) {
         return (
            <div key={award.name}>
               <h3 className="avenir">{award.name}</h3>
               <p className="futura lime">{award.organizer}<span>&bull;</span> <em className="date">{award.date}</em></p>
               <p className="dark-white">{award.desc}</p>
            </div>
         )
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume" className="py-5 bg-grey white">
      <div class="container text-left">
         <div className="row">
            <div className="col-md-3">
               <h2><span className="roboto boom">Education</span></h2>
            </div>
            <div className="col-md-9">
               <div className="row">
                  <div className="col-md-12">
                  {education}
                  </div>
               </div>
            </div>
         </div>

         <hr className="style11"/>

         <div className="row work my-5">

            <div className="col-md-3">
               <h2><span className="futura my-5 boom">Work Exp</span></h2>
            </div>

            <div className="col-md-9">
               {work}
            </div>
         </div>

         <hr className="style11"/>

         <div className="row work my-5">

            <div className="col-md-3">
               <h2><span className="futura my-5 boom">Award</span></h2>
            </div>

            <div className="col-md-9">
               {award}
            </div>
         </div>

         <hr className="style11"/>

         <div className="row skill my-5">
            <div className="col-md-3">
               <h2 className="futura boom"><span>Skill</span></h2>
            </div>

            <div className="col-md-9 dark-white">
               <p>{skillmessage}</p> 
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