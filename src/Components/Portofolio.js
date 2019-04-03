import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'img/'+projects.image;
        return <div key={projects.title} className="col-md-4">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} className="img-responsive project-img my-3" />
               <div className="overlay">
                  <div className="portfolio-item-meta futura">
                        <h5>{projects.title}</h5>
                        <p className="avenir">{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="col-md-12 text-center my-5">
            <h1 className="">Check Out Some of My Works.</h1>
          </div>

        <div className="container">
            <div className="col-md-12">
                <div id="portfolio-wrapper" className="row">
                        {projects}
                </div>
            </div>
        </div>


      </div>
   </section>
    );
  }
}

export default Portfolio;