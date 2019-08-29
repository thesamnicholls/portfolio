import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
      <div className='outer-container'>
        <div className='navigation'>
          <div className="navigation__logo">
            <span className="navigation__name _bold">SN</span>
          </div>
          <div className='navigation__links-wrapper'>
            <ul className='navigation__list'>
              <li className='navigation__link'>About</li>
              <li className='navigation__link'>Skills</li>
              <li className='navigation__link'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;