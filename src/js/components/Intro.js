import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          <h1 className='c-intro__text'>Hello, I'm Samuel Nicholls. I'm currently working as a Front End Developer at DRPG and i'm passionate about web development.</h1>
          <span role='img' className='c-emoji' aria-label='Laptop Emoji'>🏌️‍♂️</span>
          <span role='img' className='c-emoji' aria-label='Laptop Emoji'>⚽</span>
          <span role='img' className='c-emoji' aria-label='Laptop Emoji'>👨‍💻</span>
          <span role='img' className='c-emoji' aria-label='Laptop Emoji'>🎮</span>
        </div>
      </div>
    )
  }
}

export default Intro;