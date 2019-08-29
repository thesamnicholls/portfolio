import React, { Component } from "react"

class Skills extends Component {
  render() {
    return (
        <div className='skills'>
          <h1>Skills</h1>
          <div className='skills__wrapper'>
            <ul className='skills__list'>
              <li className='skills__list-item'>
                <label className='skills__title'>HTML5</label>
                <span className='skills__box--width-80' />
              </li>
              <li className='skills__list-item'>
                <label className='skills__title'>CSS</label>
                <span className='skills__box--width-70'></span>
              </li>
              <li className='skills__list-item'>
                <label className='skills__title'>SCSS</label>
                <span className='skills__box--width-90'></span>
              </li>
              <li className='skills__list-item'>
                <label className='skills__title'>LESS</label>
                <span className='skills__box--width-50'></span>
              </li>
              <li className='skills__list-item'>
                <label className='skills__title'>JavaScript</label>
                <span className='skills__box--width-40'></span>
              </li>
              <li className='skills__list-item'>
                <label className='skills__title'>JQuery</label>
                <span className='skills__box--width-70'></span>
              </li>
              <li className='skills__list-item'>
                <label className='skills__title'>React</label>
                <span className='skills__box--width-30'></span>
              </li>
            </ul>
          </div>
          {/*<h1>Skills Component</h1>*/}
          {/*<h2>HTML5</h2>*/}
          {/*<h2>CSS</h2>*/}
          {/*<h2>SCSS</h2>*/}
          {/*<h2>LESS</h2>*/}
          {/*<h2>JavaScript</h2>*/}
          {/*<h2>JQuery</h2>*/}
          {/*<h2>React</h2>*/}
        </div>
    )
  }
}

export default Skills;