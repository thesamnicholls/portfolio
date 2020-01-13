import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';

class Intro extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          {/* <h1 className='c-intro__text'>
            Hello, I'm Samuel Nicholls. 
            I'm currently working as a Front End Developer at DRPG and i'm passionate about web development.
          </h1> */}
          <ReactTypingEffect
            text="I'm Samuel Nicholls. I'm a Front End Developer"
            speed="100"
          />
        </div>
      </div>
    )
  }
}

export default Intro;