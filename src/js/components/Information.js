import React, { Component } from "react"

class Information extends Component {
  render() {
    return (
      <div className='l-container'>
        <div className='c-intro'>
          <h1 className='c-intro__text'>
            Contact Page
          </h1>
        </div>
        <div className='c-contact'>
          <div className='c-contact__icon'></div>
          <div className='c-contact__title'>: Contact One</div>
        </div>
      </div>
    )
  }
}

export default Information;