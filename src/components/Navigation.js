import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
        <div className='outer-container'>
            <div className='navigation'>
              <div className="navigation__logo">
                <span className="navigation__name _bold">SN</span>
              </div>
              <div className='navigation__links'>
                <ul className='nav-list'>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
        </div>
    )
  }
}

export default Navigation;