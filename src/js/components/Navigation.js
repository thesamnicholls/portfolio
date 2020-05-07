import React, { Component } from "react"

class Navigation extends Component {

  render() {
    return (
      <div className='l-container'>
        <div className='o-navigation'>
          <a className='o-navigation__logo' href='/'>
            <span className='o-navigation__name _bold'>SN</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navigation;

