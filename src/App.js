import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import $ from 'jquery';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Portfolio from './Components/Portofolio';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {

    return (
      <div className="App">
        <Header /> 
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer />
      </div>
    );
  }
}

export default App;
