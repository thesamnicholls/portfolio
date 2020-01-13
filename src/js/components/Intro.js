import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Typewriter from 'typewriter-effect';

class Intro extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          <Typewriter
            options={{
              strings: "Samuel Nicholls, Front End Developer",
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* <div className='c-contact'>
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
        </div> */}
      </div>
    )
  }
}

export default Intro;