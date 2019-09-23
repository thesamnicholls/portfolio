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
              <li className='navigation__item'>
                <a href='#' className='navigation__link' title='Click here to go to the contact section'> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;