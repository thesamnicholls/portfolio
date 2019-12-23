import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='o-navigation'>
          <a className='o-navigation__logo' href='/'>
            <span className='o-navigation__name _bold'>SN</span>
          </a>
          <div className='o-navigation__burger'>
            <div className='o-navigation__menu'></div>
          </div>
          <ul className='o-navigation__list'>
            <li className='o-navigation__item'>
              <a className='o-navigation__link' href='/about'>
                About
              </a>
            </li>
            <li className='o-navigation__item'>
              <a className='o-navigation__link' href='/'>
                Work
              </a>
            </li>
            <li className='o-navigation__item'>
              <a className='o-navigation__link' href='/contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation;

