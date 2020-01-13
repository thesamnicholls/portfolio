import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';

class Intro extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          <h1 className='lfm__typing_effect'>
            Samuel Nicholls, Front End Developer
          </h1>
          {/* <ReactTypingEffect
            text="Samuel Nicholls, Front End Developer"
            speed="100"
          /> */}
        </div>
        <div className='c-contact'>
          <ul className='c-contact__list'>
            <li className='c-contact__item'>
              <a href="https://google.co.uk" className='c-contact__link'>Twitter</a>
            </li>
            <li className='c-contact__item'>
              <a href="https://google.co.uk" className='c-contact__link'>Codepen</a>
            </li>
            <li className='c-contact__item'>
              <a href="https://google.co.uk" className='c-contact__link'>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Intro;