import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Typewriter from 'typewriter-effect';

class Intro extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          <ReactTypingEffect
            staticText="Sam Nicholls, I'm a"
            text="Front End Developer"
            speed="100"
          />
        </div>
      </div>
    )
  }
}

export default Intro;