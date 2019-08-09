import React, { Component } from "react"

class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <h1>Intro Component</h1>
        <span role='img' aria-label='Laptop Emoji'>🏌️‍♂️</span>
        <span role='img' aria-label='Laptop Emoji'>⚽</span>
        <span role='img' aria-label='Laptop Emoji'>👨‍💻</span>
        <span role='img' aria-label='Laptop Emoji'>🎮</span>
      </div>
    )
  }
}

export default Intro;