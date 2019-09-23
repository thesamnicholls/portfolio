import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <h1>Hello, I'm Samuel Nicholls. I'm currently working as a Front End Developer at DRPG and i'm passionate about web development.</h1>
        <span role='img' className='emoji' aria-label='Laptop Emoji'>🏌️‍♂️</span>
        <span role='img' className='emoji' aria-label='Laptop Emoji'>⚽</span>
        <span role='img' className='emoji' aria-label='Laptop Emoji'>👨‍💻</span>
        <span role='img' className='emoji' aria-label='Laptop Emoji'>🎮</span>
      </div>
    )
  }
}

export default Intro;