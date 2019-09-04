import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='intro'>
          <h1>Hello, I'm Samuel Nicholls. I'm currently working as a Front End Developer at DRPG.</h1>
          <span role='img' className='emoji' aria-label='Laptop Emoji'>🏌️‍♂️</span>
          <span role='img' className='emoji' aria-label='Laptop Emoji'>⚽</span>
          <span role='img' className='emoji' aria-label='Laptop Emoji'>👨‍💻</span>
          <span role='img' className='emoji' aria-label='Laptop Emoji'>🎮</span>
        </div>
      </React.Fragment>


    )
  }
}

export default Intro;