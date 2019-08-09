import React, { Component } from "react"

class Navigation extends Component {
  render() {
    return (
        <div className='navigation-container'>
            <div className='navigation'>
              <a className="site-logo transition-link" href="/">
                <span className="logo-text">SN</span>
              </a>
            </div>
        </div>
    )
  }
}

export default Navigation;