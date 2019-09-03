import React, { Component } from "react";
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='intro'>
          <h1>Hello, I'm Samuel Nicholls. I'm currently working as a Front End Developer at DRPG.</h1>
          <span role='img' aria-label='Laptop Emoji'>🏌️‍♂️</span>
          <span role='img' aria-label='Laptop Emoji'>⚽</span>
          <span role='img' aria-label='Laptop Emoji'>👨‍💻</span>
          <span role='img' aria-label='Laptop Emoji'>🎮</span>
        </div>
        <About />
        <Skills />
        <Contact />
      </React.Fragment>


    )
  }
}

export default Intro;