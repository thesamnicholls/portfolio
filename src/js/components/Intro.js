import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          <h1 className='c-intro__text'>
            Hello, I'm Samuel Nicholls. 
            I'm currently working as a Front End Developer at DRPG and i'm passionate about web development.
          </h1>
        </div>
        <div className='c-intro'>
          <h1 className='c-intro__text'>
            This website is currently under construction, if you have any questions message me on twitter: @SamuelNicholls_
          </h1>
        </div>
      </div>
    )
  }
}

export default Intro;