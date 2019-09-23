import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
      <div className='l-container--outer'>
        <div className='o-navigation'>
          <div className="o-navigation__logo">
            <span className="o-navigation__name _bold">SN</span>
          </div>
          <div className='o-navigation__links-wrapper'>
            <ul className='o-navigation__list'>
              <li className='o-navigation__item'>
                <a href='#' className='o-navigation__link' title='Click here to go to the contact section'> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;