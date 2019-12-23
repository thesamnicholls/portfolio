import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='o-navigation'>
          <div className='o-navigation__logo'>
            <span className='o-navigation__name _bold'>SN</span>
          </div>
          <div className='o-navigation__burger'>
            <div className='o-navigation__menu'></div>
          </div>
          <ul className='o-navigation__list'>
            <li className='o-navigation__item'>
              About
            </li>
            <li className='o-navigation__item'>
              Work
            </li>
            <li className='o-navigation__item'>
              Contact
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation;

